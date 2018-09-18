---
layout:     post
type:       blog
title:      "Chapéu Seletor no trote do IME-USP"
date:       2015-03-12
author:     "Gustavo Estrela"
author_url: ""
img:        "assets/images/blog/2015-03-12-chapeu_seletor_no_trote_do_ime_usp/chapeu3.jpg"
img_url:    ""

redirect_from:
 - "2015/03/12/chapeu-seletor"
 - "2015/03/12/chapeu-seletor/"
---

No dia 23 de Fevereiro de 2015, fizemos o Chapéu Seletor, personagem da obra Harry Potter, de J. K. Rowling, para a [Comissão de Trote IME-USP](https://www.facebook.com/troteimeusp). O Chapéu tinha o propósito de auxiliar a comissão em separar os calouros do IME de 2015 em grupos para suas atividades afins.

Este post não pretende explicar como fizemos o Chapéu, falaremos disso em um outro post, mas basicamente:

- Baseando-se no programa em java criada pela Giovana Delfino, membro da Comissão, criamos um programa em Python que escolhia aleatoriamente uma dentre 4 casas de Hogwarts;
- Feita a escolha, através de módulos RF (transmissor e receptor), um sinal do Arduino-1 é enviado pelo serial para um Arduino-2, localizado dentro do Chapéu;
- Assim, o Arduino-2 (do Chapéu) recebe os dados para controlar o motor servo, imitando a movimentação da boca.

Agradecemos a Comissão de Trote IME-USP pela oportunidade!

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/blog/2015-03-12-chapeu_seletor_no_trote_do_ime_usp/chapeu3.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/blog/2015-03-12-chapeu_seletor_no_trote_do_ime_usp/chapeu2.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/blog/2015-03-12-chapeu_seletor_no_trote_do_ime_usp/chapeu1.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

<iframe class="youtube" src="https://www.youtube.com/embed/_zUmX-DXZNg" frameborder="0" allowfullscreen></iframe>
