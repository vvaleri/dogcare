let projectFolder = 'dist',
    sourceFolder = 'src',

    path = {
        build: {
            html: projectFolder + '/',
            css: projectFolder + '/css/',
            img: projectFolder + '/img/',
            js: projectFolder + '/js',
        },

        src: {
            html: sourceFolder + '/*.html',
            css: sourceFolder + '/scss/style.styl',
            img: sourceFolder + '/img/**/*.{jpg,png,gif,webp}',
            js: sourceFolder + '/js/main.js',
        },

        watch: {
            html: sourceFolder + '/**/*.html',
            css: sourceFolder + '/scss/**/*.styl',
            img: sourceFolder + '/img/**/*.{jpg,png,gif,webp}',
            js: sourceFolder + '/js/**/*.js',
        },

        clean: './' + projectFolder + '/'
    }


let {src, dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    stylus = require('gulp-stylus'),
    // scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    group_media = require('gulp-group-css-media-queries'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    webphtml = require('gulp-webp-html'),
    // babel = require('gulp-babel'),
    fileinclude = require('gulp-file-include'),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default;


function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: './' + projectFolder + '/'
        },
        notify: false
    })
}



function html() {
    return src(path.src.html)
    .pipe(fileinclude())  
    .pipe(webphtml())  
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}



function css() {
    return src(path.src.css)
    .pipe(stylus({
        compress: true
    }))
    // .pipe (
    //     scss({
    //         outputStyle: "expanded"
    //     })
    // )
    .pipe(
        group_media()
    )
    .pipe(
        autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 4 versions"],
            cascade: true
        })
    )
    .pipe(dest(path.build.css))  
    .pipe(clean_css())
    .pipe(
        rename({
            extname: ".min.css"    
        })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}


function images() {        
    return src(path.src.img) 
    .pipe(
        webp ({
            quality: 90
        })
    )
    .pipe(dest(path.build.img)) 
    .pipe(src(path.src.img)) 

    .pipe(
        imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 2 //0 to 7
        })
    )   

        .pipe(dest(path.build.img))    
        .pipe(browsersync.stream())      
}


function js() {
    return src(path.src.js)
    // .pipe(babel({
    //     presets: ['@babel/env']
    // }))
    .pipe(dest(path.build.js))     
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                extname: ".min.js"    
            })
        )
    .pipe(dest(path.build.js))
}

function watchFiles(params) {
    gulp.watch([path.watch.html],html) 
    gulp.watch([path.watch.css],css)
    gulp.watch([path.watch.img],images)
    gulp.watch([path.watch.js],js)
}


let build = gulp.series(gulp.parallel(js, css, html, images)); 
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.js = js;
exports.images = images;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;