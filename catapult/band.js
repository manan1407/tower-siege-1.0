class band {
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,10,10,{isStatic:true});
        this.width = 10;
        this.hieght = 10;
         
        World .add(world,this.body);
        
        
    }

    display(){
        var position = this.body.position;
        push ();
        rectMode(CENTER);
        fill ("red");
        rect(position.x,position.y,this.width,this.hieght);
        pop ();
    }
}
