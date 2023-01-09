var oriObj={a:10,b:20,c:30}
var copyObj={...oriObj}
console.log("org",oriObj)
console.log("copy",copyObj)
copyObj.d=40
console.log("org",oriObj)
console.log("copy",copyObj)