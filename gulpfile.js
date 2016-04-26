var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync').create(),
	webpack = require('webpack'),
	webpackDevServer = require("webpack-dev-server"),
	webpackConfig = require("./webpack.config.js"),
	gutil = require("gulp-util");


gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(sourcemaps.write('./dist/css'));
});

gulp.task('reload', function () {
	browserSync.reload();
});

gulp.task('watch', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task("webpack-dev-server", function(callback) {

	// The `webpack-dev-server`
	var server = new webpackDevServer(webpack(webpackConfig), {
		hot: true,
		stats: {
			colors: true
		}
	});

	server.listen(8080, "localhost", function (err) {

		if (err) {
			throw new gutil.PluginError("webpack-dev-server", err);
		}

		gutil.log("[webpack-dev-server]", "http://localhost:8080");

	});

});

gulp.task('production', function() {
	return gulp.src('./app/index.js')
		.pipe(webpack( require('./webpack.config.js') ))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['watch', 'webpack-dev-server']);