---
layout:     post
title:      "Tutoriais Arduino #11: Fundações"
date:       2016-11-25
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Foundations (Fundações)

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/found_intro.svg" style="margin: 0 auto; max-height: 390px;" />
</p>

A seção `Foundations` (Fundações) fornece alguns conhecimentos específicos sobre os princípios e técnicas que estão por trás da plataforma Arduino, toda a sua família de placas e o software que você usa para dizer às placas o que fazer.
Se você quiser obter algum conhecimento antes de começar a usar as coisas, este é o lugar certo. Se você quiser começar a mexer em sua placa logo, por outro lado, visite a página de [primeiros passos][firststeps].

## Conhecimentos Básicos

 - Uma [introdução][intro]: o que é a placa Arduino e o que eu posso fazer com ela?
 - A anatomia de uma [placa Arduino/Genuino Uno][ardgenuno].
 - O que é o [software do Arduino (IDE)][ide] e como eu altero o idioma padrão? O que é um [`Sketch`][sketch] e como ele funciona?

## Microcontroladores

 - [Pinos Digitais][digitalpins]: como os pinos funcionam e o que significa configurá-los como entradas ou saídas.
 - [Pinos de Entrada Analógica][analoginput]: detalhes sobre a conversão analógico-digital e outros usos dos pinos.
 - [PWM][pwm]: como a função analogWrite() simula uma saída analógica usando pulse-width modulation (modulação de largura de pulso).
 - [Memória][memory]: os vários tipos de memória disponíveis na placa Arduino.

Você quer ir além no desenvolvimento de hardware Arduino ou quer simplesmente construir um Arduino usando uma protoboard/breadboard? Confira a seção [Hacking][hacking].

## Programação

 - [Referência da Linguagem][reference]: descubra o que cada termo da linguagem de código Arduino significa.
 - [Variáveis][variables]: compreenda como definir e usar variáveis em um Sketch.
 - [Funções][functions]: aprenda como definir e usar funções em um Sketch.
 - [Bibliotecas][libraries]: usando e instalando bibliotecas Arduino.
 - [Cores][cores]: precisa adicionar uma nova placa ao software do Arduino? Instale o núcleo assiciado a ela.

Procurando ajuda sobre como estender o software do Arduino Software, como [escrever sua própria biblioteca][writelibrary]? Confira a seção [Hacking][hacking].

## Outros Guias

 - [Conversão Paralelo para Serial][parallelserial]: use um `shift register` (registrador de deslocamento) paralelo-serial se precisar de mais entradas digitais do que há em seu Arduino.
 - [Conversão Serial para Paralelo][serialparallel]: use um `shift register` (registrador de deslocamento) serial-paralelo se precisar de mais saídas digitais do que há em seu Arduino.
 - [Medidor de Capacitância][capacitancemeter]: demonstra o uso de constantes de tempo RC para medir o valor de um capacitor.
 - [Bit Mask][bitmask]: saiba como acessar bits específicos em um byte de dados.

Visite o [site ITP Physical Computing][itppc] para obter mais recursos sobre como aprender os conceitos básicos de [Eletrônica][electronics], [Sensores][sensorsbasics], [Comunicação Serial][serialcomm], [Motores][motors] e muito mais.

----

Link para a página original: [Arduino Tutorials - Foundations][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [motors]: <https://itp.nyu.edu/physcomp/lessons/dc-motors/>
   [serialcomm]: <https://itp.nyu.edu/physcomp/lessons/serial-communication/>
   [sensorsbasics]: <https://itp.nyu.edu/physcomp/lessons/sensors-the-basics/>
   [electronics]: <https://itp.nyu.edu/physcomp/lessons/electronics/>
   [itppc]: <https://itp.nyu.edu/physcomp>
   [bitmask]: <https://www.arduino.cc/en/Tutorial/BitMask>
   [capacitancemeter]: <https://www.arduino.cc/en/Tutorial/CapacitanceMeter>
   [serialparallel]: <https://www.arduino.cc/en/Tutorial/ShiftOut>
   [parallelserial]: <https://www.arduino.cc/en/Tutorial/ShiftIn>
   [writelibrary]: <https://www.arduino.cc/en/Hacking/LibraryTutorial>
   [cores]: </2016/11/24/arduino-9cores/>
   [libraries]: </2016/11/24/arduino-8libraries/>
   [functions]: <https://www.arduino.cc/en/Reference/FunctionDeclaration>
   [variables]: <https://www.arduino.cc/en/Tutorial/Variables>
   [reference]: <https://www.arduino.cc/en/Reference/HomePage>
   [hacking]: <https://www.arduino.cc/en/Hacking/HomePage>
   [memory]: <https://www.arduino.cc/en/Tutorial/Memory>
   [pwm]: <https://www.arduino.cc/en/Tutorial/PWM>
   [analoginput]: <https://www.arduino.cc/en/Tutorial/AnalogInputPins>
   [digitalpins]: <https://www.arduino.cc/en/Tutorial/DigitalPins>
   [sketch]: <https://www.arduino.cc/en/Tutorial/Sketch>
   [ide]: </2016/11/21/arduino-7environment/>
   [ardgenuno]: <https://www.arduino.cc/en/Guide/BoardAnatomy>
   [intro]: </2016/11/20/arduino-6intro/>
   [firststeps]: </2016/11/20/arduino-1start/>
   [originalpage]: <https://www.arduino.cc/en/Tutorial/Foundations>
   [arduino]: <https://www.arduino.cc>
