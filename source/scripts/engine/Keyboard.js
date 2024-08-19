class Keyboard{
    keys = {
        W:false
    }
    constructor(){
        addEventListener('keydown', (event) => this.setKey(event.key,true))
        addEventListener('keyup', (event) => this.setKey(event.key,false))
    }



    setKey(key,value){
        this.keys[key.toUpperCase()] = value
    }
}