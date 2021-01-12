class Rope{
    constructor(bodyA, pointB){
        var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness : 1,
          angularStiffness : 1,
          length : 220
        };
       
      this.pointB = pointB;
     // this.bodyA = bodyA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    

    display(){

        if(this.sling.bodyA){
            var SpriteA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            strokeWeight(3.5);
            stroke("#fff");
                
            line(SpriteA.x, SpriteA.y, pointB.x , pointB.y);
            pop();
        }
    }
    
}