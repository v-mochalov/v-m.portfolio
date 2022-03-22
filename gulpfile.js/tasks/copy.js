const {
  gulp,
  bs
} = $;

gulp.task('copy', function () {
  return gulp.src('./static/**/*.*', {
    base: 'static'
  }).pipe(gulp.dest('./build')).pipe(bs.stream())
})