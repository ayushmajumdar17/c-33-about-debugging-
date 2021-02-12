class slingShotClass {

    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(myworld, this.sling);
        //console.log(this.sling);

    }
    attach(body)
    {
         this.sling.bodyA = body
    }
    fly() {
        this.sling.bodyA = null
    }

    display() {

        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);

        if (this.sling.bodyA !== null) {
            push();
            strokeWeight(5);
            stroke(48, 22, 8);
            if (this.sling.bodyA.position.x < 220) {
                strokeWeight(7);
                line(this.sling.bodyA.position.x - 20, this.sling.bodyA.position.y, this.pointB.x - 10, this.pointB.y)
                line(this.sling.bodyA.position.x - 20, this.sling.bodyA.position.y, this.pointB.x + 30, this.pointB.y - 3);
                image(this.sling3, this.sling.bodyA.position.x - 30, this.sling.bodyA.position.y - 10, 15, 30);

            }
            else
            {
                strokeWeight(7);
                line(this.sling.bodyA.position.x - 20, this.sling.bodyA.position.y, this.pointB.x - 10, this.pointB.y)
                line(this.sling.bodyA.position.x - 20, this.sling.bodyA.position.y, this.pointB.x + 30, this.pointB.y - 3);
                image(this.sling3, this.sling.bodyA.position.x +25, this.sling.bodyA.position.y - 10, 15, 30);
            }

            pop();
            // strokeWeight(5);
            // line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);
        }


    }


}



