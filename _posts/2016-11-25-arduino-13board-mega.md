---
layout:     post
title:      "Tutoriais Arduino #13: Placas - Mega2560"
date:       2016-11-25
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Primeiros Passos com a Arduino/Genuino MEGA2560

Este documento explica como conectar sua placa Mega2560 ao computador e fazer o upload de seu primeiro esboço.

## Botando a Mão na Massa

A Mega2560 é programada usando o software do Arduino (IDE), nosso Ambiente de Desenvolvimento Integrado, comum a todas as nossas placas. Antes de poder avançar, você deve ter instalado o software do Arduino (IDE) no seu PC, conforme explicado na [página inicial de nosso Guia de Primeiros Passos][firststeps].

Conecte sua placa Mega2560 com um cabo USB A B; às vezes este cabo é chamado de cabo USB "printer" (impressor).

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/mega_board.jpg" style="margin: 0 auto; max-height: 390px;" />
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/usb_cable.jpg" style="margin: 0 auto; max-height: 390px;" />
</p>

A conexão USB com o PC é necessária para enviar programas para serem executados na placa. Além disso, a Mega2560 automaticamente tira energia do USB ou de qualquer outra fonte de alimentação externa à qual esteja conectado. Conecte a placa ao computador usando o cabo USB. O LED de alimentação verde (rotulado PWR) deve acender.

### Instale os Drivers da Placa

Se você usou o instalador, o Windows - da versão XP até a 10 - instalará os drivers automaticamente assim que conectar sua placa.

Se você baixou e expandiu o pacote Zip ou, por algum motivo, a placa não foi devidamente reconhecida, siga o procedimento abaixo.

 - Clique no menu Iniciar e abra o Painel de Controle.
 - Enquanto estiver no Painel de Controle, navegue até Sistema e Segurança. Em seguida, clique em Sistema. Quando a janela Sistema estiver aberta, abra o Gerenciador de Dispositivos.
 - Procure em Portas (COM & LPT). Você deve ver uma porta aberta chamada "Arduino Mega2560 (COMxx)". Se não houver nenhuma seção COM & LPT, procure por "Dispositivo desconhecido" em "Outros Dispositivos".
 - Clique com o botão direito do mouse na porta "Arduino Mega2560 (COMxx)" e escolha a opção "Update Driver Software" (Atualizar Software do Driver).
 - Em seguida, escolha a opção "Procurar o meu computador para o software do driver" opção.
 - Finalmente, navegue e selecione o arquivo de driver chamado "arduino.inf", localizado na pasta "Drivers" do download do software Arduino (não o subdiretório "Drivers USB FTDI").
 - O Windows terminará a instalação do driver a partir daí.
Veja também: [screenshots passo a passo para instalar a Mega2560 no Windows XP][stepsxp].

### Execute o Software do Arduino (IDE)

Clique duas vezes no ícone Arduino (arduino.exe) criado pelo processo de instalação.

Nota: se o software do Arduino for carregado no idioma errado, você poderá alterá-lo na caixa de diálogo de preferências. Consulte [a página do software do Arduino (IDE)][environment] para obter detalhes.

### Abra seu Primeiro Esboço

Abra o esçobo do exemplo de piscar o LED: `File`> `Examples`> `01.Basics`> `Blink`.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/exp_blink.jpg" style="margin: 0 auto; max-height: 390px;" />
File> Examples> 01.Basics> Blink
</p>

### Selecione o Tipo da Placa e a Porta

Você precisará selecionar a entrada no menu `Tools`> placa que corresponde à sua placa Arduino ou Genuino.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/mega_chooseboard.jpg" style="margin: 0 auto; max-height: 390px;" />
Selecione a placa Arduino/Genuino Mega2560
</p>

Selecione o dispositivo serial da placa a partir do menu `Tools`> `Serial Port`. É provável que seja `COM3` ou superior (`COM1` e `COM2` são normalmente reservados para portas de série de hardware). Para descobrir, você pode desconectar sua placa e reabrir o menu; a entrada que desaparecer deverá ser sua placa Arduino/Genuino. Reconecte a placa e selecione essa porta serial.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/mega_chooseserial.jpg" style="margin: 0 auto; max-height: 390px;" />
Selecione a porta serial correspondente
</p>

### Envie o Programa

Agora, basta clicar no botão "Upload" no IDE. Espere alguns segundos - você deve ver os leds RX e TX da placa piscando. Se o envio for bem-sucedido, a mensagem "Done uploading." Irá aparecer na barra de estado (status).

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/exp_blink_send.png" style="margin: 0 auto; max-height: 130px;" />
</p>

Alguns segundos após o carregamento terminar, você deve ver o pino 13 (L) LED na placa começar a piscar (em laranja). Se sim, parabéns! Você conseguiu configurar e rodar sua Arduino ou Genuino. Se você tiver problemas, consulte as [sugestões de solução de problemas][troubleshooting].

## Se Inspire!

Agora que você configurou e programou sua placa Mega2560, você pode encontrar inspiração em nossa plataforma de tutoriais [Project Hub][megahub] ou dar uma olhada nas páginas de tutorial que explicam como usar os vários recursos da sua placa.

 - [Exemplos][tutexamples] de utilização de vários sensores e actuadores
 - [Referência][reference] para a linguagem Arduino

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

```sh
Tradução feita com base na revisão de 08/08/2016 feita por "SM".
```

Link para a página original: [Getting Started Guide - Boards - Mega2560][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [reference]: <https://www.arduino.cc/en/Reference/HomePage>
   [tutexamples]: <https://www.arduino.cc/en/Tutorial/HomePage>
   [megahub]: <https://create.arduino.cc/projecthub/products/arduino-mega-2560-genuino-mega-2560>
   [troubleshooting]: </2016/11/25/arduino-10troubleshooting/>
   [environment]: </2016/11/21/arduino-7environment/>
   [stepsxp]: <https://www.arduino.cc/en/Guide/UnoDriversWindowsXP>
   [firststeps]: </2016/11/20/arduino-1start/>
   [originalpage]: <https://www.arduino.cc/en/Guide/ArduinoMega2560>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino]: <https://www.arduino.cc>
