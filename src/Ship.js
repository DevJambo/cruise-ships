class Ship {
    constructor (port) {
    this.currentPort = port;
    }
    setSail() {
        this.currentPort = false;
    }
    dock(port) {
    this.currentPort = port;
    }
}
class Port {
    constructor (name) {
        this.name = name
    }
}
module.exports = Ship, Port