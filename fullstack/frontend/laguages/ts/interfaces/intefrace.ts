interface Ihello{a:string,b:string}

function hello(props:Ihello){

}











interface Imyfruites1<Mytype>{
    a:string,
    b:string,
    abc?:Mytype
}

var myfruites1:Imyfruites1<string>={
    a:'apple',b:'banana'
}
myfruites1.abc='hello'
var myfruites2:Imyfruites1<number>={
    a:'apple',b:'banana'
}
myfruites2.abc=2345







interface Imyfruites{
    a:string,
    b:string,
    [key:string]:string
}

var myfruites:Imyfruites={
    a:'apple',b:'banana'
}
myfruites.abc='hello'










interface Ifruites{
a:string,
b:string,
o?:string//optional property
}



var fruites:Ifruites={
    a: 'apple', b: 'banana',
    
}
//console.log(fruites)
fruites.o='orange'
//console.log(fruites)