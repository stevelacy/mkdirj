var fs = require('fs')
var path = require('path')
var should = require('should')
var rimraf = require('rimraf')
var mkdirj = require('..')

describe('mkdirj', function () {
  before(function (done) {
    rimraf(path.resolve(__dirname, 'temp'), done)
  })
  it('should thrown an error if no object is provided', function (done) {
    try {
      mkdirj()
    }
    catch (e) {
      should(e.message).equal('mkdirj requires an object argument')
      done()
    }
  })
  it('should create a deeply nested folder structure based on an object', function (done) {
    var obj = {
      temp: {
        four: true,
        one: {
          two: {
            three: true
          }
        }
      }
    }
    mkdirj(obj, { root: __dirname }, function (err) {
      if (err) return done(err)
      fs.stat(path.resolve(__dirname, './temp/one/'), function (err, stats) {
        should(err).be.null()
        should(stats.isDirectory())
        fs.stat(path.resolve(__dirname, './temp/one/two/'), function (err, stats) {
          should(err).be.null()
          should(stats.isDirectory())
          fs.stat(path.resolve(__dirname, './temp/one/two/three/'), function (err, stats) {
            should(err).be.null()
            should(stats.isDirectory())
            fs.stat(path.resolve(__dirname, './temp/four/'), function (err, stats) {
              should(err).be.null()
              should(stats.isDirectory())
              done()
            })
          })
        })
      })
    })
  })
  after(function (done) {
    rimraf(path.resolve(__dirname, 'temp'), done)
  })
})
