'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');

var browsers = ['last 1 version'];

gulp.task('sass', () => {
	gulp.src([
			'./_sass/style.scss',
		])
		// .pipe(sourcemaps.init())
		// .pipe(autoprefixer(browsers))
		.pipe(sass({
			'outputStyle': 'compressed',
		}).on('error', sass.logError))
		// .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./css'));
});

// // Rerun the task when a file changes
gulp.task('watch', () => {
	gulp.watch('_sass/**/*', ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', [
	'sass',
	'watch'
]);
