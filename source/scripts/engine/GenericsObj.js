class GenericsObj extends Sprite{
    tag = null
    constructor(props){
        super(props)
        this.tag = props.tag
        this.velocity = props.velocity
        this.positionOffSet = props.positionOffSet
        this.sizeOffSet = props.sizeOffSet
        this.direction = {
            right:false,
            left:false,
            up:false,
            down:false
        }
    }
    get realPosition(){
        return {
            x:this.position.x + this.positionOffSet.x,
            y:this.position.y + this.positionOffSet.y
        }
    }
    get realSize(){
        return {
            width: this.sizeFrame.width - this.sizeOffSet.width,
            height: this.sizeFrame.height - this.sizeOffSet.height
        }
    }
    UPDATE(event){
        event.acao = 0
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(event.playersEnemy != undefined){
            
            this.colisao(event.playersEnemy)
        }
       event.acao = this.toMove(event.keyboard)
       
        super.UPDATE(event)

    }
    colisao(objs){
        for (let y = 0; y < objs.length; y++) {

            if(objs[y].realPosition.x + objs[y].realSize.width > this.realPosition.x &&
                objs[y].realPosition.x < this.realPosition.x + this.realSize.width &&
                objs[y].realPosition.y + objs[y].realSize.height > this.realPosition.y &&
                objs[y].realPosition.y < this.realPosition.y + this.realSize.height 
            ){
                if(this.velocity.y > 0){
                    this.position.y = objs[y].position.y - objs[y].realSize.height - 0.1
                    this.velocity.y = 0
                    return
                }else if(this.velocity.y < 0){
                    this.position.y = objs[y].position.y + objs[y].realSize.height + 0.1
                    this.velocity.y = 0
                    return
                }
                
            }
            if(objs[y].realPosition.x + objs[y].realSize.width > this.realPosition.x &&
                objs[y].realPosition.x < this.realPosition.x + this.realSize.width &&
                objs[y].realPosition.y + objs[y].realSize.height > this.realPosition.y &&
                objs[y].realPosition.y < this.realPosition.y + this.realSize.height 
            ){
                
                if(this.velocity.x > 0){
                    this.position.x = objs[y].position.x - objs[y].realSize.width - 0.1
                    this.velocity.x = 0
                    return
                }else if(this.velocity.x < 0){
                    this.position.x = objs[y].position.x + objs[y].realSize.width + 0.1
                    this.velocity.x = 0
                    return
                }
                
            }

           
            console.log("N colisao")
        }
        for (let y = 0; y < objs.length; y++) {
           
            console.log("N colisao")
        }
        
    }
    toMove(key){
        let acao = 0 
        if(key){
            
            const keys = key.keys
            if(keys.F){
                 
                if(this.direction.left)acao = 3
                if(this.direction.right)acao = 3
                if(this.direction.up)acao = 6
                if(this.direction.down)acao = 5
                
            }else
            if(keys.W){
                this.direction.up = true
                this.direction.down = false
                this.direction.left = false
                this.direction.right = false

                this.velocity.y = -1
                acao = 1
                
            }else
            if(keys.S){
                this.direction.down = true
                this.direction.up = false
                this.direction.left = false
                this.direction.right = false
                this.velocity.y = +1
                acao = 1
    
            }else
            if(keys.D){
                this.direction.up = false
                this.direction.down = false
                this.direction.right = true
                this.direction.left = false
                this.velocity.x = +1
                acao = 1
    
            }else
            if(keys.A){
                this.direction.up = false
                this.direction.down = false
                this.direction.left = true
                this.direction.right = false
                this.velocity.x = -1
                acao = 1
            }
    
            if(!keys.W && !keys.S){
                
                this.velocity.y = 0 
            }
            if(!keys.D && !keys.A){
               
                this.velocity.x = 0 
            }
            return acao
        }
    }
    DRAW(event){
        const ctx = event.context;
        ctx.strokeRect(this.realPosition.x,this.realPosition.y,
                       this.realSize.width,this.realSize.height)
        super.DRAW(event)
        
    }
}