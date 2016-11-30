var colorThief = new ColorThief();
var color = colorThief.getColor(document.querySelector('img'));

console.log(color);

document.body.style.backgroundColor = color;
