const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename')

gulp.task('sass', ()=> {
    gulp.src('./dev/scss/odyssey.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: 'last 2 versions'
        }))
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('minify-css', ()=> {
    gulp.src('./dist/css/odyssey.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('watch', ()=> {
    gulp.watch('./dev/scss/**/*.scss', ['sass'])
})
