import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import sourceMaps from "gulp-sourcemaps";
import imagemin from "gulp-imagemin";
import GulpUglify from "gulp-uglify";

const sassCompiler = gulpSass(sass);

export function compileSass() {
  return gulp
    .src("./src/styles/style.scss")
    .pipe(sourceMaps.init())
    .pipe(
      sassCompiler({
        outputStyle: "compressed",
      }).on("error", sassCompiler.logError)
    )
    .pipe(sourceMaps.write("./maps"))
    .pipe(gulp.dest("./dist/css"));
}

export function compressImages() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

export function compressJs() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(GulpUglify())
    .pipe(gulp.dest("./dist/js"));
}

export function watchFiles() {
  gulp.watch('./src/styles/**/*.scss', compileSass);

  gulp.watch('./src/images/**/*', compressImages);

  gulp.watch('./src/scripts/*.js', compressJs);
}

export default gulp.series(
  gulp.parallel(compileSass, compressImages, compressJs)
);