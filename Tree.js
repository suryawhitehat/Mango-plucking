class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
       
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
       this.image=loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        var treepos=this.body.position;
        //push();
        //translate(treepos.x,treepos.y);
        
        imageMode(CENTER);
        
        image(this.image,treepos.x,treepos.y,this.width,this.height);
        //pop();
    }
    };