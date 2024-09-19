import { getPackageInfoSync } from 'local-pkg'
import { createRequire } from 'node:module'
import { type AcceptedPlugin } from 'postcss'
import { type PostcssConfig, postcssConfig } from '..'

const require = createRequire(import.meta.url)

const defaultOptions: Required<PostcssConfig> = {
  'postcss-import': true,
  'tailwindcss/nesting': true,
  'tailwindcss': true,
  'postcss-pxtorem': false,
  'postcss-pxtoviewport': false,
  'autoprefixer': true,
  'postcss-preset-env': false,
}

const pluginsForVite: AcceptedPlugin[] = []

function unPlugins(pluginName: string, options?: any) {
  pluginsForVite.push(options ? require(pluginName)(options) : require(pluginName))
}

export function definePlugins(options: PostcssConfig) {
  const { name: inVite } = getPackageInfoSync('vite') || {}
  if (inVite) {
    defaultOptions['postcss-import'] = false
  }
  options = Object.assign({}, defaultOptions, options || {})!
  postcssConfig(options, unPlugins)
  return pluginsForVite
}
