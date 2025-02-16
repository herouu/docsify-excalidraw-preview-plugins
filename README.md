### docsify-excalidraw-preview-plugin


**excalidraw可以直接导出.excalidraw.svg格式的文件，这个格式包含画布数据，如果使用.excalidraw.svg，那么这个插件就没什么用了**



docsify文档预览.excalidraw文件的插件

* 使用
1、引入docsify-excalidraw-preview-plugin.js，参考docs的example
```html

<script src="https://fastly.jsdelivr.net/npm/docsify-excalidraw-preview-plugin@0.1.1/dist/docsify-excalidraw-preview-plugin.js"></script>
```

```markdown
![docsify-excalidraw-plugin](./file/物联网.excalidraw)
```

* 演示地址
  https://herouu.github.io/docsify-excalidraw-preview-plugins

#### 已知问题

此插件基于excalidraw的web版本0.17.6，这个版本不支持中文手写字体，新的master版本可以支持中文手写，且引入了新的字体类型ExcaliFont,
新版本还没有release，待release后再更新。


