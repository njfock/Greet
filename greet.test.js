var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');
describe('test greet', () => {
    
    test('just one argument', () => {
        expect(greet('Elizabeth')).toBe("Hello, Elizabeth");
    });
    test('"name" parameter is null', () => {
        expect(greet()).toBe("Hello there!");
    });
    test('"name" is all uppercase', () => {
        expect(greet('JOSE')).toBe("HELLO JOSE!");
    });
    test('"name" parameter is an array containing two names', () => {
        expect(greet(['Jose','Pep'])).toBe("Hello, Jose, Pep");
    });
    test('"name" parameter is an array of multiple names', () => {
        expect(greet(['Alex','Arsene','Jose','Zidane'])).toBe("Hello, Alex, Arsene, Jose, Zidane");
    });
});