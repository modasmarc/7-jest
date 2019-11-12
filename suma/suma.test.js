const suma = require('./suma.js');

it('tiesiog ar veikia', ()=>{
    expect( suma(6, 4) ).toBe(10)
})

it('tiesiog ar veikia', ()=>{
    expect( suma(6, 8) ).toBe(14)
})

it('ar tinkami tipai', ()=>{
    expect( suma('asdf', 8) ).toBe('Turi buti validus skaiciai')
})

it('ar tinkami tipai', ()=>{
    expect( suma(8, 'asdf') ).toBe('Turi buti validus skaiciai')
})

it('ar tinkami tipai', ()=>{
    expect( suma(NaN, 8) ).toBe('Turi buti validus skaiciai')
})

it('ar tinkami tipai', ()=>{
    expect( suma(8, NaN) ).toBe('Turi buti validus skaiciai')
})


it('ar tinkami tipai', ()=>{
    expect( suma(8, Infinity) ).toBe('Turi buti validus skaiciai')
})

it('ar tinkami tipai', ()=>{
    expect( suma(Infinity, 9) ).toBe('Turi buti validus skaiciai')
})