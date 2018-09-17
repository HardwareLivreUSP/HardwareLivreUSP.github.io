---
layout:     post
type:       tutorial
hidden:     true
title:      "Arduino #19: Placas - LilyPad: Windows"
date:       2016-11-27
author:     "Leonardo Haddad Carlos"
author_url: ""
img:        "assets/images/tutoriais/arduino/arduino_oscomm.png"
img_url:    ""

redirect_from:
 - "2016/11/27/arduino-19lilypad-windows"
 - "2016/11/27/arduino-19lilypad-windows/"
---

#### Primeiros Passos com a Arduino LilyPad no Windows

Este documento explica como conectar sua placa Arduino LilyPad a um computador Windows e fazer o upload de seu primeiro esboço.

#### 1. Obtenha uma Arduino LilyPad, uma placa FTDI e um cabo USB

Neste tutorial, assumimos que você está usando uma [Arduino LilyPad Main Board](http://lilypadarduino.org/?p=128), [Simple Board](http://lilypadarduino.org/?p=149) ou [SimpleSnap](http://lilypadarduino.org/?p=289). Este tutorial também funcionará para as placas Arduino LilyPad Protosnap: a [ProtoSnap LilyPad Development Board](http://lilypadarduino.org/?p=489) e a [Protosnap LilyPad Simple Board](http://lilypadarduino.org/?p=1461). Se você tiver uma [Arduino LilyPad USB](http://lilypadarduino.org/?p=1494), leia a página correspondente no manual de iniciação para obter instruções de configuração.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/lily_boards.jpg">
    <figcaption>Placas Arduino LilyPad</figcaption>
  </figure>
</div>

Você também precisará de um cabo mini-USB padrão e de uma [placa FTDI](http://lilypadarduino.org/?p=452).

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/lily_ftdi.jpg">
    <figcaption>Placas FTDI</figcaption>
  </figure>
</div>

#### 2. Faça o download do Ambiente de Desenvolvimento

Obtenha a versão mais recente na [página de download](https://www.arduino.cc/en/Main/Software).

Quando o download for concluído, extraia todo o conteúdo do arquivo .zip para um local que você vá se lembrar. A área de trabalho ou a pasta `Arquivos de programas` são boas localizações.

Uma vez que o arquivo .zip for extraído (para uma pasta de nome `arduino - 1.0.x`), clique duas vezes na pasta para abrí-la. Certifique-se de que há alguns arquivos e subpastas dentro dela, incluindo um arquivo `arduino.exe`.

#### 3. Conecte a placa

Anexe a placa FTDI à sua placa Arduino LilyPad. Conecte uma extremidade do cabo USB à placa FTDI e a outra extremidade a uma porta USB do computador.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/lily_board.jpg">
    <figcaption>Placa Arduino LilyPad</figcaption>
  </figure>
</div>

#### 4. Instale os drivers

Você precisará instalar os drivers para a placa FTDI, que permite programar a Arduino LilyPad. Você precisa baixar a versão mais recente dos drivers no [site da FTDI](http://www.ftdichip.com/Drivers/VCP.htm).

Mais abaixo, ainda nessa página, há uma tabela listando drivers para diferentes computadores. Clique no driver mais recente que é compatível com seu computador.

Se o computador estiver usando o Windows 7, Windows Vista, Windows XP ou um sistema operacional posterior, consulte [este site](http://support.microsoft.com/kb/827218) para determinar se você deve usar os drivers x86 (32 bits) ou x64 (64 bits). Se o computador estiver usando o Windows 8 ou um sistema operacional posterior, você deve fazer o download do x64 (drivers de 64 bits).

Quando o download estiver concluído, extraia todo o conteúdo do arquivo .zip para um local que você vá se lembrar.

Siga o [guia no site do FTDI](http://www.ftdichip.com/Support/Documents/InstallGuides.htm) que corresponde ao seu sistema operacional para concluir o processo de instalação.

Será necessário reiniciar o computador depois de instalar os drivers.

#### 5. Execute o software do Arduino

Navegue até a pasta onde você salvou o software do Arduino e clique duas vezes no arquivo `arduino.exe` para abrir o software.

Nota: se o software do Arduino for carregado no idioma errado, você poderá alterá-lo na caixa de diálogo de preferências. Consulte [a página de ambiente]({{ site.baseurl }}/tutoriais/2016/11/21/arduino-7environment/) para obter detalhes.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/lily_blink.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

#### 6. Abra o exemplo do Blink (Piscar)

Abra o esboço do exemplo do Blink de LED: `File > Examples > 1.Basics > Blink`.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/lily_blink.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

#### 7. Selecione sua placa

Você precisará selecionar a entrada no menu `Tools > Board` que corresponde à sua Arduino LilyPad. Se sua placa foi comprada em 2012 ou posteriormente, você deve selecionar `LilyPad Arduino w/ ATmega328` a partir deste menu.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/lilywindows_chooseboard.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

#### 8. Selecione sua porta serial

Selecione a porta serial correta no menu `Tools > Serial Port`. Isso informa ao software do Arduino a porta USB na qual a Arduino LilyPad está conectada. Em um PC, este será o número de porta "COM" mais elevado. É provável que seja COM3 ou superior.

Para descobrir definitivamente qual porta sua Arduino LilyPad está conectado, você pode desconectar sua placa LilyPad e reabrir o menu; a entrada que desaparecer deverá ser a placa LilyPad. Reconecte a placa e selecione essa porta serial.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/lilywindows_chooseport.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

#### 9. Envie o programa

Agora, clique no botão "Upload" no ambiente Arduino. Espere alguns segundos - você deve ver os leds RX e TX na placa FTDI piscando. Se o envio for bem sucedido, a mensagem "Done uploading." Irá aparecer na barra de status.

Alguns segundos após o envio terminar, você deve ver o LED na placa começar a piscar (em verde). Se sim, parabéns! Você conseguiu rodar sua Arduino LilyPad com sucesso.

Se você tiver problemas, consulte as sugestões de [solução de problemas]({{ site.baseurl }}/tutoriais/2016/11/25/arduino-10troubleshooting/).

#### 10. Recursos Adicionais

- lilypadarduino.org: um guia completo para começar com a LilyPad.
- Categoria da LilyPad no SparkFun: sensores, atuadores e outras placas para uso com a Arduino LilyPad.

----

Link para a página original: [Getting Started Guide - Boards - LilyPad: Windows](https://www.arduino.cc/en/Guide/LilyPadWindows).

----

#### Licença

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0). Os exemplos de código do guia são disponibilizados para o domínio público.
