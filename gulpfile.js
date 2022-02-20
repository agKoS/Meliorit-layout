import gulp from "gulp"
const { series, parallel, watch, task } = gulp

//* File paths
import { path } from "./gulp/config/path.js"

//* Common plugins
import { plugins } from "./gulp/config/plugins.js"

//* Tasks
import { reset } from "./gulp/tasks/reset.js"
import { server } from "./gulp/tasks/server.js"
import { pug } from "./gulp/tasks/pug.js"
import { scss } from "./gulp/tasks/scss.js"
import { js } from "./gulp/tasks/js.js"
import { images } from "./gulp/tasks/images.js"
import { sprite } from "./gulp/tasks/sprite.js"
import { fonts } from "./gulp/tasks/fonts.js"

//* Gulp run mode: development(isDev) or production(isBuild)
const isBuild = process.argv.includes("--build")

globalThis.app = {
    isDev: !isBuild,
    isBuild,
    gulp,
    path,
    plugins,
}

function watcher() {
    watch(path.watch.pug, pug)
    watch(path.watch.scss, scss)
    watch(path.watch.js, js)
    watch(path.watch.images, images)
}

const mainTasks = series(sprite, fonts, parallel(pug, scss, js, images))

const dev = series(reset, mainTasks, parallel(watcher, server))
const build = series(reset, mainTasks)

task("default", dev)

export { build }
