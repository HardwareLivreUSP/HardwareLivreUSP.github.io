---
layout:     post
type:       tutorial
hidden:     true
title:      "Debian na Intel Galileo"
date:       2016-08-07
author:     "Gabriel Capella"
author_url: "http://gabrielcapella.com/"
img: 		"assets/images/tutoriais/2016-08-07-dabian_na_intel_galileo/cu.jpg"
img_url: 		""

redirect_from: "2016/08/07/dabiannagalileo"
---

O grupo de Hardware Livre USP ganhou da Intel uma doação placas Galileo geração 1 e 2.

O sistema fornecido pela Intel (Yocto) é uma boa distribuição Linux, no entanto é difícil instalar pacotes nele (não possui apt-get). Para resolver isso, instalamos o Debian na placa. Nesse post divulgaremos como foi feito isso e todos os problemas que sofremos.

Para conseguir realizar a instalação, siga os passos sugeridos [nesta lista de discussão](https://communities.intel.com/thread/48074). Os comandos executados são provenientes do Linux, portanto faça esse tutorial usando um Linux!

#### Problemas

- **segfault in libpthread**, isso provavelmente vai acontecer, pois o Debian utiliza uma instrução que não funciona no processador da placa. Esse problema pode ser resolvido seguindo o comentário 39 na lista de discussão.

- **Visualizar o que está acontecendo**: para visualizar o que está acontecendo na placa, você deve ligá-la no serial do seu computador. Tudo pode ser realizado pelo monitor serial, no entanto você verá um monte de números estranhos. Para dar significado a esses números, execute `cu -l /dev/tty.usbmodem1421 -s 115200` (vai criar um modo interativo com o console e o serial).

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2016-08-07-dabian_na_intel_galileo/cu.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2016-08-07-dabian_na_intel_galileo/cu1.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2016-08-07-dabian_na_intel_galileo/cu2.png">
    <figcaption>Sistema de boot da Intel Galileo</figcaption>
  </figure>
</div>

- **Deixar a rede ligada**: para isso basta editar o arquivo `/etc/network/interfaces` do Debian. Mais informações pode ser vistas [aqui](https://wiki.debian.org/NetworkConfiguration).

Para facilitar, fizemos [esse arquivo](https://drive.google.com/file/d/0ByHAe5-uK--xLTVYMldEVW5vT00/view?usp=sharing). Ele é a imagem completa do nosso microSD. Ou seja, basta descompactar esse arquivo em um cartão de memória formatado em `FAT32` e você já terá sua placa com o Debian funcionando! Nesse o usuário principal é **harduime** e a senha é **gc3cap**, a senha do **root** é a mesma. O bom desse sistema é que ele já vem com os seguintes itens instalados:

- Rede configurada para DHCP
- OpenMPI 1.4.5
- SSH
- `sudo`

AVISO: em `/home/harduime/.ssh/authorized_keys` existe uma chave pública de um usuário do grupo.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2016-08-07-dabian_na_intel_galileo/cu3.png">
    <figcaption>Conectando via SSH</figcaption>
  </figure>
</div>
