import styled from "styled-components"
import { boxstyle } from "./style"

export const StledComponentExample:React.FC<{}>=()=>{
    let Morning=styled.div`
    width:200px;
    height:200px;
    background-color:orange;
    `
    return <>
    <div style={boxstyle}>4th way </div>
    <Morning/>
    </>
}