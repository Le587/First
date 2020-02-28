const gulp = require('gulp')

const cssmin = require('gulp-cssmin')

const autoprefixer = require('gulp-autoprefixer')

const uglify = require('gulp-uglify')

const babel = require('gulp-babel')

const htmlmin = require('gulp-htmlmin')

const del = require('del')

const webserver = require('gulp-webserver')


const cssHandler = () => {
  return gulp.src('./src/css/*.css')   // 找到 src 目录下 css 目录下 所有后缀为 .css 的文件
             .pipe(autoprefixer())   // 把 css 代码自动添加前缀
             .pipe(cssmin())  // 压缩 css 代码
             .pipe(gulp.dest('./dist/css'))  // 压缩完毕的 css 代码放在 dist 目录下的 css 文件夹里面
}

// 3. 书写一个打包 js 的方法
const jsHandler = () => {
  return gulp.src('./src/js/*.js') // 找到文件
             .pipe(babel({
               presets: ['@babel/env']
             })) // 转码 es6 转换成 es5 了, 就可以压缩了
             .pipe(uglify()) // 压缩
             .pipe(gulp.dest('./dist/js')) // 把压缩完毕的放入文件夹
}

// 4. 书写一个打包 html 的方法
const htmlHandler = () => {
  return gulp.src('./src/pages/*.html') // 找到要压缩的 html 文件
             .pipe(htmlmin({ // 想进行压缩, 需要在这个对象里面进行配置
               removeAttributeQuotes: true, // 移出属性上的双引号
               removeComments: true, // 移除注释
               collapseBooleanAttributes: true, // 把值为布尔值的属性简写
               collapseWhitespace: true, // 移除所有空格, 变成一行代码
               minifyCSS: true, // 把页面里面的 style 标签里面的 css 样式也去空格
               minifyJS: true, // 把页面里面的 script 标签里面的 js 代码给去空格
             })) // 压缩
             .pipe(gulp.dest('./dist/pages')) // 把压缩完毕的放到一个指定目录
}

// 5. 书写一个移动 image 文件的方法
const imgHandler = () => {
  return gulp.src('./src/images/**') // images 文件夹下的所有文件
             .pipe(gulp.dest('./dist/images')) // 放到指定目录就可以了
}

// 6. 书写一个移动 lib 文件的方法
const libHandler = () => {
  return gulp.src('./src/lib/**')
             .pipe(gulp.dest('./dist/lib'))
}

// 7. 书写一个任务, 自动删除 dist 目录
const delHandler = () => {
  // 这个函数的目的就是为了删除 dist 目录使用的
  return del(['./dist'])
}

// 8. 书写一个配置服务器的任务
const serverHandler = () => {
  return gulp.src('./dist') // 找到我要打开的页面的文件夹, 把这个文件夹当作网站根目录
             .pipe(webserver({ // 需要一些配置项
               host: 'localhost', // 域名, 这个域名可以自定义
               port: 8080, // 端口号, 0 ~ 65535, 尽量不适用 0 ~ 1023
               open: './pages/index.html', // 你默认打开的首页, 从 dist 下面的目录开始书写
               livereload: true, // 自动刷新浏览器 - 热重启
             
             }))
}



const watchHandler = () => {
  gulp.watch('./src/css/*.css', cssHandler)
  gulp.watch('./src/js/*.js', jsHandler)
  gulp.watch('./src/pages/*.html', htmlHandler)
  gulp.watch('./src/lib/**', libHandler)
  gulp.watch('./src/images/**', imgHandler)
}




module.exports.default = gulp.series(
  delHandler,
  gulp.parallel(cssHandler, jsHandler, htmlHandler, imgHandler, libHandler),
  serverHandler,
  watchHandler
)





