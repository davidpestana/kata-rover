var using = require('jasmine-data-provider');
const HelloWorld = require('../src/HelloWorld');



describe('HelloWorld', () => {
  using([{text: 'Hello, world!', expected: true},{text: 'BYE', expected: false}],(data) => {
    describe('#greet', () => {
      it('returns the classic hello world', () => {
        const result = data.text === HelloWorld.greet();
        expect(result).toEqual(data.expected);
      });
    })
  });
});
