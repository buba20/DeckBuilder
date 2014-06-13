var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

gulp.task('templates', function(){
  gulp.src(['view/templates/*.hbs'])
    .pipe(handlebars())
    .pipe(defineModule('plain'))
    .pipe(declare({
      namespace: 'app.templates'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('public/js/templates'));
});