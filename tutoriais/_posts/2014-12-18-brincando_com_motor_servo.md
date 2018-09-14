---
layout:     post
type:       tutorial
hidden:     true
title:      "Brincando com Motor Servo"
date:       2014-12-18
author:     "Lucas Silva"
author_url: ""
img:        "assets/images/tutoriais/2014-12-18-brincando_com_motor_servo/servo_motor_arduino.jpg"
img_url: 		""

redirect_from: "2014/12/18/brincando-com-motor-servo"
---

Os servomotores, diferentemente dos motores CC comuns, possuem uma entrada extra para controlar sua rotação. Eles recebem um ângulo e se movimentam para ficar de acordo com a informação recebida. O Arduino já possui uma biblioteca própria para trabalhar com servomotores, a `Servo.h`. Nesse tutorial, faremos uma breve introdução a ela.

#### Pinagem

No plug do fio marrom, ligaremos no GND da Arduino, no do fio vermelho, ligaremos no `5V` do Arduino e, por último, ligaremos o laranja em algum dos pinos digitais. No caso, ligamos no pino digital `3` do Arduino

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2014-12-18-brincando_com_motor_servo/fios_servo_motor.jpg">
    <figcaption>Fios do Servomotor</figcaption>
  </figure>
</div>

Após as ligações, a placa ficará parecida com a figura abaixo:

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2014-12-18-brincando_com_motor_servo/servo_motor_arduino.jpg">
    <figcaption>Servomotor ligado ao Arduino</figcaption>
  </figure>
</div>


#### Código

Código usado para mexer no servomotor:

<pre class="prettyprint">
#include "Servo.h"

Servo motor;

void setup ()
{
  Serial.begin(9600);
  motor.attach(3);
}

void loop ()
{
  motor.write(Serial.parseInt());
  delay(1000);
  motor.write(90);
  delay(1000);
}
</pre>

O método `attach` do Servo é usado para indicar qual entrada do Arduino será usada. já o método `write` indica para qual ângulo ele deve se deslocar. No primeiro `write`, pegamos o deslocamento pela entrada padrão. Note que, se nada for digitado, ele se deslocará para a posição `0` e depois para a posição `90`. Note também que o `write` não indica quantos graus ele deve se deslocar e sim para qual grau ele deve ir. Isto é, se você usa `write(90)` e depois `write(90)` ele irá se mover uma vez e depois ficará parado, pois já está na posição `90`. Além disso, há um grau máximo que o servomotor pode atingir, que varia de servomotor para servomotor e, caso um `write` seja dado com um grau superior ao máximo, ele se irá somente até esse grau máximo.

A documentação da biblioteca Servo, junto com exemplos de uso das funções, está disponível em [http://arduino.cc/en/reference/servo](http://arduino.cc/en/reference/servo). Para outros exemplos também pode ser consultado no livro Arduino Cookbook da O'Reilly.
