import { Container } from "@mui/material"
import { Multiplewaysofcss } from "../../component/notes/css/Multiplewaysofcss"

export const Home:React.FC<{}>=()=>{
   var size={
    extraSmalls:'xm',
    small:'sm',
    large:'lg', 
    extralarge:'xl',
    medium:'md'
   }
   return <>
    
    <Container maxWidth="xl" style={{backgroundColor:'red'}}>
    <Multiplewaysofcss/>
    </Container>
    </>
    }