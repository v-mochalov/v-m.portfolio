const {
  gulp,
  gp: {
    clean
  }
} = $;

gulp.task('clean', function () {
  return gulp.src('./build', {
    read: false,
    allowEmpty: true,
    force: true
  }).pipe(clean());
})