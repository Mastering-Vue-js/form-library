import { openBlock as o, createElementBlock as n, toDisplayString as c, createElementVNode as l } from "vue";
const a = (t, r) => {
  const e = t.__vccOpts || t;
  for (const [s, i] of r)
    e[s] = i;
  return e;
}, u = { class: "form-library-group" }, _ = ["href"], d = { key: 1 }, p = {
  __name: "Button",
  props: {
    text: String,
    url: String | Boolean
  },
  setup(t) {
    return (r, e) => (o(), n("div", u, [
      t.url != !1 ? (o(), n("a", {
        key: 0,
        href: t.url
      }, c(t.text), 9, _)) : (o(), n("button", d, c(t.text), 1))
    ]));
  }
}, b = /* @__PURE__ */ a(p, [["__scopeId", "data-v-83db6e14"]]), h = { class: "form-library-group" }, f = ["type", "placeholder"], m = {
  __name: "Input",
  props: {
    type: String,
    placeholder: String,
    label: String
  },
  setup(t) {
    return (r, e) => (o(), n("div", h, [
      l("label", null, c(t.label), 1),
      l("input", {
        type: t.type,
        placeholder: t.placeholder
      }, null, 8, f)
    ]));
  }
}, g = /* @__PURE__ */ a(m, [["__scopeId", "data-v-d7a521bb"]]);
export {
  b as Button,
  g as Input
};
