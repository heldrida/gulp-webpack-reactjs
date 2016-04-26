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
        .pipe(sourcemaps.write('./dist/css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('reload', function () {
	browserSync.reload();
});

gulp.task('watch', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('serve', ['webpack-dev-server'], function () {

	browserSync.init({
		notify: false,
        server: {
			baseDir: "./dist"
        }
	});

});

gulp.task("webpack-dev-server", function(callback) {

	// Start a webpack-dev-server
	webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

	var server = new webpackDevServer(webpack(webpackConfig), {
		hot: true,
		stats: {
			colors: true
		}
	});

	server.listen(8080, "localhost", function (err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080");
	});

});

gulp.task('default', ['webpack-dev-server']);