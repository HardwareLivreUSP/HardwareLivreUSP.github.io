# Hardware Livre USP - Website

### Como executar localmente?

- Instale o ruby ([Windows](https://rubyinstaller.org/downloads/), [Linux](https://www.ruby-lang.org/en/documentation/installation/))
- Instale a versão 3.8.0 (ou superior) do [jekyll](https://jekyllrb.com/docs/installation/)
- Abra o terminal e vá para a pasta raíz do projeto
- Digite o comando `jekyll serve`
- Ou, caso não funcione: instale o [bundle](https://bundler.io/), digite `bundle install` e `bundle exec jekyll serve`
- Acesse `"localhost:4000"` em seu navegador

### Como criar *posts*?

#### Blog

Para adicionar um novo *post* na página "Blog", crie um arquivo com nome no formato `"yyyy-mm-dd-titulo_do_post.md"` na pasta `blog/_posts`.
- `yyyy`: Ano
- `mm`: Mês
- `dd`: Dia
- `titulo_do_post`: O título completo do post com letras minúsculas separadas por `_`

O arquivo criado deve ter o seguinte cabeçalho:

```
---
layout:     post
type:       blog
title:      "Titulo do Post"
date:       yyyy-mm-dd
author:     "Nome completo do autor"
author_url: "Link do autor"
img:        "Link de imagem local"
img_url:    "Link de imagem da internet"
---
```
- No campo `author_url` deve ser colocado o *link* de alguma rede social (exemplos: *GitHub*, *Facebook*, *LinkedIn*) ou site pessoal do autor.
- Os campos `img` e `img_url` se referem à imagem de capa do *post*. A diferença entre eles é que o primeiro serve para *links* de imagens salvas localmente (na pasta `assets/...`), enquanto que o segundo serve para *links* da internet (`http://www...com.br/imagem.png`). Recomenda-se que as imagens sejam salvas localmente para evitar *links* quebrados, ou seja, dê preferência para o campo `img`.

Abaixo do cabeçalho deve ser colocado o conteúdo do post.

#### Tutoriais

O processo para adicionar um *post* na página "Tutoriais" é semelhante ao da página "Blog". A diferença é que o arquivo deve ser criado em `tutoriais/_posts` e o cabeçalho conter as linhas:

```
type:       tutorial
hidden:     true
```

#### Projetos

O processo para adicionar um *post* na página "Projetos" é semelhante ao da página "Blog". A diferença é que o arquivo deve ser criado em `projetos/_posts` e o cabeçalho conter as linhas:

```
type:       projeto
hidden:     true
```

#### Lab3D

O processo para adicionar um *post* na página "Lab3D" é semelhante ao da página "Blog". A diferença é que o arquivo deve ser criado em `lab3d/_posts` e o cabeçalho conter as linhas:

```
type:       3d
hidden:     true
```

### Como editar *posts*?

#### Códigos

Para adicionar trechos de código basta fazer como no exemplo abaixo:

```
<pre class="prettyprint">
int main () {
  printf("Hello World!");
}
</pre>
```

#### Imagens

Para adicionar imagens, basta fazer como no exemplo abaixo:

```
<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/.../imagem.png">
    <figcaption>Legenda</figcaption>
  </figure>
</div>
```

- **ATENÇÃO**: Caso a imagem não contenha legenda, é importante adicionar `&nbsp;` dentro da *tag* `figcaption`.
- Para adicionar mais imagens uma ao lado da outra, basta adicionar mais uma `figure` dentro da `div.img-container`
- Para deixar a imagem maior que o tamanho padrão, adicione `class="large"` na *tag* `img`.
- Todas as imagens locais devem ser salvas em uma pasta com o mesmo nome do arquivo de seu respectivo *post*, dentro da pasta `"assets/images/{blog, tutoriais, projetos, lab3d}"`.

#### Links

Para adicionar *links* basta fazer como no exemplo abaixo:

```
[Hardware Livre USP](http://hardwarelivreusp.org/)
```

#### Listas

Para adicionar listas basta fazer como no exemplo abaixo:

```
- Item1
- Item2
```

#### Subtítulos

Para adicionar subtítulos (títulos de parágrafos) basta fazer como no exemplo abaixo:

```
#### Subtítulo
```

#### Youtube

Para adicionar vídeos do *YouTube* basta fazer como no exemplo abaixo:

```
<iframe class="youtube" src="https://www.youtube.com/embed/F51Msl3EDZo?rel=0" frameborder="0" allowfullscreen></iframe>
```

- **ATENÇÃO**: Não esqueça de adicionar `"?rel=0"` no final do *link* para evitar que vídeos aleatórios sejam sugeridos no final do vídeo.
