class rain {
    constructor(x,y,radius)
    {
        var options = {
            isStatic:false,
            'restitution':1.0,
            'friction':0.1,
            'density':0.8
        }
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        
        
        
        World.add(world, this.body); 
        
        

    }
    
    display()
    {
        fill("blue");
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        circle(0,0,this.radius);
        pop();
          
        
      
        
    }
    update()
    {
        if(this.body.position.y<800)
        {
            Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})

        }
    }
}