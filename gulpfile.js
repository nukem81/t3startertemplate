var gulp = require('gulp'), 
	gutil = require('gulp-util'),
	sass = require('gulp-ruby-sass') ,
	bower = require('gulp-bower'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	sourcemaps = require('gulp-sourcemaps');


// Define paths
var basePaths = {
	src: 'Resources/Public/Source/',
	dest: 'Resources/Public/Build/',
	bower: 'bower_components/'
};

// Compile stylesheet
gulp.task('styles', function () {
	return sass(basePaths.src+'StyleSheets/Sass/styles.scss', {
		loadPath: [
			basePaths.bower + 'bootstrap-sass-official/assets/stylesheets',
			basePaths.bower +'fontawesome/scss',
		],
		style: (gutil.env.prod) ? 'compressed': 'expanded',
		precision: 10,
		sourcemap: (gutil.env.prod) ? false: true
	})
	.on('error', function (error){
		console.log('Error:', error.message);
	})
	.pipe(autoprefixer('last 2 version'))
	.pipe(concat('styles.css'))
	.pipe(gulpif(gutil.env.prod, rename({suffix: '.min'})))
	.pipe(gulpif(gutil.env.prod, minifyCSS()))
	.pipe(gulpif(gutil.env.prod, gutil.noop(), sourcemaps.write()))
	.pipe(gulp.dest(basePaths.dest+'StyleSheets'));
});


// Copy Bootstrap and FontAwesome fonts
gulp.task('fonts', function() { 
	return gulp.src([
			basePaths.bower + 'fontawesome/fonts/**',
			basePaths.bower + 'bootstrap-sass-official/assets/fonts/bootstrap/**',
		]) 
		.pipe(gulp.dest(basePaths.dest+'Fonts'));
});


// Copy JQuery and Bootstrap javascripts
gulp.task('scripts', function(){
	gulp.src([ 
		basePaths.bower + 'jquery/dist/jquery.js',
		basePaths.bower + 'bootstrap-sass-official/assets/javascripts/bootstrap.js',
		basePaths.src + 'JavaScripts/main.js',
		basePaths.src + 'JavaScripts/*.js'
	])
	.pipe(concat('main.js'))
	.pipe(gulpif(gutil.env.prod, rename({suffix: '.min'})))
	.pipe(gulpif(gutil.env.prod, uglify()))
	.pipe(gulpif(gutil.env.prod, gutil.noop(), sourcemaps.write()))
	.pipe(gulp.dest(basePaths.dest+'JavaScripts'));
});


// Copy and optimize images
gulp.task('images', function(){
	gulp.src(basePaths.src + 'Images/**.{png,jpg,jpeg,gif,svg}')
	.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
	.pipe(gulp.dest(basePaths.dest+'Images'));
})


// Watch 
gulp.task('watch', function() {
	 gulp.watch(basePaths.src+'StyleSheets/Sass/*.scss', ['styles']); 
	gulp.watch(basePaths.src+'JavaScripts/*.js', ['scripts']); 
	gulp.watch(basePaths.src+'Images/**.{png,jpg,jpeg,gif,svg}', ['images']);
});


// Set tasks
gulp.task('build', ['styles', 'fonts', 'scripts', 'images']);
gulp.task('default', ['build']);
