---
layout:     post
title:      "Tutorial: Controlando uma Matriz de LED"
date:       2016-09-15
author:     "Leonardo Haddad Carlos"
---

## Hardware Livre
<br/><br/>
Esse tutorial cobrirá o desenvolvimento de um software, escrito em Arduino, que controla uma `matriz de LED`, tal como a montagem do hardware usando jumpers (cabos utilizados para conectar dispositivos aos pinos do arduino) e uma protoboard (componente composto por circuitos, utilizado para prototipar projetos).

Uma matriz de LED é um dispositivo que contém diversos LEDs dispostos em linhas e colunas, as quais são controladas pelos pinos do arduino e associadas respectivamente às entradas e saídas de energia da matriz.

Por exemplo, vamos supor que queremos ligar o terceiro LED da segunda linha. Então, definimos a porta associada à segunda linha como porta de energia (configuramos a porta como potência alta, que no Arduino representa 5V) e a porta associada à terceira coluna como porta de terra (configuramos a porta como potência baixa, que no Arduino representa 0V).

Para a contrução do exemplo desse tutorial, o modelo de matriz utilizado foi a 20257ND.

### Verificando os pinos

O primeiro passo para conectar um dispositivo externo ao arduino é entender seus circuitos, para saber o papel de cada pino no funcionamento desse dispositivo. Para isso, utilizamos documentos chamados de datasheets. No caso da nossa matriz de modelo 20257ND, por exemplo, o datasheet associado se encontra [nesse link][datasheet-led] (mais especificamente no canto inferior direito do documento).

Analisando o datasheet, é possível entender os pinos que devem ser configurados para ligar cada LED. Lembram que falamos sobre portas associadas a cada linha ou coluna de LED's? O datasheet é o documento que nos diz qual é o pino asocciado a cada linha ou coluna da nossa matriz. Em alguns casos, há mais de um pino para a mesma linha ou coluna, mas, nesse caso, basta usar qualquer um dos pinos associados.

Voltando ao nosso exemplo da seção anterior, onde queremos ligar o terceiro LED da segunda linha: podemos ver, pelo datasheet, que a segunda linha está associada ao pino de número 14, enquanto a terceira coluna está associada aos pinos de número 4 e 11.

### Conectando a matriz a um arduino

Agora que você já sabe como usar o datasheet para identificar as funções de cada pino da matriz, é hora de conectar esses pinos aos pinos do arduino. Existem duas formas principais de fazer essa conexão: através de uma protoboard e cabos jumpers, no caso de projetos em fase de prototipação, ou através de um circuito impresso especificamente para o projeto em questão, no caso de produtos já validados na protoboard. Como esse tutorial visa introduzir o assunto a pessoas com pouco conhecimento na área, omitiremos o procedimento de criação de circuitos impressos e focaremos apenas na montagem dos protótipos utilizando a protoboard.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/protoboard.jpg" style="margin: 0 auto; max-height: 390px;" />
</p>

huehuehue

![Protoboard](/post_img/protoboard.jpg)

huehuehue2

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
