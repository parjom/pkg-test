# pkg-test
pkg bug test

# How to run
<pre>
$ npm install
$ npm start 

</pre>

# pkg bug
<pre>
$ npm install
$ npm run pkg
$ ./pkg-test.exe

pkg/prelude/bootstrap.js:1185
      throw error;
      ^

Error: Cannot find module './md5-wrapper'
Require stack:
- C:\snapshot\pkg-test\index.js
1) If you want to compile the package/file into executable, please pay attention to compilation warnings and specify a literal in 'require' call. 2) If you don't want to compile the package/file into executable and want to 'require' it from filesystem (likely plugin), specify an absolute path in 'require' call using process.cwd() or process.execPath.
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:795:15)
    at Function.Module._resolveFilename (pkg/prelude/bootstrap.js:1287:46)
    at Function.Module._load (internal/modules/cjs/loader.js:688:27)
    at Module.require (internal/modules/cjs/loader.js:850:19)
    at Module.require (pkg/prelude/bootstrap.js:1166:31)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (C:\snapshot\pkg-test\index.js)
    at Module._compile (pkg/prelude/bootstrap.js:1261:22)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:993:10)
    at Module.load (internal/modules/cjs/loader.js:813:32) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ 'C:\\snapshot\\pkg-test\\index.js' ],
  pkg: true
}

</pre>


