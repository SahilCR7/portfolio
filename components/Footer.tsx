import React from 'react'
import PropTypes from 'prop-types'
import Image from "next/image";
import { SiNextDotJs } from 'react-icons/si'

const Footer = ()  => {
   

    return (
        <div className="flex justify-center">
          
           <div> 
           <h5 className='my-3 text-2xl font-bold '>
           Developed Using &nbsp;
      </h5>
      </div>
      <div> 
      <h5 className='my-3 text-2xl font-bold '>
    
           <SiNextDotJs/>
      </h5>
      </div>
            
         
        </div>
    )
}


export default Footer;
