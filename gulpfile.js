var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var paths = {
    templates: 'view/templates/*.html'
}
gulp.task('templates', function() {
    gulp.src([paths.templates])
        .pipe(handlebars())
        .pipe(defineModule('plain'))
        .pipe(declare({
            namespace: 'app.templates'
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('public/js/templates'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.templates, ['templates']);
});

gulp.task('default', ['watch', 'templates']);
