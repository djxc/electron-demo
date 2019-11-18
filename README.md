#学习使用electron，构建桌面应用
1.构建react+electron+antd框架
+使用create-react-app工具创建react项目
+安装electron，然后修改package.json,添加"estart" : "electron ."以及"main":"index.js"
+新建index.js、index.html文件，作为electron程序的主入口以及页面样式
+安装antd构建ui样式框架，需要启动react，然后在electron主入口处loadURL("http://localhost:3000"),将url的内容在electron页面中显示。


electron开发桌面应用：可以使用**antd**等ui框架进行设计页面布局，以及**react、vue**等mvvc框架组件式开发应用程序 ，在网页中可以实现的在electron都可以实现，比如：**three.js、openlayers、mapbox**等都可以在桌面端实现。 
