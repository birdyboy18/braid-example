var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('js', function(){
  gulp.src('src/js/app.js')
  .pipe(browserify({transform: 'reactify'}))
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('sass', function(){
	gulp.src('src/css/style.scss')
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(gulp.dest('./dist/css/'));
});

gulp.task('copy', function(){
  gulp.src('src/index.html')
  .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['js','copy']);

gulp.task('watch', function(){
  gulp.watch('./src/**/*.*', ['default']);
  gulp.watch('./src/css/style.scss', ['sass']);
});
