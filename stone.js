class Stone{
    constructor(x,y,r){
        var options ={
            isStatic: false,
            'restitution' : 0,
            'friction' : 1,
            'density' :1.2
        }
     this.body = Bodies.circle(x,y,r,options);
     this.r = r;
     this.image = loadImage("sprites/stone.png");
     World.add(world,this.body);
    }
   display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
      }
}