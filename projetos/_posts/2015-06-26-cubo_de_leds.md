---
layout:     post
type:       projeto
hidden:     true
title:      "Cubo de Leds"
date:       2015-06-26
author:     "Gabriel Capella"
author_url: "http://gabrielcapella.com/"
img:        "assets/images/projetos/2015-06-26-cubo_de_leds/cubo2.jpg"
img_url:    ""

redirect_from:
 - "projetos/ledcube"
 - "projetos/ledcube/"
---

Fizemos um Cubo de Leds 8x8x8. Não é um projeto difícil, mas sim um projeto meditativo. É preciso ter muita paciência para montar os 512 LEDs.

#### Dicas

- Use um fio de cobre esmaltado fino para conectar a base das colunas aos shift registers;
- Tenha calma;
- Construa em cima de uma placa de mil furos;
- Seja organizado;
- Teste cada led ANTES de soldá-lo;

#### Materiais

- 1000 LEDs azuis (só vamos usar 512, mas é bom ter a mais)
- 9x 74HC595 (shift register)
- 16x PN2222
- 64x resistores 220 ohms
- 1x Arduino mini
- 60h horas de trabalho

Nesse projeto tínhamos a capacidade de ligar o terra dos leds de cada plano horizontal ao terra. Para isso usamos 1 shitf register e 2 transistors por plano. Cada plano possuía 64 leds, dos quais tivemos que ter o controle individual.

No final, programamos um [jogo da vida](https://pt.wikipedia.org/wiki/Jogo_da_vida). Veja o código em nosso [GitHub](https://github.com/HardwareLivreUSP/LedCube).

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2015-06-26-cubo_de_leds/cubo1.gif">
    <figcaption>&nbsp;</figcaption>
  </figure>
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2015-06-26-cubo_de_leds/cubo2.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2015-06-26-cubo_de_leds/cubo3.gif">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

----

#### Autores

- [Gabriel Capella](http://gabrielcapella.com/)
