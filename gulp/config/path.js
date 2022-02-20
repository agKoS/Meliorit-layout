const srcDir = "./src"
const buildDir = "./dist"

export const path = {
    src: {
        pug: `${srcDir}/*.pug`,
        scss: `${srcDir}/scss/style.scss`,
        js: `${srcDir}/js/main.js`,
        images: `${srcDir}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcDir}/img/**/*.svg`,
        svgicons: `${srcDir}/svgicons/*.svg`,
        fonts: `${srcDir}/fonts/**/*.{woff,woff2}`,
    },
    build: {
        html: `${buildDir}/`,
        css: `${buildDir}/css/`,
        js: `${buildDir}/js/`,
        images: `${buildDir}/img/`,
        fonts: `${buildDir}/fonts/`,
    },
    watch: {
        pug: `${srcDir}/**/*.pug`,
        scss: `${srcDir}/scss/**/*.scss`,
        js: `${srcDir}/js/**/*.js`,
        images: `${srcDir}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    },
    clean: buildDir,
    srcDir,
    buildDir,
}
