const { test } = require('@jest/globals');
const suma = require('../calc.js');



describe('Prueba de sumas', () => {
    
    test('suma de 2 numeros', () => {
        expect(suma(1,2)).toBe(3);
    })

    test('suma de 0', () => {
        expect(suma(0,0)).toBe(0);
    })

    test('suma de null', () => {
        expect(suma(null,null)).toBe(0);
    })
    test('suma de exto', () => {
        expect(suma('a','b')).toBe(0);
    })
})
    