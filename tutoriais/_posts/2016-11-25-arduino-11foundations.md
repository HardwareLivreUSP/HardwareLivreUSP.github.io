---
layout:     post
type:       tutorial
hidden:     true
title:      "Arduino #11: Fundações"
date:       2016-11-25
author:     "Leonardo Haddad Carlos"
author_url: ""
img:        "assets/images/tutoriais/arduino/arduino_oscomm.png"
img_url: 		""

redirect_from: "2016/11/25/arduino-11foundations"
---

#### Foundations (Fundações)

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/found_intro.svg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

A seção `Foundations` (Fundações) fornece alguns conhecimentos específicos sobre os princípios e técnicas que estão por trás da plataforma Arduino, toda a sua família de placas e o software que você usa para dizer às placas o que fazer.
Se você quiser obter algum conhecimento antes de começar a usar as coisas, este é o lugar certo. Se você quiser começar a mexer em sua placa logo, por outro lado, visite a página de [primeiros passos]({{ site.baseurl }}/tutoriais/2016/11/20/arduino-1start/).

#### Conhecimentos Básicos

- Uma [introdução]({{ site.baseurl }}/tutoriais/2016/11/20/arduino-6intro/): o que é a placa Arduino e o que eu posso fazer com ela?
- A anatomia de uma [placa Arduino/Genuino Uno](https://www.arduino.cc/en/Guide/BoardAnatomy).
- O que é o [software do Arduino (IDE)][{{ site.baseurl }}/tutoriais/2016/11/21/arduino-7environment/] e como eu altero o idioma padrão? O que é um [`Sketch`](https://www.arduino.cc/en/Tutorial/Sketch) e como ele funciona?

#### Microcontroladores

- [Pinos Digitais](https://www.arduino.cc/en/Tutorial/DigitalPins): como os pinos funcionam e o que significa configurá-los como entradas ou saídas.
- [Pinos de Entrada Analógica](https://www.arduino.cc/en/Tutorial/AnalogInputPins): detalhes sobre a conversão analógico-digital e outros usos dos pinos.
- [PWM](https://www.arduino.cc/en/Tutorial/PWM): como a função analogWrite() simula uma saída analógica usando pulse-width modulation (modulação de largura de pulso).
- [Memória](https://www.arduino.cc/en/Tutorial/Memory): os vários tipos de memória disponíveis na placa Arduino.

Você quer ir além no desenvolvimento de hardware Arduino ou quer simplesmente construir um Arduino usando uma protoboard/breadboard? Confira a seção [Hacking](https://www.arduino.cc/en/Hacking/HomePage).

#### Programação

- [Referência da Linguagem](https://www.arduino.cc/en/Reference/HomePage): descubra o que cada termo da linguagem de código Arduino significa.
- [Variáveis](https://www.arduino.cc/en/Tutorial/Variables): compreenda como definir e usar variáveis em um Sketch.
- [Funções](https://www.arduino.cc/en/Reference/FunctionDeclaration): aprenda como definir e usar funções em um Sketch.
- [Bibliotecas]({{ site.baseurl }}/tutoriais/2016/11/24/arduino-8libraries/): usando e instalando bibliotecas Arduino.
- [Cores]({{ site.baseurl }}/tutoriais/2016/11/24/arduino-9cores/): precisa adicionar uma nova placa ao software do Arduino? Instale o núcleo assiciado a ela.

Procurando ajuda sobre como estender o software do Arduino Software, como [escrever sua própria biblioteca](https://www.arduino.cc/en/Hacking/LibraryTutorial)? Confira a seção [Hacking](https://www.arduino.cc/en/Hacking/HomePage).

#### Outros Guias

- [Conversão Paralelo para Serial](https://www.arduino.cc/en/Tutorial/ShiftIn): use um `shift register` paralelo-serial se precisar de mais entradas digitais do que há em seu Arduino.
- [Conversão Serial para Paralelo][https://www.arduino.cc/en/Tutorial/ShiftOut]: use um `shift register` serial-paralelo se precisar de mais saídas digitais do que há em seu Arduino.
- [Medidor de Capacitância](https://www.arduino.cc/en/Tutorial/CapacitanceMeter): demonstra o uso de constantes de tempo RC para medir o valor de um capacitor.
- [Bit Mask](https://www.arduino.cc/en/Tutorial/BitMask): saiba como acessar bits específicos em um byte de dados.

Visite o [site ITP Physical Computing](https://itp.nyu.edu/physcomp) para obter mais recursos sobre como aprender os conceitos básicos de [Eletrônica](https://itp.nyu.edu/physcomp/lessons/electronics/), [Sensores](https://itp.nyu.edu/physcomp/lessons/sensors-the-basics/), [Comunicação Serial](https://itp.nyu.edu/physcomp/lessons/serial-communication/), [Motores][https://itp.nyu.edu/physcomp/lessons/dc-motors/] e muito mais.

----

Link para a página original: [Arduino Tutorials - Foundations](https://www.arduino.cc/en/Tutorial/Foundations).

----

#### Licença

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0). Os exemplos de código do guia são disponibilizados para o domínio público.
