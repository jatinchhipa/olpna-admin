import React from "react";

import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { LuEye } from "react-icons/lu";



function Allprofessor(){
return(
    <>

        <div className="flex w-full justify-between items-center h-[60px] shadow-md p-5"> 
            <h1 className="text-xl font-semibold text-orange-500">All Professors</h1>

          <a href="/addprofessor">  
            <button type="button" className="w-[120px] h-[40px] bg-orange-500 text-white rounded-sm font-semibold hover:bg-sky-900 cursor-pointer duration-500">Add Professor</button>
           </a>
            
        </div>


        <div className="w-full flex items-center mt-8 justify-between">

            <div className="w-[7%] h-[50px] text-center">
                <p className="text-gray-600 "></p>
            </div>


            <div className="w-[12%] h-[50px] text-center">
                <p className="text-orange-500 font-bold ">Name</p>
            </div>

             <div className="w-[12%] h-[50px] text-center">
                <p className="text-orange-500 font-bold ">Department</p>
            </div>

            <div className="w-[10%] h-[50px] text-center">
                <p className="text-orange-500 font-bold ">Gender</p>
            </div>

            <div className="w-[12%] h-[50px] text-center">
                <p className="text-orange-500 font-bold ">Education</p>
            </div>

            <div className="w-[12%] h-[50px] text-center">
                <p className="text-orange-500 font-bold ">Univercity</p>
            </div>

            <div className="w-[12%] h-[50px] text-center">
                <p className="text-orange-500 font-bold ">Exprience</p>
            </div>

            <div className="w-[12%] h-[50px] text-center">
                <p className="text-orange-500 font-bold ">Exprience URL</p>
            </div>

            <div className="w-[10%] h-[50px]  flex justify-between">
                     <p className="text-orange-500 font-bold ">Action</p>
            </div>

        </div>


        <div className="w-full flex items-center mt-2 justify-between">

            <div className="w-[7%] h-[50px] text-center">
                <img src="/c1.png" alt="" className="w-[70%]"/>
            </div>


            <div className="w-[12%] h-[50px] text-center">
                <p className="text-gray-600 ">Karan Sharma</p>
            </div>

             <div className="w-[12%] h-[50px] text-center">
                <p className="text-gray-600 ">Web designer</p>
            </div>

            <div className="w-[10%] h-[50px] text-center">
                <p className="text-gray-600 ">Male</p>
            </div>

            <div className="w-[12%] h-[50px] text-center">
                <p className="text-gray-600 ">Computer Science</p>
            </div>

            <div className="w-[12%] h-[50px] text-center">
                <p className="text-gray-600 ">Apex Univercity</p>
            </div>

            <div className="w-[12%] h-[50px] text-center">
                <p className="text-gray-600 ">Web designer</p>
            </div>

            <div className="w-[12%] h-[50px] text-center">
                <p className="text-gray-600 ">Professinal designer</p>
            </div>

            <div className="w-[10%] h-[50px] text-center flex justify-between">
                <AiFillEdit className="text-orange-500 shadow-lg text-2xl cursor-pointer"/>
                <MdDelete className="text-red-700 shadow-lg text-2xl cursor-pointer"/>

               <a href="/professorprofile"> 
                <LuEye className="text-sky-900 shadow-lg text-2xl cursor-pointer"/>
                </a>

            </div>

        </div>


    </>
)
}

export default Allprofessor;