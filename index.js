var fs = require('fs')
var path = require('path')

module.exports = function mkdirj (object, opts, cb) {
  if (typeof object !== 'object' || object === undefined) {
    throw new Error('mkdirj requires an object argument')
  }
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }
  var root = opts.root || __dirname
  return recursive(object, root, cb)
}

function recursive(object, parent, cb) {
  var keys = Object.keys(object)
  keys.forEach(function (v, k) {
    var current = path.resolve(parent, v)
    fs.mkdir(current, function (err) {
      if (err && err.code !== 'EEXIST') return cb(err)

      if (typeof object[v] === 'object' && object[v] !== undefined) {
        return recursive(object[v], current, cb)
      }
      if (keys.length - 1 === k) {
        return cb(null)
      }
    })
  })
}
