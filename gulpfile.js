var gulp = require( 'gulp' );
var minifycss = require( 'gulp-minify-css' );
var concat = require( 'gulp-concat' );
var rename = require( 'gulp-rename' );


gulp.task( 'css', function() {
  gulp.src( './src/css/*.css' )
    .pipe(concat('concat.js'))
    .pipe(rename('main.min.css'))
    .pipe( minifycss() )
    .pipe( gulp.dest( './src/css' ) )
});

gulp.task( 'watch', function() {
  gulp.watch( './src/css/*.css', [ 'css' ] );
});

gulp.task('default', ['watch' , 'css']);
