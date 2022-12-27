async function myFlipkartdata(){
  var apidata=fetch('https://fakestoreapi.com/products')
  apidata=await(await apidata).json()
  console.log(apidata)
  
//   virtualcardCreator(apidata[0].title,apidata[0].image,apidata[0].description)

  apidata.map((a)=>{
    virtualcardCreator(a.title,a.image,a.description)
  })
}
myFlipkartdata()

function virtualcardCreator(heading:string,imgAddress:string,paragraph:string){
    var h1=document.createElement('h1')
    h1.innerHTML=heading
    
    var img=document.createElement('img')
    img.width=200
    img.height=200
    img.src=imgAddress
    var p=document.createElement('p')
    p.innerHTML=paragraph
    var div=document.getElementById('root') as HTMLDivElement
    
    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(p)
}


