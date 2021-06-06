import React from 'react'
import PropTypes from 'prop-types'
import { services } from "../data";
import { fadeInUp, routeFade , stagger} from "../animation.ts"
import ServiceCard from '../components/ServiceCard'
import { Service } from '../type'
import { motion } from "framer-motion";

const index = props => {
  return (
            <motion.div
            className="flex flex-col flex-grow px-6 pt-1 "
            variants={routeFade}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
          <h6 className='my-3 text-base font-medium '>
          A self motivated, creative and ambitious IT professional aspiring to work as Full Stack Developer 
          in an engaging and dynamic environment that would allow betterment of my skills producing results 
          for myself and the organization.
          I have 2+ years of experience in Web Development.
          Skilled in HTML5,Wordpress,Cascading Style Sheets (CSS),PHP,React Js,Flutter, Microsoft Office, Adobe Photoshop
          </h6>
          <div
            className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-gray-900'
            style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
            <h4 className='my-3 text-3xl  font-semibold font-odibee'>
                What I Do
            </h4>

             <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          animate="animate"
          initial="initial"
        >
                {/* children's initial and animate property should be same as the parent during a stagger effect  */}
                {services.map(service => (
                  <motion.div
                  className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black md:col-span-1 "
                  key={service.title}
                  variants={fadeInUp}
                  // animate="animate"
                  // initial="initial"
                >
                <ServiceCard service={service} />
            </motion.div>

                ))}
               </motion.div>
      </div>
    </motion.div>
  )
}

index.propTypes = {

}

export default index
