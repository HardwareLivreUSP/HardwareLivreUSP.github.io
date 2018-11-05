---
layout:     post
type:       projeto
hidden:     true
title:      "Carro Autônomo em Escala"
date:       2018-08-11
author:     "Marcelo Schmitt"
author_url: "https://github.com/marceloschmitt1"
img:        "assets/images/projetos/2018-08-11-carro_autonomo_em_escala/car.jpg"
img_url:    ""

redirect_from:
 - "projetos/carro-autonomo-em-escala"
 - "projetos/carro-autonomo-em-escala/"
---

#### Resumo da semana do dia 10/09

- Para configurar o ambiente de execução dos algoritmos de aprendizado de máquina numa RaspberryPi, tentamos instalar o `python3`, `miniconda` e `pytorch` adaptando os passos [desse tutorial](https://gist.github.com/fgolemo/b973a3fa1aaa67ac61c480ae8440e754) para uma RaspberryPi Zero. Tivemos sucesso instalando o [python3.6.4](https://gist.github.com/SeppPenner/46349b29d90f71fe14319c59f2d7e4e4) e o [miniconda para armv6l](https://repo.continuum.io/miniconda/Miniconda-3.5.5-Linux-armv6l.sh) (arquitetura do processador presente na Pi Zero) mas, devido ao miniconda armv61 usar o python2 e o miniconda armv7l usar o python3, decidimos não continuar tentando instalar o pytorch na Raspberry Zero. Encomendamos uma RaspberryPi 3B e, assim que ela chegar, instalaremos o pytorch nela. `[3h15min]`

#### Resumo da semana do dia 17/09

- Obtivemos uma placa RaspberryPi modelo B, mas não prosseguimos com a configuração do ambiente de desenvolvimento ainda.

#### Resumo da semana do dia 24/09

- Testamos um algoritmo de processamento de imagens usando OpenCV.

#### Resumo da semana do dia 01/10

- Avanços no programa de reconhecimento de linhas e tomada de decisão do carrinho.

#### Resumo da semana do dia 08/10

- Avanços no programa de reconhecimento de linhas e tomada de decisão do carrinho.

#### Resumo da semana do dia 15/10

- Carrinho batizado como Tommy.

- (Marcelo) Configuração de um roteador wifi para comunicação remota com o carrinho usando SSH. `[1h]`

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-carro_autonomo_em_escala/retoador_tommy_net.jpg">
    <figcaption>Roteador wifi</figcaption>
  </figure>
</div>

- Sexta-feira a noite fizemos alguns testes com o Tommy na FAU. `[2h30min]`

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-carro_autonomo_em_escala/frame16.png">
    <figcaption>Frame16</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-carro_autonomo_em_escala/frame23.png">
    <figcaption>Frame23</figcaption>
  </figure>
</div>

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-carro_autonomo_em_escala/frame26.png">
    <figcaption>Frame26</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-carro_autonomo_em_escala/frame27.png">
    <figcaption>Frame27</figcaption>
  </figure>
</div>

- Nesse dia percebemos que o ciclo envolvendo aquisição da imagem da câmera, processamento da imagem para obtenção das linhas da pista, cálculo do ponto de fulga, e tomada de decisão estava demorando muito tempo visto que o Tommy (carrinho) avançava cerca de 4 metros por segundo na velocidade mínima. Como todo o ciclo descrito acima estava levando cerca de 220 milisegundos para ser processado isso dava uma média de 5 ciclos por segundo contudo, nesse tempo o Tommy já havia percorrido 4 metros, isto é, em média o Tommy avançava 80 centímetros a cada ciclo de tomada de decisão. Precisamos otimizar o código para que o ciclo fosse mais rápido.

#### Resumo da semana do dia 22/10

- (Marcelo) Instalei o [Raspbian Stretch Lite](https://www.raspberrypi.org/downloads/raspbian/), uma versão mais enxuta do sistema operacional usado na RaspberryPi. Nesse SO instalei a biblioteca do OpenCV3 seguindo [esse tutorial](https://www.pyimagesearch.com/2016/04/18/install-guide-raspberry-pi-3-raspbian-jessie-opencv-3/). A ideia era livrar o SO de processos dispensáveis como interface gráfica para aumentar o poder de processamento disponível para o ciclo de tomada de decisão do Tommy. `[4h]`

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-carro_autonomo_em_escala/instalacao_opencv3.jpg">
    <figcaption>Resfriando a RaspberryPi durante a instalação do OpenCV3</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-carro_autonomo_em_escala/openCV3_instalado.jpg">
    <figcaption>OpenCV3 instalado na RaspberryPi3B</figcaption>
  </figure>
</div>

- Infelizmente os testes posteriores mostraram que o ganho de poder de processamento (cerca de apenas 7% da CPU) e de memória (apenas 20MB de uso a menos) foram irrelevantes para o tempo de processamento do ciclo de tomada de decisão do Tommy.

#### Resumo da semana do dia 29/10

- Fizemos mais testes e constatamos que a maior demora no processamento do ciclo de tomada de decisão do Tommy está na obtenção da imagem mais atual por meio do OpenCV3!. Em números os tempos aproximados são: aquisição da imagem da câmera (140ms), processamento da imagem para obtenção das linhas da pista (80ms), cálculo do ponto de fulga (menos de 10ms), e tomada de decisão (menos de 10ms). Mais especificamente percebemos que a maior demora ocorre em chamadas à função grab da classe [VideoCapture](https://docs.opencv.org/3.1.0/d8/dfe/classcv_1_1VideoCapture.html). Percebemos também que uma única chamada à função grab não retorna o frame mais atual da câmera. Não sabemos exatamente porque isso acontece, se há um buffer interno do OpenCV3 ou do SO do qual uma imagem menos recente é obtida, mas o efeito disso é que fazendo menos (uma) chamadas à função grab a aquisição da imagem é mais rápida porém a iteração ocorre sobre uma imagem que não a obtida na posição atual do carrinho no início do ciclo de tomada de decisão. `[8h]`

<!-- 
<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-carro_autonomo_em_escala/slot_para_baterias.jpg">
    <figcaption>Slot para baterias</figcaption>
  </figure>
</div>
 -->

- Tivemos a ajuda de um amigo nosso da engenharia mecatrônica da poli que fez uma cremalheira para o Tommy.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-carro_autonomo_em_escala/cremalheira.jpg">
    <figcaption>Cremalheira</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-carro_autonomo_em_escala/cremalheira_encaixe.jpg">
    <figcaption>Encaixe da engrenagem na cremalheira</figcaption>
  </figure>
</div>

- Fizemos um vídeo mostrando o Tommy executando o nosso programa de direção autônoma.

<iframe class="youtube" src="https://www.youtube.com/embed/yLbBb4SI0IY?rel=0" frameborder="0" allowfullscreen></iframe>

- Infelizmente decidimos por não participar da competição da [RoboCar](http://roborace.com.br/) por dois motivos principais: 1º por causa do problema com obteção de imagens o Tommy ainda estava demorando muito para tomar uma ação de virar as rodas diante de uma curva e 2º porque interpretamos de maneira equivocada a descrição das faixas que estariam presentes na pista da competição, pensamos que haveriam duas faixas laterais quando na verdade haveria apenas uma faixa tracejada no centro da pista.

- Mesmo passada essa ediação do RoboCar race o projeto deve continuar pois a técnica de processamento de imagens pode ser aperceiçoada para melhorar o tempo de resposta do carrinho assim como outras técnicas de reconhecimento de imagens (redes convolucionais, deep learning, etc.) podem vir a ser utilizadas e testadas no carrinho no futuro.

Mais novidades em breve.

----

#### Autores

- [Daniel Jorge Renjiffo](https://linux.ime.usp.br/~djrenjiffo/)
- [Marcelo Schmitt](https://github.com/marceloschmitt1)
