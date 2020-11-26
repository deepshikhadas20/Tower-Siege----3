class Box{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.image = loadImage("box.png"); 
        this.visibility = 255;  

        this.body = Bodies.rectangle(x, y, 30, 50, options);
        this.width = 30;
        this.height = 50;
        
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed< 3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER); 
        image(this.image,0, 0, this.width, this.height);
        pop();
        } 
      else{
        World.remove (world, this.body); 
         push(); 
        this.visibility -= 5; 
        tint(255,this.visibility); 
        imageMode(CENTER); 
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
        pop();  
       }
      

      }
      scoring(){ 
        if(this.visibility<0 && this.visibility>-105){ 
          score++ ; 
        }
      }
}