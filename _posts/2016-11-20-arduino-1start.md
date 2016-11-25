---
layout:     post
title:      "Tutoriais Arduino #1: Primeiros passos com Arduino"
date:       2016-11-20
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Hardware Livre USP: Guia de Iniciação do Arduino

Esse tutorial marca o início de um projeto que estava há algum tempo no backlog do grupo: traduzir o [guia de iniciação][arduino-guide] e os [tutoriais oficiais][arduino-tutorials] do [site do Arduino][arduino].

Esses tutoriais são a melhor opção para quem quer aprender Arduino "do zero", mas atualmente eles são disponibilizados apenas em inglês e em chinês, dificultando muito a vida de quem não domina nenhum desses dois idiomas, já que os sistemas online de tradução ainda não são tão precisos.

Por isso, o grupo teve a ideia de traduzir esses turoriais e disponibilizá-los para a comunidade, a fim de difundir ainda mais os conhecimentos básicos e avançados sobre Arduino. Como, no entanto, alguns leitores que saber ler textos em inglês também podem optar por fazer uso desse material traduzido, não deixarei de compartilhar as referências que estejam disponíveis apenas em inglês.

Conforme a evolução do projeto, os links para páginas em inglês do site do Arduino serão substituídos por links para as respectivas traduções criadas e hospedadas pelo grupo HardwareLivreUSP.

### Instale o Software do Arduino (IDE)
Clique em um dos quatro links abaixo para obter instruções passo a passo sobre como configurar o Arduino Software (IDE) em seu computador, de acordo com seu sistema operacional.

 - [Windows][windows-steps]
 - [Mac OS X][mac-steps]
 - [Linux][linux-steps]
 - [IDE Portátil (Windows e Linux)][portable-steps]

### Instruções para as Placas

 - [101][board-oneoone]
 - [Due][board-due]
 - [Gemma][board-gemma]
 - [Intel Edison][board-edison]
 - [Intel Galileo Gen2][board-galileogentwo]
 - [Leonardo and Micro][board-leonardo]
 - [LilyPad][board-lilypad]
 - [LilyPad USB][board-lilypadusb]
 - [MEGA2560][board-mega]
 - [Mini][board-mini]
 - [MKR1000][board-mkrthousand]
 - [Nano][board-nano]
 - [Pro][board-pro]
 - [Pro Mini][board-promini]
 - [UNO][board-uno]
 - [Yún][board-yun]
 - [Zero][board-zero]
 - [ADK][board-adk]
 - [Esplora][board-esplora]
 - [ISP][board-isp]
 - [TFT LCD Screen][board-tftlcdscreen]
 - [Arduino Robot][board-robot]

### Aprenda sobre Arduino
 - Leia uma [introdução][learn-intro] sobre o que é o Arduino e por que você gostaria de usá-lo.
 - O que é o [software do Arduino (IDE)][learn-ide] e como altero o idioma padrão?
 - [Bibliotecas][learn-libraries]: Usando e instalando bibliotecas do Arduino.
 - [Núcleos][learn-cores]: Precisa adicionar uma nova placa à sua IDE? Instale o núcleo associado.
 - [Solução de problemas][learn-troubleshooting] (em inglês): Conselhos sobre o que fazer se algo der errado.

Para obter uma lista completa dos tutoriais (em inglês), visite a [seção de Fundações (Foundations)][learn-foundations], onde você encontrará um conhecimento aprofundado sobre os princípios e técnicas por trás da plataforma Arduino.
Desenvolver os projetos do [Arduino StarterKit][learn-starterkit] e ler o [livro 'Getting Started in Arduino'][learn-book] (disponível em inglês) são ótimas maneiras de começar a aprender e a colocar as mãos na massa com os principais conceitos da plataforma Arduino: programação e eletrônica.

