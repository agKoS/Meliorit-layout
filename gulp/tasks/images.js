import webp from "gulp-webp"
import imagemin from "gulp-imagemin"
import recompress from "imagemin-jpeg-recompress"
import pngquant from "imagemin-pngquant"

export const images = () => {
    return app.gulp
        .src(app.path.src.images)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "IMAGES",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(app.plugins.changed(app.path.build.images))
        .pipe(webp())
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.images))
        .pipe(app.plugins.changed(app.path.build.images))
        .pipe(
            imagemin(
                {
                    interplaced: true,
                    progressive: true,
                    optimizationLevel: 5,
                },
                [
                    recompress({
                        loops: 6,
                        min: 50,
                        max: 90,
                        quality: "high",
                        use: [
                            pngquant({
                                quality: [0.8, 1],
                                strip: true,
                                speed: 1,
                            }),
                        ],
                    }),
                    imagemin.gifsicle,
                    imagemin.optipng,
                    imagemin.svgo,
                ]
            )
        )
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.plugins.changed(app.path.build.images))

        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())
}
