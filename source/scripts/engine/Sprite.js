class Sprite extends AnimationFrame{
    constructor(props){
        super(props)
        this.position = props.position
        this.image = new Image()
        this.src = props.src 
        this.image.src = this.src 
        this.image.onload = () => {
           this.image.loaded = true
        }
       
        this.sizeFrameCanvas = props.sizeFrameCanvas
    }

    
    DRAW(event){
        if(!this.image.loaded) return
 
        const ctx = event.context;

        if(ctx == undefined || ctx == null ) return
        ctx.drawImage(
            this.image,
            this.positionSprite.x,  // Posição X no sprite
            this.positionSprite.y, // Posição Y no sprite
            this.sizeFrame.width,           // Largura do frame
            this.sizeFrame.height,          // Altura do frame
            this.position.x,              // Posição X no canvas
            this.position.y,              // Posição Y no canvas
            this.sizeFrameCanvas.width,           // Largura do frame no canvas
            this.sizeFrameCanvas.height           // Altura do frame no canvas
        );
    }
}