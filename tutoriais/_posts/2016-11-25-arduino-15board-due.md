---
layout:     post
type:       tutorial
hidden:     true
title:      "Arduino #15: Placas - Due"
date:       2016-11-25
author:     "Leonardo Haddad Carlos"
author_url: ""
img:        "assets/images/tutoriais/arduino/arduino_oscomm.png"
img_url: 		""

redirect_from: "2016/11/25/arduino-15board-due"
---

#### Primeiros Passos com a Arduino Due

Para conectar a Arduino Due ao seu computador, você precisará de um cabo USB Micro-B. O cabo USB fornece energia e permite programar a placa.

Conecte o lado micro USB do cabo USB à porta de programação do Due (a porta mais próxima do conector de alimentação DC). Para fazer upload de um esboço, escolha `Arduino Due (Programming port)` no menu `Tools > Board` no IDE do Arduino e selecione a porta serial correta no menu `Tools > Serial Port`.

A Due tem um [fórum dedicado](http://arduino.cc/forum/index.php/board,87.0.html) para discutir a placa.

Você deve usar o [Arduino IDE 1.5 ou posterior](https://www.arduino.cc/en/Main/Software#toc3) para programar na Due.

#### Diferenças com as placas baseadas em ATMEGA

Em geral, você programa e usa a Due como faria com outras placas Arduino. Existem, no entanto, algumas diferenças importantes e extensões funcionais.

A Due tem a mesma footprint que o Mega 2560.

##### Voltagem

O microcontrolador montado na Arduino Due funciona a 3.3V, isto significa que você pode alimentar seus sensores e dirigir seus atuadores somente com 3.3V. `Conectar tensões mais altas, como o 5V comumente usado com as outras placas do Arduino, danificará a Due.`

A placa pode tirar energia dos conectores USB ou do plug DC. Se estiver usando o conector DC, forneça uma tensão entre 7V e 12V.

A Arduino Due possui um regulador de tensão de alternância eficiente, compatível com a especificação do host USB. Se a porta USB nativa for usada como host, conectando um dispositivo USB ao conector USB mirco-A, a placa fornecerá energia ao dispositivo. Quando a placa é usada como um host USB, a alimentação externa do conector DC é necessária.

##### Portas Seriais na Due

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/due_board.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

A Arduino Due tem duas portas USB disponíveis. A porta USB nativa (que suporta a comunicação serial CDC usando o objeto SerialUSB) está conectada diretamente ao SAM3X MCU. A outra porta USB é a porta de programação. Ela está conectada a um ATMEL 16U2 que atua como um conversor USB-para-Serial. Esta porta de programação é a forma padrão de carregar esboços e comunicar com o Arduino.

O conversor USB-para-serial da porta de programação está conectado ao primeiro UART do SAM3X. É possível comunicar através desta porta usando o objeto `Serial` na linguagem de programação Arduino.

O conector USB da porta Native está conectado diretamente aos pinos do host USB do SAM3X. Usando a porta nativa, você pode usar a Due como um cliente periférico USB (atuando como um mouse ou teclado conectado ao computador) ou como um dispositivo host USB para que os dispositivos possam ser conectados à Due (como mouse, teclado, ou um telefone Android). Esta porta também pode ser usada como uma porta serial virtual usando o objeto `SerialUSB` na linguagem de programação Arduino.

##### Reinício Automático (Software)

O microcontrolador SAM3X difere dos microcontroladores AVR porque a memória flash precisa ser apagada antes de ser reprogramada. Um procedimento manual envolveria segurar o botão de apagar por um segundo, pressionando o botão de upload no IDE, e então o botão de reinicialização.

Como um procedimento manual de apagar flash é repetitivo, isso é gerenciado automaticamente por ambas as portas USB, de duas maneiras diferentes:

###### Portas nativas

Abrir e fechar a porta "Native" sob taxa de transmissão de 1200bps desencadeia um procedimento de "apagamento suave": a memória flash é apagada e a placa é reiniciada com o bootloader. Se, por algum motivo, a MCU tiver falhado durante esse processo, é provável que o procedimento de apagamento suave não funcione, já que ele é feito, em software, pelo próprio MCU.

Abrir e fechar a porta nativa em um baudrate diferente de 1200bps não redefinirá o SAM3X. Para usar o monitor serial e ver o que o seu esboço faz desde o início, você precisará adicionar algumas linhas de código dentro do `setup()`. Isso garantirá que o SAM3X aguardará a abertura da porta SerialUSB antes de executar o esboço:

<pre class="prettyprint">
while (!Serial);
</pre>

Pressionar o botão Reset na Due causa a reinicialização do SAM3X, bem como a comunicação USB. Essa interrupção significa que, se o monitor serial estiver aberto, é necessário fechá-lo e reabri-lo para reiniciar a comunicação.

###### Porta de Programação

A porta de programação usa um chip USB-para-serial conectado ao primeiro UART do MCU (RX0 e TX0). O chip USB-para-serial tem dois pinos conectados aos pinos Reset e Erase do SAM3X. Quando você abre essa porta serial, o USB-to-Serial ativa a seqüência Apagar-e-Reiniciar antes de começar a se comunicar com o UART do SAM3X. Esse procedimento é muito mais confiável e deve funcionar mesmo se o MCU principal tiver falhado.

Para se comunicar em série com a porta de programação, use o objeto `Serial` no IDE. Todos os esboços já existentes que usam comunicação serial baseada na placa Uno devem funcionar da mesma forma. A porta de programação comporta-se como a porta serial da Uno no sentido de que o chip USB-para-Serial reinicia a placa sempre que você abre o monitor serial (ou qualquer outra comunicação serial).

Pressionar o botão Reset durante a comunicação através da porta de programação não fecha uma conexão USB com o computador, porque somente o SAM3X é redefinido.

##### Host USB

A Due tem a capacidade de funcionar como um host (anfitrião) USB para periféricos conectados à porta SerialUSB. Para obter informações e exemplos adicionais, consulte a [página de referência do host USB](https://www.arduino.cc/en/Reference/USBHost).

Ao usar a Due como um host, ela estará fornecendo energia para o dispositivo conectado. Recomenda-se vivamente que utilize o conector de alimentação DC quando agir como um host.

##### Resoluções ADC e PWM

O Due tem a capacidade de alterar suas resoluções de leitura e gravação analógicas padrão (10 bits e 8 bits, respectivamente). Pode suportar até resoluções ADC e PWM de 12-bit. Consulte as páginas de [resolução de gravação analógica](https://www.arduino.cc/en/Reference/AnalogWriteResolution) e [resolução de leitura analógica](https://www.arduino.cc/en/Reference/AnalogReadResolution) para obter informações.

##### Funcionalidade SPI expandida

O Due tem funcionalidade expandida em seu barramento SPI, útil para se comunicar com vários dispositivos que falam em velocidades diferentes. Consulte a [página de uso da biblioteca do Due extended SPI](https://www.arduino.cc/en/Reference/DueExtendedSPI) para obter mais detalhes.

#### Instalando os Drivers para a Due

##### OSX

- Nenhuma instalação de driver é necessária no OSX. Dependendo da versão do sistema operacional em execução, você poderá obter uma caixa de diálogo perguntando se deseja abrir as "Preferências de Rede". Clique no botão "Preferências de Rede..." e, em seguida, clique em "Aplicar". O Due aparecerá como "Não Configurado", mas ainda está funcionando. Você pode encerrar as Preferências do Sistema.

##### Windows (testado no XP e no 7)

- Baixe a versão Windows do software do Arduino. Quando o download for concluído, descompacte o arquivo baixado. Certifique-se de preservar a estrutura de pastas.
- Ligue a Due ao seu computador com um cabo USB através da porta de programação.
- O Windows deve iniciar o processo de instalação de driver uma vez que a placa esteja conectada, mas não será capaz de encontrar o driver por conta própria. Você terá que dizer onde está o driver.
- Clique no menu Iniciar e abra o Painel de Controle.
- Navegue até "Sistema e Segurança". Clique em Sistema e abra o Gerenciador de Dispositivos.
- Procure o item de nome "Portas (COM & LPT)". Você deve ver uma porta aberta chamada "Arduino Due Prog. Port".
- Clique com o botão direito sobre a opção "Arduino Due Prog. Port" e escolha "Atualizar Software do Driver".

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/due_devmanager.png">
    <figcaption>Utilize o Gerenciador de Dispositivos para atualizar o driver</figcaption>
  </figure>
</div>

- Selecione a opção "Procurar driver em meu computador".

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/due_browsedriver.png">
    <figcaption>Escolha a opção de escolher o driver em seu computador</figcaption>
  </figure>
</div>

- Navegue até a pasta com o IDE do Arduino que você baixou e descompactou anteriormente. Localize e selecione a pasta "Drivers" na pasta principal do Arduino (não o subdiretório "Drivers USB FTDI"). Pressione "OK" e "Avançar" para prosseguir.
- Se aparecer uma caixa de diálogo de aviso sobre não passar no teste de logotipo do Windows, clique em "Continuar mesmo assim".
- O Windows agora assumirá a instalação do driver.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/due_driverok.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Pronto, você instalou o driver em seu computador. No Gerenciador de Dispositivos, você deve ver agora uma listagem de portas semelhante à "Arduino Due Programming Port (COM4)".

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/due_listedport.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

##### Linux

Não há necessidade de instalar drivers para o Linux.

#### Instalando o núclero Arduino Sam Boards

Se você estiver usando o Arduino IDE versão 1.6.2 ou mais recente, você precisa instalar o núcleo que suporta o Arduino Due. Siga [este guia](http://www.arduino.cc/en/Guide/Cores) para instalar o novo núcleo.

##### Envie Código para a Due

O processo de upload na Arduino Due funciona da mesma forma que em outras placas do ponto de vista do usuário. Recomenda-se usar a porta de programação para carregar esboços, embora você possa fazer o upload de esboços em qualquer uma das portas USB.

Para fazer o upload através da porta de programação siga estas etapas:

- Conecte a placa ao computador ligando o cabo USB à porta de programação da Due (a porta mais próxima do conector de alimentação DC).
- Abra o IDE do Arduino.
- No menu `Tools > Serial Port` e selecione a porta serial da Due.
- No menu `Tools > Boards`, selecione "Arduino Due (Programming port)".
- Agora você está pronto para enviar esboços para a Arduino Due.

Para mais detalhes sobre a Arduino Due, consulte a [página de hardware](https://www.arduino.cc/en/Main/ArduinoBoardDue).

----

Link para a página original: [Getting Started Guide - Boards - Due](https://www.arduino.cc/en/Guide/ArduinoDue).

----

#### Licença

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0). Os exemplos de código do guia são disponibilizados para o domínio público.
