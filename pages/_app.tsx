import '../styles/globals.css'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider attribute="class">
      <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48'>
        <div className='h-full col-span-12 p-4 text-base text-center bg-white dark:bg-black lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark '>
          <Sidebar/>
        </div> 
        
        <div className='flex flex-col col-span-12 bg-white  overflow-hidden rounded-2xl shadow-custom-light dark:bg-black dark:text-white lg:col-span-9'>
              {/* //!navbar */}
              <Navbar />
              {/* //!about */}
          <Component {...pageProps} />
        </div> 
        <div className='w-full col-span-12 text-base text-center bg-gray-200 dark:bg-black lg:col-span-12 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
            <Footer/>
        </div>
      </div>
      
      </ThemeProvider>
  )
}
export default MyApp
