'use strict'

// external deps
const debug = require('debug')('app:bearer')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')

// internal modules
const User = require('../model/user.js')

// interface
module.exports = (req, res, next) => {
  debug('bearer auth middleware')
  let {authorization} = req.headers
  if(!authorization)
    return next(createError(400, 'AUTH ERROR: no authorization header'))

  let token = authorization.split('Bearer ')[1]
  if(!token)
    return next(createError(400, 'AUTH ERROR: not bearer auth'))

  req.authToken = token
  User.findByToken(token)
  .then(user => {
    req.user = user
    req.authToken = token
    next()
  })
  .catch(err => next(createError(401, err.message)))
}
