class Parentclass {
    constructor(x, y, width, height, angle) {
        var options = {
            'friction': 1.0,
            'density': 1.0,
            'restitution': 0.8
        }
        //JSON format Javascript object notation 
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(myworld, this.body);
    }
    display() {
        // var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(255, 255, 0)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();


    }

}