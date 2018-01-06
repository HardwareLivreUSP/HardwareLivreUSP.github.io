---
layout:     post
title:      "Centrifuga Seletora"
date:       2018-01-04
author:     "Bruno Rafael Aricó"
author_url: "https://linux.ime.usp.br/~brunobra/"
img: 	    "post_img/centrifuga/centrifuge.jpg"
---

Um projeto desenvolvido durante o ano de 2016, que foi desenvolvido em conjunto com alunos do Instituto de Farmácia, Arquitetura e Biologia da Universidade de São Paulo para o projeto do iGEM 2016 do grupo USP-UNIFESP, [Algaranha][igem2016].
O foco principal do projeto foi o de desenvolver uma centrífuga de pequeno porte, a baixo custo, com as mesmas funcionalidades das microcentrífugas vendidas comercialmente por preços que superam a casa dos 3 mil reais.
Este projeto teve como base a construida pelo [BioHack Academy][biohackacademy]. 
Em nosso primeiro protótipo adicionamos alguns melhoramentos como redução de fios, e a troca completa do software. 

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/centrifuga/centrifuge_old.jpg" style="margin: 0 auto; max-height: 390px;" />
Primeira versão da Centrífuga
</p>

Após encontrarmos diversos problemas na montagem inicial decidimos fazer uma versão completamente nova, com estrutura remodelada para reduzir a reverberação sonora, software completamente novo e mais modularizado e um hardware mais robusto, mais a prova de falhas.
Ao final construimos uma microcentrífuga de uso geral em laboratório, utilizando um Arduíno Pró Mini e placas de MDF, em essência, que possui as seguintes especificações:

- Tensão de operação 110V/220V;
- Capacidade para 8 microtubos de 1.5mL;
- Rotação mínima 2000 RPM e máxima de 15000 RPM;
- Função spin rápido;
- Função ajuste de tempo de operação, taxa de aceleração e velocidade de operação;
- Verificação de segurança por software;

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/centrifuga/centrifuge_2.jpg" style="margin: 0 auto; max-height: 390px;" />
Segunda versão da Centrífuga
</p>

### Descrição do Hardware:
Em seu cerne temos um motor de aeromodelo 1200KV, interfaceado por um ESC (Eletronical Speed Controler) de 30A, que é controlado pelo Arduíno. Para o ajuste da RPM utilizamos um sensor do tipo hall que utiliza os próprios ímas do rotor do motor (12 ao todo) para verificar a taxa de rotação. Temos como interface com o usuário um display LCD 18x2 que apresenta informaçoes sobre velocidade, tempo de execução, força G e dados de configuração. Como entrada de dados temos um encoder rotativo clicável e um botão.
Existe uma placa que é uma especie de shield para o Arduíno Mini Pro onde temos os conectores para os sensores, mostradores, botões e motor. Esta placa foi desenhada usando o software [KiCad][kicad] e os arquivos dela estão disponíveis em nosso Git.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/centrifuga/placa.jpg" style="margin: 0 auto; max-height: 390px;" />
Placa onde se acoplam todos os sensores com o Arduíno mini pro em destaque
</p>

### Descrição da Estrutura:
Na estrutura remodelada o design foi criado por João Dutra Molino (ICF-USP) e por Miguel Croce (FAU-USP) idealizando a redução da reverberação sonora, otimização de espaço e ainda a deixando esteticamente linda. 
Uma difícil decisão teve de ser tomada quanto ao material utilizado na confecção, sendo dois os mais aceitos, ambos com vantagens e desvantagens. Decidimos fazer nossa versão utilizando MDF que é um material compósito resitênte a póssiveis impactos de coisas que pudesse se soltar durante o processo de centrifugação, não se fragmentando com o impacto. A segunda opção seria construí-la de acrílico no entanto devido ao acrilico, em temperatura ambiente ser uma materia frágil, ele não é resistente a fragmentação por impacto, mas possui a propriedade de ser autoclavável (esterelizável) podendo assim ser masi facilmente utilizada para processamento de amostras biológicas. Essa questão foi resolvida em nossa versão de MDF utilizando um verniz náutico que impermeabilizou a estrutura. 
Uma possível modificação para a proxima versão seria a de utilizar um acrilico de 5.0mm que é bem robusto contra impactos devido a sua espessura, dada a velocidade e a massa das amostras centrifugadas. Conferindo assim segurança e esterilindade.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/centrifuga/struct.jpg" style="margin: 0 auto; max-height: 390px;" />
Placa onde se acoplam todos os sensores, com o Arduíno mini pro em destaque
</p>

### Descrição do Software
O software é de autoria de [Bruno Rafael Aricó][pessoal] (BCC-IME-USP) o qual foi escrito do zero para esse projeto e está tambem disponivel em nosso Git.
Ele foi escrito especificamente orientado para o Atmega328 (microcontrolador padrão do Arduino UNO e pró mini) no entanto é compativel também com outras placas da família Arduíno que utilizem outro tipo de microcontrolador. É orinetado que seja feito um teste prévio para validar a compatibilidade pois devido ao uso de interrupções seja necessário alteração dos pinos.

### Resultados e Projeções
Como resultados desse projeto ganhamos a Medalha de Prata no iGEM 2016 e apresentamos diversas palestras e workshops sobre seu funcionamento e montagem.
Além disso esste projto foi mensionado até mesmo pelo blog da [Adafruit][adafruit], uma das maiores empresas de módulos para Arduíno no mundo
Devido ao uso de poucos pinos do microcontrolador utilizado, temos a capacidade de ampliar a quantidade de features do projeto, tais quais como adicionar mais segurança (adicionando um botão na tampa, evitando o funcionamento com a mesma aberta) e ate mesmo construi uma centrífuga refrigerada/aquecida, apesar de isso envolver algumas mudanças estruturais.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/centrifuga/medal.jpg" style="margin: 0 auto; max-height: 390px;" />
Medalhas
</p>

### Construa sua Própria Centrífuga!
Foi confeccionado um manual, em inglês que esta disponível em nosso Git o qual oferece suporte para a construção desse projeto e a lista de materiais necessários. Todos os arquivos, códigos e manual podem ser encontrados [nesse link][Git].
Todo o desenvolvimento do projeto foi pensado idealizando a replicatibilidade, desta forma utilizamos em sua construção ferramentas de fabricação digital, tais como cortadoras laser para cortar o MDF e acrílico e impressora 3 para o suporte do sensor Hall e o rotor principal que suporta os microtubos.
Para mais informações entre em contato conosco!
 
[biohackacademy]: <http://biohackacademy.github.io/biofactory/class/5-centrifuge/>
[kicad]: <http://kicad-pcb.org/>
[igem2016]: <http://2016.igem.org/Team:USP_UNIFESP-Brazil>
[pessoal]: <https://linux.ime.usp.br/~brunobra/>
[adafruit]: <https://blog.adafruit.com/2017/04/10/the-seletora-build-your-own-harry-potter-themed-centrifuge/>
[Git]: <https://github.com/Brunoarico/centrifuge>
