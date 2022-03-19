
### 📚 简述
`node-thunder`, 对Js SDK进行简单封装，可以实现迅雷对**单个**文件或**批量**文件下载文件，系统需要有浏览器和迅雷（版本要求可查看 [迅雷下载 JS-SDK 指南](http://open.thunderurl.com/#/?id=%e8%bf%85%e9%9b%b7%e4%b8%8b%e8%bd%bd-js-sdk) ）

------
### 📦 安装
```exec
$ npm i --save node-thunder
```

------
### 🔨 使用
目前仅支持 ESModule 导入, 对于 CommonJS 还未支持.

```js
import { ThunderJsSdk } from 'node-thunder'

const opt = {
  downloadDir: '下载目录',
  tasks: [{
    name: 'ThunderVIP', // 下载文件名
    url: 'http://down.sandai.net/ThunderVIP/ThunderVIP-xlgw.exe' // 下载资源链接
  }]
}

// port 服务端口号, 可选, 默认 9099
// closeTime 服务启动到关闭的时间, 可选, 默认 9000ms
new ThunderJsSdk(opt).run({ port: 3033, closeTime: 3000 })
```


🕯 支持单文件和批量文件下载，相关设置请查阅：[迅雷下载 JS-SDK](http://open.thunderurl.com/#/)
```
// 创建单个任务
const opt = {
  downloadDir: '', // 指定当前任务的下载目录名称，迅雷会在用户剩余空间最大的磁盘根目录中创建这个目录。【若不填此项，会下载到用户默认下载目录】
  tasks: [{
    name: '', // 指定下载文件名（含扩展名）。【若不填此项，将根据下载 URL 自动获取文件名】
    url: '' // 指定下载地址【必填项】
  }]
});
```
当 tasks 字段指定多个任务时，会创建批量任务。
```
const opt = {
  downloadDir: '', // 指定批量任务的下载目录名称，迅雷会在用户剩余空间最大的磁盘根目录中创建这个目录。【若不填此项，会下载到用户默认下载目录】
  taskGroupName: '', // 指定任务组名称，可将批量任务合并成类似BT任务的【任务组】，迅雷将在下载目录中创建同名子文件夹保存所有下载文件。【推荐填写。若不填此项，迅雷下载列表会显示所有本次创建的下载任务，可能会使用户的下载列表显得杂乱】
  excludePath: '', // 如果您希望批量下载的文件在用户本地保持与服务器上相同的文件目录结构，可以指定排除URL的前缀，迅雷会根据被排除前缀后的URL路径，创建文件夹保存对应的文件。【本项需配合taskGroupName使用，通常用于下载绿色版游戏或程序。若不填此项，将把所有文件都放置于同一层下载目录中】
  installFile: '', // 指定批量任务中的安装程序或主程序，该任务组下载完成后，用户在迅雷中双击此任务组，将运行指定的文件。该任务组的图标也将变成指定文件的图标。【本项需配合taskGroupName使用，通常用于下载绿色版游戏或程序。若不填此项，下载完成后，用户双击此任务，将打开下载文件所在的文件夹】
  runParams: '',  // 指定打开安装程序或主程序时的启动参数【视需求填写】
  createShortcut: { // 下载完成后创建桌面快捷方式。【本项需配合taskGroupName使用，通常用于下载绿色版游戏或程序。若不填此项，将不在桌面创建快捷方式】
    name: '', // 快捷方式的名称【必填】
    targetFile: '', // 快捷方式指向的任务组内的文件相对路径【必填】
    runParams: '', // 运行参数【选填】
    startIn: '', // 起始位置[选填]
    }
  threadCount:'5', // 指定原始地址线程数【一般不必填写，但某些下载地址的服务器会限制单个IP的最大同时连接数，例如部分“网盘、在线视频”网站等，此时可将此项数值设为1，从而避免被服务器断开连接】
  hideYunPan: '1' | '0', // 是否隐藏下载到云盘入口
  referer:'', // 指定迅雷发起下载请求时上报的引用页【一般不必填写，除非某些下载地址的服务器会判断引用页】
  userAgent:'', // 指定迅雷发起下载请求时上报的UA【一般不必填写，除非某些下载地址的服务器会判断UA】
  tasks: [
    {
      name: '', // 指定下载文件名（含扩展名）。【若不填此项，将根据下载 URL 自动获取文件名】
      url: '', // 指定下载地址【必填项】
      dir: '' //指定文件的下载目录,相对于当前的downloadDir目录【一般不必填写，除非某些文件的下载地址的路径不符合你的需求】
    },
    {
      name: '', // 指定下载文件名（含扩展名）。
      url: '', // 指定下载地址
      dir: '' //指定文件的下载目录,相对于当前的downloadDir目录
    }
  ]
}
```

------
### 🤝 参与共建
```exec
$ git clone git@github.com:derenmiao/node-thunder.git
$ cd node-thunder
$ npm install
$ node test.mjs
```

第二版希望不希望启动浏览器唤醒迅雷