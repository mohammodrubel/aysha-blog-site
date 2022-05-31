import React, { useEffect, useState } from 'react';
import './Hero.css'
import aysha from '../img/aysha asha.jpg'
import TypeAnimation from 'react-type-animation';
const Hero = () => {
   
    return (
        <>
        <div className='hero'>
           <div>
               <img src={aysha} className='aysha' />
               <p style={{color:'gray'}}>Studies Department of japanese Language and Culture(IML) at University of Dhaka <br/>
                College: Viqarunnisa Noon School and College<br/></p>
               <h5 className='bio'>I am a wayfarer of the horizon, love the beauty of nature, novels and poems cuteness of animals, like the path of peace</h5>
               <h5 style={{color:'red'}}>
               <TypeAnimation
                  cursor={true}
                  sequence={[
                    'I am a Visionary', 3000, 
                    'I am a fancifull',3000,
                    'I am a larner',3000
                  ]}
                  repeat={Infinity}
                />
               </h5>
            </div>
        </div>
        </>
    );
};

export default Hero;