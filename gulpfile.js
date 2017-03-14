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

const cleanCSS = require('clean-css');
const uncss = require('gulp-uncss');
const penthouse = require('penthouse');
const Promise = require('bluebird');
const critical = require('critical');

// const env = 'https://bigandy.pw/';
const envs = {
	dev: 'http://127.0.0.1:4000/',
	live: 'https://bigandy.pw/',
};

const env = envs.dev;

const pages = [
		env + 'about/',
		env + 'blog/',
		env + 'demos/',
		env + '',
		env + '2016/11/30/dominant-color/',
		env + '2016/11/22/raspberry-pi/'
	];

const penthouseAsync = Promise.promisify(penthouse);

const siteRoot = '_site';

var browsers = ['last 1 version'];

// const jk = process.platform === "win32" ? "jekyll.bat" : "jekyll"; // because not working on windows https://github.com/shakyShane/jekyll-gulp-sass-browser-sync/issues/2

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

gulp.task('critical-css', () => {
	const fs = require('fs');

	const outputCSS = (criticalCSS, file) => {
		const output = new cleanCSS().minify(criticalCSS).styles;
		fs.writeFile(`./_includes/build/${file}.css`, output, (err) => {
			if (err) {
				console.log('outputcss error: ', err);
			}
		});
	};

	const runPenthouse = (outputFile) => {
		penthouseAsync({
			url: [
				env
			],
			css: './css/style.css',
			height: 1200, // 600
			width: 1100, // 400
		    minify: true,
		}).then(criticalCSS => {
			outputCSS(criticalCSS, outputFile);
		});
	}

	// TODO way of writing this so don't call twice
	runPenthouse('critical');
});

gulp.task('uncss', ['sass'], () => {
	return gulp.src('./css/style.css')
		.pipe(uncss({
			html: pages,
			ignore: [
				'[data-visited]',
				'[data-visited] .post-content',
				'.svg-sprite',
				'.previouspostslink',
				/pre.*/,
				/code.*/,
				/token.*/,
				'.article__header__image'
			]
		}))
		.pipe(gulp.dest('./css/'));
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
		// .pipe(sourcemaps.init())
		.pipe(sass({
			'outputStyle': 'compressed',
		}).on('error', (e) => console.log(e)))
		.pipe(postcss([ autoprefixer(browsers) ]))
		// .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./css'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', [
	'sass',
	'serve',
	'jekyll'
]);
