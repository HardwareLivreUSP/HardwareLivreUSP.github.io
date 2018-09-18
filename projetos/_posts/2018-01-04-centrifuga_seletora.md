---
layout:     post
type:       projeto
hidden:     true
title:      "Centrífuga Seletora"
date:       2018-01-04
author:     "Bruno Rafael Aricó"
author_url: "https://linux.ime.usp.br/~brunobra/"
img:        "assets/images/projetos/2018-01-04-centrifuga_seletora/centrifuge.jpg"
img_url:    ""

redirect_from:
 - "projetos/seletorcentrifuge"
 - "projetos/seletorcentrifuge/"
---

Um projeto desenvolvido durante o ano de 2016, em conjunto com alunos do Instituto de Farmácia, Arquitetura e Biologia da Universidade de São Paulo para o projeto do iGEM 2016 do grupo USP-UNIFESP, [Algaranha](http://2016.igem.org/Team:USP_UNIFESP-Brazil).
O foco principal do projeto foi o de desenvolver uma centrífuga de pequeno porte, a baixo custo, com as mesmas funcionalidades das microcentrífugas vendidas comercialmente por preços que superam a casa dos 3 mil reais.
Este projeto teve como base a construida pelo [BioHack Academy](http://biohackacademy.github.io/biofactory/class/5-centrifuge/).
Em nosso primeiro protótipo, adicionamos alguns melhoramentos como redução de fios e a troca completa do software.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-01-04-centrifuga_seletora/centrifuge_old.jpg">
    <figcaption>Primeira versão da Centrífuga</figcaption>
  </figure>
</div>

Após encontrarmos diversos problemas na montagem inicial, decidimos fazer uma versão completamente nova com estrutura remodelada para reduzir a reverberação sonora, software completamente novo e mais modularizado e um hardware mais robusto e mais a prova de falhas.
Ao final, construímos uma microcentrífuga de uso geral em laboratório, utilizando um Arduino Pro Mini e placas de MDF, em essência, que possui as seguintes especificações:

- Tensão de operação 110V/220V;
- Capacidade para 8 microtubos de 1.5mL;
- Rotação mínima 2000 RPM e máxima de 15000 RPM;
- Função spin rápido;
- Função ajuste de tempo de operação, taxa de aceleração e velocidade de operação;
- Verificação de segurança por software;

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-01-04-centrifuga_seletora/centrifuge_2.jpg">
    <figcaption>Segunda versão da Centrífuga</figcaption>
  </figure>
</div>

#### Hardware
Em seu cerne temos um motor de aeromodelo 1200KV, interfaceado por um ESC (Eletronical Speed Controler) de 30A, que é controlado pelo Arduino. Para o ajuste da RPM, utilizamos um sensor do tipo hall que utiliza os próprios ímas do rotor do motor (12 ao todo) para verificar a taxa de rotação. Temos como interface com o usuário um display LCD 18x2 que apresenta informações sobre velocidade, tempo de execução, força G e dados de configuração. Como entrada de dados temos um encoder rotativo clicável e um botão.
Existe uma placa que é uma especie de shield para o Arduino Mini Pro onde temos os conectores para os sensores, mostradores, botões e motor. Esta placa foi desenhada usando o software [KiCad](http://kicad-pcb.org/) e os arquivos dela estão disponíveis em nosso Git.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-01-04-centrifuga_seletora/placa.jpg">
    <figcaption>Placa onde se acoplam todos os sensores</figcaption>
  </figure>
</div>

#### Estrutura
Na estrutura remodelada, o design foi criado por João Dutra Molino (ICF-USP) e por Miguel Croce (FAU-USP) idealizando a redução da reverberação sonora, otimização de espaço e ainda deixando-a esteticamente linda.
Uma difícil decisão teve de ser tomada quanto ao material utilizado na confecção, sendo dois os mais aceitos, ambos com vantagens e desvantagens. Decidimos fazer nossa versão utilizando MDF, que é um material compósito resitente a possíveis impactos de coisas que pudesse se soltar durante o processo de centrifugação, não se fragmentando com o impacto. A segunda opção seria construí-la com acrílico, no entanto, devido ao acrilico em temperatura ambiente ser um material frágil, ele não é resistente a fragmentação por impacto, mas possui a propriedade de ser autoclavável (esterelizável) podendo assim ser mais facilmente utilizada para processamento de amostras biológicas. Essa questão foi resolvida em nossa versão de MDF utilizando um verniz náutico que impermeabilizou a estrutura.
Uma possível modificação para a proxima versão seria a de utilizar um acrilico de 5.0mm que é bem robusto contra impactos devido a sua espessura, dada a velocidade e a massa das amostras centrifugadas. Conferindo assim segurança e esterilidade.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-01-04-centrifuga_seletora/struct.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

#### Software
O software é de autoria de [Bruno Rafael Aricó](https://linux.ime.usp.br/~brunobra/) (BCC-IME-USP) o qual foi escrito do zero para esse projeto e está tambem disponivel em nosso Git.
Ele foi escrito especificamente orientado para o Atmega328 (microcontrolador padrão do Arduino UNO e Pro Mini) no entanto é compativel também com outras placas da família Arduino que utilizam outro tipo de microcontrolador. É orientado que seja feito um teste prévio para validar a compatibilidade pois, devido ao uso de interrupções, talvez seja necessário alguma alteração dos pinos.

#### Resultados e Projeções
Como resultados desse projeto, ganhamos a Medalha de Prata no iGEM 2016 e apresentamos diversas palestras e workshops sobre seu funcionamento e montagem.
Além disso, este projeto foi mencionado até mesmo pelo blog da [Adafruit](https://blog.adafruit.com/2017/04/10/the-seletora-build-your-own-harry-potter-themed-centrifuge/), uma das maiores empresas de módulos para Arduino no mundo.
Devido ao uso de poucos pinos do microcontrolador utilizado, temos a capacidade de ampliar a quantidade de features do projeto, tais quais como adicionar mais segurança (adicionando um botão na tampa, evitando o funcionamento com a mesma aberta) e ate mesmo construi uma centrífuga refrigerada/aquecida, apesar de isso envolver algumas mudanças estruturais.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-01-04-centrifuga_seletora/medal.png">
    <figcaption>Medalha de Prata do iGEM 2016</figcaption>
  </figure>
</div>

#### Construa sua Própria Centrífuga!
Foi confeccionado um manual, em inglês, que esta disponível em nosso Git, o qual oferece suporte para a construção desse projeto e a lista de materiais necessários. Todos os arquivos, códigos e manual podem ser encontrados em nosso [GitHub](https://github.com/Brunoarico/centrifuge).
Todo o desenvolvimento do projeto foi pensado idealizando a replicabilidade, desta forma utilizamos em sua construção ferramentas de fabricação digital, tais como cortadoras laser para cortar o MDF e acrílico e impressoras 3D para o suporte do sensor Hall e o rotor principal que suporta os microtubos.

Para mais informações, entre em contato conosco!

----

#### Autores

- [Bruno Rafael Aricó](https://linux.ime.usp.br/~brunobra/)
