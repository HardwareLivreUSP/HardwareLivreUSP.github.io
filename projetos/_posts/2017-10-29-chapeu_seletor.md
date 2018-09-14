---
layout:     post
type:       projeto
hidden:     true
title:      "Chapéu Seletor"
date:       2017-10-29
author:     "Marcelo Schmitt"
author_url: "https://github.com/marceloschmitt1"
img: 	      "assets/images/projetos/2017-10-29-chapeu_seletor/chapeu3.jpg"
img_url: 		""

redirect_from: "projetos/chapeu-seletor2"
---

Este post descreve como montar o projeto [Chapéu Seletor](https://github.com/HardwareLivreUSP/ChapeuSeletor) e ainda está em **fase de construção**. Gostaria de agradecer à J. K. Rowling, criadora da série Harry Potter, pelos momentos de diversão e magia que o personagem nos proporcionou e também aos meus amigos do HardwareLivreUSP, idealizadores do [primeiro projeto chapéu seletor]({{ site.baseurl }}/blog/2015/03/12/chapeu_seletor_no_trote_do_ime_usp/) no qual este é inspirado.

#### Atualmente o projeto possui as seguintes funcionalidades

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2017-10-29-chapeu_seletor/caso_de_uso.jpeg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

- `Grifinória`: faz o chapéu dizer grifinória.
- `Corvinal`: faz o chapéu dizer corvinal.
- `Sonserina`: faz o chapéu dizer sonserina.
- `Lufa-Lufa`: faz o chapéu dizer lufa-lufa.
- `CasaPseudo-aleatória`: o chapéu diz uma casa aleatória.
- `ConjuntoQuasi-aleatório`: às vezes pode ser desejável dividir um certo número de "bruxos" nas quatro casas de Hogwarts de forma que cada casa fique com aproximadamente o mesmo número de integrantes (esse foi o caso em que o chapéu seletor foi usado na comissão de trote do IME-USP em 2015). A funcionalidade ConjutoQuasi-aleatório permite fazer exatamente isso, dividir N bruxos aleatóriamente entre as quatro casas de forma que no final cada casa fique com aproximadamente o mesmo número de bruxos.

#### Itens que utilizamos para construir esta versão do projeto

- 1 Arduino
- 1 Módulo MP3 DFPlayer Mini SKU:DFR0299
- 1 Módulo Bluetooth HC-06
- 1 Motor micro servo 9g
- 1 Alto-falante / speaker
- 1 Cartão de memória microSD (pode ser um cartão de pouca capacidade, 2GB já está ótimo)
- 1 resistor de 1KΩ
- 1 resistor de 220 ohms
- 2 resistores 470 ohms
- Aproximadamente 20 jumper (provavelmente bem menos se for montado na pcb)

Segue agora o diagrama (produzido com o [fritzing](http://fritzing.org/home/)) que descreve como montar a circuitaria do chapéu.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2017-10-29-chapeu_seletor/esquema_chapeu_seletor.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Códigos .ino e projeto android studio estão no repositório do projeto no [GitHub](https://github.com/HardwareLivreUSP/ChapeuSeletor). O instalador .apk para android também pode ser baixado por lá.

----

#### Autores

- [Marcelo Schmitt](https://github.com/marceloschmitt1)
