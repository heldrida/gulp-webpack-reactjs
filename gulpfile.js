var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync').create(),
	webpack = require('webpack-stream');

gulp.task('webpack', function () {
  return gulp.src('./app/index.js')
	.pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream());
});

gulp.task('reload', function () {
	browserSync.reload();
});

gulp.task('watch', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch("./app/**/*.js", ['webpack', 'reload']);
});

gulp.task('serve', ['watch'], function () {

	browserSync.init({
		notify: false,
        server: {
			baseDir: "./dist"
        }
	});

});

gulp.task('default', ['serve']);