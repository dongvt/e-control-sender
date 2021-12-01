import io from "socket.io-client";

export default class Socket {
  constructor(server = "") {
    this.socket = io(server);
    this.socket.on("connect_error", err => {
      this.socket = null;
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
