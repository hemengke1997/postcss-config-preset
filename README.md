# postcss-config-preset

> PostCSS 预设配置

## 内置插件

1. postcss-import 非vite环境默认开启
2. tailwindcss/nesting 默认开启
3. tailwindcss 默认开启
4. autoprefixer 默认开启
5. postcss-pxtorem 按需启用
6. postcss-pxtoviewport 按需启用
7. postcss-preset-env nextjs环境默认开启

## vite

```js
import { definePlugins } from 'postcss-config-preset'

export default {
  plugins: definePlugins(),
}
```

## Nextjs

```js
import { definePlugins } from 'postcss-config-preset/nextjs'

export default {
  plugins: definePlugins(),
}
```
