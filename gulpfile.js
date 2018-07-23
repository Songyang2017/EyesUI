var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
    src: 'src/',
    build: 'build/',
    dist: 'dist/'
}

gulp.task('html', function () {
    gulp.src(app.src + '**/*.html')
        .pipe(gulp.dest(app.build))
        .pipe(gulp.dest(app.dist))
        .pipe($.connect.reload())
})

gulp.task('less', function () {
    gulp.src(app.src + 'less/**/*.less')
        .pipe($.less())
        .pipe(gulp.dest(app.build + 'css'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.dist + 'css'))
        .pipe($.connect.reload())
})

gulp.task('js', function () {
    gulp.src(app.src + 'js/**/*.js')
        .pipe($.babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(app.build + 'js'))
        .pipe($.uglify())
        .pipe(gulp.dest(app.dist + 'js'))
        .pipe($.connect.reload())
})

gulp.task('img', function () {
    gulp.src(app.src + 'imgs/*')
        .pipe(gulp.dest(app.build + 'imgs'))
        .pipe($.imagemin())
        .pipe(gulp.dest(app.dist + 'imgs'))
})

gulp.task("clean", function () {
    gulp.src([app.build, app.dist])
        .pipe($.clean());
})

gulp.task('watch', function () {
    gulp.watch(app.src + '**/*.html', ['html']);
    gulp.watch(app.src + '**/*.less', ['less']);
    gulp.watch(app.src + '**/*.js', ['js']);
    gulp.watch(app.src + 'img/*', ['img']);
})

gulp.task('connect', function () {
    $.connect.server({
        root: 'dist', //从哪个目录开启Server
        port: 8088,
        livereload: true
    })
})

gulp.task('build', ['html', 'less', 'img', 'js', 'watch'])
gulp.task('default', ['build', 'connect'], function () {
    console.log('洛基')
    open
})