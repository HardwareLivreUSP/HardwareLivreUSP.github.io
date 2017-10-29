---
layout:     post
title:      "Chapéu Seledor"
date:       2017-10-29
author:     "Marcelo Schmitt"
---

Este post descreve como montar o projeto <a href="https://github.com/HardwareLivreUSP/ChapeuSeletor">ChapéuSeletor</a> e ainda está em <b>fase de construção</b>. Gostaria de agradecer à J. K. Rowling, criadora da série Harry Potter, pelos momentos de diversão e magia que a personagem nos proporcionou, e também aos meus amigos do HardwareLivreUSP idealizadores do primeiro <a href="http://hardwarelivreusp.org/2015/03/12/chapeu-seletor/">projeto chapéu seletor</a> no qual este é inspirado. Vamos em fim ao que interessa.

Atualmente o projeto possui as seguintes funcionalidades:

<img src="{{ site.baseurl }}/post_img/chapeu_seletor/caso_de_uso.jpeg" style="margin: 0 auto; max-height: 390px;">

- Grifinória: faz o chapéu dizer grifinória
- Corvinal: faz o chapéu dizer corvinal
- Sonserina: faz o chapéu dizer sonserina
- Lufa-Lufa: faz o chapéu dizer lufa-lufa
- CasaPseudo-aleatória: o chapéu diz uma casa aleatória
- ConjuntoQuasi-aleatório: as vezes pode ser desejável dividir um certo número de "buxos" nas quatro casas de Hogwarts mas de forma que cada casa fique com aproximadamente o mesmo número de integrantes (esse foi o caso em que o chapéu seletor foi usado na comissão de trote do IME-USP em 2015). A funcionalidade ConjutoQuasi-aleatório permite fazer exatamente isso, dividir N bruxos aleatóriamente entre as quatro casas mas de forma que no final cada casa fique com aproximadamente o mesmo número de bruxos.

Segue a lista dos itens que utilizamos para construir esta versão do chapéu seletor.

- 1 Arduino
- 1 Módulo MP3 DFPlayer Mini SKU:DFR0299
- 1 Módulo Bluetooth HC-06
- 1 Motor micro servo 9g
- 1 Alto-falante / speaker
- 1 Cartão de memória microSD (pode ser um cartão de pouca capacidade, 2GB já tá ótimo)
- 1 resistor de 1KΩ
- 1 resistor de 220 ohms
- 2 resistores 470 ohms
- Aproximadamente 20 jumper (provavelmente bem menos se for montado na pcb)

Segue agora o diagrama (produzido com o <a href="http://fritzing.org/home/">fritzing</a>) que descreve como montar a circuitaria do chapéu.

<img src="{{ site.baseurl }}/post_img/chapeu_seletor/esquema_chapeu_seletor.jpg" style="margin: 0 auto; max-height: 390px;">

Códigos .ino e projeto android studio estão no repositório do projeto (mais uma vez <a href="https://github.com/HardwareLivreUSP/ChapeuSeletor">ChapéuSeletor</a>), programa .apk funcional também pode ser baixado de lá.

Responsável pelo projeto: *Marcelo Schmitt*
