import browserSync from "browser-sync"
import gulpPlumber from "gulp-plumber"
import notify from "gulp-notify"
import replace from "gulp-replace"
import changed from "gulp-changed"
import ifPlugin from "gulp-if"

export const plugins = {
    plumber: gulpPlumber,
    if: ifPlugin,
    browserSync,
    notify,
    replace,
    changed,
}
