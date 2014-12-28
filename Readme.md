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

```javascript
var isDebug = require('isdebug');

console.log('isDebug = %s', isDebug);
```

Starting the above script with `DEBUG=true node script.js`
or `NODE_ENV=development` will result in:

```bash
isDebug = true
```

# License

[http://jsumners.mit-license.org](http://jsumners.mit-license.org/)

THE MIT LICENSE (MIT) Copyright © 2014 James Sumners james.sumners@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.