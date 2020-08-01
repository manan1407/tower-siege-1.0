class ConstraintBodies {
    constructor(bodyA,bodyB){
       var options = {
           bodyA : bodyA,
           bodyB : bodyB,
           length : 10,
           stiffness : 0.3
       }

       this.chain = Constraint.create(options);
       World.add(world,this.chain);
    }

    fly(){
        this.chain.bodyB = null;
    }

    display (){
        if(this.chain.bodyB){
        var posA = this.chain.bodyA.position;
            var posB = this.chain.bodyB.position;
            push ();
            line (posA.x,posA.y,posB.x,posB.y);
            pop ();
        }
        
    }
}