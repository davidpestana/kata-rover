var using = require('jasmine-data-provider');
const Rover = require('../src/Rover');


describe('Rover', () => {

    describe('PropertyPosition', () => {
        it('position property exists', () => {
            const rover = new Rover();
            const trust = rover.hasOwnProperty('position') && 
                !isNaN(rover.position.x)  && 
                !isNaN(rover.position.y);
            expect(trust).toEqual(true);
        });
    });
    
    describe('PropertyDirection', () => {
        it('position property exists', () => {
            const rover = new Rover();
            const trust = rover.hasOwnProperty('direction') && 
                ['N','S','W','E'].includes(rover.direction) 
            expect(trust).toEqual(true);
        });
    });


    describe('#Operations', () => {

        describe('Command', () => {
            using([{command:'fb',expected:{x:1,y:1}}, {command:'f',expected:{x:2,y:1}}], (data) => {
                // describe('case ' + index,() => {
                    it('Rover Receive Array of characters of command', ()=>{
                        const rover = new Rover();
                        const newPosition = rover.command(data.command);
                        // si el rover parte de 1,1  2,1 1,1, 1,1 1,1 1,1
                        expect(newPosition).toEqual(data.expected);
                    });
                // });
            });
        });
        
    });


});