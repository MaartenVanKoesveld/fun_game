class SpelElement {
    x;
    y;
    w;
    h;
}

class Game {
    run() {
        // Kleur de achtergrond zwart, zodat je het kunt zien
        background("black");
        fill(0, 255, 0);
        ellipse(500, 100, 80, 80);
        // player
        player[0].show();
        //player[0].update();

        // platforms
        platform[0].show();
    }
}

class Player extends SpelElement {
    speedX; // horizontale snelheid
    constructor(_x, _y, _w, _h, _speedX) {
        super(_x, _y, _w, _h);
        this.speedX = _speedX;
    }

    show() {
        fill(255,0,0);
        rect(this.x, this.y, this.w, this.h);
    }

    update() {
        // naar rechts bewegen
        if (keyIsPressed === true && keyCode === 68) {
            this.x = this.x + this.speedX;
        }
        // naar links bewegen
        if (keyIsPressed === true && keyCode === 65) {
            this.x = this.x - this.speedX;
        }
        // springen
        if (keyIsPressed === true && keyCode === 32) {
            this.y += 3;
        }

    }

}

class Platform extends SpelElement {

    constructor(_x, _y, _w, _h) {
        super(_x, _y, _w, _h);
    }

    show() {
        fill(130,130,130);
        rect(this.x, this.y, this.w, this.h);
    }
}
