# Site Template - Dragon Template
# Desenvolvedor: Igor Fernandes

<pre>
- O template foi desenvolvido com o princípio de servir como tecnica de reforço para o apredendizado, além<br> de servir como portfólio.
</pre>

## Apresentação:
<img src="./screenshot.jpg" alt="screenshot">

- Link do Vídeo testado a aplicação: https://youtu.be/Ev2PV1anpmw



## 🔗 Grade de conteúdos:

- [Recursos](#recursos)
- [Arquitetura](#arquitetura)
- [Instruções](#instruções)


============================//================//===========

## ⚡ RECURSOS:

### [RECURSOS] - Styles
- [SASS](https://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/download/)
- [normalize](https://necolas.github.io/normalize.css/)

### [RECURSOS] - Scripts
- [html5shiv](https://github.com/aFarkas/html5shiv)
- [popper](https://popper.js.org)
- Bootstrap
- [Mapbox](https://mapbox.com/)



## 📂 ARQUITETURA


###  [ARQUITETURA] - Bit/Git

<table>
    <thead>
        <tr>
            <td>
                Directório
            </td>
            <td>
                1° Setor
            </td>
            <td>
                2° Setor
            </td>
            <td>
                3° Setor
            </td>
            <td>
                4° Setor
            </td>
        <tr>
    </thead>
    <tbody>
        <tr>
            <td> assets </td>
            <td> dist  ~| src </td>
            <td> img ~ scss   ~|  css ~ js </td>
            <td> ... ~|  libary ~ modules  |  Dragon Icons ~  ...   ~| ..  ~ libary </td>
            <td> ...  </td>
        </tr>
        <tr>
            <td> includes </td>
            <td> cdn ~| normalize </td>
            <td> ...</td>
        </tr>
    </tbody>
</table>


###  [ARQUITETURA] - Visual

| Directório     | 1° Setor           | 2° setor                  | 3° setor                                  | 4° setor                   
| assets         | dist  ~| src       | img ~ scss   ~|  css ~ js   | Dragon Icons ~  ...   ~| ..  ~ libary   | ... 
| includes       | cdn   ~| normalize | ...

**Obser: A pasta "src" está guardando todo os arquivos sass**
**Obser: A pasta a pasta "dist" está guardando o JS editável e o css compilado**


### CAROUSEL 
<pre>
- O carousel foi construído do zero, ainda apresentando alguns bugs, mas feito para analisar as possibilidades e aprender como funcionaria o sistema das bibliotecas presentes no mercado. 
</pre>


## 📂 INSTRUÇÕES

### [INSTRUÇÕES] - Instalação 
<pre>
-  O projeto é totalmente dinâmico quanto a sua instalação. Caso voce queira fazer modificações no sass do Bootstrap, irá precisar de um preprocessador pro sass. Nesse projeto foi utilizado o "Ruby".
</pre>

**Obser: Caso utilize o ruby, o comando para ativar a compilação é ' sass --watch assets/src/scss/template-dragon-globals.scss:assets/dist/css/template-dragon-globals.css '. Verifique a versão do sass e do ruby no arquivo ".config".**


### [INSTRUÇÕES] - CRIANDO ARQUIVOS - CSS

<pre>
- A folha de estilo é totalmente do bootstra, siga os padrões
</pre>

### [INSTRUÇÕES] - CRIANDO ARQUIVOS - CSS (Bit/Git)

<table>
    <thead>
        <tr>
            <td>Função</td>
            <td>Arquivo</td>
        <tr>
    </thead>
    <tbody>
        <tr>
            <td> ... </td>
            <td> ... </td>
        </tr>
        <tr>
            <td> Índice </td>
            <td> template-dragon-globals.scss </td>
        </tr>
        <tr>
            <td> Funções </td>
            <td> tools/mixins.scss </td>
        </tr>
        <tr>
            <td> Fontes </td>
            <td> settings/font.scss </td>
        </tr>
        <tr>
            <td> Cores </td>
            <td> settings/colors.scss </td>
        </tr>
        <tr>
            <td> Bibliotecas </td>
            <td> libary/.. </td>
        </tr>
        <tr>
            <td> Layouts </td>
            <td> layouts/.. </td>
        </tr>
        <tr>
            <td> Fonts globais </td>
            <td> efault.scssd  </td>
        </tr>
        <tr>
            <td> Keyframes </td>
            <td> animations/default.scss </td>
        </tr>
        <tr>
            <td> Adicionais </td>
            <td> animations/animations.scss </td>
        </tr>
    </tbody>
</table>


### [INSTRUÇÕES] - CRIANDO ARQUIVOS - CSS (Visual)

Abaixo se encontra uma tabela com a indicação de cada arquivo de estilo:

| Função                     | Arquivo                                      |
| ---                        |                                              |
| Índice                     | template-dragon-globals.scss                 |
| Funções                    | tools/mixins.scss                            |
| Fontes                     | settings/font.scss                           |
| cores                      | settings/colors.scss                         |
| bibliotecas                | libary/..                                    |
| layouts                    | layouts/..                                   |
| Keyframes                  | animations/default.scss                      |
| adicioais                  | animations/animations.scss                   |        


### [INSTRUÇÕES] - CRIANDO ARQUIVOS - CSS (Bit/Git)

<table>
    <thead>
        <tr>
            <td>Dispositivos</td>
            <td>Largura</td>
        <tr>
    </thead>
    <tbody>
        <tr>
            <td> Extra largo (desktop) </td>
            <td> 1340px </td>
        </tr>
        <tr>
            <td> médio (laptop) </td>
            <td> 1024px </td>
        </tr>
        <tr>
            <td> pequeno (tablet) </td>
            <td> 780px </td>
        </tr>
        <tr>
            <td> extra pequeno (mobile) </td>
            <td> 450px </td>
        </tr>
    </tbody>
</table>


### [INSTRUÇÕES] - CRIANDO ARQUIVOS - CSS (Visual)

Na função criada de responsividade, existem as seguintes medidas:

| Dispositivo                   | Largura    |
| Extra Extra largo (desktop>)  | 1980px     |
| Extra largo (desktop<)        | 1444px     |
| Extra  (desktop<>)            | 1200px     |
| Largo  (laptop)               | 992px      |
| Medio  (tablet)               | 768px      |
| pequen (mobile)               | 576px      |


### [INSTRUÇÕES] - CRIANDO ARQUIVOS - CSS
<pre>
- Introduza os códigos Js diretamente num arquivo ".js"
</pre>

<pre>
- Bibliotecas são aconselháveis a utilização de uma exportação estática. 
</pre>
