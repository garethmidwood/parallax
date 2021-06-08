const { src, dest, watch, series } = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function clean(cb) {
    console.log('clean is happening');
    cb();
}

function javascript(cb) {
    console.log('js is happening');
    cb();
}

function css() {
    console.log('scss is happening');

    return src('src/scss/index.scss', { sourcemaps: true })
        .pipe( sass().on('error', sass.logError) )
        .pipe( postcss([ require('autoprefixer') ]) )
        .pipe( dest('build/', { sourcemaps: true }) )

}

exports.default = function() {
    watch('src/scss/**/*.scss', { ignoreInitial: false }, css);
    watch('src/js/**/*.js', { ignoreInitial: false }, series(clean, javascript));
};
