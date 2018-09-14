---
layout:     post
type:       projeto
hidden:     true
title:      "Morse Laser"
date:       2016-06-26
author:     "Gabriel Capella"
author_url: "http://gabrielcapella.com/"
img: 	      "assets/images/projetos/2016-06-26-morse_laser/morse.png"
img_url: 		""

redirect_from: "projetos/morselaser"
---

Tivemos a ideia de fazer um sistema de comunicação por luz inspirados em cabos de fibra ótica, que utilizam este princípio. No entanto, o laser (proveniente de uma caneta a laser desmontada) e o LDR que usamos tinham um tempo de resposta muito lento. Isso impossibilitou que nós utilizássemos a própria comunicação serial como protocolo de comunicação - tentamos até em velocidades muito baixas, baute rate por volta de 5.

Para driblar esse problema optamos pelo código morse. Escrevemos um código simples que descarta um byte e para cada bit enviamos um sinal. Se o bit é 1 temos um pulso de duração 2x, se for 0 o pulso será de apenas x. Entre cada byte há um intervalo de 3x para caracterizar o seu fim.

Com esse código conseguimos enviar texto em uma distância de aproximadamente 5 metros. O inconveniente desse projeto é que é difícil alinhar o laser com o LDR em 5 metros.

Para montar esse projeto, é necessário ter um módulo laser e um sensor LDR. Além disso é preciso calibrar o receptor em "Receiver.ino". É um projeto simples e fácil de fazer.

Veja o código em nosso [Github](https://github.com/HardwareLivreUSP/MorseLaser/).

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2016-06-26-morse_laser/morse.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Note que no lugar do laser você pode usar um LED comum, no entanto a distância de transmissão será bem menor.

----

#### Autores

- [Gabriel Capella](http://gabrielcapella.com/)
