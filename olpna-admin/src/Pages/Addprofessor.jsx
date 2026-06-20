import React from "react";

import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";




function Addprofessor(){
return(
    <>
        <div className="flex w-full justify-between items-center h-[60px] shadow-md p-5"> 
            <h1 className="text-xl font-semibold text-orange-500">Professor</h1>
        
            <span className="flex gap-8  items-center">
        
            <button type="button" className="w-[120px] h-[40px] bg-orange-500 text-white rounded-sm font-semibold hover:bg-sky-900 cursor-pointer duration-500">Add Professor</button>
        
            <AiFillEdit className="text-sky-900 shadow-lg text-2xl cursor-pointer"/>
        
            <MdDelete className="text-sky-900 shadow-lg text-2xl cursor-pointer"/>
            </span>    
        
        </div>



        <div className="w-full mt-8 p-5">

            <h1 className="text-xl font-semibold text-sky-900 pb-4">Basic Information</h1>
           <div className="w-full flex flex-wrap items-center gap-8">

              <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600"> Name</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
              </div>  

              <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600"> Gender</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
              </div>

              <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Department</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
              </div>
              
           </div>  

           <div className="w-[75%] mt-5">
                <p className="text-[15px] text-gray-600">About us</p>
                <textarea name="" id="" className="w-full h-[150px] border border-gray-300 rounded-md p-3 outline-none ">

                </textarea>
           </div>


           <div className="w-full flex flex-wrap items-center gap-8">

                <div className="w-[50%] mt-5">
                <p className="text-[15px] text-gray-600">Certification</p>
                <textarea name="" id="" className="w-full h-[150px] border border-gray-300 rounded-md p-3 outline-none ">
                </textarea>
                </div>

                <div className="w-[45%]  ">
                <p className="text-[15px] text-gray-600">Certificate Image</p>
                <input type="file" id="certificateImage"  className="hidden" />
                <label htmlFor="certificateImage" className="w-full h-[60px] border border-gray-300 rounded-sm shadow-sm flex items-center justify-center cursor-pointer bg-white hover:bg-gray-100 text-md text-gray-500">Upload Certificate Image</label>
                </div>

           </div>


           <div className="w-full flex flex-wrap items-center gap-8 mt-5">

              <div className="w-[48%] ">  
                    <p className="text-[16px] text-gray-600"> Education</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
              </div>  

              <div className="w-[48%] ">  
                    <p className="text-[16px] text-gray-600"> Univercity Name</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
              </div>


              <div className="w-[48%] ">  
                    <p className="text-[16px] text-gray-600"> Experience</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
              </div>  

              <div className="w-[48%] ">  
                    <p className="text-[16px] text-gray-600">Experience url</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
              </div>

           </div>  



           <div className="w-full  mt-8">
                <p className="text-[15px] text-gray-600">Professor Image</p>
                <input type="file" id="courseImage"  className="hidden" />
                <label htmlFor="courseImage" className="w-full h-[60px] border border-gray-300 rounded-sm shadow-sm flex items-center justify-center cursor-pointer bg-white hover:bg-gray-100 text-md text-gray-500">Upload Professor Image</label>
            </div>



           <button type="button" className="w-[120px] h-[50px] bg-orange-500 text-white rounded-sm font-semibold hover:bg-sky-900 cursor-pointer duration-500 mt-10">Submit</button>



        </div>


    </>
)
}

export default Addprofessor;