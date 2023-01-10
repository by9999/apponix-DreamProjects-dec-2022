
function hello(){
    console.log('hello im a function')
}
hello()
function test2(a:any){
    return <h1>{a}</h1>
}
const Test4=(a:any)=>{
    return <h4>ggg</h4>
}
const Test3:React.FC<{a:string}>=(a)=>{
    return <h1></h1>
}
console.log(test2('hello'))
export const DifferntwaysToCallAfunction:React.FC<{}>=()=>{
    return <>
    hello im a page1234   {test2('hello im 2')}
    {Test3({a:'hello'})}
    <Test3 a={"gg"}/>
    {Test4('j')}
    <Test4/>
    </>
}