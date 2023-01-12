import { Myh1, Myh2 } from "./app/component"
import { About, Contact, DifferntwaysToCallAfunction, Home } from "./app/pages"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

export const App = () => {
  return <>
    <Router>
<Routes>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/" element={<DifferntwaysToCallAfunction/>}/>
</Routes>
    </Router>
  </>
}