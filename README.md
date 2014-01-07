angular-component-boilerplate [![Build Status](https://travis-ci.org/kennethlynne/angular-component-boilerplate.png?branch=master)](https://travis-ci.org/kennethlynne/angular-component-boilerplate)
=============================

Boilerplate for creating reusable angular components that can be registered on bower.
* Install: `npm install -g angular-bower-generator`
* Run `angular-bower-generator init`
* A wizard guides you trough creating the repo
* Run `npm install && bower init`
* Run tests: `karma start`
* Implement your *awesomesauce*
* To release a new version: `grunt release` to minify (using `grunt build`), bump version in bower and package json files, create git tag, commit and push using grunt-bump. Read the [grunt-bump documentation](https://github.com/vojtajina/grunt-bump)
* If not already registered: `bower register <my-package-name> <git-endpoint>`. Read the [bower documentation(https://github.com/bower/bower#registering-packages).
