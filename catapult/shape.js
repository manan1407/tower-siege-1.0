class shape {
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,30,30,{isStatic:true});
        this.width = 50;
        this.hieght = 50;
         
        World .add(world,this.body);
        
        
    }

    display(){
        var position = this.body.position;
        push ();
        rectMode(CENTER);
        fill ("yellow");
        //position.x = mouseX;
        //position.y = mouseY;
        rect(position.x,position.y,this.width,this.hieght);
        pop ();
    }
}
