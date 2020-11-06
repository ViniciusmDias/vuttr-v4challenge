## Front-End :computer:

Está pasta contém o módulo Front-End da aplicação.

### :sparkles: Introdução da Tecnologia

Esta aplicação foi desenvolvida com Typescript e React (create-react-app);

### Como rodar o projeto

Para iniciar a aplicação em modo de desenvolvimento é necessário estar dentro do diretório `front-end` e executar os seguintes comandos:

- Instalar as dependências:

```javascript
yarn install
```

- Iniciar a aplicação:

```javascript
yarn start
```

- Compilar o projeto e minificar para produção:

```javascript
yarn build
```

- Rodar os testes

```javascript
yarn test:coverage
```

Caso você tenha iniciado primeiro o Back-End da aplicação, o Front-End irá iniciar em `http://localhost:3001`

### Template inicial

- Este projeto foi criado com create-react-app;

```js
  create-react-app frontend --template=typescript
```

### Bibliotecas adicionadas

- Foi adicionado o `Eslint` e o `Prettier` em modo de desenvolvimento para "lint" do código:

```js
  yarn add eslint -D
  yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

```

- Por trazer uma melhor separação dos estilos por componentes, foi utilizado a biblioteca `styled-components` para estilização:

```js
  yarn add styled-components
```

- Foi utilizado a biblioteca `Axios` para requisições HTTP:

```js
  yarn add axios
```

- Foi utilizado o `React Icons` para adicionar alguns ícones pré definidos:

```js
  yarn add react-icons
```

### Estrutura do projeto

O projeto contém os seguintes diretórios

./coverage => resultado da cobertura dos testes da aplicação;
./public => html estático;
./src => diretório principal;

- src/tests => Testes da aplicação;
- src/components => Componentes reutilizáveis da aplicação;
- src/hooks => Pasta criada para gerenciar o contexto(estado) dos Toasts;
- src/pages => Páginas da aplicação;
- src/routes => Rotas da aplicação;
- src/styles => Estilos globais da aplicação;

---
