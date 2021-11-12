import io from 'socket.io-client';

export default class Socket {
    constructor(server = 'http://192.168.1.4:3000') {
        this.socket = io(server);
        this.socket.on("connect_error" ,(err) => {
            console.log(err.message)
        });
    }
    
    type(text) {
        this.socket.emit('type',text);
    }
    
}