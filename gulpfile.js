
const gulp = require('gulp');

const pug = require('gulp-pug');

const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const groupMediaQueries = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');


const concat = require('gulp-concat-css');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const del = require('del');

const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const browserSync = require('browser-sync').create();

const imagemin = require('gulp-imagemin');

const svgSprite = require("gulp-svg-sprites");



const paths =  {
  root: './build', //корень проекта
  templates: {
    pages: 'src/templates/pages/*.pug', 
    src: 'src/templates/**/*.pug'
  },
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'build/assets/styles/'
  },
  images: {
    src: 'src/images/jpg-png/**/*.*',
    dest: 'build/assets/images/'
  },
  svg: {
    src: 'src/images/svg/*.svg',
    dest: 'build/assets/images/sprite-svg/'
  },
  fonts: {
    src: 'src/fonts/*.*',
    dest: 'build/assets/fonts/'
  },
  scripts: {
      src: 'src/scripts/**/*.js',
      dest: 'build/assets/scripts/'
  }

};


// pug
function templates() {
  return gulp.src(paths.templates.pages)
      .pipe(plumber())
      .pipe(pug({ pretty: true })) // pretty-отступы
      .pipe(gulp.dest(paths.root));
}

//styles
function styles() {
  return gulp.src('./src/styles/app.scss')
    .pipe(plumber()) //для того что бы при ошибке в написании слежение не останавливалось
    .pipe(sourcemaps.init()) // создается карта
    .pipe(sassGlob()) // для упрощенного прописывания имортов (все файлы в папке!)
    .pipe(sass({outputStyle: 'compressed', includePaths: require('node-normalize-scss').includePaths})) //  компиляция
    .pipe(autoprefixer()) //поддержка браузеров
    .pipe(groupMediaQueries()) // группирование медиазапросов
    .pipe(cleanCSS()) // минификация
    .pipe(rename({ suffix: ".min" })) 
    .pipe(sourcemaps.write('/')) // записывается карта в ту же папку , где и css
    .pipe(gulp.dest(paths.styles.dest))
}

// перенос картинок
function images() {
  return gulp.src(paths.images.src)
      .pipe(imagemin())
      .pipe(gulp.dest(paths.images.dest));
}

//svg спрайт
function svg() {
  return gulp.src(paths.svg.src)
    .pipe(svgSprite({mode: "symbols"}))
    .pipe(gulp.dest(paths.svg.dest));
}

//шрифты
function fonts() {
  return gulp.src(paths.fonts.src)
      .pipe(gulp.dest(paths.fonts.dest));
}

// очистка
function clean() {
  return del(paths.root);
}

 // слежение изменения файлов
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.templates.src, templates);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.images.src, svg);
  gulp.watch(paths.fonts.src, fonts);
  gulp.watch(paths.scripts.src, scripts);
}

// локальный сервер + livereload (встроенный)
function server() {
  browserSync.init({
      server: paths.root
  });
  browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

// webpack
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest(paths.scripts.dest))
}

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.images = images;
exports.svg = svg;
exports.fonts = fonts;
exports.scripts = scripts;



gulp.task('default', gulp.series(
  clean,
  gulp.parallel(styles, templates, images, svg, fonts, scripts),
  gulp.parallel(watch, server)
));


