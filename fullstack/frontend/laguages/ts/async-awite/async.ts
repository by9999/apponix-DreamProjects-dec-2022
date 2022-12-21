async function myapi(){
var apidata=fetch('https://fakestoreapi.com/products')
var data=await(await apidata).json()
console.log(data)
}
myapi()