### O que posso fazer com uma placa Arduino ou Genuino?
Se você não tiver certeza sobre o que quer construir em seu primeiro projeto, você pode experimentar o [Arduino and Genuino Starter Kit][starterkit] (Kit Inicial p/ Arduino e Genuino), ele irá guiá-lo desde seus primeiros passos com a eletrônica até o mundo de objetos providos de sensores e interatividade.
Se você busca inspiração, você pode encontrar uma grande variedade de tutoriais no [Arduino Project Hub][arduino-hub], um acervo de projetos feitos com Arduino.

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

```sh
Tradução feita com base na revisão de 16/08/2016 feita por "SM".
```

Link para a página original: [Getting Started Guide - Home][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [board-robot]: <https://www.arduino.cc/en/Guide/Robot>
   [board-tftlcdscreen]: <https://www.arduino.cc/en/Guide/TFT>
   [board-isp]: <https://www.arduino.cc/en/Guide/ArduinoISP>
   [board-esplora]: <https://www.arduino.cc/en/Guide/ArduinoEsplora>
   [board-adk]: <https://www.arduino.cc/en/Guide/ArduinoADK>
   [board-zero]: <https://www.arduino.cc/en/Guide/ArduinoZero>
   [board-yun]: <https://www.arduino.cc/en/Guide/ArduinoYun>
   [board-uno]: </2016/11/25/arduino-12board-uno/>
   [board-promini]: <https://www.arduino.cc/en/Guide/ArduinoProMini>
   [board-pro]: <https://www.arduino.cc/en/Guide/ArduinoPro>
   [board-nano]: <https://www.arduino.cc/en/Guide/ArduinoNano>
   [board-mkrthousand]: <https://www.arduino.cc/en/Guide/MKR1000>
   [board-mini]: <https://www.arduino.cc/en/Guide/ArduinoMini>
   [board-mega]: </2016/11/25/arduino-13board-mega/>
   [board-lilypadusb]: <https://www.arduino.cc/en/Guide/ArduinoLilyPadUSB>
   [board-lilypad]: <https://www.arduino.cc/en/Guide/ArduinoLilyPad>
   [board-leonardo]: <https://www.arduino.cc/en/Guide/ArduinoLeonardoMicro>
   [board-galileogentwo]: <https://www.arduino.cc/en/Guide/IntelGalileoGen2>
   [board-edison]: <https://www.arduino.cc/en/Guide/IntelEdison>
   [board-gemma]: <https://www.arduino.cc/en/Guide/ArduinoGemma>
   [board-due]: <https://www.arduino.cc/en/Guide/ArduinoDue>
   [board-oneoone]: <https://www.arduino.cc/en/Guide/Arduino101>
   [originalpage]: <https://www.arduino.cc/en/Guide/HomePage>
   [arduino-hub]: <https://create.arduino.cc/projecthub>
   [starterkit]: <https://store.arduino.cc/product/GKX00007>
   [learn-book]: <https://store.arduino.cc/product/B000001>
   [learn-starterkit]: <https://www.arduino.cc/en/Main/ArduinoStarterKit>
   [learn-foundations]: </2016/11/25/arduino-11foundations/>
   [learn-troubleshooting]: </2016/11/25/arduino-10troubleshooting/>
   [learn-cores]: </2016/11/24/arduino-9cores/>
   [learn-libraries]: </2016/11/24/arduino-8libraries/>
   [learn-ide]: </2016/11/21/arduino-7environment/>
   [learn-intro]: </2016/11/20/arduino-6intro/>
   [windows-steps]: </2016/11/20/arduino-2windows/>
   [mac-steps]: </2016/11/20/arduino-3mac/>
   [linux-steps]: </2016/11/20/arduino-4linux/>
   [portable-steps]: </2016/11/20/arduino-5portable/>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino-tutorials]: <https://www.arduino.cc/en/Tutorial/HomePage>
   [arduino-guide]: <https://www.arduino.cc/en/Guide/HomePage>
   [arduino]: <https://www.arduino.cc>
