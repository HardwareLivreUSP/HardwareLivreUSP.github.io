---
layout:     post
title:      "Tutorial: Introdução ao Arduino usando uma Matriz de LED"
date:       2016-09-15
author:     "Leonardo Haddad Carlos"
img:        "post_img/matrizdeled.jpg"
---

## Hardware Livre USP

## Atenção! Este tutorial ainda está em construção e, portanto, incompleto!
<br/>
Esse tutorial, destinado a iniciantes, cobrirá o desenvolvimento de um software, escrito em Arduino, que controla uma `matriz de LED`, tal como a montagem do hardware usando jumpers (cabos utilizados para conectar dispositivos às portas do Arduino) e uma protoboard (componente composto por circuitos, utilizado para prototipar projetos). Devido à sua simplicidade, a matriz de LED é um ótimo projeto para iniciantes que queiram dar os primeiros passos dentro do universo de programação de hardware livre, e por isso foi escolhida para esse tutorial inicial.

Uma matriz de LED é um dispositivo que contém diversos LEDs dispostos em linhas e colunas, as quais são controladas pelas portas do Arduino e associadas respectivamente às entradas e saídas de energia da matriz.

Por exemplo, vamos supor que queremos ligar o terceiro LED da segunda linha. Então, definimos a porta associada à segunda linha como porta de energia (configuramos a porta como potência alta, que no Arduino representa 5V) e a porta associada à terceira coluna como porta de terra (configuramos a porta como potência baixa, que no Arduino representa 0V).

Para a construção do exemplo desse tutorial, o modelo de matriz utilizado foi a 20257ND.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/matriz-20257ND.jpg" style="margin: 0 auto; max-height: 390px;" />
Matriz de LED modelo 20257ND
</p>

### Verificando os pinos

O primeiro passo para conectar um dispositivo externo ao Arduino é entender seus circuitos, para saber o papel de cada pino no funcionamento desse dispositivo. Para isso, utilizamos documentos chamados de datasheets. No caso da nossa matriz de modelo 20257ND, por exemplo, o datasheet associado se encontra [nesse link][datasheet-led] (mais especificamente no canto inferior direito do documento).

Analisando o datasheet, é possível entender os pinos que devem ser configurados para ligar cada LED. Lembram que falamos sobre portas associadas a cada linha ou coluna de LED's? O datasheet é o documento que nos diz qual é o pino asocciado a cada linha ou coluna da nossa matriz. Em alguns casos, há mais de um pino para a mesma linha ou coluna, mas, nesse caso, basta usar qualquer um dos pinos associados.

Voltando ao nosso exemplo da seção anterior, onde queremos ligar o terceiro LED da segunda linha: podemos ver, pelo datasheet, que a segunda linha está associada ao pino de número 14, enquanto a terceira coluna está associada aos pinos de número 4 e 11.

### Conectando a matriz a um Arduino

Agora que você já sabe como usar o datasheet para identificar as funções de cada pino da matriz, é hora de conectar esses pinos com as portas do Arduino. Existem duas formas principais de fazer essa conexão: através de uma protoboard (veja a imagem abaixo) e cabos jumpers, no caso de projetos em fase de prototipação, ou através de um circuito impresso especificamente para o projeto em questão, no caso de produtos já validados na protoboard. Como esse tutorial visa introduzir o assunto a pessoas com pouco conhecimento na área, omitiremos o procedimento de criação de circuitos impressos e focaremos apenas na montagem dos protótipos utilizando a protoboard.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/protoboard.jpg" style="margin: 0 auto; max-height: 390px;" />
Protoboard
</p>

Uma protoboard é uma placa repleta de furos, que são conectados entre si para formar um circuito eletrônico experimenta. A protoboard se divide entre as fileiras principais, localizadas no meio da placa, e as fileiras secundárias, localizadas nas duas extremidades da placa. Nas fileiras principais, as conexões são feitas ao longo das linhas, ou seja, cada furo está eletronicamente conectado aos furos que estiverem localizados ao lado. Nas fileiras secundárias, por outro lado, as conexões são feitas ao longo das colunas, ou seja, cada furo está eletronicamente conectado aos furos que estiverem localizados embaixo ou em cima. Vale notar, no caso das fileiras principais, que elas são divididas entre 2 "grupos" de fileiras, um em cada metade de placa, e esses "grupos" não estão conectados entre si.

Usando, por exemplo, a protoboard ilustrada acima, podemos notar que os furos a1, b1, c1, d1 e e1 estão todos conectados (apenas) entre si. No entanto, esses furos não estão conectados aos furos f1, g1, h1, i1 e j1, pois esses furos, apesar de também se encontrarem na linha 1, pertencem à outra metade da placa, e portanto ao outro "grupo".  

O próximo passo é pegar alguns jumpers (condutores utilizados para conectar diferentes pontos de um circuito, ilustrados na imagem abaixo) e utilizá-los para conectar os pinos da matriz de LED às portas do Arduino. E é aí que entra a protoboard: ao invés de conectar um pino da matriz diretamente a uma porta do Arduino, basta conectá-los a quaisquer furos da protoboard que estejam conectados entre si.

Lembre-se sempre de registrar o mapeamento dos pinos para que seja possível manipular corretamente a matriz. Uma das formas mais eficientes de registrar esse mapeamento é através de arrays, pois esses mesmos arrays podem ser utilizados no código para simplificar as conversões que serão necessárias para acessar um determinado LED: a partir da linha e da coluna do LED em questão, descobrir os pinos associados e, a partir disso, as portas do Arduino às quais esses pinos estão ligados.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/jumpers.jpg" style="margin: 0 auto; max-height: 390px;" />
Jumpers
</p>

Em nosso exemplo, utilizaremos os seguintes mapeamentos:

```sh
const int pinsPorts[] = {0, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 13, 12};
const int linesPins[] = {9, 14, 8, 5, 1, 7, 2};
const int colsPins[] = {13, 3, 4, 10, 6};
```

Os vetores linesPins e colsPins guardam o mapeamento entre os LED's e os pinos da matriz, enquanto o vetor pinsPorts guarda o mapeamento entre os pinos da matriz e as portas do Arduino (que é definido pelas ligações feitas com os jumpers).

Isso significa que, segundo o vetor pinPorts, o primeiro pino da matriz está conectado na porta 11 do Arduino, enquanto o segundo pino está conectado na porta 2 e o terceiro pino da matriz está conectado na porta 3. Além disso, os vetores linesPins e colsPins nos mostram que esses três pinos da matriz controlam, respectivamente, a quinta linha da matriz (pois o valor 1 está na quinta posição do linesPins), a sétima linha da matriz (pois o valor 2 está na sétima posição do linesPins) e a segunda coluna da matriz (pois o valor 3 está na segunda posição do colsPins). A imagem abaixo ilustra nosso protótipo de matriz de LED, montada com base nos arrays de mapeamento definidos acima.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/prototype.jpg" style="margin: 0 auto; max-height: 390px;" />
Protótipo
</p>

### Ferramentas
Para criação desse tutorial, foi utilizado um editor de markdown de código aberto chamado [Dillinger][dill].

Podemos referenciar código:
```sh
$ cd dillinger
$ npm install -d
$ node app
```

Podemos destacar como conceitos-chave:
> MainConcept.

Podemos criar listas assim:
  - Primeiro passo
  - Segundo passo

Ou assim:
* Primeiro
* Segundo

Podemos `destacar palavras`.

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [datasheet-led]: <http://pdf.datasheet.global/datasheets-1/american_bright_optoelectronics/BM-20257ND.pdf>
