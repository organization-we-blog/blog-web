# blog_web


## 注意

请各位大佬阅读完此文件（很短） 请使用dev分支进行开发

## 项目概况

we-blog的 前台 项目，要求兼容IE11

## 技术栈

`Vue` 	 `javascript`  	`elenemt-ui`	  `axios` 	`Vuex` 	`vue-router`

## 环境要求
   + node ：12+


## 项目结构

> public 	//开发目录，该文件夹中的文件再项目打包时不会被融合
>
> > index.html  //入口html文件
>
> src
>
> > assets 	//静态资源文件加，存放图片，字体等静态资源
> >
> > components  //复用组件存放目录
> >
> > router 路由文件目录
> >
> > store Vuex文件目录
> >
> > views 页面组件存放目录
> >
> > App.vue
> >
> > main.js  //入口文件
>
> .browserslistrc
>
> .eslintrc.js   //语法规范文件
>
> .gitignore    //git上传忽略文件配置
>
> babel.config.js  //babel配置文件
>
> package.json 	// 项目信息文件

## 推荐工具

- webStorm	IDE
- vsCode IDE
- postman 接口测试

## 分支

- master // 主干
- dev // 开发

请使用dev分支进行开发，凡是直接提交到master的代码最终都将会被驳回 我将会对dev与master的区别代码进行阅读，发现小bug我将修改，发现大bug请提交者修改（请各位大佬写注释，饶过小弟一命）我会将最新的master部署到服务器上

## Run

安装依赖

```shell
npm install
```

运行

```shell
npm run dev
```
