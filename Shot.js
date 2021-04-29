class Shot{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 3
        }
        this.pointB = pointB;
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }
    
    
    fly(){
        this.shot.bodyA = null;
    }

    launch(body){
		this.shot.bodyA=body;
	}
    display(){
        
    }
}
