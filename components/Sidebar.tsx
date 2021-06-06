import React from 'react'
import PropTypes from 'prop-types'
import { AiFillGithub ,AiFillLinkedin,AiFillFacebook,  } from 'react-icons/ai'
import { FaUserTie } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useTheme } from "next-themes";
import Image from "next/image";


const Sidebar = ()  => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div>
          <Image
                width="128px"
                height="128px"
                src="https://scontent.fmaa5-1.fna.fbcdn.net/v/t1.6435-9/123175029_2912819085487202_4324340101466798691_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=LF-xyWzRxPcAX-nFcKF&_nc_ht=scontent.fmaa5-1.fna&oh=f54de3f61b08e7284a4544ca013bf280&oe=60D9BB14"
                alt="avatar"
                className="w-32 h-32 mx-auto border rounded-full "/>
            
            <h3 className="my-4 text-3xl font-medium tracking-wider font-shadowtolight">
                    <span className="text-blue">Sahil&nbsp;</span>Youssef
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-gray-900'>
           Software Engineer
            </p>
            <a
                href="/sahilcvplus210.pdf"
                download="sahilcvplus210.pdf"
                className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-gray-900"
            >
           <FaUserTie className="w-6 h-6" /> <span> Download Resume </span>
           </a> 

            {/*Social Icons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-blue  md:w-full ">
                <a href="https://www.facebook.com/sahil.yousef">
                <AiFillFacebook className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/sahil-youssef-156143120?trk=pub-pbmap&originalSubdomain=in" >
                <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/_sumax__/">
                <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
                </a>
            </div>
       
            {/*Address */}
            <div className="py-4 my-5 bg-gray-200 dark:bg-black-200 dark:bg-gray-900"
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
                
                <div className="flex items-center justify-center">
                    <HiOutlineLocationMarker className="mr-2" /><span>Muhsinas ,<br/>Kavinisseri,Cherukunnu P.O.,<br/> Kannur,Kerala,India </span>
                </div>
                <p className="my-2 "> sahilyousef@gmail.com </p>
                <p className="my-2 ">+91  9061136602  </p>
            </div>

            {/*Email */}
            <button  onClick={() => window.open("mailto:sahilyousef@gmail.com")} 
            className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer 
            bg-gradient-to-r from-blue to-darkblue hover:scale-105 focus:outline-none">
                Email me
            </button>
            
            <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-blue to-darkblue focus:outline-none hover:scale-105 "
      >
                Toggle Theme
            </button>
        </div>
    )
}


export default Sidebar;

