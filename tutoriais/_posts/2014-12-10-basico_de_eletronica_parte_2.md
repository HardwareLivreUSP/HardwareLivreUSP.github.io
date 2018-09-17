---
layout:     post
type:       tutorial
hidden:     true
title:      "Básico de Eletrônica – Parte II"
date:       2014-12-10
author:     "Lucas Silva"
author_url: ""
img:        "assets/images/tutoriais/2014-12-10-basico_de_eletronica_parte_2/digital-multimeter.jpg"
img_url:    ""

redirect_from:
 - "2014/12/10/basicos-eletronica-2"
 - "2014/12/10/basicos-eletronica-2/"
---

#### Multímetro

Um equipamento de grande utilidade na hora de montar placas e testar componentes é o multímetro (figura 1), pois ele nos permite fazer medições de várias grandezas elétricas. A seguir faremos um tutorial de como utilizá-lo para efetuar as medições. Primeiramente, notamos que, para cada grandeza elétrica, há diversas escalas para se fazer as medições. Para determinarmos qual escala usar, devemos ir selecionando a menor (no caso do multímetro digital) ou a maior (no caso do analógico) e ir descendo até ele deixar de mostrar apenas zeros. Vale ressaltar que se você já tem uma noção da grandeza do que irá medir, deve selecionar a escala do multímetro onde a grandeza esteja no intervalo e não nas extremidades. Exemplo: suponha que você deseja medir uma fonte de 20V, deveremos escolher a escala do 200V no nosso multímetro, entretanto, se fosse uma fonte de 15V, a escala do 20V já bastaria.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2014-12-10-basico_de_eletronica_parte_2/DP1000-031-XINDAR-100.jpg">
    <figcaption>Figura 1: Multímetro digital</figcaption>
  </figure>
</div>

#### Medindo a Tensão

Suponhamos que montamos um circuito elétrico para realizar determinado projeto usando o Arduino e precisamos verificar a tensão. Para isso, precisamos ligar o nosso multímetro em paralelo ao circuito (figura 2) enquanto ele está ligado. Para medir a tensão de uma fonte de energia, basta ligar os conectores do multímetro aos polos positivo e negativo da fonte (caso você ponha o conector positivo no negativo e o negativo no positivo, a tensão aparecerá negativa). Ligamos o voltímetro em paralelo ao circuito, pois a tensão num circuito em série é a mesma.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2014-12-10-basico_de_eletronica_parte_2/measuring-voltage.gif">
    <figcaption>Figura 2: Medindo a tensão de um circuito</figcaption>
  </figure>
</div>

#### Medindo a Corrente

Para medirmos a corrente de um circuito, devemos ligar o multímetro em série ao circuito, pois num circuito em série, a corrente é a mesma. Para a medição da corrente de um circuito, é preciso levar em consideração se ela é alternada ou contínua e assim selecionar adequadamente as escalas. Caso a medição seja feita de maneira errada, o fusível do multímetro queima.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2014-12-10-basico_de_eletronica_parte_2/CJni.jpg">
    <figcaption>Figura 3: Medindo a corrente usando o multímetro</figcaption>
  </figure>
</div>

#### Medindo a Resistência

Para medir a resistência de um resistor (caso você não tenha uma tabela com o esquema de cores a mão ou simplesmente esteja com pressa), basta ligar o multímetro no resistor de acordo com a figura 4.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2014-12-10-basico_de_eletronica_parte_2/multimeters-resistance-measurement.jpg">
    <figcaption>Figura 4: Medindo a resistência utilizando um multímetro</figcaption>
  </figure>
</div>
