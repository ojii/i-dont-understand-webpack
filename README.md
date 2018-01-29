# Problem

* App depends on `shared` and `dependency`.
* App is transpiled via webpack + babel-loader.
* `dependency` depends on `shared`.
* `dependency` is written using `import/exports` so needs transpilation, again uses webpack.
* Building app includes two copies of `shared`.
* I control both the app and `dependency`

# What I Want

* The built app should only include one copy of `shared`.

How do I change the build process of either app and/or `dependency` to solve this?


# Please Help

Either send a PR that solves my problem, open an issue with advice/further questions
or tweet me [@ojiidotch](http://twitter.com/ojiidotch)

