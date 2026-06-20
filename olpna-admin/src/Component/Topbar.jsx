import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import Sidebar from "./Sidebar";




function Topbar(){
return(
    <>
       <div className="w-full flex items-center h-[80px]">

        <div className="w-[25%] ">                
        <img src="/logo.webp" className="h-[90px] pl-5 pt-3 pb-2"/>               
        </div>  


        <div className="w-[75%] bg-sky-900 h-[80px] items-center flex justify-between">

            <div className="flex w-[350px] h-[40px] bg-black-500 rounded-full ml-3 items-center p-3 gap-4 bg-gray-400/50">

                <IoSearch  className="text-white font-bold text-xl "/>
                <input type="text"  placeholder="Search" className="text-lg text-white placeholder:text-white outline-none "/>    

            </div>

            <span className="mr-4">
                <IoMdNotificationsOutline className="text-white text-3xl font-semibold"/>
            </span>

        </div>

       </div> 


        <div className="w-[100%]">
            <Sidebar/>
        </div>    

    </>
)
}

export default Topbar;