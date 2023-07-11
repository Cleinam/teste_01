const test = require('tape')
const func = require('./teste') 
/*
test('Aplicar desconto padrão', (t) => {  
    t.assert(func.aplicardesconto(10,5) === 5, "Desconto true 01")
    t.end()

})
test('Aplicar desconto padrão', (t) => {  
    t.assert(func.aplicardesconto(11,5) === 5, "Desconto false 01")
    t.end()

})
test('Aplicar desconto padrão', (t) => {  
    t.assert(func.aplicardesconto(20,5) === 5, "Desconto true 01")
    t.end()

})
test('Aplicar desconto padrão', (t) => {  
    t.assert(func.aplicardesconto(100,50) === 5, "Desconto true 01")
    t.end()

})
test('Aplicar desconto padrão', (t) => {  
    t.assert(func.aplicardesconto(1000,500) === 500, "Desconto true 01")
    t.end()

}) 
*/

test('Valida se é numero', (t) => {  
    t.assert(func.validanumero(100) === true, "validacao 01")
    t.end()
})

test('Valida se é numero', (t) => {  
    t.assert(func.validanumero('Jonas') === true, "validacao 01")
    t.end()
})
