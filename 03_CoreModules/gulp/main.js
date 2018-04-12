const gulp = require("gulp");

// gulp.src("*.js*").on("data", function(item) {
//     console.log(item);
// });

gulp.src("*.js*").pipe(gulp.dest("./1"));
