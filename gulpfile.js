var gulp = require('gulp'),
    tmpl = require('gulp-template'),
    inquirer = require('inquirer'),
    q = require('q');

gulp.task('create', function () {

    var tplOpts = {
        'interpolate': /{{([\s\S]+?)}}/g
    };

    var deferred = q.defer();

    var questions = [{
        message: 'What is the name of the component?',
        name: 'name',
        type: 'input'
    }];

    inquirer.prompt(questions, function (ans) {

        gulp.src('./templatex/**/*')
            .pipe(tmpl(ans, tplOpts))
            .pipe(gulp.dest('test'));

        deferred.resolve();
    });

    return deferred.promise;

});