class obs {
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,30,30,{isStatic:true});
        this.width = 40;
        this.hieght = 40;
         
        World .add(world,this.body);
        
        
    }

    display(){
        var position = this.body.position;
        push ();
        rectMode(CENTER);
        fill ("blue");
        rect(position.x,position.y,this.width,this.hieght);
        pop ();
    }
}
