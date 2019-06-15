let cnv = document.querySelector('canvas');
let ctx = cnv.getContext('2d');
let width = '600'
let height = '600'
cnv.style.background = 'black'
cnv.width = width
cnv.height = height

ctx.fillStyle = 'green'

let mouse = {
	x: 0,
	y: 0,
	oldX: 0,
	oldY: 0
}
let clear = function () {
	ctx.clearRect(0, 0, width, height)
};

let fillRect = function (x, y, w, h) {
	ctx.fillRect(x, y, w, h)
}


cnv.onmousemove = function (e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;

}


setInterval(function () {
	clear();
	fillRect(20, 20, 30 +Math.abs(mouse.x - mouse.oldX), 40);
	fillRect(20, 80, 30+ Math.abs(mouse.y - mouse.oldY), 40);
	mouse.oldX = mouse.x;
	mouse.oldY = mouse.y;
}, 1000/20)