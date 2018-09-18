---
layout:     post
type:       tutorial
hidden:     true
title:      "Arduino #22: Placas - Nano"
date:       2016-11-27
author:     "Leonardo Haddad Carlos"
author_url: ""
img:        "assets/images/tutoriais/arduino/arduino_oscomm.png"
img_url:    ""

redirect_from:
 - "2016/11/27/arduino-22nano"
 - "2016/11/27/arduino-22nano/"
---

#### Primeiros Passos com a Arduino Nano

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/nano_board.jpg">
    <figcaption>Conectando a Arduino Nano 2.2 a um computador com um cabo USB Mini-B. Observe o LED de alimentação azul embaixo da placa.</figcaption>
  </figure>
</div>

Para conectar a Arduino Nano ao seu computador, você precisará de um cabo USB Mini-B. Ele também fornecerá energia para a placa, conforme indicado pelo LED azul (que está na parte inferior da Arduino Nano 2.x e na parte superior da Arduino Nano 3.0).

Se você tiver uma Arduino Nano 3.0, você precisará selecionar `Arduino Duemilanove or Nano w/ ATmega328` a partir do menu `Tools > Board`. Se você tem uma Arduino Nano 2.x, selecione `Arduino Diecimila`, `Duemilanove`, ou `Nano w/ ATmega168`. Selecione a porta serial correta a partir do menu `Tools > Serial Port`. Em seguida, basta pressionar o botão de upload no ambiente Arduino. A placa será automaticamente reiniciada e o sketch será carregado. Se você tiver algum problema, consulte o [guia de solução de problemas]({{ site.baseurl }}/tutoriais/2016/11/25/arduino-10troubleshooting/).

Para mais detalhes sobre o Arduino Nano, consulte a [página de hardware](https://www.arduino.cc/en/Main/ArduinoBoardNano).

----

Link para a página original: [Getting Started Guide - Boards - Nano](https://www.arduino.cc/en/Guide/ArduinoNano).

----

#### Licença

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0). Os exemplos de código do guia são disponibilizados para o domínio público.
