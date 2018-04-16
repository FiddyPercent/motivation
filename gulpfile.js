var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('testing', function (){
	console.log('the test is complete my lord');
});

gulp.task('sass', function (){
	console.log('too much sass');
	return gulp.src('app/scss/style.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'));
	
});