---
layout:     post
title:      "Básicos de Eletrônica – Parte II"
date:       2014-12-10
author:     "Lucas Silva"
img:        "post_img/multimeters-resistance-measurement.jpg"
---

Um equipamento de grande utilidade na hora de montar placas e testar componentes é o multímetro (figura 1), pois ele nos permite fazer medições de várias grandezas elétricas. A seguir faremos um tutorial de como utilizá-lo para efeturar as medições. Primeiramente, notamos que, para cada grandeza elétrica, há diversas escalas para se fazer as medições, para determinarmos qual escala usar, devemos ir selecionando a menor (no caso do multímetro digital) ou a maior (no caso do analógico) e ir descendo até ele deixar de mostrar apenas zeros. Vale ressaltar que se você já tem uma noção da grandeza do que irá medir, deve selecionar a escala do multímetro onde a grandeza esteja no intervalo e não nas extremidades. Exemplo: suponha que você deseja medir uma fonte de 20V, deveremos escolher a escala do 200V no nosso multímetro, entretanto, se fosse uma fonte de 15V, a escala do 20V já bastaria.

<img src="{{ site.baseurl }}/post_img/multimetro.jpg" style="margin: 0 auto; max-height: 390px;">

Figura 1 – Multímetro digital

Medindo a Tensão:



Suponhamos que montamos um circuito elétrico para realizar determinado projeto usando o Arduino e precisamos verificar a tensão, para isso, precisamos ligar o nosso multímetro em paralelo ao circuito (figura 2) enquanto ele está ligado. Para medir a tensão de uma fonte de energia, basta ligar os conectores do multímetro aos polos positivo e negativo da fonte (caso você ponha o conector positivo no negativo e o negativo no positivo, a tensão aparecerá negativa). Ligamos o voltímetro em paralelo ao circuito, pois a tensão num circuito em série é a mesma.

<img src="{{ site.baseurl }}/post_img/measuring-voltage.gif" style="margin: 0 auto; max-height: 390px;">

Figura 2 – Medindo a tensão de um circuito



Medindo a Corrente:

Para medirmos a corrente de um circuito, devemos ligar o multímetro em série ao circuito, pois num circuito em série, a corrente é a mesma. Para a medição da corrente de um circuito, é preciso levar em consideração se ela é alternada ou contínua e assim selecionar adequadamente as escalas. Caso a medição seja feita de maneira errada, o fusível do multímetro queima.

<img src="{{ site.baseurl }}/post_img/measuring-current.jpg" style="margin: 0 auto; max-height: 390px;">

Figura 3 – Medindo a corrente usando o multímetro



Medindo a Resistência:

Para medir a resistência dum resistor (caso você não tenha uma tabela com o esquema de cores a mão ou simplesmente esteja com pressa), basta ligar o multímetro no resistor de acordo com a figura 4.

<img src="{{ site.baseurl }}/post_img/multimeters-resistance-measurement.jpg" style="margin: 0 auto; max-height: 390px;">

Figura 4 – Medindo a resistência utilizando um multímetro
