---
layout:     post
title:      "Besourino"
date:       2018-02-8
author:     "Daniel Jorge Renjiffo"
author_url: "https://linux.ime.usp.br/~djrenjiffo/"
---


### Besourino, robô aberto para ensino de robótica e programação
Projeto desenvolvido ao longo do ano de 2017 pelo membro [Daniel Jorge Renjiffo][pessoal] (BCC-IME-USP) com o objetivo de criar uma ferramenta para ensino de robótica e programação para crianças e adolescentes. Baseado em kits famosos como o Lego Mindstorm, Lego Boost e a linha de robôs da MakerBlocks esse projeto apresenta um kit aberto onde a comunidade de fazedores e profissionais da área de ensino possam contribuir e modificar-lo para atender melhor suas necessidades.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/besourino/besourino_use_cut.png" style="margin: 0 auto; max-height: 390px;" />
Besourino
</p>

Besourino consiste em duas partes: a interface de programação gráfica onde, usuário pode construir sequências de comandos depois enviar para robô executar. A interface gráfica foi feita em python utilizando o arcabouço para criação de interfaces de usuários [Kivy][kivy]. Ela pode ser utilizada em tablets, smartphones e computadores. A comunicação entre essas duas parte consiste do uso do modelo cliente servidor. No caso, o robô inicializa um servidor UDP espera por um cliente, por sua vez assim que a máquina com que tenha a interface de programação instalada conectar com ele já pode enviar pacotes de  comandos.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/besourino/diagramaDeProjeto.png" style="margin: 0 auto; max-height: 390px;" />
Diagrama do projeto
</p>

### Descrição do Robô:
O robô Besourino é composto:
-Dois motores micro servo 9g,
-Um sensor de distância,
-Um sensor infravermelho,
-Módulo de rádio WiFi ESP-01 e
-Um Arduino Nano.
Besourino foi construído de modo que suas peças sejam acessíveis e apesar de ter uma placa própria feita usando o sooftware aberto de criação de placas [kicad][kicad] ainda é possível construir-la usando PCB universal. Apesar de barato e simples de utilizar, os motores micro servo 9g são capazes rotacionar apenas 180 graus seu eixo, assim para utilizar-los como motores de rotação contínua foi preciso modificá-los. Essa modificação consiste em quebrar uma trava mecânica dentro do motor e trocar um potenciômetro por uma resistência  fixa (em breve teremos post explicando como fazer essa modificação).

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/besourino/besourinoText.jpg" style="margin: 0 auto; max-height: 390px;" />
Besourino componentes
</p>

### Descrição do Chassi:
O chassi do robô assim como todas suas outras peças como rodas, garra e conectores foram criados usando [Blender 3D][blender] e impresso em plástico PLA. No total três protótipos foram criados ao longo. O primeiro protótipo utilizou uma caixa de presente como chassi e foi amplamente utilizado para testar comunicação e também para testar diferentes bibliotecas gráficas. Já o segundo modelo foi feito utilizando impressoras 3D e foi adicionado a garra e no terceiro e último protótipo o chassi foi adicionado suporte para pilhas, sensores e uma tampa de proteção.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/besourino/base1.jpg" style="margin: 0 auto; max-height: 390px;" />
Besourino primeiro modelo
    <img src="{{ site.baseurl }}/post_img/besourino/base2.jpg" style="margin: 0 auto; max-height: 390px;" />
Besourino segundo modelo    
    <img src="{{ site.baseurl }}/post_img/besourino/besourino1.png" style="margin: 0 auto; max-height: 390px;" />
Besourino terceiro modelo
</p>

### Descrição da Interface gráfica:
Como dito anteriormente a interface gráfica do Besourino foi feita em python utilizando a versão 1.9.10 [Kivy][kivy]. Ela foi desenvolvida de forma que seja intuitiva e simples. Ela consiste em duas partes: Menu de blocos onde blocos de comandos estão agrupados em tipos de comandos separados por cores. Blocos que estão relacionado ao movimento do robô possui a cor verde. Blocos de comandos lógicos são da cor azul. Blocos relacionados ao sensores são da cor amarela e por últimos grupos relacionados a comandos para emitir sons são da cor roxa.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/besourino/commandText.jpg" style="margin: 0 auto; max-height: 390px;" />
Interface gráfica
</p>

### Exposições e eventos:
Ao longo do segundo semestre do ano de 2017 houve três exposições do Besourino
em três eventos. Sendo o primeiro evento de cultura maker organizando pela
prefeitura da cidade de São Paulo o SP Maker Week. Nele o grupo de extensão
Hardware Livre USP participou realizando uma oficina de Arduino básico seguido
de exposições de projetos. Neste evento Besourino foi apresentado para pessoas
diversas, desde de crianças até adultos.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/besourino/spmaker.jpg" style="margin: 0 auto; max-height: 390px;" />
SP Maker Week
</p>

Em um segundo evento o Besourino foi mostrado para crianças e pais da escola Escola Municipal de Ensino Fundamental Desembargador Amorim Lima no evento  Feira da Cultura. No local aconteceu uma feira de projetos feitos pelos alunos usando Scratch e Arduino. No caso  Besourino foi apresentado junto com a impressora 3D da escola. Neste evento, o projeto foi exposto
e testado em sua maioria por crianças e adolescentes.


<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/besourino/feiracultura.jpg" style="margin: 0 auto; max-height: 390px;" />
Feira da cultura
</p>

O terceiro e último evento foi a semana USP de tecnologia e ciência que ocorreu no Centro de Difusão Internacional (CDI -USP).  Ao longo da semana escolas trouxeram alunos para participarem e observarem projetos de diversos grupos de pesquisa da universidade. No caso o Hardware Livre USP apresentou seus projetos sendo Besourino um deles. Novamente o Besourino foi apresentado e testado por crianças e adolescentes porém de forma mais intensa.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/besourino/semanausp.jpg" style="margin: 0 auto; max-height: 390px;" />
Semana da tecnologia e ciência
</p>

No momento, todos os códigos,  placas e modelos 3D para construção estão disponíveis no [Git][git] para qualquer pessoas que tenha interesse em criar seu próprio robô ou aprender como desenvolver aplicativos que converse com o Arduino. Caso tenha alguma dúvida ou sugestão por favor entre contato com Hardware Livre USP. Lembrando que este projeto ainda está sendo  atualizado periodicamente e futuramente novas alterações serão atualizadas.

[kicad]: <http://kicad-pcb.org/>
[kivy]: <https://kivy.org/>
[blender]: <https://www.blender.org/>
[pessoal]: <https://linux.ime.usp.br/~djrenjiffo/>
[git]: <https://github.com/DiJei/Besourino>
