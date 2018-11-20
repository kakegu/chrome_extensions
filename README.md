# TrustNote 开源钱包 chrome extensions （chrome 扩展）

下载

```
git clone https://github.com/fusionwallet/chrome_extensions.git
```

安装

打开 chrome 扩展，选择开发者模式。载入刚才 clone 的 chrome_extensions 文件夹。

关键知识点：

1）安全策略，配置如下，否则vue无法工作。

```
<meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline' data: gap: * 'unsafe-eval'; style-src 'self' 'unsafe-inline'; script-src * 'self' 'unsafe-inline' 'unsafe-eval';">
```

2）设置最小尺寸，否则popup只能弹出一个特别小的页面。

```
<style>
    body {
        min-width: 300px;
        min-height: 500px;
    }
</style>
```