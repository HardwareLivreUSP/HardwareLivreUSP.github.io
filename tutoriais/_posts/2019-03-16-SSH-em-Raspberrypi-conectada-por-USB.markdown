---
layout: post
type:       tutorial
hidden:     true
title:  "Conectando na Raspberry Pi por USB"
date:   2019-03-16 17:41:11 -0300
author:     "Marcelo Schmitt"
author_url: "https://github.com/marceloschmitt1"
img:        "assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/conexao-usb-usb.jpg"
---

Este post deve servir como guia para configurar o
[Raspbian](https://www.raspberrypi.org/downloads/raspbian/) de modo permitir
obter um terminal interativo capaz de executar comandos em uma Raspberry Pi que
esteja ligada ao computador (PC) por uma porta USB. Serão exploradas duas
formas de fazer isso: 

1ª ligar PC e Raspberry Pi por um cabo USB, configurar o
Raspian para tratar essa conexão como uma conexão ethernet e por fim utilizar o
SSH.

2ª utilizar um conversor USB-UART, configurar o Raspian para transmitir um
console pelos pinos GPIO de comunicação serial e por fim utilizar o
[GNU/screen](https://www.gnu.org/software/screen/) para interagir com a porta
tty associada à Pi.

Este guia foi desenvolvido realizando testes com Raspberry Pi Zero e Raspberry
Pi 3B junto com o Raspbian Stretch. O sistema operacional do computador usado
foi o Debian 10 Buster.

### Utilizando um cabo USB 

Para essa conexão será necessário apenas um cabo USB (ou microUSB) para ligar
uma porta USB do computado a uma porta USB da Raspberry.

No seu computador, monte o sistema de arquivos do cartão microSD no qual você
instalou o Raspbian. Navegue até a raiz da partição `boot` do sistema de
arquivos montado. Neste local devem ser feitas três coisas:

1. No final do arquivo `config.txt`, insira uma nova linha contendo
`dtoverlay=dwc2`.
```bash
echo dtoverlay=dwc2 >> config.txt
```
2. Abra o arquivo `cmdline.txt`. Tenha cuidado pois os parâmetros nesse
arquivo são separados por espaçamento simples (isto é, quebra de linha não é
utilizada). Insira `modules-load=dwc2,g_ether` após `rootwait`. <br/> 
Obs.: Se você quiser habilitar ambas conexões por ethernet e serial na
Raspberry troque `g_ether` por `g_cdc` na inserção acima.
3. Crie um arquivo chamado `ssh`
vazio e sem extensão.
```bash
touch ssh
```

Navegue até a raiz da partição `rootfs` do SD. Adicione configurações de IP
estático para a interface de rede USB.
```bash
echo -e "allow-hotplug usb0 \niface usb0 inet static \naddress=192.168.10.254 \nnetmask 255.255.255.0" | sudo tee -a etc/network/interfaces
```

<!--
na pi, no arquivo /etc/network/interfaces
insira:
### Para conexao USB
allow-hotplug usb0
iface usb0 inet static
        address 192.168.10.254
        netmask 255.255.255.0
-->

<!-- echo -e "interface usb0 \nstatic ip_address=169.254.64.64" | sudo tee -a /etc/dhcpcd.conf -->

Confira se as alterações estão ok.
```bash
tail etc/network/interfaces
```

Concluídos esses passos, o sistema de arquivos pode ser desmontado e o cartão
microSD está pronto para ser inserido na Raspberry Pi. O próximo processo de
boot do Raspbian pode demorar um pouco mais após as alterações (até 90
segundos).

Antes de ligar a Raspberry Pi ao computador vamos listar as interfaces de rede
disponíveis a priori. Isso nos ajudará a identificar a qual interface de rede a
Pi estará associada.
```bash
ifconfig
```
<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/ifconfig1.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Podemos ver que existem três interfaces de rede disponíveis: enp2s0f0, lo, wlp3s0.

Conecte a Raspberry Pi ao computador utilizando um cabo USB. 

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/conexao-usb-usb.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Note que para o caso da Raspberry Pi Zero é vantajoso usar a porta micro USB
que tem escrito "USB" ao seu lado. Conectando nessa porta é possível transmitir
dados e alimentar a Pi simultaneamente.


#### Asegurando que PC e Raspberry Pi estão na mesma rede

Agora devemos nos certificar de que PC e Raspberry estão na mesma rede. Para isso vamos listar as interfaces de rede novamente.
```bash
ifconfig
```

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/ifconfig2.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Agora que a Pi está conectada é possível ver que mais uma interface de rede foi
criada, a enp0s29u1u1i1. Podemos ver que ela está ativa (UP) e que o IP
associado ao computador nesta interface é 192.168.10.200 (inet 192.168.10.200).
Este é o estado desejável no qual PC e Pi estão na mesma rede. Caso o endereço
IP não esteja na mesma rede (192.168.10) ou não seja exibido nenhum valor para
`inet` será preciso configurar a nova interface de rede para atribuir um novo
endereço IP ao PC. No Debian Buster isso pode ser feito de pelo menos duas
formas:

Editando as configurações da interface de rede em 'Conexões de rede'.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/gui-networkmanager-iface-config.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

É importante definir o método de endereçamento IP como manual e atribuir um
endereço IP ao computador que pertença a mesma rede que você definiu no arquivo
arquivo `/etc/network/interfaces` do sistema de arquivos do Raspbian. Neste post
eu defini que a Pi pertenceria a rede de endereço 192.168.10 (endereço IP de
classe C) logo, o endereço IP do computador deve iniciar com 192.168.10 e o seu
ID deve ser um número entre 0 e 255 que eu arbitrariamente escolhi para ser
200.

Outra forma de configurar a interface de rede é editando manualmente o arquivo
`/etc/NetworkManager/system-connections/<interface>.nmconnection`.
```bash
sudo vim /etc/NetworkManager/system-connections/<interface>.nmconnection
```

Deixo aqui uma imagem com o conteúdo do meu arquivo de configuração de
interface de rede para a conexão com a Raspberry. Note que aparecem o id da
conexão "USB-pi", o endereço IP definido, e o método de endereçamento.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/bash-networkmanager-iface-config.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Se a interface de rede não estiver sendo exibida com `ifconfig` ou caso você
não tenha certeza de qual o nome da configuração associada a interface você
pode tentar obter alguma informação relevante com `dmesg`.
```bash
sudo dmesg | grep cdc
```

#### Conectando com SSH

Estando configuradas as interfaces de rede do Raspbian e do linux rodando no
PC, deverá ser possível conectar à Raspberry Pi utilizando ssh. A maneira mais
tradicional de fazer isso é usando o endereço IP do dispositivo e o usuário com
o qual conectar.

```bash
ssh <usuário>@<endereço IP>
```
Por exemplo:
```bash
ssh pi@192.168.10.254
```

Se você tiver o [avahi-daemon](https://linux.die.net/man/8/avahi-daemon)
instalado você também poderá conectar informando o `hostname` da sua Raspberry
Pi. Por exemplo:
```bash
ssh pi@raspberrypi.local
```

### Utilizando um conversor USB-UART

Para essa conexão serão necessários alguns jumpers (fios) fêmea-fêmea e um
conversor USB-UART capaz de operar em TTL 3.3V (vou abordar mais detalhes a
diante). Como algumas das configurações são iguais para os casos de conexão por
USB-ethernet e serial-UART eu poderia apenas apontar alguns dos passos acima
mas vou reescreve-los aqui por praticidade e organização.

No seu computador, monte o sistema de arquivos do cartão microSD no qual você
instalou o Raspbian. Navegue até a raiz da partição `boot` do sistema de
arquivos montado. Neste local devem ser feitas três coisas:

1. No final do arquivo `config.txt`, insira uma nova linha contendo
`dtoverlay=dwc2`.
```bash
echo dtoverlay=dwc2 >> config.txt
```
Certifique-se também de que há uma linha contendo `enable_uart=1` nesse arquivo.
Caso ela não exista ou tenha o valor 0 coloque-a com o valor 1.

2. Abra o arquivo `cmdline.txt`. Tenha cuidado pois os parâmetros nesse
arquivo são separados por espaçamento simples (isto é, quebra de linha não é
utilizada). Insira `modules-load=dwc2,g_serial` após `rootwait`. <br/> 
Obs.: Se você quiser habilitar ambas conexões por ethernet e serial na
Raspberry troque `g_serial` por `g_cdc` na inserção acima.

Concluídos esses passos, o sistema de arquivos pode ser desmontado e o cartão
microSD está pronto para ser inserido na Raspberry Pi. O próximo processo de
boot do Raspbian pode demorar um pouco mais após as alterações (até 90
segundos).

Apenas para fazer as configurações finais será preciso que você conecte um
teclado e um monitor à Raspberry Pi para executar alguns comandos.

Ligue a Pi e faça login com seu usuário.
1. Habilite que a Raspberry Pi forneça um console interativo pela serial
editando as configurações com raspi-config.
```bash
sudo raspi-config
```
Entre em `Interfacing Options`.
<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/raspi-config-1.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>
Selecione `Serial` e responda "Yes" para habilitar o console pela serial.
<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/raspi-config-serial.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

2. Para utilizar o módulo serial padrão, você deve dizer à Pi para transmitir o
console serial a ele.
```bash
sudo systemctl enable getty@ttyGS0.service
```

#### Conexão física

Como os pinos GPIO de comunicação serial na Raspberry Pi operam com nível
lógico TTL de 3.3V, usar um conversor USB-UART ou USB-TTL cujas tensões nos
pinos RX e TX sejam maiores que 3.3V pode danificar a controladora UART da
Raspberry Pi! Por isso certifique-se de que o seu conversor trabalha em TTL
3.3V lendo o datasheet ou usando um multímetro (a tensão entre os pinos GND e
RX/TX não deve ultrapassar 3.6V).

Em meu experimento utilizei um conversor USB-UART com um CI CH340G da WCH que
possui um jumper permitindo selecionar em qual nível lógico os pinos RX e TX
devem operar.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/WCH-CH340G.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Neste módulo, curto circuitar os pinos VCC e 3V3 garante que o nível lógico 1 do
TTL será de 3.3V.

Obs.: Curto circuitar os pinos VCC e 5V fará o módulo usar TTL 5V que é
utilizado para comunicar com vários modelos de Arduino. Isso é especialmente
útil para programar alguns modelos de Arduino Pro-Mini.

Os pinos GND, RX, TX do conversor USB-UART devem ser conectados com os pinos
GND, TX, RX da Raspberry Pi, respectivamente como no diagrama e na foto abaixo.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/Raspberry-pi-UART-connections-block-diagram.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/conexao-usb-ttl.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

#### Acessando um terminal interativo

Após conectar PC e Raspberry você pode executar o comando `lsusb` em seu
computador para conferir se um novo dispositivo USB foi reconhecido pelo
sistema.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/lsusb-USB-UART.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Logo na primeira linha podemos ver que um adaptador USB-Serial foi identificado.

Use o `dmesg` para rapidamente descobrir a qual porta tty sua Raspberry Pi foi
associada.

```bash
dmesg | grep tty
```

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/dmesg_grep_tty.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

No meu caso, ela ficou na porta ttyUSB0.

Para emular um terminal interativo a partir do arquivo tty podemos usar o
[GNU/screen](https://www.gnu.org/software/screen/). Você pode obtê-lo a partir
do site ou pelo gerenciador de pacotes `apt`.

```bash
sudo apt install screen
```

Tendo o screen instalado basta iniciá-lo informando o arquivo que deve ser
utilizado.
```bash
screen <arquivo tty>
```

Por exemplo:
```bash
screen /dev/ttyUSB0
```

Você verá o screen iniciar uma nova sessão (isso pode demorar alguns segundos,
se nada aparecer após um tempo tecle enter algumas vezes) onde aparecerá a
versão do Raspbian sendo executada na Raspberry Pi, o arquivo tty criando nela
para comportar a comunicação serial, e um prompt de login.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-SSH_em_Raspberrypi_conectada_por_USB/screen_pi_login.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Pronto, você já está logado em um terminal na Raspberry e pode executar
qualquer comando a partir dele.

Para sair do screen tecle Ctrl-a \\ (Ctrl + a seguido de \\).

### Tem como usar um cabo USB macho-macho?

Procurei fazer a conexão utilizando um cabo USB macho-macho ligando uma porta
USB do computador a outra porta USB na Raspberry Pi 3. Segundo a literatura, as
postas USB da Raspberry Pi 3 são do tipo OTG (On-The-Go) host e, ao que parece,
um dispositivo USB que opera em modo host pode apenas estabelecer comunicação
com dispositivos USB que operam em modo device e vice-versa. O motivo disso
seria porque o dispositivo host é responsável por iniciar todas as comunicações
enquanto o dispositivo device apenas responde às requisições do host. Como as
portas USB do dos computadores normalmente operam como host, é de se imaginar
que ambas as portas tentem iniciar alguma comunicação mas nenhuma delas espera
se notificada de forma assíncrona para responder a uma requisição.

Talvez seria possível contornar essa situação utilizando um cabo USBNET (por exemplo [https://www.amazon.com/Belkin-Transfer-Cable-Windows-F4U060/dp/B0093HCIQ0](https://www.amazon.com/Belkin-Transfer-Cable-Windows-F4U060/dp/B0093HCIQ0)), mas não quis investir tempo e dinheiro com isso.


### Referências

Descrição dos módulos disponíveis de conexão disponíveis para o Raspbian

[https://gist.github.com/gbaman/50b6cca61dd1c3f88f41](https://gist.github.com/gbaman/50b6cca61dd1c3f88f41)

Conexão USB-ethernet

[https://www.thepolyglotdeveloper.com/2016/06/connect-raspberry-pi-zero-usb-cable-ssh/](https://www.thepolyglotdeveloper.com/2016/06/connect-raspberry-pi-zero-usb-cable-ssh/)

[https://gist.github.com/gbaman/975e2db164b3ca2b51ae11e45e8fd40a](https://gist.github.com/gbaman/975e2db164b3ca2b51ae11e45e8fd40a)

[https://www.youtube.com/watch?v=MJ084wtjiWM](https://www.youtube.com/watch?v=MJ084wtjiWM)

Configurações das interfaces de rede no Debian

[https://wiki.debian.org/NetworkConfiguration](https://wiki.debian.org/NetworkConfiguration)

Debug USB OTG g_serial gadget

[https://raspberrypi.stackexchange.com/questions/67907/debugging-usb-otg-serial-on-the-pi-zero-w](https://raspberrypi.stackexchange.com/questions/67907/debugging-usb-otg-serial-on-the-pi-zero-w)

[https://github.com/raspberrypi/linux/pull/1239](https://github.com/raspberrypi/linux/pull/1239)

Conexão GPIO-UART

[http://www.embeddedforu.com/embedded-linux/how-to-connect-raspberry-pi-uart-to-a-computer/](http://www.embeddedforu.com/embedded-linux/how-to-connect-raspberry-pi-uart-to-a-computer/)

[https://www.raspberrypi.org/documentation/configuration/uart.md](https://www.raspberrypi.org/documentation/configuration/uart.md)

[https://www.instructables.com/id/Read-and-write-from-serial-port-with-Raspberry-Pi/](https://www.instructables.com/id/Read-and-write-from-serial-port-with-Raspberry-Pi/)

[https://elinux.org/RPi_Serial_Connection](https://elinux.org/RPi_Serial_Connection)

Esquema de pinos da Raspberry Pi

[https://www.raspberrypi.org/documentation/usage/gpio/README.md](https://www.raspberrypi.org/documentation/usage/gpio/README.md)

[https://pinout.xyz/#](https://pinout.xyz/#)

Conectando a uma porta serial com o GNU/screen

[https://unix.stackexchange.com/questions/22545/how-to-connect-to-a-serial-port-as-simple-as-using-ssh](https://unix.stackexchange.com/questions/22545/how-to-connect-to-a-serial-port-as-simple-as-using-ssh)

[https://askubuntu.com/questions/40959/how-do-i-connect-to-tty-com-dev-ttyusb0](https://askubuntu.com/questions/40959/how-do-i-connect-to-tty-com-dev-ttyusb0)

Portas USB Raspberry Pi

[https://www.raspberrypi.org/documentation/hardware/raspberrypi/usb/README.md](https://www.raspberrypi.org/documentation/hardware/raspberrypi/usb/README.md)

[https://www.raspberrypi.org/forums/viewtopic.php?t=223573](https://www.raspberrypi.org/forums/viewtopic.php?t=223573)

USBNET

[https://www.raspberrypi.org/forums/viewtopic.php?f=36&t=131042](https://www.raspberrypi.org/forums/viewtopic.php?f=36&t=131042)

[http://www.linux-usb.org/usbnet/](http://www.linux-usb.org/usbnet/)

<!--
Comandos:
ip a
avahi-resolve -a <endereço>
avahi-resolve -n <nome>

cat /proc/net/dev
lsmod

//sudo modprobe g_serial

sudo dmesg | grep cdc

sudo systemctl start getty@ttyGS0.service
-->
