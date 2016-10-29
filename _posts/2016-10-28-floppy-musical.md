---
layout:     post
title:      "Floppy Musical"
date:       2016-10-28
author:     "Marcelo Schmitt"
img:        "post_img/floppys1.jpg"
---

Este post descreve como montar o projeto de MoppyAdvanced de <a href="https://github.com/SammyIAm">Sammy1Am</a>
que chamaremos simplesmente de floppy musical ou moppy.

Primeiramente deixo fotos e vídeos sobre o projeto depois de concluído para exibir o que pretende-se construir.

<img src="{{ site.baseurl }}/post_img/floppys1.jpg" style="margin: 0 auto; max-height: 390px;">

<img src="{{ site.baseurl }}/post_img/floppys2.jpg" style="margin: 0 auto; max-height: 390px;">

<img src="{{ site.baseurl }}/post_img/floppys3.jpg" style="margin: 0 auto; max-height: 390px;">


<iframe width="584" height="329" src="https://www.youtube.com/watch?v=hsN9MINXFiQ" frameborder="0" allowfullscreen></iframe>

<iframe width="584" height="329" src="https://www.youtube.com/watch?v=Z7V2LiwLtbM" frameborder="0" allowfullscreen></iframe>

Agora que já temos uma visão final do projeto mãos a obra!

Primeiramente este projeto é baseado no projeto do Sammy1Am que você encontra <a href="https://github.com/SammyIAm/Moppy">aqui</a>.
Além de baixar os arquivos do projeto você precisará da biblioteta <a href="https://code.google.com/archive/p/arduino-timerone/downloads">TimerOne</a>
para arduino e do JDK 7 ou mais atual instalado. Eu sugiro que você use o <a href="https://netbeans.org/">NetBeans</a> para compilar 
o projeto Java que está na pasta Moppy/Java/MoppyDesk/ já que o projeto foi desenvolvido nel. Não se esqueça de incluír a biblioteca
nrjavaserial que está na pasta Moppy/Java/SerialDrivers/ ao projeto quando abri-lo como NetBeans.

Pontos importantes na hora de montar o projeto (hardware)

Além dos pinos Step e Control que devem ser ligado à arduino conforme descrito pelo Sammy, você também deve ligar os pinos 12 e 13
em curto no floppy para que ele ligue! 

<img src="{{ site.baseurl }}/post_img/pinagem-floppys.jpg" style="margin: 0 auto; max-height: 390px;">

Outra coisa importante a se saber é qual a voltagem de operação de um floppy e qual a corrente necessária para alimentá-lo.
Por padrão cada floppy opera a 5 volts e segundo <a href="http://forum.arduino.cc/index.php?topic=152419.0">este tópico</a> cada 
floppy deve ser alimentado com uma corrente que pode variar de 0,3 a 0,7 ampere.

(post em construção)
