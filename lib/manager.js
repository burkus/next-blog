
class Manager {
    paused = false;
    frame = 0;
    constructor(render, window) {
        this.render = render;
        this.window = window;
    }

    run = () => {
        this.render(this.width, this.height);
        this.frame = window.requestAnimationFrame(this.run);
    }

    stop() {
        window.cancelAnimationFrame(this.frame);
    }
}

export default Manager;