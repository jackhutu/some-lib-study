!(function (e, t) {
  console.log("function" == typeof define && define.amd)
  console.log(globalThis)
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).mktActivityTagGlobarVar = t(e.React, e.klein));
})(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var l = n(e);
  var a = "item-module_editable-select-drop__FfvSJ";
  !(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
      var l = document.head || document.getElementsByTagName("head")[0],
        a = document.createElement("style");
      (a.type = "text/css"),
        "top" === n && l.firstChild
          ? l.insertBefore(a, l.firstChild)
          : l.appendChild(a),
        a.styleSheet
          ? (a.styleSheet.cssText = e)
          : a.appendChild(document.createTextNode(e));
    }
  })(
    ".item-module_editable-select-drop__FfvSJ .option-item .ant-select-item-option-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.item-module_editable-select-drop__FfvSJ .icon-delete {\n  font-weight: bold;\n  font-size: 12px;\n  cursor: pointer;\n}\n.item-module_editable-select-drop__FfvSJ .ant-divider {\n  margin: 4px 0;\n}\n.item-module_editable-select-drop__FfvSJ .select-a {\n  display: block;\n  width: 100%;\n  margin: 0 10px 5px 10px;\n  padding: 5px 0;\n  overflow: hidden;\n  transition: all ease-in-out 1s;\n}\n.item-module_editable-select-drop__FfvSJ .select-a-hidden {\n  display: none;\n}\n.item-module_editable-select-drop__FfvSJ .select-input {\n  display: none;\n  margin: 0 10px 5px 10px;\n  padding: 5px 0;\n  overflow: hidden;\n}\n.item-module_editable-select-drop__FfvSJ .select-input > *:first-child {\n  margin-bottom: 5px;\n}\n.item-module_editable-select-drop__FfvSJ .select-input > *:last-child {\n  margin-left: 10px;\n}\n.item-module_editable-select-drop__FfvSJ .select-input-show {\n  display: block;\n}\n"
  );
  const i = () => {},
    o = (n) => {
      var o;
      const { value: s, onChange: d = i, $page: c } = n,
        { tagQueryFun: r = i, tagSaveFun: u = i, tagDeleteFun: m = i } =
          null !== (o = null == c ? void 0 : c.$props) && void 0 !== o ? o : {},
        p = e.useRef({ canBeClose: !0 }),
        [f, g] = e.useState([]);
      e.useEffect(() => {
        const e = r();
        e instanceof Promise && e.then((e) => g(e));
      }, []);
      const [v, h] = e.useState(!1),
        [y, _] = e.useState(!1),
        [b, S] = e.useState(""),
        x = () => {
          const e = (null != b ? b : "").trim();
          if (!e) return void t.message.warning("璇峰～鍐欒嚜瀹氫箟鏍囬鍐呭");
          const n = u(e);
          n instanceof Promise
            ? (h(!0),
              n
                .then((e) => {
                  e
                    ? (f.push(e), S(""), _(!1), g([...f]))
                    : t.message.warning("娣诲姞澶辫触");
                })
                .finally(() => h(!1)))
            : h(!1);
        },
        C = () => {
          _(!0);
        },
        [w, E] = e.useState(!1);
      return l.default.createElement(
        t.Select,
        {
          placeholder: "璇烽€夋嫨",
          loading: v,
          style: { minWidth: 150 },
          open: w,
          onDropdownVisibleChange: (e) => {
            e || p.current.canBeClose
              ? E(e)
              : setTimeout(() => p.current.canBeClose && E(!1), 0);
          },
          optionLabelProp: "label",
          value: s,
          onChange: (e) => {
            const t = f.find((t) => t.id === e);
            d(t);
          },
          dropdownRender: (e) =>
            l.default.createElement(
              "div",
              { className: a },
              e,
              l.default.createElement(t.Divider, {
                style: { margin: "4px 0" },
              }),
              l.default.createElement(
                "a",
                {
                  key: "add-btn",
                  onMouseDown: (e) => e.preventDefault(),
                  onClick: C,
                  className: "select-a " + (y ? "select-a-hidden" : ""),
                },
                "鑷畾涔�"
              ),
              l.default.createElement(
                "div",
                { className: "select-input " + (y ? "select-input-show" : "") },
                l.default.createElement(t.Input, {
                  onFocus: () => (p.current.canBeClose = !1),
                  onBlur: () => (p.current.canBeClose = !0),
                  id: "slect-input",
                  placeholder: "璇疯緭鍏ユ爣棰�",
                  value: b,
                  onChange: (e) => S(e.target.value),
                }),
                l.default.createElement(
                  t.Button,
                  {
                    onMouseDown: (e) => e.preventDefault(),
                    size: "small",
                    type: "primary",
                    loading: v,
                    onClick: x,
                  },
                  "纭畾"
                ),
                l.default.createElement(
                  t.Button,
                  {
                    onMouseDown: (e) => e.preventDefault(),
                    size: "small",
                    onClick: () => _(!1),
                  },
                  "鍙栨秷"
                )
              )
            ),
        },
        f.map((e, n) => {
          const { name: a, tagId: i, source: o } = e;
          return l.default.createElement(
            t.Select.Option,
            { key: i, value: i, label: a, className: "option-item" },
            a,
            2 === o &&
              l.default.createElement(t.Icon.CloseLine, {
                className: "icon-delete",
                onClick: () =>
                  ((e) => {
                    (p.current.canBeClose = !1), h(!0);
                    const n = m(f[e].id);
                    n instanceof Promise
                      ? n
                          .then((n) => {
                            n
                              ? (f.splice(e, 1), g([...f]))
                              : t.message.warning("鍒犻櫎澶辫触");
                          })
                          .finally(() => h(!1))
                      : h(!1);
                  })(n),
              })
          );
        })
      );
    },
    s = (e) =>
      l.default.createElement(
        t.Form.Item,
        { label: "娲诲姩鏍囩", name: "activityTag" },
        l.default.createElement(o, Object.assign({}, e))
      );
  return (
    (s.settingOption = {
      name: "娲诲姩鏍囩",
      key: "activityTag",
      props: {},
      settings: {},
      component: s,
    }),
    s
  );
});
//# sourceMappingURL=index.umd.js.map
