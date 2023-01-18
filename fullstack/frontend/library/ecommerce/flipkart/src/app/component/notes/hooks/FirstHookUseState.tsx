import { useState } from "react"

export const FirstHookUseState:React.FC<{}>=()=>{
  var [mystate,setState]=  useState("hello im thre")
   console.log("uu",)
   const someoneclickedme=()=>{
    setState('hello im getting reset')
   // alert('yes i got clicked')
   }
    return <>{mystate}
     <button onClick={someoneclickedme}>click</button>
     </>
}

//use