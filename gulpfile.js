var gulp = require('gulp'),                  // 先把gulp插件加载进来     
	less = require('gulp-less'),             // less转译成css     
	minifycss = require('gulp-minify-css'),  // 压缩css插件
	concat = require('gulp-concat'),         // 合并js插件
	rename = require('gulp-rename'),         // 重命名插件
	uglify = require('gulp-uglify');         // 压缩合并js文件插件
	
// 创建js合并压缩的任务
gulp.task('concat', function () {
	gulp.src(['src/js/jquery-1.8.3.min.js','src/js/angular.min.js','src/js/ng-infinite-scroll.min.js','src/js/swiper.min.js','src/js/index.js'])                  // * 是通配符的意思，这里是把所有的js文件都找出来执行下面的操作
	.pipe(concat('main.js'))             // 把所有的js文件合并成一个新的js文件，文件名叫main
	.pipe(gulp.dest('builder/js'))           // 把生成出来的文件放到目的文件夹里边
	.pipe(rename({suffix: '.min'}))      // 把合并后的main.js文件重命名，这里我们要放两个版本，1.未压缩版，2.压缩版，压缩版中间加.min区别
	.pipe(uglify())                      // 把重命名后的main.min.js文件执行压缩操作
	.pipe(gulp.dest('builder/js'))           // 把压缩后的文件放到目的文件夹
})

//编译less文件和压缩css
gulp.task('move2', function () {   // 任务名自己定义，终端里面要输入 命令行执行， 例如 gulp less2css
	gulp.src('src/css/new.css')        // 找到要编译的less文件
	.pipe(rename({suffix: '.min'}))   // 把编译出来的css文件重命名，压缩版的中间都会带上.min
	.pipe(minifycss())                // 把重命名后的style.min.css文件执行压缩操作
	.pipe(gulp.dest('builder/css'))         // 把压缩后的文件放到目的文件夹
})







