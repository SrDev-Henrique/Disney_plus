import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import sourceMaps from "gulp-sourcemaps";

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

export function styles() {
    return gulp
      .src("./src/styles/style.scss")
      .pipe(
        gulpSass({
          outputStyle: "compressed",
          implementation: sass,
        })
      )
      .pipe(gulp.dest("./dist/css"));
}

export default function () {
    gulp.watch("./src/styles/*.scss", gulp.parallel(compileSass));
}