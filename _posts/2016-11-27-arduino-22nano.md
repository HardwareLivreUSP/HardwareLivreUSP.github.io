---
layout:     post
title:      "Tutoriais Arduino #22: Placas - Nano"
date:       2016-11-27
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Primeiros Passos com a Arduino Nano

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/nano_board.jpg" style="margin: 0 auto; max-height: 390px;" />
Conectando a Arduino Nano 2.2 a um computador com um cabo USB Mini-B. Observe o LED de alimentação azul embaixo da placa.
</p>

Para conectar a Arduino Nano ao seu computador, você precisará de um cabo USB Mini-B. Ele também fornecerá energia para a placa, conforme indicado pelo LED azul (que está na parte inferior da Arduino Nano 2.x e na parte superior da Arduino Nano 3.0).

Se você tiver uma Arduino Nano 3.0, você precisará selecionar `Arduino Duemilanove or Nano w/ ATmega328` a partir do menu `Tools`> `Board`. Se você tem uma Arduino Nano 2.x, selecione `Arduino Diecimila`, `Duemilanove`, ou `Nano w/ ATmega168`. Selecione a porta serial correta a partir do menu `Tools`> `Serial Port`. Em seguida, basta pressionar o botão de upload no ambiente Arduino. A placa será automaticamente reiniciada e o sketch será carregado. Se você tiver algum problema, consulte o [guia de solução de problemas][troubleshooting].

For more details on the Arduino Nano, see the [hardware page][nanohwpage].

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

Link para a página original: [Getting Started Guide - Boards - Nano][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [nanohwpage]: <https://www.arduino.cc/en/Main/ArduinoBoardNano>
   [reference]: <https://www.arduino.cc/en/Reference/HomePage>
   [tutexamples]: <https://www.arduino.cc/en/Tutorial/HomePage>
   [troubleshooting]: </2016/11/25/arduino-10troubleshooting/>
   [environment]: </2016/11/21/arduino-7environment/>
   [firststeps]: </2016/11/20/arduino-1start/>
   [originalpage]: <https://www.arduino.cc/en/Guide/ArduinoNano>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino]: <https://www.arduino.cc>
