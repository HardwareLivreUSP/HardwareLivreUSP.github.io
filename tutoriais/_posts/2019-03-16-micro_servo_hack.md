---
layout:     post
type:       tutorial
hidden:     true
title:      Hackeando o Micro Servo 9g
date:       2019-03-16
author:     "Daniel Jorge Renjiffo"
author_url: "https://linux.ime.usp.br/~djrenjiffo/"
img:        "assets/images/tutoriais/2019-03-16-micro_servo_hack/servo9g.jpg"
img_url:    ""


redirect_from:
 - "tutoriais/2019-03-16-micro_servo_hack"
 - "tutoriais/2019-03-16-micro_servo_hack/"
---

#### Introdução

Servomotores são amplamente usados em vários projetos, seja em braços mecânicos, aeromodelos e etc.
Em especial, o simpático e barato micro servo SG90 possui uma vasto número de projetos na comunidade maker.
Uma de sua principal limitação é o fato de apenas poder girar entre 0 e 180 graus. Se eu te falasse que é possível
mudar o SG90 para que possa funcionar como um motor contínuo e que seja possível controlar sua velocidade e direção
com apenas uma entrada PWM ? Confira o vídeo a seguir:

<iframe class="youtube" src="https://www.youtube.com/embed/13p3URkTj8U?rel=0" frameborder="0" allowfullscreen></iframe>


#### Teoria

O que diferencia um servo motor em relação aos outros é o fato de ter dentro dele um encoder (dispositivo eletromecânico
capaz de converter posição angular do eixo do motor em um sinal digital ou analógico) e um microcontrolador. Logo, quando
enviamos um sinal que representa o ângulo que gostaríamos que o eixo se movesse estamos na verdade enviando para seu
microcontrolador. Por sua vez o microcontrolador compara este valor com o valor do encoder e move o eixo do motor até que
os dois sinais sejam idênticos. Dependo do valor da diferença dos valores o motor pode rotacionar mais rápido ou mais devagar.
No caso, o encoder do SG90 é um potenciômetro linear, um resistor que varia seu valor através de um eixo mecânico. Conforme o eixo
do SG90 gira ele muda valor do potenciômetro e dessa forma, o microcontrolador é capaz de ler o ângulo do eixo.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-micro_servo_hack/pot.jpg">
    <figcaption>Exemplo de potenciômetro</figcaption>
  </figure>
</div>

Nosso hack consiste em duas parte: a primeira é tirar a trava mecânica do servo para que o servo possa girar 360 graus e
a segunda seria trocar o potenciômetro por uma resistência fixa. Dessa forma o servo rotacionar sem parar ao menos que seja
enviando o mesmo sinal que representa a resistência fixa. Com isso se enviarmos valores acima da resistência o servo rotacionará
para uma direção e idem para valores abaixo.

#### Passo a Passo

Lista de componentes:

- 1 x Micro Servo 9g SG90
- 2 x Resistor 2k2 Ohms (três faixas vermelhas)
- 1 x Alicate de bico
- 1 x Ferro de solda
- 1 x Chave de fenda ou philips


<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-micro_servo_hack/list.jpg">
    <figcaption>Lista de componentes</figcaption>
  </figure>
</div>

Passo 1:

Remova os quatro parafusos com a chave philips.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-micro_servo_hack/servo.jpg">
    <figcaption>Passo 1</figcaption>
  </figure>
</div>

Passo 2:

Puxe com cuidado a tampa superior do servo e com o alicate de bico corte a trava mecânica, conforme indica a imagem a seguir:

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-micro_servo_hack/servo_cut.jpg">
    <figcaption>Com trava</figcaption>
  </figure>
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-micro_servo_hack/servo_cut_after.jpg">
    <figcaption>Trava retirada</figcaption>
  </figure>
</div>

Passo 3:

Coloque a tampa superior no lugar e agora retire a tampa inferior. Puxe a placa do servo e corte os três pinos do potenciômetro.
Dependo da marca do servo pode ser que o potenciômetro esteja ligado por três fios ao invés de três pinos. No caso, basta retirar os três fios.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-micro_servo_hack/servo_pot.jpg">
    <figcaption>Passo 3</figcaption>
  </figure>
</div>

Passo 4:

Agora, arranje os dois resistores 2K2 Ohms de forma a idêntica a imagem a seguir:

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-micro_servo_hack/resistor.jpg">
    <figcaption>Passo 4</figcaption>
  </figure>
</div>

Passo 5:

Usando o ferro de solda conecte as três pontas do arranjo dos resistores do passo 4 nos três pontos soltos onde anteriormente estava o
potenciômetro. Cuidado para não usar muita solda e curto-circuitar pinos da placa (faça esse passo com paciência e calma X-X).
Depois de soldado a placa do servo deve estar parecido com a imagem:

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2019-03-16-micro_servo_hack/servo_res.jpg">
    <figcaption>Passo 5</figcaption>
  </figure>
</div>

Passo 6:

Feche a tampa inferior do servo e coloque os quatro parafusos de volta e pronto. Agora temos um motor capaz de ter sua velocidade e direção controlada com apenas um pino!

#### Como usar:

Para usar nosso servo renascido basta usar  os mesmos comandos da biblioteca Servo.h da IDE do Arduino. Porém agora controlamos a velocidade da rotação com servoWrite(). Para valores perto de 90 graus o servo estará quase parado, para valores acima o servo rotacionar no sentido horário e de forma mais rápida conforme se aproxima de 180 graus e forma idêntica porém para o sentido anti-horário para valores próximo de zero graus. Para mais informações de como usar um servo com arduino confira nosso [tutorial](https://hardwarelivreusp.org/tutoriais/2014/12/18/brincando_com_motor_servo/)


#### Autores

- [Daniel Jorge Renjiffo](https://linux.ime.usp.br/~djrenjiffo/)
