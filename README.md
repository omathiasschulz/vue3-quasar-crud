# vue3-quasar-crud

Um simples CRUD desenvolvido utilizando `Vue.js 3` e o framework `Quasar`.

O aplicativo é separado em `frontend` e `backend`.

## frontend

O frontend foi desenvolvido utilizando o framework [Quasar](https://quasar.dev/).

Caso ainda não esteja instalado no seu computador, utilize o seguinte comando:

**Obs:** Você deve possuir o `npm` instalado na sua máquina.

```sh
npm install -g @quasar/cli
```

Para rodar o `frontend` utilize o seguinte comando:

```sh
quasar dev
```

## backend

O backend é uma aplicação simples baseada em JSON utilizando a ferramenta `json-server`.

Caso ainda não esteja instalado no seu computador, utilize o seguinte comando:

**Obs:** Você deve possuir o `npm` instalado na sua máquina.

```sh
npm install -g json-server
```

Para rodar o `backend` utilize o seguinte comando:

```sh
cd backend && json-server --watch db.json
```
