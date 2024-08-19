class WebSocketServiceApi {
    constructor(url) {
        this.url = url;
        this.socket = null;
        this.PlayersEnemy = [];
        this.PlayersEnemyConvert = [];
        this.connect();
        window.addEventListener("beforeunload", () => this.beforeUnload());
    }

    async connect() {
        this.socket = new WebSocket(this.url);

        // Evento disparado quando a conexão é aberta
        this.socket.onopen = async (event) => {
            console.log('Conectado ao WebSocket');
            await this.onOpen(event);
        };

        // Evento disparado quando uma mensagem é recebida do servidor
        this.socket.onmessage = async (event) => {
            await this.onMessage(event.data);
        };

        // Evento disparado quando ocorre um erro
        this.socket.onerror = async (error) => {
            console.error('Erro no WebSocket:', error);
            await this.onError(error);
        };

        // Evento disparado quando a conexão é fechada
        this.socket.onclose = async (event) => {
            console.log('Conexão com WebSocket fechada:', event);
            await this.onClose(event);
        };
    }

    // Método assíncrono para enviar uma mensagem para o servidor
    async sendMessage(message) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        } else {
            console.warn('Conexão WebSocket não está aberta.');
        }
    }

    // Método assíncrono para fechar a conexão
    async closeConnection(message) {
        if (this.socket) {
            this.socket.close(1000, message);
        }
    }

    // Método assíncrono para sobrescrever a ação quando a conexão é aberta
    async onOpen(event) {
        console.log('Conexão aberta:', event);
    }

    // Método assíncrono para sobrescrever a ação quando uma mensagem é recebida
    async onMessage(message) {
        this.PlayersEnemy = JSON.parse(message);
        this.PlayersEnemyConvert = this.PlayersEnemy.map(item => new GenericsObj({
            position: item.position,
            tag: item.tag,
            positionSprite: item.positionSprite,
            positionOffSet: item.positionOffSet,
            sizeFrame: item.sizeFrame,
            sizeFrameCanvas: item.sizeFrameCanvas,
            sizeOffSet: item.sizeOffSet,
            time: item.time,
            timeMin: item.timeMin,
            timeMax: item.timeMax,
            src: item.src
        }));
        //console.log(this.PlayersEnemyConvert)
    }

    // Método assíncrono para sobrescrever a ação quando ocorre um erro
    async onError(error) {
        console.error('Erro:', error);
    }

    // Método assíncrono para sobrescrever a ação quando a conexão é fechada
    async onClose(event) {
        console.log('Conexão fechada:', event);
    }
}
