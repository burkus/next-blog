import Boid from "./Boid";

class Boids {
    constructor(count, window, margin, maxVelocity) {
        this.boids = [];
        this.window = window;
        this.margin = margin;
        this.maxVelocity = maxVelocity;
        for(let i = 0; i < count; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const dx = Math.random() * maxVelocity;
            const dy = Math.random() * maxVelocity;
            this.boids.push(
                new Boid(x, y, dx, dy, 5, 5, maxVelocity)
            );
        }
    }

    step() {
        for(const boid of this.boids) {
            const vectors = boid.getMovements(this.boids);
            vectors.forEach(vector => {
                boid.dx += vector.x;
                boid.dy += vector.y;
            });
            boid.step();
            boid.boundaries(this.window, this.margin);
            // console.log(boid.x, boid.y, boid.dx, boid.dy)
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for(const boid of this.boids) {
            const { x, y, width, height } = boid;
            ctx.fillRect(x, y, width, height);
        }
    }
}

export default Boids;