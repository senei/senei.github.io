import {
  withScopeId as s,
  pushScopeId as a,
  createVNode as e,
  popScopeId as n,
  openBlock as t,
  createBlock as c,
  defineComponent as l,
  createApp as o,
} from "https://unpkg.com/vue@3.0.0-beta.5/dist/vue.esm-browser.prod.js";
var p = {};
const r = s("data-v-3e85f279");
a("data-v-3e85f279");
const d = { class: "flex-auto text-center name" },
  u = e("span", { class: "s" }, "s", -1),
  i = e("span", { class: "e1" }, "e", -1),
  m = e("span", { class: "n" }, "n", -1),
  f = e("span", { class: "e2" }, "e", -1),
  v = e("span", { class: "i" }, "i", -1),
  b = e(
    "small",
    null,
    [
      e("span", { class: "_w" }, "w"),
      e("span", { class: "_e" }, "e"),
      e("span", { class: "_b" }, "b"),
    ],
    -1
  );
n();
const h = r(function (s, a) {
  return t(), c("h1", d, [u, i, m, f, v, b]);
});
(p.render = h),
  (p.__scopeId = "data-v-3e85f279"),
  o(l(p)).mount("#senei"),
  new FontFaceObserver("StencilRough").load().then(function () {
    document.body.classList.add("has-stencil");
  });
