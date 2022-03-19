
import http from 'http'
import open from 'open'
/**
 * 调用js sdk模式
 */
export default class ThunderJsSdk {
  constructor(props) {
    this.states = props
    this.port = 9090  // 默认9090
    this.closeTime = 5000 // 服务关闭时间
  }

  // 转成合适的字符串
  handleString(obj) {
    if (typeof obj === 'string') {
      return `'${obj}'`
    }else if (typeof obj === 'number') {
      return obj
    }else if (obj instanceof Array) {
      return '[' + obj.map(i => this.handleString(i)).join(',') + ']'
    }

    const tempArray = []
    for (let attr in obj) {
      let temp = `${attr}: ` + this.handleString(obj[attr])
      tempArray.push(temp)
    }
    return '{' + tempArray.join(',') + '}'

  }

  renderTemplate(renderString) {
const template = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>更多参数和配置请查阅 <a href="http://open.thunderurl.com/#/?id=%e8%bf%85%e9%9b%b7%e4%b8%8b%e8%bd%bd-js-sdk" alt="迅雷下载JS SDK"> 迅雷下载JS SDK </a></body>
<script src="//open.thunderurl.com/thunder-link.js"></script>
<script type="text/javascript">
window.onload =(function() {
thunderLink.newTask(${renderString})
let outTime = setTimeout(function() {
  const downDom = document.getElementById('js_xl_manual_download_btn')
  downDom.click()
  clearTimeout(outTime)
}, 2000)
})()
</script>
</html>
}
`
    const server = http.createServer((req, res) => {
      res.end(template)
    }).listen(this.port, () => {
      
      open(`http://127.0.0.1:${this.port}/`)
      let handle = setTimeout(() => {
        server.close()
        clearTimeout(handle)
      }, this.closeTime)
    })

  }

  run (props = {}) {
    const { port = 9090, closeTime = 5000 } = props
    this.port = port
    this.closeTime = closeTime

    const renderString = this.handleString(this.states)
    this.renderTemplate(renderString)
  }
}