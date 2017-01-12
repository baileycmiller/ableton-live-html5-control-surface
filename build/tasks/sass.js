var gulp = require('gulp');
var sass = require('gulp-sass');

// compile sass
gulp.task('sass', function(){
  return gulp.src('styles/scss/app.scss') //the source sass file
    .pipe(sass().on('error', sass.logError)) // Compile sass and log errors
    .pipe(gulp.dest('styles/css')) //the folder you want the css to go
});

//run 'gulp sass' to compile
