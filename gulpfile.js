var gulp = require('gulp');
var changed = require('gulp-changed');
var webpack = require('gulp-webpack');
var server = require('gulp-express');
// var jasmine = require('gulp-jasmine');
var karma = require('gulp-karma-runner');

gulp.task('copy-html', function () {
	return gulp.src(["src/**/*.html"])
        .pipe(changed("target/"))
        .pipe(gulp.dest("target/"))
})

gulp.task('copy-bootstrap', function () {
	return gulp.src(["node_modules/bootstrap/dist/css/*"])
        .pipe(changed("target/css"))
        .pipe(gulp.dest("target/css"))
})

gulp.task('copy-api', function () {
	return gulp.src(["api/**/*.json"])
        .pipe(changed("target/api/"))
        .pipe(gulp.dest("target/api/"))
})

gulp.task('webpack', function() {
  return gulp.src('src/index.js')
    .pipe(webpack({
    	output: {
    		filename: "index.js"
    	}
    }))
    .pipe(gulp.dest('target/'));
});

gulp.task('default', [
	'copy-html',
	'copy-api',
	'copy-bootstrap',
	'webpack'
], function () {

    server.run(['server.js']);
})

gulp.task('test', ['webpack'], function () {
    gulp.src([
        "target/**/*.js",
        "specs/**/*.js"
    ], {"read": false}).pipe(
        karma.server({
            "singleRun": true,
            "files": [
                'node_modules/angular/angular.js',
                'node_modules/angular/angular-mocks.js',
                'specs/*.test.js'
            ],
            "frameworks": ["jasmine"],
            "browsers": ["Chrome"]
        })
    );
})





