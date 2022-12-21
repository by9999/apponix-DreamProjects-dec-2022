var saryansPromiss=new Promise((resol:Function,notresol:Function)=>{
   // resol('promiss fullfilled')
   notresol('not resolved')
})
saryansPromiss.then((a)=>{console.log(a)})
saryansPromiss.catch((a)=>{console.log(a)})
console.log(saryansPromiss)