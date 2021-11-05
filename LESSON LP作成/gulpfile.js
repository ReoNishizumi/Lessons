// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass')(require('sass'));

// style.scssをタスクを作成する
gulp.task("default", function() {
    return gulp.watch("sass/**/*.scss", function() {
        // style.scssファイルを取得
        return (
            gulp
            .src("sass/**/*.scss")
            // Sassのコンパイルを実行
            .pipe(sass({
                outputStyle: "expanded"
            })
            // Sassのコンパイルエラーを表示
            // (これがないと自動的に止まってしまう)
            .on("error", sass.logError)
            )
            // cssフォルダー以下に保存
            .pipe(gulp.dest("css"))
        );
    });
});
