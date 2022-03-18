import ThunderJsSdk from "./ThunderJsSdk.mjs";

function main() {
  const opt = {
    downloadDir: '下载目录',
    tasks: [{
      name: 'ThunderVIP',
      url: 'http://down.sandai.net/ThunderVIP/ThunderVIP-xlgw.exe'
    }]
  }
  
  new ThunderJsSdk(opt).run({ port: 3000, closeTime: 3000 })
}

main()