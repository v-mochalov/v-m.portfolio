const {
    gulp,
    gp: {fileInclude}
} = $;

gulp.task('html', function () {

    return gulp
        .src(process.env.SRC_HTML)
        .pipe(gulp.dest(process.env.BUILD_HTML));
});
