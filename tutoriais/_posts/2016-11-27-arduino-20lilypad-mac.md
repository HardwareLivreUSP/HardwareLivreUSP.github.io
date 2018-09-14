---
layout:     post
type:       tutorial
hidden:     true
title:      "Arduino #20: Placas - LilyPad: Mac OS X"
date:       2016-11-27
author:     "Leonardo Haddad Carlos"
author_url: ""
img:        "assets/images/tutoriais/arduino/arduino_oscomm.png"
img_url: 		""

redirect_from: "2016/11/27/arduino-20lilypad-mac"
---

#### Primeiros Passos com a Arduino LilyPad no Mac OS X

Este documento explica como conectar sua placa Arduino LilyPad a um computador Mac OS X e fazer o upload de seu primeiro esboço.

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

Quando o download for concluído, clique duas vezes no arquivo .zip. Isso expandirá a aplicação do Arduino.

#### 3. Instale o software do Arduino

Copie o aplicativo Arduino para a pasta Aplicativos.

#### 4. Instale os drivers FTDI

Você precisará instalar os drivers para a placa FTDI, que permite programar a Arduino LilyPad. Você precisa baixar a versão mais recente dos drivers no [site da FTDI](http://www.ftdichip.com/Drivers/VCP.htm).

Mais abaixo, ainda nessa página, há uma tabela listando drivers para diferentes computadores. Clique no driver mais recente que é compatível com seu computador. Se o computador estiver usando o OS 10.5 ou superior, você deve usar os drivers x64 (64 bits). Se o computador estiver usando o OS 10.4, você deve usar os drivers x86 (32 bits). Caso contrário, você deve usar os drivers PPC (PowerPC). Para determinar qual sistema operacional seu computador tem, clique no ícone da maçã no canto superior direito da tela e clique em "Sobre este Mac".

Para instruções de instalação mais detalhadas, veja o [guia no site do FTDI](http://www.ftdichip.com/Support/Documents/InstallGuides.htm).

Depois de fazer o download, clique duas vezes no pacote e siga as instruções no instalador. Você precisará reiniciar o computador depois de instalar os drivers.

#### 5. Conecte a placa

Anexe a placa FTDI à sua placa Arduino LilyPad. Conecte uma extremidade do cabo USB à placa FTDI e a outra extremidade a uma porta USB do computador.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/lily_board.jpg">
    <figcaption>Placa Arduino LilyPad</figcaption>
  </figure>
</div>

#### 6. Execute o software do Arduino

Navegue até a pasta Aplicativos e clique duas vezes no aplicativo Arduino para abrir o software.

Nota: se o software do Arduino for carregado no idioma errado, você poderá alterá-lo na caixa de diálogo de preferências. Consulte a [página de ambiente]({{ site.baseurl }}/tutoriais/2016/11/21/arduino-7environment/) para obter detalhes.

#### 7. Abra o exemplo do Blink (Piscar)

Abra o esboço do exemplo do Blink de LED: `File > Examples > 1.Basics > Blink`.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/lily_blink.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

#### 8. Selecione sua placa

Você precisará selecionar a entrada no menu `Tools > Board` que corresponde à sua Arduino LilyPad. Se sua placa foi comprada em 2012 ou posteriormente, você deve selecionar `LilyPad Arduino w/ ATmega328` a partir deste menu.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/lilymac_chooseboard.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

#### 9. Selecione sua porta serial

Selecione a porta serial correta no menu `Tools > Serial Port`. Isso informa ao software do Arduino a porta USB na qual a Arduino LilyPad está conectada. No Mac, isso deve ser algo com `/dev/tty.usbserial` no nome.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/lilymac_chooseport.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

#### 10. Envie o programa

Agora, clique no botão "Upload" no ambiente Arduino. Espere alguns segundos - você deve ver os leds RX e TX na placa FTDI piscando. Se o envio for bem sucedido, a mensagem "Done uploading." Irá aparecer na barra de status.

Alguns segundos após o envio terminar, você deve ver o LED na placa começar a piscar (em verde). Se sim, parabéns! Você conseguiu rodar sua Arduino LilyPad com sucesso.

Se você tiver problemas, consulte as sugestões de [solução de problemas]({{ site.baseurl }}/tutoriais/2016/11/25/arduino-10troubleshooting/).

#### 11. Recursos Adicionais

- [lilypadarduino.org](http://lilypadarduino.org/): um guia completo para começar com a LilyPad.
- [Categoria da LilyPad no SparkFun](https://www.sparkfun.com/categories/135): sensores, atuadores e outras placas para uso com a Arduino LilyPad.

----

Link para a página original: [Getting Started Guide - Boards - LilyPad: Mac OS X](https://www.arduino.cc/en/Guide/LilyPadMacOSX).

----

#### Licença

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0). Os exemplos de código do guia são disponibilizados para o domínio público.
