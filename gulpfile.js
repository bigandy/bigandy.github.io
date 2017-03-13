'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssFiles = '_sass/**/*.?(s)css';

const sourcemaps = require('gulp-sourcemaps');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const child = require('child_process');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();

const siteRoot = '_site';

var browsers = ['last 1 version'];

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(cssFiles, ['sass']);
});

gulp.task('sass', () => {
	return gulp.src([
			'./_sass/style.scss',
		])
		.pipe(sourcemaps.init())
		.pipe(sass({
			'outputStyle': 'compressed',
		}).on('error', (e) => console.log(e)))
        .pipe(postcss([ autoprefixer(browsers) ]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./css'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', [
	'sass',
	'serve',
	'jekyll'
]);
