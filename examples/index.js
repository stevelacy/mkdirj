const mkdirj  = require('..')

const object = {
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
}
mkdirj(object, (err) => {
  if (err) console.log(err)
  console.log('done')
})
