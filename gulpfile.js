/* global require */
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	jshint = require('gulp-jshint'),
	stripDebug = require('gulp-strip-debug'),
	sass = require('gulp-sass'),
	autoprefix = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	livereload = require('gulp-livereload'),
	stylish = require('jshint-stylish');

// concat and minify the js
// gulp.task('js', function () {
// //
// 	gulp.src([
// 			'js/jquery.js'
// 		])
// 		.pipe(uglify())
// 		.pipe(concat('jquery.min.js'))
// 		.pipe(gulp.dest('build/js'));

// });

// gulp.task('lint', function () {
//   gulp.src([
// 			'js/plugins.js',
// 		])
// 		.pipe(jshint('.jshint'))
// 		.pipe(jshint.reporter(stylish));
// });

// sass
gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'expanded',
			// sourceComments: 'map'
		}))
		// .pipe(livereload())
        // .pipe(autoprefix('last 5 versions'))
        // .pipe(minifyCSS())
        .pipe(gulp.dest('css'));
});

gulp.task('livereload', function () {
	gulp.src([
		'css/style.css'
	])
	.pipe(livereload()
	);
});

// Rerun the task when a file changes
gulp.task('watch', function () {
	gulp.watch('js/*', ['js']);
	gulp.watch('scss/**/*.scss', ['sass']);

	var server = livereload();
	gulp.watch(['css/style.css']).on('change', function(file) {
		server.changed(file.path);
	});
});

// The default task (called when you run `gulp` from cli)
// gulp.task('default', ['js', 'sass', 'watch']);
gulp.task('default', [
	// 'js',
	'sass',
	'watch',
	'livereload'
	// 'browser-sync'
]);
gulp.task('production', ['js', 'sass']);
