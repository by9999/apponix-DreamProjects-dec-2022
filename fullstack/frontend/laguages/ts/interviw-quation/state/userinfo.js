var myarry = [];
function captureinfo(info) {
    myarry.push(info);
    console.log(myarry);
    var div = document.getElementById('root');
    myarry.map(function (val) {
        var h1 = document.createElement('h1');
        h1.innerHTML = val;
        div.appendChild(h1);
    });
}
// var div=document.getElementById('root') as HTMLDivElement
// div.innerHTML='hello im vittally attched'
