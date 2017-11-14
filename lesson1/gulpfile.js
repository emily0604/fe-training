var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync');


gulp.task('pug', function(){
    gulp.src('dev/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles', function(){
    sass ('dev/sass/**/*.sass')
        .pipe(prefix({
            browsers: ['last 10 versions'],
            cascade : false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('uglify', function(){
    return gulp.src('dev/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir : 'build/'
        }
    });

    gulp.watch('dev/sass/**/*.sass', ['styles']);

    gulp.watch('dev/js/**/*.js', ['uglify']);

    gulp.watch('dev/pug/**/*.pug', ['pug']);
});

gulp.task('copy', function(){
    gulp.src('dev/images/**/*')
        .pipe(gulp.dest('build/images/'));
});

gulp.task('default', ['pug', 'styles', 'copy', 'uglify', 'serve']);
