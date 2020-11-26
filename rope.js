class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    fly(){
      this.Rope.bodyA=null;
    }

    display(){
        if(this.Rope.bodyA){
            var Rope = this.Rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            fill("white");
            line(Rope.x, Rope.y, pointB.x, pointB.y);
        }
    }
    
}
