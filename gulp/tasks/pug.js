import GulpPug from "gulp-pug"
import webpHtmlNosvg from "gulp-webp-html-nosvg"
import versionNumber from "gulp-version-number"
import htmlmin from "gulp-htmlmin"

export const pug = () => {
    return app.gulp
        .src(app.path.src.pug, { sourcemaps: app.isDev })
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "HTML",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(
            GulpPug({
                pretty: true,
            })
        )
        .pipe(app.plugins.replace(/@img\//g, "img/"))
        .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    value: "%DT%",
                    append: {
                        key: "_v",
                        to: ["css", "js"],
                    },
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                htmlmin({
                    collapseWhitespace: true,
                    removeComments: true,
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream())
}
