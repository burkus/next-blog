
class Boid {
    constructor(x, y, dx, dy, width, height, maxVelocity) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.width = width;
        this.height = height;
        this.maxVelocity = maxVelocity;
    }

    step() {
        if(this.dx > this.maxVelocity) this.dx = this.maxVelocity;
        else if(this.dx < -this.maxVelocity) this.dx = -this.maxVelocity;
        if(this.dy > this.maxVelocity) this.dy = this.maxVelocity;
        else if(this.dy < this.maxVelocity) this.dy = -this.maxVelocity;
        this.x += this.dx;
        this.y += this.dy;
    }

    boundaries(window, margin) {
        if(this.x <= 0 + margin) {
            this.dx += this.maxVelocity * 2;
        }
        if(this.x >= window.innerWidth - margin) {
            this.dx -= this.maxVelocity * 2;
        }
        if(this.y <= 0 + margin) {
            this.dy += this.maxVelocity * 2;
        }
        if(this.y >= window.innerHeight - margin) {
            this.dy -= this.maxVelocity * 2;
        }
    }

    getMovements(boids) {
        let bx = 0, by = 0;
        let bdx = 0, bdy = 0;
        const pv = {
            x: 0,
            y: 0
        }
        for(const boid of boids) {
            if(boid === this) continue;

            bx += boid.x;
            by += boid.y;

            bdx += boid.dx;
            bdy += boid.dy;

            if(this.distanceFrom(boid) < 50) {
                pv.x -= boid.x - this.x;
                pv.y -= boid.y - this.y;
            }
        }

        bdx /= (boids.length - 1);
        bdy /= (boids.length - 1);
        bx /= (boids.length - 1);
        by /= (boids.length - 1);
        bx = (bx - this.x);
        by = (by - this.y);
        return [
            { x: pv.x, y: pv.y },
            { x: (bdx - this.dx) / 10, y: (bdy - this.dy) / 10 },
            { x: bx / 3000, y: by / 3000 }
        ];
    }

    distanceFrom(otherBoid) {
        return Math.sqrt(
            Math.pow(otherBoid.x - this.x, 2)
            +
            Math.pow(otherBoid.y - this.y, 2)
        )
    }
}

export default Boid;