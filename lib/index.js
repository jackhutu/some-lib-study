"use strict";

function _react() {
  var data = _interopRequireDefault(require("react"));

  _react = function _react() {
    return data;
  };

  return data;
}

function _reactDom() {
  var data = _interopRequireDefault(require("react-dom"));

  _reactDom = function _reactDom() {
    return data;
  };

  return data;
}

function _reactRouterDom() {
  var data = require("react-router-dom");

  _reactRouterDom = function _reactRouterDom() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return _react()["default"].createElement("div", null, _react()["default"].createElement("h1", null, "App"), _react()["default"].createElement(Routes, null));
}

function Routes() {
  function HomePage() {
    return _react()["default"].createElement("div", null, "Home Page");
  }

  return _react()["default"].createElement(_reactRouterDom().HashRouter, null, _react()["default"].createElement(_reactRouterDom().Switch, null, _react()["default"].createElement(_reactRouterDom().Route, {
    path: "/",
    component: HomePage
  })));
}

_reactDom()["default"].render(_react()["default"].createElement(App, null), document.getElementById('root'));