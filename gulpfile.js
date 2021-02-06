"use strict";

const gulp = require("gulp");
const pug = require("gulp-pug");

gulp.task("pug", function () {
  let option = {
    pretty: true,
  };
  return gulp
    .src(["./src/pug/*.pug"])
    .pipe(pug(option))
    .pipe(gulp.dest("./src/html"));
});

gulp.task("watch", () => {
  gulp.watch("./src/pug/*.pug", gulp.series("pug"));
});

gulp.task("default", gulp.series("watch"));
