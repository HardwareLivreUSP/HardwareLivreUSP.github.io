---
layout:     post
title:      "LedCube"
date:       2015-06-26
---

Fizemos um Cubo de Led de 8x8x8. Não é um projeto difícil, mas sim um projeto meditativo. É preciso ter muita paciência para montar os 512 LEDs.

Macetes:

- Use um fio de cobre esmalto fino para conectar a base das colunas os shift registers;
- Tenha calma;
- Construa em cima de uma placa de mil furos;
- Seja organizado;
- Teste cada lede ANTES de soldá-lo;

Materiais:

- 1000 LEDs azuis (só vamos usar 512, mas é bom ter a mais)
- 9x 74HC595 (shift register)
- 16x PN2222
- 64x resistores 220 ohms
- 1x Arduino mini
- 60x horas de trabalho

Nesse projeto tínhamos a capacidade de ligar o o terra dos leds de cada plano horizontal ao terra. Para isso usamos 1 shitf register e 2 transistors por plano. Cada plano possuía 64 leis, dos quais tivemos que ter o controle individual.

No final, programamos um jogo da vida. Esse jogo simula multiplicação de seres vivos em um acinte 3D. Veja o [código final](https://github.com/HardwareLivreUSP/LedCube).

<div class="row">
	<div class="col-md-6"><img src="{{ site.baseurl }}/post_img/cubo0.jpg" style=""></div>
	<div class="col-md-6"><img src="{{ site.baseurl }}/post_img/cubo1.jpg" style=""></div>
</div>


<div class="row">
	<div class="col-md-6">
		<video controls style="width:100%">
			<source src="{{ site.baseurl }}/post_img/cubo1.mp4" type="video/mp4">
		</video>
	</div>
	<div class="col-md-6">
		<video controls style="width:100%">
			<source src="{{ site.baseurl }}/post_img/cubo0.mp4" type="video/mp4">
		</video>
	</div>
</div>




