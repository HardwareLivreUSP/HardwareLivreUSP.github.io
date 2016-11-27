---
layout:     post
title:      "Tutoriais Arduino #19: Placas - LilyPad: Windows"
date:       2016-11-27
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Primeiros Passos com a Arduino LilyPad no Windows

Este documento explica como conectar sua placa LilyPad Arduino a um computador Windows e fazer o upload de seu primeiro esboço.

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

Quando o download for concluído, extraia todo o conteúdo do arquivo .zip para um local que você vá se lembrar. A área de trabalho ou a pasta `Arquivos de programas` são boas localizações.

Uma vez que o arquivo .zip for extraído (para uma pasta de nome `arduino - 1.0.x`), clique duas vezes na pasta para abrí-la. Certifique-se de que há alguns arquivos e subpastas dentro dela, incluindo um arquivo `arduino.exe`.

## 3 | Conecte a placa

Anexe a placa FTDI à sua placa Arduino LilyPad. Conecte uma extremidade do cabo USB à placa FTDI e a outra extremidade a uma porta USB do computador.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/lily_board.jpg" style="margin: 0 auto; max-height: 390px;" />
Placa Arduino LilyPad
</p>

## 4 | Instale os drivers

Você precisará instalar os drivers para a placa FTDI, que permite programar a LilyPad Arduino. Você precisa baixar a versão mais recente dos drivers no [site da FTDI][ftdiwebsite].

Mais abaixo, ainda nessa página, há uma tabela listando drivers para diferentes computadores. Clique no driver mais recente que é compatível com seu computador.

Se o computador estiver usando o Windows 7, Windows Vista, Windows XP ou um sistema operacional posterior, consulte [este site][mssupport] para determinar se você deve usar os drivers x86 (32 bits) ou x64 (64 bits). Se o computador estiver usando o Windows 8 ou um sistema operacional posterior, você deve fazer o download do x64 (drivers de 64 bits).

Quando o download estiver concluído, extraia todo o conteúdo do arquivo .zip para um local que você vá se lembrar.

Siga o [guia no site do FTDI][ftdiguide] que corresponde ao seu sistema operacional para concluir o processo de instalação.

Será necessário reiniciar o computador depois de instalar os drivers.

## 5 | Execute o software do Arduino

Navegue até a pasta onde você salvou o software do Arduino e clique duas vezes no arquivo `arduino.exe` para abrir o software.

Nota: se o software do Arduino for carregado no idioma errado, você poderá alterá-lo na caixa de diálogo de preferências. Consulte [a página de ambiente][environment] para obter detalhes.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/lily_blink.png" style="margin: 0 auto; max-height: 390px;" />
</p>

## 6 | Abra o exemplo do Blink (Piscar)

Abra o esboço do exemplo do Blink de LED: `File`> `Examples`> `1.Basics`> `Blink`.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/lily_blink.jpg" style="margin: 0 auto; max-height: 390px;" />
</p>

## 7 | Selecione sua placa

Você precisará selecionar a entrada no menu `Tools`> `Board` que corresponde ao seu LilyPad Arduino. Se sua placa foi comprada em 2012 ou posteriormente, você deve selecionar `LilyPad Arduino w/ ATmega328` a partir deste menu.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/lilywindows_chooseboard.jpg" style="margin: 0 auto; max-height: 390px;" />
</p>

## 8 | Selecione sua porta serial

Selecione a porta serial correta no menu `Tools`> `Serial Port`. Isso informa ao software do Arduino a porta USB na qual a Arduino LilyPad está conectada. Em um PC, este será o número de porta "COM" mais elevado. É provável que seja COM3 ou superior.

Para descobrir definitivamente qual porta sua Arduino LilyPad está conectado, você pode desconectar sua placa LilyPad e reabrir o menu; a entrada que desaparecer deverá ser a placa LilyPad. Reconecte a placa e selecione essa porta serial.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/lilywindows_chooseport.png" style="margin: 0 auto; max-height: 390px;" />
</p>

## 9 | Envie o programa

Agora, clique no botão "Upload" no ambiente Arduino. Espere alguns segundos - você deve ver os leds RX e TX na placa FTDI piscando. Se o envio for bem sucedido, a mensagem "Done uploading." Irá aparecer na barra de status.

Alguns segundos após o envio terminar, você deve ver o LED na placa começar a piscar (em verde). Se sim, parabéns! Você conseguiu rodar sua Arduino LilyPad com sucesso.

Se você tiver problemas, consulte as sugestões de [solução de problemas][troubleshooting].

## 10 | Recursos Adicionais

 - lilypadarduino.org: um guia completo para começar com a LilyPad
 - Categoria da LilyPad no SparkFun: sensores, atuadores e outras placas para uso com a LilyPad Arduino

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

Link para a página original: [Getting Started Guide - Boards - LilyPad: Windows][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [lilysparkfun]: <https://www.sparkfun.com/categories/135>
   [lilypadguide]: <http://lilypadarduino.org/>
   [ftdiguide]: <http://www.ftdichip.com/Support/Documents/InstallGuides.htm>
   [mssupport]: <http://support.microsoft.com/kb/827218>
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
   [originalpage]: <https://www.arduino.cc/en/Guide/LilyPadWindows>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino]: <https://www.arduino.cc>
