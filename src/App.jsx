import { useState } from 'react'
import S1 from './assets/s1.png'

import Navbar from './Components/Navbar'
import Section1 from './Components/Sections/Section1'
import Section2 from './Components/Sections/Section2'
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

        
        
         
    </div>
    </div>
  )
}

export default App
