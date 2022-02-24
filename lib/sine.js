const period = 250;
const defaultSpacing = 16;
class Sine {
    angle = 0;
    dx = 0;
    xSpacing = defaultSpacing;
    constructor() {
        this.dx = ((Math.PI * 2) / period) * this.xSpacing;
    }

    draw(ctx) {
        const { width, height } = ctx.canvas;
        const strokeStyle = ctx.canvas.backgroundColor === 'black' ? 'white' : 'black';
        const color = ctx.canvas.backgroundColor === 'black' ? 'white' : 'black';
        let colorValue = 0;
        if(color === 'white') {
            colorValue = 255;
        }
        if(width <= 768) {
            this.xSpacing = 10;
            this.dx = ((Math.PI * 2) / period) * this.xSpacing;
        } else {
            this.xSpacing = defaultSpacing;
            this.dx = ((Math.PI * 2) / period) * this.xSpacing;
        }
        const radius = 10;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = ctx.canvas.backgroundColor;
        ctx.fillRect(0, 0, width, height)
        this.angle += 0.005;
        let x = this.angle;
        for(let i = 0; i < width / this.xSpacing; i++) {
            ctx.lineWidth = 1;
            const y = Math.sin(x) * height * 0.4;
            ctx.strokeStyle = `rgba(${colorValue}, ${colorValue}, ${colorValue}, ${i * this.xSpacing / width})`;
            ctx.beginPath();
            ctx.arc(i * this.xSpacing, y + height / 2, radius, 0, Math.PI * 2, false);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(i * this.xSpacing + width * 0.05, y + height / 2, radius, 0, Math.PI * 2, false);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(i * this.xSpacing + width * 0.1, y + height / 2, radius, 0, Math.PI * 2, false);
            ctx.stroke();
            x += this.dx;
        }
    }
}

export default Sine;