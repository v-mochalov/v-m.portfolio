const {
    gulp,
    bs
} = $;

const browserSyncReload = done => {
    bs.reload();
    done();
};

gulp.task('watch', function () {
    gulp.watch(
        process.env.WATCH_SCSS, {
            delay: 1000
        },
        gulp.series('styles')
    );

    gulp.watch(
        process.env.WATCH_HTML, {
            delay: 1000
        },
        gulp.series('html', browserSyncReload)
    );

    // gulp.watch(
    //   process.env.WATCH_JS, {
    //     delay: 1000
    //   },
    //   // gulp.series('scripts:', browserSyncReload)
    // );

    gulp.watch(
        process.env.WATCH_IMG, {
            delay: 1000
        },
        gulp.series('img', browserSyncReload)
    );

    gulp.watch(
        process.env.WATCH_STATIC, {
            delay: 1000
        },
        gulp.series('copy', browserSyncReload)
    );

});