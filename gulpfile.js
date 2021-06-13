const { src, dest, watch, series } = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

function clean(cb) {
    console.log('clean is happening');
    cb();
}

function javascript(cb) {
    console.log('js is happening');

    let sources = [
        'src/js/*.js',
        'node_modules/mmenu-light/dist/mmenu-light.js'
    ];

    return src(sources)
        .pipe( sourcemaps.init() )
        .pipe( uglify() )
        .pipe( concat('site.js') )
        .pipe( sourcemaps.write() )
        .pipe( dest('build/') );
}

function css() {
    console.log('scss is happening');

    let sources = [
        'src/scss/index.scss'
    ];

    return src(sources)
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        // .pipe( postcss([ require('autoprefixer') ]) )
        .pipe( sourcemaps.write() )
        .pipe( dest('build/') );
}

exports.default = function() {
    watch('src/scss/**/*.scss', { ignoreInitial: false }, css);
    watch('src/js/**/*.js', { ignoreInitial: false }, series(clean, javascript));
};
