export default {
  entry: 'src/foo.js',
  doc: {
    themeConfig: { mode: 'dark' },
    base: '/your-repo'
  },
  target: 'node',
  cjs: { type: 'babel', lazy: true },
  esm: 'rollup',
}
