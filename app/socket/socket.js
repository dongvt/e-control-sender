import io from "socket.io-client";

export default class Socket {
  constructor(server = "http://192.168.1.4:3000") {
    this.socket = io(server);
    this.socket.on("connect_error", err => {
      console.log(err.message);
    });
  }

  type(text) {
    this.socket.emit("type", text);
  }

  move(x, y) {
    this.socket.emit("move", [x, y]);
  }

  press() {
    this.socket.emit("mousePress", true);
  }

  pressRelease() {
    this.socket.emit("mousePress", false);
  }
}
