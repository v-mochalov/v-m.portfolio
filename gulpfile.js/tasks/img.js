const {
  gulp,
  bs,
  gp: {
    imagemin,
    clean
  }
} = $;

function cleanImgFolder() {
  return gulp.src(process.env.BUILD_IMG, {
    read: false,
    allowEmpty: true
  }).pipe(clean())
}

function compressImages() {
  return gulp.src(process.env.SRC_IMG)
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 1
      }),
      imagemin.svgo({
        plugins: [{
            removeViewBox: false
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ]))
    .pipe(gulp.dest(process.env.BUILD_IMG))
    .pipe(bs.reload({
      stream: true
    }))
}
// gulp.task('img', compressImages);
gulp.task('img', gulp.series(cleanImgFolder, compressImages))