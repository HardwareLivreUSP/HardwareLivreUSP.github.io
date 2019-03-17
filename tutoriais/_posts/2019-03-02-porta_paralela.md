---
layout:     post
type:       tutorial
title:      "Controlando os pinos da porta paralela"
date:       2019-03-02
author:     "Lucas Seiki Oshiro"
author_url: "https://github.com/lucasoshiro"
img:        "assets/images/tutoriais/2019-03-02-porta_paralela/lpt.jpg"
img_url:    ""
---

Até alguns anos atrás, os computadores vinham com um enorme conector na parte de
trás, geralmente de cor rosa e com **muitos** (no caso, 25) pinos. O principal
uso para ela era para a conexão com impressoras, mas com ela também era possível
conectar outros tipos de periféricos, como joysticks e até mesmo usá-la para
conectar o computador em uma rede. Com o surgimento do USB, essa porta caiu em
desuso.

Neste post, veremos como podemos controlar os pinos da porta paralela, da mesma
forma como controlaríamos os pinos digitais de um Arduino. Para seguir este
post, portanto, é necessário ter um computador que tenha tal porta, ou seja, um
computador velho... E com alguma distribuição Linux instalada.

### Pinos

Os pinos da porta paralela que iremos utilizar serão estes:

![Pinos]({{site.baseurl}}/assets/images/tutoriais/2019-03-02-porta_paralela/pinout.png)

Os pinos identificados como GND são para o aterramento, e os pinos identificados
como D são usados para a transferência de dados, e são eles que iremos controlar.

Os pinos de dados podem enviar um valor alto (entre 2.4V e 5V), ou um valor
baixo (entre 0 e 0.8V). Convém medir com um multímetro a tensão que é fornecida
pelo computador que será usado nessa porta.

A porta paralela foi feita para enviar dados, e lidar com altas correntes não é
seu objetivo, portanto, não se deve conectar circuitos que consumam muita
potência nela. Não nos responsabilizamos por possíveis problemas que possam
ocorrer.

Outra precaução que deve-se tomar é de não desconectar o circuito enquanto o
computador estiver ligado, para não danificar a porta ou a placa-mãe.

### Programa

#### Bibliotecas

Faremos um programa em C. Usaremos as seguintes bibliotecas:

~~~ c
#include <stdio.h>    // Para a saída de erro
#include <stdlib.h>   // Neste caso, apenas para a constante NULL
#include <sys/io.h>   // Para o controle da porta paralela
#include <time.h>     // Para suspender o programa por alguns segundos
~~~

#### Permissão

A função `ioperm` é utilizada para obter permissão de leitura e escrita de
portas. Nela passaremos como parâmetro o valor `0x378`, que representa o
primeiro endereço dos pinos de dados da porta paralela, e os `8` bits que iremos
utilizar, cada um representando um pino da porta paralela. Caso o valor
devolvido pela função seja `0`, a permissão foi dada com sucesso, caso
contrário, não. O exemplo a seguir pede essa permissão, e caso não consiga,
aborta a execução do programa:

~~~ c
if (ioperm (0x378, 8, 1)) fprintf (stderr, "Access denied\n"), exit (1);
~~~

#### Escrita

Com a função `outb` podemos atribuir os valores à porta paralela. O primeiro
argumento, `base`, é um `unsigned char` em que o i-ésimo bit menos significativo
representa o valor que queremos atribuir ao i-ésimo pino de dados; o segundo é o
primeiro endereço dos pinos da porta paralela. O código a seguir mostra como
atribuir os pinos 1 e 3 com o valor alto e os outros com o valor baixo
simultaneamente:

~~~ c
unsigned char D1 = 0x2; //0b00000010
unsigned char D3 = 0x8; //0b00001000

outb (D1 | D3, 0x378).
~~~

É possível apenas atribuir os valores de todos os pinos ao mesmo tempo. Se for
preciso alterar o valor só de um pino e manter o resto, é necessário guardar o
estado anterior, alterar o valor do bit através de operações bitwise, e por fim
enviar o novo estado para a porta paralela:

~~~ c
unsigned char D0 = 0x1;
unsigned char D1 = 0x2;
unsigned char D3 = 0x8;

unsigned char state;

// ... executa algum código ...

outb (state |= D0,  0x378); // Apenas atribui ao pino 0 o valor alto
outb (state &= ~D1, 0x378); // Apenas atribui ao pino 1 o valor baixo
outb (state ^= D3,  0x378); // Apenas inverte o valor do pino 3
outb (state = 0,    0x378); // Atribui o valor baixo a todos os pinos
outb (state = 0xFF, 0x378); // Atribui o valor alto a todos os pinos
~~~

### Exemplo
Neste exemplo, iremos piscar 3 LEDs. O primeiro irá piscar duas vezes, em
seguida o segundo também irá piscar duas vezes e da mesma forma, o terceiro.

O lado positivo do primeiro LED deve ser ligado no pino D0, o do segundo no D1,
e o do terceiro no D3. O lado negativo dos leds deve ser ligado nos pinos GND. É
necessário também colocar no circuito de cada LED um resistor com resistencia
entre 220Ω e 10kΩ, da mesma forma que seria feito em utilizando um
Arduino.

