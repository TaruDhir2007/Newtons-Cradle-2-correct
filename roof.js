class Roof {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(350, 200,500,20,options);
      this.width = 500;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };