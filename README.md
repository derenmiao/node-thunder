
### 📚 简述
`node-thunder`, 对Js SDK进行简单封装，可以实现迅雷对**单个**文件或**批量**文件下载文件，系统需要有浏览器和迅雷（版本要求可查看 [迅雷下载 JS-SDK 指南](http://open.thunderurl.com/#/?id=%e8%bf%85%e9%9b%b7%e4%b8%8b%e8%bd%bd-js-sdk) ）

### 📦 安装
```exec
$ npm i --save node-thunder
```

### 🔨 使用
```mjs
import { ThunderJsSdk } from 'node-thunder'

const opt = {
  downloadDir: '下载目录',
  tasks: [{
    name: 'ThunderVIP', // 下载文件名
    url: 'http://down.sandai.net/ThunderVIP/ThunderVIP-xlgw.exe' // 下载资源链接
  }]
}

new ThunderJsSdk(opt).run()
```

### 🤝 参与共建
```exec
$ git clone git@github.com:derenmiao/node-thunder.git
$ cd node-thunder
$ npm install
$ node test.mjs
```

第二版希望不希望启动浏览器唤醒迅雷