Primeiro, as bibliotecas:

~~~ c
#include <stdio.h>
#include <stdlib.h>
#include <sys/io.h>
#include <time.h>
~~~

Aqui está definido o endereço base dos pinos de dados da porta paralela, e uma
macro pra tornar mais enxuto o uso de `outb`:

~~~ c
#define BASE 0x378
#define set_lpt_val(val) (outb (val, BASE))
~~~

Este `enum` armazena o bit que representa cada pino:

~~~ c
typedef enum {D0 = 0x01,
              D1 = 0x02,
              D2 = 0x04,
              D3 = 0x08,
              D4 = 0x10,
              D5 = 0x20,
              D6 = 0x40,
              D7 = 0x80}
    parallell_pins;
~~~

Através desta `struct` que futuramente será utilizada pela função
nanosleep, definimos a duração de cada piscada, e o intervalo entre as piscadas:

~~~ c
const struct timespec delay = {0, 100000000};
~~~

Na `main`, pediremos autorização para a escrita:

~~~ c
if (ioperm (BASE, 8, 1)) fprintf (stderr, "Access denied\n"), exit (1);
~~~

E nela, finalmente piscamos os LEDs:
~~~ c
for (;;) {
    set_lpt_val(D0); nanosleep (&delay, NULL);
    set_lpt_val(0);  nanosleep (&delay, NULL);
    set_lpt_val(D0); nanosleep (&delay, NULL);
    set_lpt_val(0);  nanosleep (&delay, NULL);

    set_lpt_val(D1); nanosleep (&delay, NULL);
    set_lpt_val(0);  nanosleep (&delay, NULL);
    set_lpt_val(D1); nanosleep (&delay, NULL);
    set_lpt_val(0);  nanosleep (&delay, NULL);

    set_lpt_val(D2); nanosleep (&delay, NULL);
    set_lpt_val(0);  nanosleep (&delay, NULL);
    set_lpt_val(D2); nanosleep (&delay, NULL);
    set_lpt_val(0);  nanosleep (&delay, NULL);
}
~~~

O código deverá ser compilado utilizando a flag `-O`, `-O2` ou similar; caso
contrário, ele não irá ser compilado (mais informações no manual de `outb`). No
final, o código ficou assim (ele também está disponível
[aqui](https://github.com/lucasoshiro/parallel_port_blink)):

~~~ c
#include <stdio.h>
#include <stdlib.h>
#include <sys/io.h>
#include <time.h>

/* Base parallel port address. May be different on different systems*/
#define BASE 0x378

#define set_lpt_val(val) (outb (val, BASE))

const struct timespec delay = {0, 100000000};

typedef enum {D0 = 0x01,
              D1 = 0x02,
              D2 = 0x04,
              D3 = 0x08,
              D4 = 0x10,
              D5 = 0x20,
              D6 = 0x40,
              D7 = 0x80}
    parallell_pins;

int main () {
    if (ioperm (BASE, 8, 1)) fprintf (stderr, "Access denied\n"), exit (1);

    for (;;) {
        /* Blinks two times led 1, two times led 2, two times led 3 */

        set_lpt_val(D0); nanosleep (&delay, NULL);
        set_lpt_val(0);  nanosleep (&delay, NULL);
        set_lpt_val(D0); nanosleep (&delay, NULL);
        set_lpt_val(0);  nanosleep (&delay, NULL);

        set_lpt_val(D1); nanosleep (&delay, NULL);
        set_lpt_val(0);  nanosleep (&delay, NULL);
        set_lpt_val(D1); nanosleep (&delay, NULL);
        set_lpt_val(0);  nanosleep (&delay, NULL);

        set_lpt_val(D2); nanosleep (&delay, NULL);
        set_lpt_val(0);  nanosleep (&delay, NULL);
        set_lpt_val(D2); nanosleep (&delay, NULL);
        set_lpt_val(0);  nanosleep (&delay, NULL);
    }

    return 0;
}
~~~


### Referências

- <a href="https://www.circlemud.org/jelson/software/parapin/docs/node2.html">https://www.circlemud.org/jelson/software/parapin/docs/node2.html</a>, acessado em 25/01/2019
- <a href="https://www.howtoforge.com/tutorial/accessing-parallel-ports-on-linux/#accessing-physical-ports-on-linux">https://www.howtoforge.com/tutorial/accessing-parallel-ports-on-linux/#accessing-physical-ports-on-linux</a>,
  acessado em 25/01/2019
- <a href="http://man7.org/linux/man-pages/man2/ioperm.2.html"> ioperm manpage
  </a>, acessado em 25/01/2019
- <a href="http://man7.org/linux/man-pages/man2/outb.2.html"> outb manpage </a>,
  acessado em 25/01/2019
  
<script>
document.querySelectorAll('pre.highlight').
    forEach(pre=>pre.classList.add('prettyprint'));
	
</script>
