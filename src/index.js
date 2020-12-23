import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";

import importHTML from "import-html-entry";


importHTML("./demo.html").then((res) => {
  var shadow = document.querySelector('#subApp').attachShadow({mode: 'open'});
  shadow.innerHTML = res.template

  // var subAppContainer = document.createElement('div')
  // subAppContainer.innerHTML = res.template
  // document.getElementById('subApp').appendChild(subAppContainer)
  console.log(res.template);

  res.execScripts().then((exports) => {
    const mobx = exports;
    const { observable } = mobx;
    observable({
      name: "kuitos",
    });
  });
});

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
    return <div className="app">Home Page</div>;
  }

  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
