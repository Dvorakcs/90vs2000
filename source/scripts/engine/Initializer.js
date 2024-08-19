class Initializer{
    constructor(){
        this.srcs = ["./source/image/images_engine/characters/Warrior_Blue.png","./source/image/images_engine/characters/Pawn_Blue.png","./source/image/images_engine/characters/Archer_Blue.png"]
        this.Canvas = document.getElementById("_canvas")
        this.Context = this.Canvas.getContext('2d')
        this.Name = null
        this.keyboard = new Keyboard()
        console.log((Math.random(0,10) * 100).toFixed(0))
        
        this.Game = new Game({
            Players: [new GenericsObj({
                
                position:{x:10 , y:20},
                tag:"Player-" + (Math.random(0,10) * 100).toFixed(0),
                positionOffSet:{x:75,y:75},
                velocity:{x:0,y:0},
                sizeOffSet:{width:150,height:150},
                positionSprite:{x:192,y:192},
                sizeFrame:{width:192,height:192},
                sizeFrameCanvas:{width:192,height:192},
                src: this.srcs[parseInt((Math.random(0,1) * 3))],
                time : 1,
                timeMin :1,
                timeMax :8
            })]
        })
        this.UPDATE()
    }

    UPDATE(){
        this.Game.UPDATE({
            keyboard:this.keyboard,
            playersEnemy:this.playersEnemy
        })
        this.DRAW()
        requestAnimationFrame(() => this.UPDATE())
    }

    DRAW(){
        this.Context.clearRect(0,0,this.Canvas.clientWidth,this.Canvas.clientHeight)
        this.Game.DRAW({
            context:this.Context
        }) 
                  
    }

}