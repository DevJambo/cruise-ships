class Port {
    constructor (name) {
        this.name = name
        this.ships = [];
}
addShip(ship) {
    this.ships.push(ship)
}
removeShip(index, ship) {
this.ships.splice(index, 1)
}
}

module.exports = Port