import React,{useState,useEffect} from 'react'
import '../Css/MiddleContent.css'
import '../Css/AboutAndContactAnimation.css'
import AnimatedContent from "../ReactBitz/AboutContact";

const ContactUs = () => {
   const [open, setIsOpen] = useState(window.innerWidth > 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsOpen(window.innerWidth > 768);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <div>
      {open ? (
        <div className="about_contact">
        <div className="wrapper">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="banner">
          <div className="content">
          <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
            <div className="about">
            <p className="name">Get In Touch</p>
            <p className="info mt-5">We’d love to hear from you! For any queries, suggestions, or feedback, feel free to reach out to us. Our team is here to assist you and ensure that you have the best experience on CinemaBlizz
            </p>
            <p className='info mt-5'>Email : support@cinemablizz.com</p>
            <p className='info '>Phone : +1 (800) 123-4567</p>
            <p className='info'>Address : Movie City, Entertainment State, 45678</p>
            </div>
           </AnimatedContent>
          </div>
        </div>
      </div>
      ) : (
        
<div className="middlecontent  bg-[#000B1F] flex justify-center flex-col flex-1 items-center relative sm:p-0 p-5">
        <div className="flex justify-center flex-col items-center text-center h-60 w-96">
          <p className="gettouch text-white text-xl sm:text-3xl">Get In Touch</p>
          <p className="para mt-5">We’d love to hear from you! For any queries, suggestions, or feedback, feel free to reach out to us. Our team is here to assist you and ensure that you have the best experience on CinemaSpace.</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <p className='para text-sm'>Email : support@cinemaspace.com</p>
          <p className='para text-sm mt-1'>Phone : +1 (800) 123-4567</p>
          <p className='para text-sm mt-1'>Address : Movie City, Entertainment State, 45678</p>
        </div>
    </div>
      )}
    </div>
  )
}

export default ContactUs