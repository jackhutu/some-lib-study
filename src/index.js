import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
// SystemJS.config({ transpiler: 'transpiler-module' })
SystemJS.import('http://127.0.0.1:8081/Level1-1-subApp-1.js')
// .then((res)=>{
//   // const demo = res.default
//   console.log(res)
// })

function App() {
  return (
    <div>
      <h1>App</h1>
      <Routes />
    </div>
  );
}

function Routes() {
  function HomePage() {
    return <div>Home Page</div>
  }

  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
