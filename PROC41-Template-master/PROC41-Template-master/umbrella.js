class umbrella {
    constructor(x,y,radius)
    {
        var options = {
            isStatic:true,
            
        }
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        this.image=loadImage("walking_1.png")
        
        
        World.add(world, this.body); 
        
        

    }
    
    display()
    {
        
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        iamge(this.image,0,0,this.radius);
        pop();
          
        
      
        
    }
}