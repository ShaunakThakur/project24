class trashBin1{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width = width;
        this.heigth = height;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        
        push();
        fill("white");
        rectMode(CENTER);
        rect(1000,380,100,20);
        pop();
    }
}