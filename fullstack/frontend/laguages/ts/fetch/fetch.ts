const myfun=(a)=>{ 
    return a.json()
}

var apiData=fetch('https://fakestoreapi.com/products')
apiData.then(myfun).then((a)=>{console.log("aa",a)})
console.log(apiData);

