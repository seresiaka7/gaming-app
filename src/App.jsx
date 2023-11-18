import { useState } from 'react'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Section3 from './Components/Section3'
import Acheter from './Components/Acheter'
import Explorer from './Components/Explorer'
//<Section1/>
//style={{backgroundImage:`url(${Bg1})`}}


function App() {
  const [count, setCount] = useState(0)

  return (
    
     <div className=' bg-cover h-[800px] bg-orange-100 ' >
      <Routes>
        <Route path="/gaming-app" element={<Navbar/>}/>
        <Route path="/gaming-app/acheter" element={<Acheter/>}/>
        <Route path="/gaming-app/explorer" element={<Explorer/>}/>
      </Routes>
         
       
         
    </div>
  )
}
export default App;