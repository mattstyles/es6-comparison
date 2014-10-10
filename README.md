# Quick ES6 Comparison

> Using Traceur and jsTransform


```
git clone git@github.com:mattstyles/es6-comparison
npm install
```

You’ll also need traceur installed globally

```
npm i -g traceur
```

Transpiled code is included in the repo for reference but `tr.sh` and `jst.sh` can be used to transpile the examples in the `src` directory, just feed the scripts a parameter to grab the source file and the it will do the rest. i.e.

```
./tr.sh class
```


## Examples

### Classes

`src/class.js` has an implementation of a class with getters and setters and some inheritance.

Use `./jst.sh class` to compile the class using jstransform.

Use `./tr.sh class` to compile the class using traceur, this will also add the runtime.

### Modules

`src/module.js` will import a function from `src/modules` and will also export a new function, which is then imported using `System.get` directly in the page.

Modules are traceur only.

```
./tr.sh module
```


## JSTransform

Getters/setters are only available through using the `{es5:true}` flag on the transform function.


## Traceur

The traceur build script also additionally adds the runtime to the bundle.
