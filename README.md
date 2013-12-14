angular-component-boilerplate [![Build Status](https://travis-ci.org/kennethlynne/angular-component-boilerplate.png?branch=master)](https://travis-ci.org/kennethlynne/angular-component-boilerplate)
=============================

Boilerplate for creating reusable angular components that can be registered on bower

Fork and clone this repository.

Run ```npm install && bower init```. Replace the name in bower.json with your own name.
Create:
* name.js
* name.test.js

You may use the existing example files as a starting point.

Run ```karma start``` to run tests.

Implement your awesome component!

Configure your bower.json file.

### Registering packages on bower

To register a new package:

* Build: ```grunt build``` to create a minified version
* There **must** be a valid manifest JSON in the current working directory. 
* Your package should use [semver](http://semver.org/) Git tags.
* Your package **must** be available at a Git endpoint (e.g., GitHub); remember
  to push your Git tags (```git tag -a v0.0.0 -m "Version 0.0.0"``` + ```git push --tags```)!

Then use the following command:

```
bower register <my-package-name> <git-endpoint>
```
