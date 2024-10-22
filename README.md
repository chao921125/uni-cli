# 注意：此项目仅支持微信小程序，其他端一概没有做适配，请勿运行。
# 该项目使用的UI

[](https://dev.weixin.qq.com/products/miniapp)

1. 微信内置UI
2. [vant weapp](https://github.com/youzan/vant-weapp)
3. [ucharts 图表 收费 未用](https://www.ucharts.cn/v2/#/)
# 三方UI
0. [uni-ui](https://github.com/dcloudio/uni-ui)
1. [uviewui](https://www.uviewui.com/)
2. [thorui](https://thorui.cn/doc/)
3. [firstui](https://www.firstui.cn/)
4. [uvui](https://www.uvui.cn/)

# 注意事项
```text
1. vant 样式修改方式：1、行内；2、标签加名称，内容额外使用view等内置组件；3、添加 ::v-deep 修改
2. pages/demo 目录下页面需要手动添加path访问，并且部分引用文件需要自行修改对应的正确的目录
3. pages/components 目录下页面需要手动引用，针对性引用，并非所有页面都适合
4. uni-modules 目录下文件无需引用直接使用，此类组件封装注意兼容性
5. components 根目录下这个目录存放的是公共的组件，和uni-modules类似，但是需要自行引用
6. cover-image 不再使用，使用image替换
7. 静态图片直接使用绝对路径即可，请勿再import
8. 如果无法正常打开开发者工具，请将/src/manifest.json中的微信ID删除掉即可
```

# 适配暗黑模式，还未测试

https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html
1、小程序和H5一定要用UNI的判断隔断，同时配置好代理
2、调试小程序的时候一定将请求地址修改为IPV4，即非127.0.0.1和localhost的地址

[//]: # (__UNI__C9F9D0B)
