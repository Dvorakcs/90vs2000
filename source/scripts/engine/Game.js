class Game{
    map = null
    PlayersEnemy = null
    Players = null
    constructor(props){
        this.map = props.map
        this.PlayersEnemy = props.PlayersEnemy
        this.Players = props.Players
        this.WsService = new WebSocketServiceApi("wss://localhost:3333")

    }

    UPDATE(event){
        if(this.WsService.PlayersEnemyConvert.length > 0){
            this.PlayersEnemy = this.WsService.PlayersEnemyConvert
            event.playersEnemy = this.PlayersEnemy
        }
        
        if(this.Players != undefined){
            this.Players.forEach(player => {
                
                player.UPDATE(event)
                
                this.WsService.sendMessage(JSON.stringify(player));
            });
        }
        
    }

    DRAW(event){
       // this.map.DRAW(event)
        if(this.PlayersEnemy != undefined){
            this.PlayersEnemy.forEach(playerEnemy => {
                
                playerEnemy.DRAW(event)
            });
        }
        
        if(this.Players != undefined){
            this.Players.forEach(player => {
                player.DRAW(event)
            });
        }
    }
}