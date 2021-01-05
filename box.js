class Box{



    constructor(x,y,width,height){
    
    var opt={
    
        'restitution':0.8,
        'density':1,
        'friction':5

    
    }
    
    
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,opt);
    World.add(world,this.body)
    
    
    }
    
    display(){
    
    rectMode(CENTER);
    //var angle=this.body.angle;
    var pos=this.body.position;
    //rotate(angle);
    strokeWeight(0.5);
    //fill(135,206,234)
    rect(pos.x,pos.y,this.width,this.height);
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    