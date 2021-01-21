var using = require('jasmine-data-provider');
const Rover = require('../src/Rover');


describe('Rover', () => {

    describe('PropertyPosition', () => {
        const trust = Rover.hasOwnProperty('position') && 
            isArray(Rover.position) && 
            Rover.position.length == 2 && 
            Rover.position.x && 
            Rover.position.y;
        expect(trust).toEqual(true);
    });
    
    describe('PropertyDirection', () => {
        const trust = Rover.hasOwnProperty('direction') && 
        isString(Rover.direction) && 
        Rover.direction.includes(['N','S','W','E']) 
        expect(trust).toEqual(true);
    });


});