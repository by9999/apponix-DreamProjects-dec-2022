var saryansPromiss = new Promise(function (resol, notresol) {
    // resol('promiss fullfilled')
    notresol('not resolved');
});
saryansPromiss.then(function (a) { console.log(a); });
saryansPromiss["catch"](function (a) { console.log(a); });
console.log(saryansPromiss);
