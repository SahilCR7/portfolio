import { motion } from "framer-motion";
import { fadeInUp, routeFade } from "../animation.ts"
import Bar from "../components/Bar";
import { languages, tools } from "../data";
const Resume = () => {
   return (
    <motion.div
        className="px-6 py-2"
        variants={routeFade}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
      
         {/* //! Education & Experience */}
         <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
               <h5 className='my-3 text-2xl font-bold border-b-4'>Education</h5>
               <div className=''>
                  <h5 className='my-2 text-xl font-bold'>
                     Btech in Computer Science Engineering
                  </h5>
                  <p className='font-semibold'>
                     Kannur University (2013-2017)
                  </p>
                  <p className='my-3'>
                    Graduated with first class honors.
                  </p>
               </div>

                <div className=''>
                  <h5 className='my-2 text-xl font-bold'>
                     12th
                  </h5>
                  <p className='font-semibold'>
                     Central Board of Secondary (2012)
                  </p>
                  <p className='my-3'>
                   70%
                  </p>
               </div>

               <div className=''>
                  <h5 className='my-2 text-xl font-bold'>
                     10th
                  </h5>
                  <p className='font-semibold'>
                     Central Board of Secondary (2010)
                  </p>
                  <p className='my-3'>
                   8.6 CGPA
                  </p>
               </div>
               </motion.div>
           
               <motion.div variants={fadeInUp} initial="initial" animate="animate">
               <h5 className='my-3 text-2xl font-bold border-b-4'>Experience</h5>
               <div className=''>
                  <h5 className='my-2 text-xl font-bold'>
                     Web Developer (July 2019 - present)
                  </h5>
                  <p className='font-semibold'>TecarcInnovations Private Limited ,Kerala</p>
                  <p className='my-3'>-	Got involved in the organization and helped during the various procedure for establishment of the organisation
                    <br/>-Troubleshooting website performance issues
                    <br/>-Implementing SEO requests
                    <br/> -Actively researching, testing and proposing new approaches to improve search engine ranking
                    <br/> -Developed app integration with REST and other APIs 
                    <br/> -Maintaining the company’s pos system</p>
               </div>
               </motion.div>
         </div>

         {/*Languages & Tools */}
         <div className='grid gap-9 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold border-b-4'>Core Skills</h5>
               <div className='my-2'>
                  {languages.map((language, i) => (
                     <Bar value={language} key={i} />
                  ))}
               </div>
            </div>

            <div>
               <h5 className='my-3 text-2xl font-bold border-b-4'>Other Skills</h5>
               <div className='my-2'>
                  {tools.map((tool, i) => (
                     <Bar value={tool} key={i} />
                  ))}
               </div>
            </div>
         </div>
         </motion.div>
   )
}

export default Resume