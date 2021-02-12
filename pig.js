class Pig extends Parentclass {
    constructor(x, y) {
        super(x, y, 50, 50);
        this.image = loadImage("sprites/enemy.png");
        this.visibility = 255;

    }
    display() {
        if (this.body.speed < 3) {
            super.display();
        }
        else {
            
            World.remove(myworld, this.body);
            push();
            this.visibility += -5;
            tint(255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50)
            pop();


        }


        // console.log(this.body.speed);
    }

    score() {
        if(this.visibility<0 && this.visibility>-1000)
        {
            score++;
        }
    }
}