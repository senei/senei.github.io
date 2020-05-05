import {
	withScopeId as e,
	pushScopeId as t,
	popScopeId as n,
	openBlock as s,
	createBlock as a,
	defineComponent as o,
	ref as c,
	computed as r,
	createVNode as i,
	createApp as d,
} from "./web_modules/vue/vue.runtime.esm-browser.prod.js";
import { createRouter as cr, createWebHistory as cwh } from "./web_modules/vue/vue-router.esm.js";

var l = {};
const p = e("data-v-51e68c33");
t("data-v-51e68c33");
const h = { class: "hidden" };
n();
const u = p(function (e, t) {
	return s(), a("div", h, " home ");
});
(l.render = u), (l.__scopeId = "data-v-51e68c33");
var m = o(l),
	v = {};
const w = e("data-v-f6d46782");
t("data-v-f6d46782");
const f = { class: "hidden" };
n();
const g = w(function (e, t) {
	return s(), a("div", f, " contact.vue ");
});
(v.render = g), (v.__scopeId = "data-v-f6d46782");
var b = o(v);
const _ = cwh("/");
let C = cr({
	history: _,
	routes: [
		{ path: "/", component: m },
		{ path: "/who", component: b },
		{ path: "/what", component: b },
		{ path: "/where", component: b },
		{ path: "/when", component: b },
		{ path: "/why", component: b },
	],
});
var k = {
	setup() {
		const e = c("start"),
			t = r(() => "flex-auto text-center name title-transform--" + e.value);
		return {
			transformId: e,
			transformClass: t,
			trigger: function (t, n) {
				(e.value = t), C.push(n);
			},
		};
	},
};
const y = e("data-v-e8ba3f3c");
t("data-v-e8ba3f3c");
const x = { class: "flex mx-auto mt-5 mb-5 logo" },
	I = i("span", { class: "_w" }, "w", -1),
	F = i("span", { class: "_e" }, "e", -1),
	R = i("span", { class: "_b" }, "b", -1);
n();
const j = y(function (e, t) {
	return (
		s(),
		a("section", x, [
			i(
				"h1",
				{ class: e.transformClass },
				[
					i(
						"span",
						{
							class: "s",
							onClick: t[1] || (t[1] = (t) => e.trigger("s", "who")),
						},
						"s"
					),
					i(
						"span",
						{
							class: "e1",
							onClick: t[2] || (t[2] = (t) => e.trigger("e1", "what")),
						},
						"e"
					),
					i(
						"span",
						{
							class: "n",
							onClick: t[3] || (t[3] = (t) => e.trigger("n", "where")),
						},
						"n"
					),
					i(
						"span",
						{
							class: "e2",
							onClick: t[4] || (t[4] = (t) => e.trigger("e2", "when")),
						},
						"e"
					),
					i(
						"span",
						{
							class: "i",
							onClick: t[5] || (t[5] = (t) => e.trigger("i", "why")),
						},
						"i"
					),
					i(
						"small",
						{ onClick: t[6] || (t[6] = (t) => e.trigger("web", "/")) },
						[I, F, R]
					),
				],
				2
			),
		])
	);
});
(k.render = j), (k.__scopeId = "data-v-e8ba3f3c");
const H = d(o(k));
H.use(C),
	H.mount("#senei"),
	(window.senei = H),
	(window.senei_router = C),
	new FontFaceObserver("StencilRough").load().then(function () {
		document.body.classList.add("has-stencil");
	});
