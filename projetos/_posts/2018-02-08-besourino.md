---
layout:     post
type:       projeto
hidden:     true
title:      "Besourino"
date:       2018-02-08
author:     "Daniel Jorge Renjiffo"
author_url: "https://linux.ime.usp.br/~djrenjiffo/"
img: 	      "assets/images/projetos/2018-02-08-besourino/besourino_use_cut.png"
img_url: 		""

redirect_from: "projetos/cubeto"
---

#### Besourino, robô aberto para ensino de robótica e programação
Projeto desenvolvido ao longo do ano de 2017 pelo membro [Daniel Jorge Renjiffo](https://linux.ime.usp.br/~djrenjiffo/) (BCC-IME-USP) com o objetivo de criar uma ferramenta para ensino de robótica e programação para crianças e adolescentes. Baseado em kits famosos como o Lego Mindstorm, Lego Boost e a linha de robôs da MakerBlocks, esse projeto apresenta um kit aberto onde a comunidade de fazedores e profissionais da área de ensino podem contribuir e modificá-lo para atender melhor suas necessidades.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-02-08-besourino/besourino_use_cut.png">
    <figcaption>Besourino</figcaption>
  </figure>
</div>

O Besourino consiste em duas partes: o robô e a interface de programação gráfica, onde o usuário pode construir sequências de comandos e depois enviar para robô executar. A interface gráfica foi feita em python utilizando o arcabouço para criação de interfaces de usuários [Kivy](https://kivy.org/). Ela pode ser utilizada em tablets, smartphones e computadores. A comunicação entre essas duas parte consiste do uso do modelo cliente-servidor. No caso, o robô inicializa um servidor UDP e espera por um cliente. Assim que uma máquina que tenha a interface de programação instalada conectar com ele, já é possível enviar pacotes de comandos.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-02-08-besourino/diagramaDeProjeto.png">
    <figcaption>Diagrama do projeto</figcaption>
  </figure>
</div>

#### Descrição do Robô

O robô Besourino é composto por:

- Dois motores micro servo 9g
- Um sensor de distância
- Um sensor infravermelho
- Módulo de rádio WiFi ESP-01 e
- Um Arduino Nano

O Besourino foi construído de modo que suas peças sejam acessíveis e, apesar de ter uma placa própria feita usando o software aberto de criação de placas [kicad](http://kicad-pcb.org/), ainda é possível construí-la usando PCB universal. Apesar de barato e simples de utilizar, os motores micro servo 9g são capazes rotacionar apenas 180 graus em seu eixo. Assim, para utilizá-los como motores de rotação contínua, foi preciso modificá-los. Essa modificação consiste em quebrar uma trava mecânica dentro do motor e trocar um potenciômetro por uma resistência fixa (em breve teremos post explicando como fazer essa modificação).

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-02-08-besourino/besourinoText.jpg">
    <figcaption>Componentes</figcaption>
  </figure>
</div>

#### Descrição do Chassi

O chassi do robô, assim como todas suas outras peças (como rodas, garra e conectores), foram criados usando o [Blender 3D](https://www.blender.org/) e impresso em plástico PLA. No total, três protótipos foram criados ao longo do desenvolvimento. O primeiro protótipo utilizou uma caixa de presente como chassi e foi amplamente utilizado para testar comunicação e também para testar diferentes bibliotecas gráficas. Já o segundo modelo, em que foi adicionado a garra, foi feito utilizando uma impressora 3D. No terceiro e último protótipo, foi adicionado suporte para pilhas, sensores e uma tampa de proteção.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-02-08-besourino/base1.jpg">
    <figcaption>Besourino primeiro modelo</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-02-08-besourino/base2.jpg">
    <figcaption>Besourino segundo modelo</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-02-08-besourino/besourino1.png">
    <figcaption>Besourino terceiro modelo</figcaption>
  </figure>
</div>

#### Descrição da Interface gráfica
Como dito anteriormente, a interface gráfica do Besourino foi feita em python utilizando a versão 1.9.10 do [Kivy](https://kivy.org/). Ela foi desenvolvida de forma que seja intuitiva e simples. Ela consiste em duas partes: A área onde os blocos são montados e o menu de blocos, onde blocos de comandos estão agrupados em tipos de comandos separados por cores:

- `Verde`: Blocos que estão relacionado ao movimento do robô.
- `Azul`: Blocos de comandos lógicos.
- `Amarelo`: Blocos relacionados ao sensores são da cor amarela.
- `Roxo`: Blocos relacionados a comandos para emitir sons.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-02-08-besourino/commandText.jpg">
    <figcaption>Interface gráfica</figcaption>
  </figure>
</div>

#### Exposições e eventos
Ao longo do segundo semestre do ano de 2017, houve três exposições do Besourino em três eventos. Sendo o primeiro evento o SP Maker Week, organizado pela prefeitura da cidade de São Paul. Nele, o grupo de extensão Hardware Livre USP participou realizando uma oficina de Arduino básico seguido de exposições de projetos. Neste evento, o Besourino foi apresentado para pessoas diversas, desde de crianças até adultos.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-02-08-besourino/spmaker.jpg">
    <figcaption>SP Maker Week</figcaption>
  </figure>
</div>

Em um segundo evento, o Besourino foi mostrado para crianças e pais da escola Escola Municipal de Ensino Fundamental Desembargador Amorim Lima no evento Feira da Cultura. No local aconteceu uma feira de projetos feitos pelos alunos usando [Scratch](https://scratch.mit.edu/) e Arduino. No caso, o Besourino foi apresentado junto com a impressora 3D da escola. Neste evento, o projeto foi exposto
e testado em sua maioria por crianças e adolescentes.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-02-08-besourino/feiracultura.jpg">
    <figcaption>Feira da cultura</figcaption>
  </figure>
</div>

O terceiro evento foi a Semana USP de Ciência e Tecnologia que ocorreu no Centro de Difusão Internacional (CDI-USP). Ao longo da semana, escolas trouxeram alunos para participarem e observarem projetos de diversos grupos de pesquisa da universidade. No caso, o Hardware Livre USP apresentou seus projetos, sendo Besourino um deles. Novamente o Besourino foi apresentado e testado por crianças e adolescentes, porém de forma mais intensa.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-02-08-besourino/semanausp.jpg">
    <figcaption>Semana USP de Ciência e Tecnologia</figcaption>
  </figure>
</div>

No momento, todos os códigos, placas e modelos 3D para construção estão disponíveis no [GitHub](https://github.com/DiJei/Besourino) para qualquer pessoas que tenha interesse em criar seu próprio robô ou aprender como desenvolver aplicativos que converse com o Arduino. Caso tenha alguma dúvida ou sugestão, por favor entre contato com Hardware Livre USP. Lembrando que este projeto ainda está sendo atualizado periodicamente.

----

#### Autores

- [Daniel Jorge Renjiffo](https://linux.ime.usp.br/~djrenjiffo/)
