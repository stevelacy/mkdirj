# mkdirj
[![Build Status](https://travis-ci.org/stevelacy/mkdirj.png?branch=master)](https://travis-ci.org/stevelacy/mkdirj)
[![NPM version](https://badge.fury.io/js/mkdirj.png)](http://badge.fury.io/js/mkdirj)
> Create recursive directories from JSON objects

##### Turn this:

```js
app: {
  client: {
    views: {
      main: true
    },
    components: {
      navbar: true
    },
    store: true
  },
  server: {
    db: true,
    router: true,
    api: true
  }
}


```
##### Into this:

```
app
├── client
│   ├── components
│   │   └── navbar
│   ├── store
│   └── views
│       └── main
└── server
    ├── api
    ├── db
    └── router

```

### Options

#### root

Allows setting the CWD for creating the directories

### License [MIT](MIT)
