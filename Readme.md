# isDebug

*isDebug* is a simple module that returns `true` or `false` upon require.
If the result is `true` then the environment is a debug environment.
if the result is `false` then the environment is a production environment.

*isDebug* looks at two environment variables to determine the result:

* `NODE_ENV`
  * If this environment variable begins with the string "dev" or "deb",
    then the result will be `true`
* `DEBUG`
  * If this environment variable is set to anything, then the result will
    be `true`

If neither environment variable are present, then the result will be
`false` (i.e. a "production" environment).

## Example

```js
const isdebug = require('isdebug')

console.log('isdebug = %s', isdebug)
```

Starting the above script with `DEBUG=true node script.js`
or `NODE_ENV=development` will result in:

```bash
isdebug = true
```

To re-check the status, e.g. to determine if `process.env` has been manipulated,
simply re-require the module:

```js
console.log('isdebug = %s', require('isdebug')) // false
process.env.NODE_ENV = 'development'
console.log('isdebug = %s', require('isdebug')) // true
```

# License

[MIT License](http://jsumners.mit-license.org/)
