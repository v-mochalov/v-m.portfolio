const { gulp } = $;
const ftp = require('vinyl-ftp');
const log = require('fancy-log');

let config;

try {
  config = require('../config');
} catch (err) {}

gulp.task('ftp-upload', function(done) {
  if (!config) {
    console.error(
      'You must add config.js file with FTP credentials in gulpfile.js folder if you want to use deploy feature'
    );

    return done();
  }

  const conn = ftp.create({
    host: config.ftp.host,
    user: config.ftp.user,
    password: config.ftp.password,
    port: config.ftp.port,
    log,
    parallel: 6
  });

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance
  return gulp
    .src('build/**/*.*', {
      base: './build',
      buffer: false
    })

    .pipe(conn.newerOrDifferentSize(config.ftp.dest)) // only upload newer files
    .pipe(conn.dest(config.ftp.dest));
});
