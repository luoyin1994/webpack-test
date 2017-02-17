require("./world.js")
// require("style-loader!css-loader!./style.css")
//只有css-loader打包css文件时并不会报错，但是不会再页面上有什么现实，需要有显示，还要使用style-loader
//css-loader是让webpack可以处理css文件
//style-loader会将webpack打包的css插到head的style中
require("./style.css")//1.通过命令行工具
function hello(str){
  alert(str)
}

hello('hellow world!！！！')
