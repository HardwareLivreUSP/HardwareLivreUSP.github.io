---
layout:     post
title:      "Tutoriais Arduino #20: Placas - LilyPad: Mac OS X"
date:       2016-11-27
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Primeiros Passos com a Arduino LilyPad no Mac OS X

Este documento explica como conectar sua placa LilyPad Arduino a um computador Mac OS X e fazer o upload de seu primeiro esboço.

## 1 | Obtenha uma Arduino LilyPad, uma placa FTDI e um cabo USB

Neste tutorial, assumimos que você está usando uma [Arduino LilyPad Main Board][lilymain], [Simple Board][lilysimple] ou [SimpleSnap][lilysnap]. Este tutorial também funcionará para as placas LilyPad Arduino Protosnap: a [ProtoSnap LilyPad Development Board][lilyprotodev] e a [Protosnap LilyPad Simple Board][lilyprotosimple]. Se você tiver uma [LilyPad Arduino USB][lilyusb], leia a página correspondente no manual de iniciação para obter instruções de configuração.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/lily_boards.jpg" style="margin: 0 auto; max-height: 390px;" />
Placas Arduino LilyPad
</p>

Você também precisará de um cabo mini-USB padrão e de uma [placa FTDI][lilyftdi].

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/lily_ftdi.jpg" style="margin: 0 auto; max-height: 390px;" />
Placas FTDI
</p>

## 2 | Faça o download do Ambiente de Desenvolvimento

Obtenha a versão mais recente na [página de download][downloadpage].

Quando o download for concluído, clique duas vezes no arquivo .zip. Isso expandirá a aplicação do Arduino.

## 3 | Instale o software do Arduino

Copie o aplicativo Arduino para a pasta Aplicativos.

## 4 | Instale os drivers FTDI

Você precisará instalar os drivers para a placa FTDI, que permite programar a LilyPad Arduino. Você precisa baixar a versão mais recente dos drivers no [site da FTDI][ftdiwebsite].

Mais abaixo, ainda nessa página, há uma tabela listando drivers para diferentes computadores. Clique no driver mais recente que é compatível com seu computador. Se o computador estiver usando o OS 10.5 ou superior, você deve usar os drivers x64 (64 bits). Se o computador estiver usando o OS 10.4, você deve usar os drivers x86 (32 bits). Caso contrário, você deve usar os drivers PPC (PowerPC). Para determinar qual sistema operacional seu computador tem, clique no ícone da maçã no canto superior direito da tela e clique em "Sobre este Mac".

Para instruções de instalação mais detalhadas, veja o [guia no site do FTDI][ftdiguide].

Depois de fazer o download, clique duas vezes no pacote e siga as instruções no instalador. Você precisará reiniciar o computador depois de instalar os drivers.

## 5 | Conecte a placa

Anexe a placa FTDI à sua placa Arduino LilyPad. Conecte uma extremidade do cabo USB à placa FTDI e a outra extremidade a uma porta USB do computador.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/lily_board.jpg" style="margin: 0 auto; max-height: 390px;" />
Placa Arduino LilyPad
</p>

## 6 | Execute o software do Arduino

Navegue até a pasta Aplicativos e clique duas vezes no aplicativo Arduino para abrir o software.

Nota: se o software do Arduino for carregado no idioma errado, você poderá alterá-lo na caixa de diálogo de preferências. Consulte a [página de ambiente][environment] para obter detalhes.

## 7 | Abra o exemplo do Blink (Piscar)

Abra o esboço do exemplo do Blink de LED: `File`> `Examples`> `1.Basics`> `Blink`.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/lily_blink.jpg" style="margin: 0 auto; max-height: 390px;" />
</p>

## 8 | Selecione sua placa

Você precisará selecionar a entrada no menu `Tools`> `Board` que corresponde ao seu LilyPad Arduino. Se sua placa foi comprada em 2012 ou posteriormente, você deve selecionar `LilyPad Arduino w/ ATmega328` a partir deste menu.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/lilymac_chooseboard.jpg" style="margin: 0 auto; max-height: 390px;" />
</p>

## 9 | Selecione sua porta serial

Selecione a porta serial correta no menu `Tools`> `Serial Port`. Isso informa ao software do Arduino a porta USB na qual a Arduino LilyPad está conectada. No Mac, isso deve ser algo com `/dev/tty.usbserial` no nome.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/lilymac_chooseport.png" style="margin: 0 auto; max-height: 390px;" />
</p>

## 10 | Envie o programa

Agora, clique no botão "Upload" no ambiente Arduino. Espere alguns segundos - você deve ver os leds RX e TX na placa FTDI piscando. Se o envio for bem sucedido, a mensagem "Done uploading." Irá aparecer na barra de status.

Alguns segundos após o envio terminar, você deve ver o LED na placa começar a piscar (em verde). Se sim, parabéns! Você conseguiu rodar sua Arduino LilyPad com sucesso.

Se você tiver problemas, consulte as sugestões de [solução de problemas][troubleshooting].

## 11 | Recursos Adicionais

 - lilypadarduino.org: um guia completo para começar com a LilyPad
 - Categoria da LilyPad no SparkFun: sensores, atuadores e outras placas para uso com a LilyPad Arduino

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

Link para a página original: [Getting Started Guide - Boards - LilyPad: Mac OS X][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [lilysparkfun]: <https://www.sparkfun.com/categories/135>
   [lilypadguide]: <http://lilypadarduino.org/>
   [ftdiguide]: <http://www.ftdichip.com/Support/Documents/InstallGuides.htm>
   [ftdiwebsite]: <http://www.ftdichip.com/Drivers/VCP.htm>
   [downloadpage]: <https://www.arduino.cc/en/Main/Software>
   [lilyftdi]: <http://lilypadarduino.org/?p=452>
   [lilyusb]: <http://lilypadarduino.org/?p=1494>
   [lilyprotosimple]: <http://lilypadarduino.org/?p=1461>
   [lilyprotodev]: <http://lilypadarduino.org/?p=489>
   [lilysnap]: <http://lilypadarduino.org/?p=289>
   [lilysimple]: <http://lilypadarduino.org/?p=149>
   [lilymain]: <http://lilypadarduino.org/?p=128>
   [reference]: <https://www.arduino.cc/en/Reference/HomePage>
   [tutexamples]: <https://www.arduino.cc/en/Tutorial/HomePage>
   [troubleshooting]: </2016/11/25/arduino-10troubleshooting/>
   [environment]: </2016/11/21/arduino-7environment/>
   [firststeps]: </2016/11/20/arduino-1start/>
   [originalpage]: <https://www.arduino.cc/en/Guide/LilyPadMacOSX>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino]: <https://www.arduino.cc>
