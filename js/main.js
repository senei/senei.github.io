import { SVG } from "/js/svg.esm.js";
//console.info(SVG);
var draw = SVG().addTo("#drawing").size(640,480);
    // draw.rect(100, 100).attr({ fill: "#f06" });
    draw.text("senei").attr("class", "main").attr("x", 210).attr("y", 155);
    draw.text("web").attr("class", "sub").attr("x", 347).attr("y", 213);