var myfun = function (a) {
    // console.log("first",a.json())
    return a.json();
};
var apiData = fetch('https://fakestoreapi.com/products');
apiData.then(myfun).then(function (a) { console.log("aa", a); });
console.log(apiData);
