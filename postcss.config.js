// postcss.config.js (ESM)
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nesting'

export default {
  plugins: [tailwindcss, autoprefixer, postcssImport, postcssNesting],
}
