

<h1 align="center">
  <br>
  <a href="https://www.petz.com.br/" target="_blank"><img src="https://raw.githubusercontent.com/allanferreira/petz/master/public/images/logos/header.png" alt="Petz - Pet Shop Online" width="100"></a>
  <br>
  Desenvolvedor Front-end Pleno/Sênior
  <br>
</h1>

<h4 align="center">
Uma aplicação mostrando um pouco do que sou capaz de fazer com <a target="_blank" href="https://pt-br.reactjs.org/">React</a>. 
</h4>

<p align="center">
🚂🚋🚋🚋🚋🚋🚋🚋🚋🚋🚋🚋🚋🚋🚋🚋
</p>

<p align="center">
  <a href="https://petz.now.sh/" target="_blank">Ver funcionando</a> •
  <a href="#sobre-mim">Sobre mim</a> •
  <a href="#o-projeto">O projeto</a> •
  <a href="#como-rodar">Como rodar</a> •
  <a href="#tecnologias-usadas">Tecnologias usadas</a>
</p>

![screenshot](https://raw.githubusercontent.com/allanferreira/petz/master/public/images/doc/intro.gif)

## Sobre mim

Olá! Me chamo Allan Ferreira, tenho 29 anos e 10 anos de experiência no mercado trabalhando com Javascript em empresas de todos os tamanhos e tecnologias.  

Adoraria trabalhar na Petz e espero que esse teste para a vaga de Desenvolvedor Front-End Pleno/Sênior me proporcione uma oportunidade para conversarmos. 😁

Para saber um pouco mais sobre minha carreira acesse o meu [LinkedIn](https://www.linkedin.com/in/mechamoallan/), lá eu conto com detalhes as tecnologias que usei e empresas onde tive a oportunidade de trabalhar.

## O projeto

Esse projeto tem alguns pontos legais e decisões que vou comentar para que você que está lendo possa entrar um pouco na minha mente.

Primeiramente, você pode acessar o projeto agora pelo link: 🥳 [Ver funcionando](https://petz.now.sh/).

Essa aplicação React tem foco em mostrar que tenho conhecimento de SSR e por conta disso usa [Next.js](https://nextjs.org/) e está rodando no [Zeit](https://zeit.co/).

O Next.js tem algumas peculiaridades que são meio estranhas para quem não o usa no dia-a-dia então vale explicar rapidamente junto de algumas decisões de arquitetura que tomei no projeto.

#### Data fetching fora do componente
Por conta do SSR o comum é fazer a requisição antes do carregamento do componente. Então toda a preparação para página é feita via servidor e o necessário é passado por `props` aos componentes.
```js
Index.getInitialProps  =  async  ()  =>  {
    const {data} = await productsAPI.all()
    return data
}
``` 
#### Componente Link com tag \<a> sem atributos
Novamente isso tem haver como o Next lida com o SSR
```html
<Link href="/">
    <a>Home</a>
</Link>
```

#### Importação de componente com link absoluto
Eu geralmente faço isso em todos os projeto por ter muitos benefícios.
```js
import Button from '@/components/Button' // @ representanto a raiz do projeto
import Button from '../../components/Button' // forma tradicional
```
Com importação absoluta você consegue ler e achar componentes com facilidade. E o maior benefício é alterar a localização de um possível componente refatorado sem medo que as importações parem de funcionar. 

Tem algumas formas de fazer isso e a que eu prefiro por ser escalável é adicionar um `alias` ao `webpack` com um símbolo que represente a raiz do projeto, ao invés de criar vários `alias` para cada nova pasta criada no projeto.
```json
const path = require('path')
config.resolve.alias['@'] = path.join(__dirname)
```
Em seguida, basta criar um `jsconfig.json` para avisar ao editor que ele deve completar os caminhos das pastas ao digitar o símbolo escolhido.
```json
{
    "compilerOptions":  {
        "baseUrl":  ".",
        "paths":  {
            "@/*":  ["./*"] //👈 viu como é simples?
        }
    }
}
```
#### Componentes em módulos
Isso evita componentes gigantes e difíceis de ler. 

Basta pegar aquele seu componente complexo e dividir em vários micro componentes.
E ao invés de colocar na pasta `components` podemos colocar dentro do próprio componente.

Isso aqui é bem bacana porque evita lotar a pasta de `components` com componentes que são usados em apenas um local.
> 🤔 Eu sei, componentes que são usados em apenas um local não parecem corretos. Por isso chamamos esses componentes de módulos de um componente complexo.

## Como rodar

Para clonar e rodar a aplicação, você vai precisar do [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/) instalados no seu computador. No seu terminal favorito rode os comandos a seguir:

```bash
# Clone o repositório
$ git clone https://github.com/allanferreira/petz.git

# Vá para dentro dele
$ cd petz

# Instale as dependências
$ yarn

# Rode a aplicação
$ yarn start
```

Aviso: Se você estiver com erro ao instalar ou rodar o projeto, verifique se a sua versão do Node.js é igual ou superior a 10 e atualize o `npm`, caso o esteja usando. 
> 😅 Na próxima posso usar o Docker para facilitar e evitar desculpas

## Tecnologias usadas

Essas são as principais tecnologias usadas nessa aplicação:

- [Node.js](https://nodejs.org/)
- [React](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Styled-components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Emoji](https://getemoji.com/) 🔥
