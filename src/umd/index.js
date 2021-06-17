__webpack_public_path__ = 'http://localhost:9000/';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './index.less'
import './link.css'

window.String.prototype.format=function(str){
  return 'level1-1 ' + str
}

function App() {
  return (
    <div className="micro-app-container">
      <h1>Level1-1 App {window.__KRAKEN_ENV__?'__KRAKEN_ENV__':''}</h1>
      <div id="subapp-child-container"></div>
      <Routes />
    </div>
  );
}

function Routes() {
  function HomePage() {
    const ref1 = useRef()
    useEffect(() => {
      ref1.current.onclick = ()=>{
        console.log(window.testname)
      }
    }, [])

    function sum(a, b){
      import('lodash-es').then(_ => {
        console.log(_.add(a, b) + '' + window.testname)
      });
    }

    function intervalTest(ms = 3000){
      window.setInterval(()=>{
        console.log(` ${ms}秒 after start setInterval ${window.testname}`)
      }, ms)
    }
    function timeoutTest(ms = 3000){
      window.setTimeout(()=>{
        console.log(` ${ms}秒 after start setTimeout ${window.testname}`)
      }, ms)
    }

    function handleEval(){
      eval(`console.log(window.testname)`)
      eval(`window.testFunc()`)
    }

    function handleFormat(str){
      console.log(str.format(str))
    }
    return (
      <div>
        <h3>Home Page {window.testname}</h3> 
        <p><button onClick={()=>console.log(window.testname)}>输出window.testname</button></p>
        <p><button onClick={()=>sum(1,2)}>输出1+2</button></p>
        <p><button onClick={()=>intervalTest()}>启动interval</button></p>
        <p><button onClick={()=>timeoutTest()}>启动timeout</button></p>
        <p><button onClick={()=>handleEval()}>执行eval</button></p>
        <p><button ref={ref1}>执行onclick</button></p>
        <p><button onClick={()=>handleFormat('hello')}>执行window String format</button></p>

        <Link to="/about">About</Link>
      </div>
    )
  }
  function AboutPage() {
    return (
      <div>
        <h3>About Page</h3> 
        <Link to="/">Home</Link>
      </div>
    )
  }
  return (
    <BrowserRouter basename={window.__KRAKEN_ENV__ ? '/level1-1App' : '/'}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
}

function render(props = {}){
  const { container } = props
  ReactDOM.render(<App />, container || document.getElementById('root'));
}

if(!window.__KRAKEN_ENV__){
  render()
}

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
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode( container || document.querySelector('#root'));
}