function* aa(){
    yield 10
    yield 20
    yield 30
}
var oneperson=aa()
console.log( oneperson.next().value)
console.log( oneperson.next().value)
console.log( oneperson.next().value)
console.log( aa().next().value)
console.log( aa().next().value)
console.log( aa().next().value)