---
layout:     post
title:      "Morse Laser"
date:       2016-06-26
author:     "Gabriel Capella"
author_url: "http://gabrielcapella.com/"
---

Tivemos essa idéia, pois existem cabos de fibra ótica e eles utilizam o mesmo princípio. No entanto o nosso lazer, proveniente de uma caneta a laser desmontada, tinha um tempo de reação muito lento. Já o nosso LDR também tinha um tempo de resposta muito lento. Isso impossibilitou que nós utilizássemos a própria comunicação serial como protocolo de comunicação - tentamos até em velocidades muito baixas, baute rate por volta de 5.

Para driblar esse problema, voltamos ao primórdio da humanidade e optamos para o código morse. Escrevemos um código simples que descarta um byte e para cada bit enviamos um sinal. Se o bit é 1 temos um pulso de duração 2x, se for 0 o pulso será de apenas x. Entre cada byte há um intervalo de 3x para caracterizar o seu fim. 

Com esse código conseguimos enviar texto em uma distância de aproximadamente 5m. O inconveniente desse projeto é que é difícil alinhar um laser com um LDR em 5m.

Se quiserem montar esse projeto, vocês precisam de um módulo laser e de um LDR. Além disso é preciso calibrar o receptor em "Receiver.ino". É um projeto simples e fácil de fazer.

O código pode ser visto em [MorseLaser](https://github.com/HardwareLivreUSP/MorseLaser/).

<img src="{{ site.baseurl }}/post_img/morse.png" style="">

Note que no lugar do laser você pode usar um LED comum, no entanto a distância de transmissão será bem menor.
