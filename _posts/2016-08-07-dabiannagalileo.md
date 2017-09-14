---
layout:     post
title:      "Debian na Intel Galileo"
date:       2016-08-07
author:     "Gabriel Capella"
author_url: "http://gabrielcapella.com/"
img: 		"post_img/cu.jpg"
---

O grupo de Hardware Livre USP ganhou da Intel uma doação placas Galileo geração 1 e 2.

O sistema fornecido pela Intel (Yocto) é uma boa distribuição linux, no entanto é difícil instalar pacotes nele (não possui apt-get). Para resolver isso instalamos o Debian em uma Intel Galileo. Nesse post vou divulgar como foi feito isso e todos os problemas que sofremos.

Para conseguir realizar a instalação siga os passos sugeridos [nessa lista de discussão](https://communities.intel.com/thread/48074). Os comandos executados são provenientes do linux, portanto faça esse tutorial usando um linux!

Problemas:

- **segfault in libpthread**, isso provavelmente vai acontecer, pois o Debian utiliza uma instrução que não funciona no processador da placa. Esse problema pode ser resolvido seguindo o comentário 39 na lista de discussão.
- Visualizar o que está contecendo: para visualizar o que está contecendo na placa, você deve ligar ela ao serial do seu computador. Você pode realizar tudo pelo monitor serial, no entanto vai ver um monte de número extranhos. Para dar significado a esses números, execute ``cu -l /dev/tty.usbmodem1421 -s 115200`` (vai criar um modo interativo com o console e o serial). 

<p style="text-align: center;">
<img src="{{ site.baseurl }}/post_img/cu.jpg" style="margin: 0 auto; max-height: 390px;">
<img src="{{ site.baseurl }}/post_img/cu1.png" style="margin: 0 auto; max-height: 390px;">
<img src="{{ site.baseurl }}/post_img/cu2.png" style="margin: 0 auto; max-height: 390px;">
(sim, isso é do sistema de boot da Intel Galileo)</p>

- Deixar a rede ligada: para isso basta editar o arquivo ``/etc/network/interfaces`` do Debian. Mais informações pode ser vistas [aqui](https://wiki.debian.org/NetworkConfiguration).

Para facilitar as vida de vocês, fizemos [esse arquivo](https://drive.google.com/file/d/0ByHAe5-uK--xLTVYMldEVW5vT00/view?usp=sharing). Ele é a imagem comple do nosso microSD. Ou seja, basta descompactar esse arquivo em um cartão de memória formatodo em FAT 32 e você já terá sua placa com o Debian funcionando! Nesse o usuário principal é **harduime** e a senha é **gc3cap**, a senha do **root** é a mesma. O bom desse sistema é que ele já vem com os seguintes itens instalados:

- Rede configurada para DHCP
- OpenMPI 1.4.5
- SSH
- sudo

AVISO: em /home/harduime/.ssh/authorized_keys existe uma chave pública de um usuário do grupo.

<p style="text-align: center;">
<img src="{{ site.baseurl }}/post_img/cu3.png" style="margin: 0 auto; max-height: 390px;">
(Conectando via SSH)</p>
