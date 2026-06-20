import React from "react";

import { AiFillEdit } from "react-icons/ai";

import { MdDelete } from "react-icons/md";




function Addcourse(){
return(
    <>

        <div className="flex w-full justify-between items-center h-[60px] shadow-md p-5"> 
            <h1 className="text-xl font-semibold text-orange-500">Add Courses</h1>

            <span className="flex gap-8  items-center">

                <button type="button" className="w-[120px] h-[40px] bg-orange-500 text-white rounded-sm font-semibold hover:bg-sky-900 cursor-pointer duration-500">Add Course</button>

                <AiFillEdit className="text-sky-900 shadow-lg text-2xl cursor-pointer"/>

                <MdDelete className="text-sky-900 shadow-lg text-2xl cursor-pointer"/>
            </span>    

        </div>   


        <div className="w-full mt-8 p-5">

            <div className="w-full flex flex-wrap items-center gap-8">

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Name</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Details</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Price</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Students</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Number</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Duration</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Professor</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Deadline</p>
                    <input type="date"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Lectures</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Language</p>
                    <input type="text"  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>
                
            </div>


            <div className="w-full  mt-8">
                <p className="text-[15px] text-gray-600">Course Image</p>
                <input type="file" id="courseImage"  className="hidden" />
                <label htmlFor="courseImage" className="w-full h-[60px] border border-gray-300 rounded-sm shadow-sm flex items-center justify-center cursor-pointer bg-white hover:bg-gray-100 text-md text-gray-500">Upload Course Image</label>
            </div>



            <button type="button" className="w-[120px] h-[50px] bg-orange-500 text-white rounded-sm font-semibold hover:bg-sky-900 cursor-pointer duration-500 mt-10">Submit</button>


        </div>






    </>
)
}
export default Addcourse;