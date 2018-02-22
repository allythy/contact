var gulp = require( 'gulp' );
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/style/sass/*.sass')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./src/style/css'));
});

gulp.task( 'watch', function() {
  gulp.watch( './src/style/sass/*.sass', [ 'sass' ] );
});

gulp.task('default', ['watch' , 'sass']);
