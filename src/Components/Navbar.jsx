import React from 'react'
import Masai from '../assets/masai.png'
import Bg1 from '../assets/bg3.png'

const Navbar = () => {
  return (
    <div>
        <div className='bg-cover h-[800px]  ' style={{backgroundImage:`url(${Bg1})`}}>
            <header className='flex mt-7 justify-between'>
                <div  className=' px-10   '>
                <img src={Masai} width={100}  height={70} alt="logo"/>
                </div>
                 <nav className='mt-8'>
                    <ul   className='flex justify-center items-center gap-10 pr-9'>
                        <li  className='px-6'><a href=''>Jouer</a></li>
                        <li  className='px-6'><a href=''>Acheter</a></li>
                        <li  className='px-6'><a href=''>Explorer</a></li>
                    </ul>
                </nav>
            </header>

        </div>

    </div>
  )
}

export default Navbar