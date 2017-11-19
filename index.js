'use strict'

const env = process.env

function checkDebug () {
  if (!env.NODE_ENV && !env.DEBUG) return false
  if (env.DEBUG) return true
  if (env.NODE_ENV) {
    const prefix = env.NODE_ENV.substring(0, 3).toUpperCase()
    return prefix === 'DEV' || prefix === 'DEB'
  }
  return false
}

Object.defineProperty(module, 'exports', {
  enumerable: true,
  get () {
    return checkDebug()
  }
})
