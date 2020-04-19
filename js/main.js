import { SVG } from "/js/svg.esm.js";
import FontFaceObserver from "/web_modules/fontfaceobserver/fontfaceobserver.js";

var draw = SVG().addTo("#drawing").size(640,480);
var StencilRoughLisener = new FontFaceObserver("StencilRough");

StencilRoughLisener.load().then(function () {
  draw.text("senei").attr("class", "main").attr("x", 210).attr("y", 155);
  draw.text("web").attr("class", "sub").attr("x", 347).attr("y", 213);
});