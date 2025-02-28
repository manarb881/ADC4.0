
import { useState } from "react";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";


function NavBar() {
 const [activeLink, setActiveLink] = useState(null); // Track the active link


 // Custom renderer function for the countdown
 const renderer = ({ days, hours, minutes, seconds }) => {
   return (
     <div className="flex items-center justify-center text-l font-bold text-pink-400">
       <div className="mx-2">
         <span>{String(days).padStart(2, "0")}</span>
         <span className="text-white"> Days</span>
       </div>
       <span className="text-white mx-2">:</span>
       <div className="mx-2">
         <span>{String(hours).padStart(2, "0")}</span>
         <span className="text-white"> Hours</span>
       </div>
       <span className="text-white mx-2">:</span>
       <div className="mx-2">
         <span>{String(minutes).padStart(2, "0")}</span>
         <span className="text-white"> Minutes</span>
       </div>
       <span className="text-white mx-2">:</span>
       <div className="mx-2">
         <span>{String(seconds).padStart(2, "0")}</span>
         <span className="text-white"> Seconds</span>
       </div>
     </div>
   );
 };


 return (
   <div className="flex flex-row justify-around items-center p-4 text-white w-[90%]">
     {/* Logo */}
     <img
       src="/ADC.png" // Corrected path for images in the `public` folder
       alt="Logo"
       className="h-40"
     />


     {/* Navigation Links */}
   <div className="flex space-x-6">
   <Link to="/"
   className={`m-4 hover:text-pink-500 hover:border-b-[1px] hover:border-pink-500 transition-all hover:-translate-y-1 ${
     activeLink === "welcome" ? "border-b-[3px] border-pink-500" : "border-b-[1px] border-transparent"
   }`}
   onClick={() => setActiveLink("welcome")} // Update active link
 >
   Welcome
   </Link>
 <Link to="/Challenges"
  
   className={`m-4 hover:text-pink-500 hover:border-b-[1px] hover:border-pink-500 transition-all hover:-translate-y-1 ${
     activeLink === "challenges" ? "border-b-[3px] border-pink-500" : "border-b-[1px] border-transparent"
   }`}
   onClick={() => setActiveLink("challenges")} // Update active link
 >
   Challenges
  </Link>
</div>




     {/* Countdown Timer */}
     <Countdown date={new Date("2025-12-31T23:59:59")} renderer={renderer} />
   </div>
 );
}


export default NavBar;