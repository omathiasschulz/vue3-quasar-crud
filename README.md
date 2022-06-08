# vue3-quasar-crud

Um simples CRUD desenvolvido utilizando `Vue.js 3` e o framework `Quasar`.

O aplicativo é separado em `frontend` e `backend`.

## frontend

O frontend foi desenvolvido utilizando o framework [Quasar](https://quasar.dev/).

Caso ainda não esteja instalado no seu computador, utilize o seguinte comando:

**Obs:** Você deve possuir o `npm` instalado na sua máquina.

```bash
npm install -g @quasar/cli
```

Para rodar o `frontend` utilize o seguinte comando:

```bash
quasar dev
```

### dependencias

Para instalar as dependências utilize o seguinte comando dentro da pasta `frontend`:

```bash
yarn
```

### buildar-aplicativo

Para buildar o frontend do aplicativo e utilizar em produção utilize o seguinte comando:

```bash
quasar build
```

## backend

O backend é uma aplicação simples baseada em JSON utilizando a ferramenta `json-server`.

Caso ainda não esteja instalado no seu computador, utilize o seguinte comando:

**Obs:** Você deve possuir o `npm` instalado na sua máquina.

```bash
npm install -g json-server
```

Para rodar o `backend` utilize o seguinte comando:

```bash
cd backend && json-server --watch db.json
```
