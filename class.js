class SpelElement {
    x;
    y;
    w;
    h;
    constructor(_x, _y, _w, _h) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
    }
}

class Game {
    run() {
        // Kleur de achtergrond zwart, zodat je het kunt zien
        background("black");
        
        // player
        player[0].show();
        player[0].update();

        // platforms
        platform[0].show();
        platform[0].update();
        platform[1].show();
        platform[1].update();
  
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
            if (keyIsPressed && keyCode === 68) {
                this.x = this.x + this.speedX;
            }
            // naar links bewegen
            if (keyIsPressed && keyCode === 65) {
                this.x = this.x - this.speedX;
            }
            // springen
            if (keyIsPressed && keyCode === 83) {
                this.y += 5;
            }

            if (keyIsPressed && keyCode === 87) {
                this.y -= 5;
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

    update() {

    }
}
