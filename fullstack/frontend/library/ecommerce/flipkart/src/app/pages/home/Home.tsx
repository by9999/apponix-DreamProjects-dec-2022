import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Multiplewaysofcss } from "../../component/notes/css/Multiplewaysofcss"
import TopNavBar from "../../component/TopNavBar/TopNavBar"

export const Home: React.FC<{}> = () => {
   var [userName, setUserName] = useState('')
   var userState = useLocation()
   useEffect(() => {
      setUserName(userState.state.username)
   }, [])
   console.log(userState.state.username)

   var size = {
      extraSmalls: 'xm',
      small: 'sm',
      large: 'lg',
      extralarge: 'xl',
      medium: 'md'
   }
   return <>

      <Container maxWidth="xl" >
         
         <Grid  xs={12}>
            <Grid item>
<TopNavBar/>
            </Grid>

         </Grid>
         <h1>welcome {userName}!</h1>
         <Multiplewaysofcss />
      </Container>
   </>
}