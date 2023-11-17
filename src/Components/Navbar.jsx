import React from 'react';
import Masai from '../assets/Masai.png'

const Navbar = () => {
  return (
    <div>
        <div >
            <header className='flex  justify-evenly items-center bg-indigo-400 relative'>
                <div  className='   '>
                <img  className="mb-6" src={Masai} width={150}  height={80} alt="logo"/>
                </div>
                <div>
                 <nav className=' text-white'>
                    <ul   className='flex justify-start items-center gap-6 pr-5 '>
                        <li  className='px-10 mr-3  hover:italic font-bold font-mono hover:bg-yellow-500 hover:rounded-md p-3'><a href=''>Jouer</a></li>
                        <li  className='px-10 mr-3  hover:italic  font-bold font-palanquin  hover:bg-yellow-500 hover:rounded-md p-3'><a href=''>Acheter</a></li>

                        <li  className='px-10 mr-10  hover:italic  font-bold font-palanquin  hover:bg-yellow-500 hover:rounded-md p-3'><a href=''>Explorer</a></li>
                    </ul>
                </nav>
                </div >  
                 <div className='bg-yellow-500 p-3 rounded-full px-9   font-bold font-palanquin  shadow-md '>
                    <button> Connecter</button>
                 </div>
            </header>

           

        </div>

    </div>
  )
}

export default Navbar