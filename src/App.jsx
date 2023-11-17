import { useState } from 'react'
import Navbar from './Components/Navbar'

import Section3 from './Components/Section3'
//<Section1/>
//style={{backgroundImage:`url(${Bg1})`}}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <div className=' bg-cover h-[800px] bg-orange-100 ' >
          <div>
          <Navbar/>
          </div>
          <div>
          <Section3/>
          </div>
         </div>
    </div>
  )
}

export default App
