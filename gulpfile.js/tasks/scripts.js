const {
    gulp,
    bs,
    gp: {
        sourcemaps,
        exit}
} = $;

const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babel = require('babelify')
const watchify = require('watchify')
const log = require('fancy-log');


const bundler = watchify(browserify(process.env.SRC_JS, {
    debug: true
}).transform(babel, {
    presets: ['@babel/preset-env']
}));

function bundle(cb) {
    log('-> bundling...');

    return bundler.bundle()
        .on('error', function (err) {
            console.error(err);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(process.env.BUILD_JS))
        .on('end', () => {
            log('-> bundle completed')
           
            cb && cb()
        })
}

gulp.task('scripts:build', bundle);

gulp.task('scripts:watch', function () {
    bundler.on('update', function () {
        bundle(bs.reload);
    });
});


