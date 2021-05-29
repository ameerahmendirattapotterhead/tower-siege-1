class slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 20,
            stiffness: 0.04
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body) {
        this.slingshot.bodyA = bodyA;
    }


    fly() {
        this.slingshot.bodyA = null;
    }


    display() {
        if (this.slingshot.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            stroke("white");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
}