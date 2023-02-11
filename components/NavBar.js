import React from "react";
import Link from 'next/link';


export const NavBar = () => {
  return <div>     
      <div className="bg-[#5540af]">
       
       <div class="w-full z-50 top-0 py-3 sm:py-5 ">
         <div class="container flex items-center justify-between mx-auto">
           <div >
           <Link href="/">
               <img src="/assets/img/logo.png" className="w-15 h-14 lg:w-18 " alt="logo image" />
             </Link>
           </div>
           <div class="lg:block">
             <div class="flex items-center">
 
               <li class="list-none group pl-6">
 
                 <Link href="/#about" class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">About</Link>
 
                 <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
               </li>
 
               <li class="list-none group pl-6">
                
 
                 <Link href="/#services"
                   class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Experience</Link>
 
                 <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
               </li>
 
               <li class="list-none group pl-6">
 
                 <Link href="/#portfolio"
                   class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Certificate</Link>
 
                 <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
               </li>
 
               <li class="list-none group pl-6">
 
                 <Link href="/#work" class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Coding Platforms</Link>
 
                 <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
               </li>
 
               <li class="list-none group pl-6">
 
                 <Link href="/#statistics"
                   class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Statistics</Link>
 
                 <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
               </li>
 
               <li class="list-none group pl-6">
 
                 <Link href="/#blog" class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Project</Link>
 
                 <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
               </li>
 
               <li class="list-none group pl-6">
 
                 <Link href="/#contact"
                   class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Contact</Link>
 
                 <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
               </li>
 
             </div>
           </div>
           <div class="block lg:hidden">
             <button>
               <i class="bx bx-menu text-4xl text-white"></i>
             </button>
           </div>
         </div>
       </div>
 
       <div
         class="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />
     </div></div>;
};
