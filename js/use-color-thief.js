var colorThief = new ColorThief();
var color = colorThief.getColor(document.querySelector("img"));

console.log({ color });

document.body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
