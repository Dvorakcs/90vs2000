class Initializer{
    #login = new Login()
    #SignUp = new SignUp()
    #Menu = new Menu()
    #HUB = new HUB()
    #Sala = new Sala()
    #Config = new Config()
    #Game = new Game()
    #RenderAndUpdate = {
        Login:false,
        SignUp:false,
        Menu:false,
        HUB:false,
        Sala:false,
        Config:false,
        Game:false
    }
    constructor(){
        
    }
    Start(){
        this.#RenderAndUpdate.Login = this.#login.start();
        this.Update({
            update:this.#RenderAndUpdate
        })
    }
    Update(eventUpdate){
        
        if(eventUpdate.update.Login) this.#login.Update()
        if(eventUpdate.update.SignUp)this.#SignUp.Update()
        if(eventUpdate.update.Menu)this.#Menu.Update()
        if(eventUpdate.update.HUB)this.#HUB.Update()
        if(eventUpdate.update.Sala)this.#Sala.Update()
        if(eventUpdate.update.Config)this.#Config.Update()
        if(eventUpdate.update.Game)this.#Game.Update()

        console.log(eventUpdate)
        this.Draw({
            ctx:null,
            render:eventUpdate.update
        })
        requestAnimationFrame(() => this.Update(eventUpdate))
    }
    Draw(eventDraw){
        if(eventDraw.render.Login) this.#login.Update()
        if(eventDraw.render.SignUp)this.#SignUp.Update()
        if(eventDraw.render.Menu)this.#Menu.Update()
        if(eventDraw.render.HUB)this.#HUB.Update()
        if(eventDraw.render.Sala)this.#Sala.Update()
        if(eventDraw.render.Config)this.#Config.Update()
        if(eventDraw.render.Game)this.#Game.Update()
    }
    Stop(){

    }
}