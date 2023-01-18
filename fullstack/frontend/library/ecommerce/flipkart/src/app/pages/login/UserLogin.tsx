import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { FirstHookUseState } from "../../component/notes/hooks/FirstHookUseState"

export const UserLogin:React.FC<{}>=()=>{
    var [userName,setUserName]=useState('')
    var [userPassword,setUserPassword]=useState('')
    const handleSubit=()=>{
        console.log(userName)
        console.log(userPassword)
    }
    
    return <>
    <h1>login</h1>
    <TextField
          id="outlined-multiline-flexible"
          label="user Name"
          multiline
          onChange={(e)=>{setUserName(e.target.value)}}
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="password"
          type="password"
          onChange={(e)=>{setUserPassword(e.target.value)}}
          maxRows={4}
        />
<Button onClick={handleSubit} variant="contained" color="success">
  login
</Button>
    </>
}