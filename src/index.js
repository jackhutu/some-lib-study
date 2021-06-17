import { parse } from './utils'
import './umd/index.less'
import './umd/link.css'

let webpackDemo = {
    val: parse('hello webpack')
}
import('lodash-es').then(_ => {
    console.log(_.add(1, 44) + '' )
});

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
    var linkTag = document.createElement("link")
    // linkTag.setAttribute("spa-app", "${packageJson.name}")
    linkTag.setAttribute("href", 'http://localhost:9000/main.css')
    linkTag.rel = "stylesheet"
    linkTag.type = "text/css"
    document.head.appendChild(linkTag)
  
  }
  
  export async function mount(props) {
    console.log('[react16] props from main framework', props);
    // render(props);
  }
  
  export async function unmount(props) {
    const { container } = props;
    // ReactDOM.unmountComponentAtNode( container || document.querySelector('#root'));
  }

console.log(`webpackDemo`,webpackDemo)
export default webpackDemo;
