import React from 'react';
import Nav from "./bg2.png";


 const Section3 = () => {
  return (
    <div className='flex'>
       <div className=' py-9 mx-7 '>
          <div className='font-extrabold  text-6xl py-9  px-8'>
            <p>Plongez dans un phénomène<br/> du gaming moderne</p>
          </div>
          <div className='py-9  px-8 text-justify font-normal'>
         Faites tout ce qui est en votre pouvoir pour être le dernier survivant<br/>
         dans les modes Battle Royale et Zéro construction, assistez à <br/>  
         un concert ou à un événement ou découvrez plus d'un million de <br/>
         parties créées par des créateurs, y compris des jeux de course<br/>
         de voiture, du parkour, le mode zombie et bien plus encore.
          </div>
         <div className='py-9 px-8'>
            <button className='bg-slate-600 rounded-lg p-3 text-white shadow-md'>Visitez le Shop</button>
         </div>
     
      </div>
       <div>
        
    </div>
    <img src={Nav} width={600} height={800} alt=""/>
 </div>
  )
}
export default Section3 ;