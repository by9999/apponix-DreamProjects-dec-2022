import { Button, Container, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FirstHookUseState } from "../../component/notes/hooks/FirstHookUseState"

export const UserLogin:React.FC<{}>=()=>{
    var [userName,setUserName]=useState('')
    var [userPassword,setUserPassword]=useState('')
    var navigate=useNavigate()
    const handleSubit=()=>{
        console.log(userName)
        console.log(userPassword)
        navigate('/home',{state:{username:userName}})
    }
    
    return <>
    <Container>
      
<Grid
rowSpacing={1}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<h1>login</h1>
    <Grid item>
    <TextField
          id="outlined-multiline-flexible"
          label="user Name"
          multiline
          onChange={(e)=>{setUserName(e.target.value)}}
          maxRows={4}
        />
    </Grid>
    <Grid item>
    <TextField
          id="outlined-multiline-flexible"
          label="password"
          type="password"
          onChange={(e)=>{setUserPassword(e.target.value)}}
          maxRows={4}
        />
    </Grid>
<Grid item>
<Button onClick={handleSubit} variant="contained" color="success">
  login
</Button>
</Grid>

</Grid>

    
    </Container>
   
    </>
}