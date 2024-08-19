class AnimationFrame{
    constructor(props){
        this.positionSprite = props.positionSprite
        this.sizeFrame = props.sizeFrame
        this.time = props.time 
        this.timeMin = props.timeMin
        this.timeMax =  props.timeMax
    }


    UPDATE(event){
        
        this.time++
        let acao = event.acao
        if(this.timeMax == this.time) {
            this.positionSprite.x += this.sizeFrame.width
            this.time = this.timeMin
        }
             
       if(this.positionSprite.x >= 1152){
            this.positionSprite.x = 192
       }
       if(acao != undefined){
        this.positionSprite.y = 
        this.sizeFrame.height * acao
       } 
    }
}