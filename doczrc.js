// import { myCoolPlugin } from 'docz-plugin-mycoolplugin'

export default {
  title: 'First docz Project',
  description: 'This is my awesome documentation',
  // theme: 'my-coolest-theme',
  dest: '/docs',
  themeConfig: {
    colors: {
      primary: 'tomato',
    },
    styles: {
      h1: `
        font-size: 80px;
        margin-bottom: 10px;
      `,
    },
  },
  // modifyBundlerConfig: config => {
  //   /* do your magic here */
  // },
  // plugins: [
  //   myCoolPlugin()
  // ]
}