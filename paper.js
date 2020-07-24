class Paper {
    constructor(x,y,r){
        var options ={
            restitution: 0.05,
            isStatic   : false,
           // speed      :  0.5,
            density    : 1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle (this.x,this.y,this.r,options);
        World.add(world,this.body)
     }
     display(){
         var pos = this.body.position;
         push()
         translate(pos.x,pos.y)
         fill("red")
         strokeWeight(3)
         ellipse(0,0,this.r)
         pop()
     }

}