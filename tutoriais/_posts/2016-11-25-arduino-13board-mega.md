---
layout:     post
type:       tutorial
hidden:     true
title:      "Arduino #13: Placas - Mega2560"
date:       2016-11-25
author:     "Leonardo Haddad Carlos"
author_url: ""
img:        "assets/images/tutoriais/arduino/arduino_oscomm.png"
img_url:    ""

redirect_from:
 - "2016/11/25/arduino-13board-mega"
 - "2016/11/25/arduino-13board-mega/"
---

#### Primeiros Passos com a Arduino/Genuino MEGA2560

Este documento explica como conectar sua placa Mega2560 ao computador e fazer o upload de seu primeiro esboço.

#### Botando a Mão na Massa

A Mega2560 é programada usando o software do Arduino (IDE), nosso Ambiente de Desenvolvimento Integrado, comum a todas as nossas placas. Antes de poder avançar, você deve ter instalado o software do Arduino (IDE) no seu PC, conforme explicado na [página inicial de nosso Guia de Primeiros Passos]({{ site.baseurl }}/tutoriais/2016/11/20/arduino-1start/).

Conecte sua placa Mega2560 com um cabo USB A B; às vezes este cabo é chamado de cabo USB "printer" (impressor).

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/mega_board.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/usb_cable.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

A conexão USB com o PC é necessária para enviar programas para serem executados na placa. Além disso, a Mega2560 automaticamente tira energia do USB ou de qualquer outra fonte de alimentação externa à qual esteja conectado. Conecte a placa ao computador usando o cabo USB. O LED de alimentação verde (rotulado PWR) deve acender.

##### Instale os Drivers da Placa

Se você usou o instalador, o Windows - da versão XP até a 10 - instalará os drivers automaticamente assim que conectar sua placa.

Se você baixou e expandiu o pacote Zip ou, por algum motivo, a placa não foi devidamente reconhecida, siga o procedimento abaixo.

- Clique no menu Iniciar e abra o Painel de Controle.
- Enquanto estiver no Painel de Controle, navegue até Sistema e Segurança. Em seguida, clique em Sistema. Quando a janela Sistema estiver aberta, abra o Gerenciador de Dispositivos.
- Procure em Portas (COM & LPT). Você deve ver uma porta aberta chamada "Arduino Mega2560 (COMxx)". Se não houver nenhuma seção COM & LPT, procure por "Dispositivo desconhecido" em "Outros Dispositivos".
- Clique com o botão direito do mouse na porta "Arduino Mega2560 (COMxx)" e escolha a opção "Update Driver Software" (Atualizar Software do Driver).
- Em seguida, escolha a opção "Procurar o meu computador para o software do driver" opção.
- Finalmente, navegue e selecione o arquivo de driver chamado "arduino.inf", localizado na pasta "Drivers" do download do software Arduino (não o subdiretório "Drivers USB FTDI").
- O Windows terminará a instalação do driver a partir daí.
Veja também: [screenshots passo a passo para instalar a Mega2560 no Windows XP](https://www.arduino.cc/en/Guide/UnoDriversWindowsXP).

##### Execute o Software do Arduino (IDE)

Clique duas vezes no ícone Arduino (arduino.exe) criado pelo processo de instalação.

Nota: se o software do Arduino for carregado no idioma errado, você poderá alterá-lo na caixa de diálogo de preferências. Consulte [a página do software do Arduino (IDE)]({{ site.baseurl }}/tutoriais/2016/11/21/arduino-7environment/) para obter detalhes.

##### Abra seu Primeiro Esboço

Abra o esçobo do exemplo de piscar o LED: `File > Examples > 01.Basics > Blink`.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/exp_blink.jpg">
    <figcaption>File > Examples > 01.Basics > Blink</figcaption>
  </figure>
</div>

##### Selecione o Tipo da Placa e a Porta

Você precisará selecionar a entrada no menu `Tools > Board`.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/mega_chooseboard.jpg">
    <figcaption>Selecione a placa Arduino/Genuino Mega2560</figcaption>
  </figure>
</div>

Selecione o dispositivo serial da placa a partir do menu `Tools > Serial Port`. É provável que seja `COM3` ou superior (`COM1` e `COM2` são normalmente reservados para portas de série de hardware). Para descobrir, você pode desconectar sua placa e reabrir o menu; a entrada que desaparecer deverá ser sua placa Arduino/Genuino. Reconecte a placa e selecione essa porta serial.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/mega_chooseserial.jpg">
    <figcaption>Selecione a porta serial correspondente</figcaption>
  </figure>
</div>

##### Envie o Programa

Agora, basta clicar no botão "Upload" no IDE. Espere alguns segundos - você deve ver os leds RX e TX da placa piscando. Se o envio for bem-sucedido, a mensagem "Done uploading." Irá aparecer na barra de estado (status).

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/exp_blink_send.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Alguns segundos após o carregamento terminar, você deve ver o pino 13 (L) LED na placa começar a piscar (em laranja). Se sim, parabéns! Você conseguiu configurar e rodar sua Arduino ou Genuino. Se você tiver problemas, consulte as [sugestões de solução de problemas]({{ site.baseurl }}/tutoriais/2016/11/25/arduino-10troubleshooting/).

#### Se Inspire!

Agora que você configurou e programou sua placa Mega2560, você pode encontrar inspiração em nossa plataforma de tutoriais [Project Hub](https://create.arduino.cc/projecthub/products/arduino-mega-2560-genuino-mega-2560) ou dar uma olhada nas páginas de tutorial que explicam como usar os vários recursos da sua placa.

- [Exemplos](https://www.arduino.cc/en/Tutorial/HomePage) de utilização de vários sensores e actuadores
- [Referência](https://www.arduino.cc/en/Reference/HomePage) para a linguagem Arduino

----

Link para a página original: [Getting Started Guide - Boards - Mega2560](https://www.arduino.cc/en/Guide/ArduinoMega2560).

----

#### Licença

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0). Os exemplos de código do guia são disponibilizados para o domínio público.
