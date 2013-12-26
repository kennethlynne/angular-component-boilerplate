angular-component-boilerplate [![Build Status](https://travis-ci.org/kennethlynne/angular-component-boilerplate.png?branch=master)](https://travis-ci.org/kennethlynne/angular-component-boilerplate)
=============================

Boilerplate for creating reusable angular components that can be registered on bower.
* Fork and clone this repository.
* Remove examples (`rm directive-example.*`)
* Run `npm install && bower init` - initialize a bower config with your given package `name`
* Create `<name>.src.js` and `<name>.test.js`
* `karma start` Run tests
* Implement your *awesomesauce*
* `grunt build` to minify code. Resulting in `<name>.min.js`
* To release a new version: `grunt bump` to automatically bump version in bower and package json files, create git tag, commit and push using grunt-bump. Read the [grunt-bump documentation](https://github.com/vojtajina/grunt-bump)
* If not already registered: `bower register <my-package-name> <git-endpoint>`. Read the [bower documentation(https://github.com/bower/bower#registering-packages).