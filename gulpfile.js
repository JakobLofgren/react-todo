const gulp = require("gulp"),
	sass = require("gulp-sass")

gulp.task("sass", () => {
	return gulp.src("./src/*.sass")
		.pipe(sass())
		.pipe(gulp.dest("./src"))
})

gulp.task("watch", () => {
	gulp.watch("./src/*.sass", ["sass"])
})

gulp.task("default", ["sass", "watch"])