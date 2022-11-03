const Ship = require('../src/Ship.js');
const Port = require('../src/Ship.js');

describe('Port', () => {
    it('can be instantiated', () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
    it('port has a name', () => {
        const port = new Port('Dover');
    })
    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);
        const calais = new Port('Calais');
        
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    });
  });