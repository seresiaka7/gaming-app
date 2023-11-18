import React from 'react';
import Masai from '../assets/Masai.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div >
            <header className='flex  justify-evenly items-center bg-indigo-400 relative'>
                <div  className='   '>
                < Link to="/gaming-app"> <img  className="mb-6" src={Masai} width={150}  height={80} alt="logo"/></ Link >
                </div>
                <div>
                 <nav className=' text-white'>
                    <ul   className='flex justify-start items-center gap-6 pr-5 '>
                      < Link to="/gaming-app"> <li  className='px-10 mr-3  hover:italic font-bold font-mono hover:bg-yellow-500 hover:rounded-md p-3'><a href=''>Jouer</a></li></ Link >
                      < Link to="/gaming-app/acheter"> <li  className='px-10 mr-3  hover:italic  font-bold font-palanquin  hover:bg-yellow-500 hover:rounded-md p-3'><a href=''>Acheter</a></li></Link>

                      <Link to="/gaming-app/explorer"> <li  className='px-10 mr-10  hover:italic  font-bold font-palanquin  hover:bg-yellow-500 hover:rounded-md p-3'><a href=''>Explorer</a></li></Link>
                    </ul>
                </nav>
                </div >  
                 <div className='bg-yellow-500 p-3 rounded-full px-9   font-bold font-palanquin  shadow-md '>
                 <Link to="/gaming-app/connecter">  <button> Connecter</button></Link>
                 </div>
            </header>

           

        </div>

    </div>
  )
}

export default Navbar