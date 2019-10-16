



# 系统、功能设计文档

# 具体标准如下：

# 1.整体目标
  实现1.0.0版本开发，满足于产品定位要求

# 2.总体功能概述
  * 2.1 注册/登录
  - 包含手机与验证码输入，用户获取验证码时间为60s

  * 2.2 首页
  - 主要功能包含：



# 3.整体框架选择
* 3.1：技术整体选型
   * 前端框架 mvvm架构  vue全家桶
   * ui组件 vant
   * 网络请求 axios
   * css预编译器 less
   * 项目打包 webpack
   * 适配方案 lib-flexible 以375宽度适配 12px=1rem

   

* 3.2：整体框架图  
  
    ![登录/注册流程图](https://file.tapd.cn/31279820/documents/preview/1131279820001000334)


   ```
   ├── dist--打包生成文件夹
   │   
   ├── config  
   │   └── index.js  打包输出配置
   |   
   │
   ├── src 项目主体输出
   │    │
   │    └── views 界面文件夹
   │    │  
   │    └── assets 资源文件(打包)
   │    │
   │    └──components 公用组件
   │    │
   │    └──router 路由配置
   │    │  
   │    └──http.js 请求配置
   │    
   ├── static 静态资源（不打包）
   │    └──config.js 域名配置文件
   |
   ├── package.json node库配置与安装依赖
   │   
   │
   └── index.html  全局单界面输出文件
   

* 3.3：代码规范
   - router/router.js 权限路由配置  
   - router/index.js 基础路由配置
   ~
    const routes = [
        {
            path:"/index", //首页
            component: index
        },
        {
            path:"/login", //登录
            component: login
        },
        {
            path: '/',   // 重定向
            redirect: '/index'
        },
        ...Router.routes
        ]

        var router =  new VueRouter({
        routes
    })
   ~ 

   * /src/http.js 全局请求封装
     - import {post,get} from './http'
     - Vue.prototype.$post=post;
     - Vue.prototype.$get=get;

   * static/config.js 全局配置参数 
     - window.base = "http://localhost:8080"; 请求后端接口域名

   * /src/assets/js/rule.js 使用同一表单校验 
    ~
      export const Rule = {
        /**
          * checkDataLength 验证数据长度
          * min 最小字符
          * max 最大字符
          */
          checkDataLength: (value,min, max) => {
              if (!value) {
                  Toast('输入内容不能为空')
                  return false
              }
              if(!min<=value.length<=max){
                  Toast('请输入'+min+'位至'+max+'位')
                  return false 
              }
              return true
          },


          /**
          * checkDataPhone 验证手机号
          */
          checkDataPhone: (value) => {
              const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
              if (!value) {
                  Toast('手机号不能为空')
                  return false
              }
              if (!reg.test(value)) {
                  Toast('请输入正确的手机号')
                  return false
              } 
              return true
          },

        ...
    ~

   * 全局请求采用统一封装，统一异常处理
     code：20000  请求成功  code：30000 登录过期回登录  code其它 异常弹框
     

# 3.4：对外交互
   * rap项目地址：

# 4.软件支持
  * 开发工具：vscode，Sublime Text 3
  * 支持版本：谷歌（50.0.3538.110）版本以上，火狐（50.0.0）版本以上，ie9以上
  * 支持的软件环境：window xp以上，ios系统

# 5.详细设计 
* 1.0.0版本
    * 登录/注册
      - 整体逻辑：输入手机号，获取验证码，最终完成登录，验证码有效期为60s
      - 校验：手机号格式校验，验证码6位数字校验 
    
   

# 6.其他设计
* 6.1：异常处理   
   * 前端请求后端，后端无响应，50s后自动退出请求
   * 路由守卫：所有界面请求渲染之前针对token做是否存在处理，缓存无token会自动跳到登录界面
   * 用户输入非有效的地址，前端做了过滤路由拦截处理，跳转到默认的首页
   

   
* 6.2：安全设计
   * 登录时，采用md5加密

  

* 6.3：用户性能设计
   * 前端逐步采用组件分发式开发，避免每个界面加载代码过多
   * 去除非必要的冗余，减少逻辑处理
   * 优化写法




# 项目运行

``` bash
# 安装node
npm install

# 运行
npm run dev

# 打包
npm run build

```



