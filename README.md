# Problem

* App depends on `shared` and `dependency`.
* App is transpiled via webpack + babel-loader.
* `dependency` depends on `shared`.
* `dependency` is written using `import/exports` so needs transpilation, again uses webpack.
* Building app includes two copies of `shared`.

# What I Want

* The built app should only include one copy of `shared`.

