import { StledComponentExample } from './StledComponentExample'
import { boxstyle } from './style'
import  './style.css'

export const Multiplewaysofcss:React.FC<{}>=()=>{
    const mystyle={width:'200px',height:'200px',backgroundColor:'yellow'}
    return <>
    <div id="firstway">first way of css applying</div>
    <div style={{width:'200px',height:'200px',backgroundColor:'blue'}}>im the 2nd way of css</div>
    <div style={boxstyle}>im the 3rd way of css</div>
    <div style={mystyle}>im the 4th way of css</div>
    <StledComponentExample/>
    </>
}