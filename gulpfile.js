var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
 
gulp.task('pack-js', function () {    
    return gulp.src(['customJS/custom.js'])
        .pipe(concat('scripts.js'))
        .pipe(minify())
        .pipe(gulp.dest('js'));
});
gulp.task('sass', function(){
    return gulp.src('sass/main.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(cleanCss())
      .pipe(minify())
      .pipe(gulp.dest('css'))
  });
/* gulp.task('pack-css', function () {    
    return gulp.src(['sass/main.scss'])
        .pipe(concat('style.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('css'));
}); */
 
gulp.task('default', gulp.parallel('pack-js', 'sass'));