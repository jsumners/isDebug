'use strict'

const test = require('tap').test

test('returns false for missing env vars', (t) => {
  t.plan(1)
  delete process.env.NODE_ENV
  delete process.env.DEBUG
  const val = require('./')
  t.is(val, false)
})

test('returns true for DEBUG env var', (t) => {
  t.plan(1)
  delete process.env.NODE_ENV
  process.env.DEBUG = 1
  const val = require('./')
  t.is(val, true)
})

test('returns true for NODE_ENV env var as "debug"', (t) => {
  t.plan(1)
  process.env.NODE_ENV = 'debug'
  delete process.env.DEBUG
  const val = require('./')
  t.is(val, true)
})

test('returns true for NODE_ENV env var as "development"', (t) => {
  t.plan(1)
  process.env.NODE_ENV = 'development'
  delete process.env.DEBUG
  const val = require('./')
  t.is(val, true)
})

test('returns false for NODE_ENV env var as anything else', (t) => {
  t.plan(1)
  process.env.NODE_ENV = 'unknown_env'
  delete process.env.DEBUG
  const val = require('./')
  t.is(val, false)
})

test('does not cache value', (t) => {
  t.plan(2)
  delete process.env.NODE_ENV
  delete process.env.DEBUG

  const val1 = require('./')
  t.is(val1, false)

  process.env.NODE_ENV = 'development'
  const val2 = require('./')
  t.is(val2, true)
})

// test('can manipulate state', (t) => {
//   t.plan(7)
//   delete process.env.NODE_ENV
//   delete process.env.DEBUG

//   let isdebug = require('./')
//   t.is(isdebug, false)

//   isdebug = true
//   t.is(isdebug, true)
//   t.ok(process.env.NODE_ENV)
//   t.is(process.env.NODE_ENV, 'development')

//   isdebug = false
//   t.is(isdebug, false)
//   t.notOkay(process.env.NODE_ENV)
//   t.notOkay(process.env.DEBUG)
// })
