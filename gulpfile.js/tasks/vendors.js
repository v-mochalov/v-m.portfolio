const {
  gulp,
  gp: {
    concat,
    uglify,
    cssnano,
  }
} = $;

const vendorsList = require('../vendors-list');

function vendorsJs(cb) {
  return vendorsList.js.length ?
    gulp
    .src(vendorsList.js)
    .pipe(concat('vendors.js'))
    .pipe(uglify())
    .pipe(gulp.dest(process.env.BUILD_JS)) :
    cb();
}

function vendorsCss(cb) {
  return vendorsList.css.length ?
    gulp
    .src(vendorsList.css)
    .pipe(concat('vendors.css'))
    .pipe(cssnano({
      reduceIdents: false
    }))
    .pipe(gulp.dest(process.env.BUILD_CSS)) :
    cb();
}

gulp.task('vendors', gulp.parallel(vendorsJs, vendorsCss))