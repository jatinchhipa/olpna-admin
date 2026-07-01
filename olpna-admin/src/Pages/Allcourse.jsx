import React, { useEffect, useState } from "react";

import axios from 'axios';

import { HiOutlineUsers } from "react-icons/hi2";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


function Allcourse(){

    const[course , setCourse]=useState([]);

    useEffect(()=>{
        fetchcourse()
    },[]);

    const fetchcourse = async ()=>{

        try{
            const res = await axios.get('http://localhost:9000/getcourse' ,course)

            setCourse(res.data);
            
        }catch(err){
                console.log(err);
            }

    };



        const handleDelete = async(id)=>{

            try{

                await axios.delete(`http://localhost:9000/coursedelete/${id}`);

                alert("course delete")

                fetchcourse()
            }catch(err){
                console.log(err)
            }

        }





return(
    <>
        <div className="flex w-full justify-between items-center h-[60px] shadow-md p-5"> 
            <h1 className="text-xl font-semibold text-orange-500">All Courses</h1>
  
         <a href="/addcourse">   
            <button type="button" className="w-[120px] h-[50px] bg-orange-500 text-white rounded-sm font-semibold hover:bg-sky-900 cursor-pointer duration-500">Add Course</button>
         </a>   
        </div>


        <div className="w-full flex flex-wrap gap-8 mt-8">

           {course.map((course)=>{

          return(
            <div  key={course._id} className="w-[30%] min-h-[450px] border border-gray-300 rounded">
            
            <img src={`http://localhost:9000/uploads/${course.courseImg}`} alt={course.courseImg} className="rounded object-cover cursor-pointer w-full"/> 

            <div className="p-3">

            <span className="flex items-center justify-between border-b-gray-200">    
              <p className="text-xl font-bold text-[#062a35] mt-2  ">{course.courseName}</p>

            <Link to={`/editcourse/${course._id}`}>   
              <AiFillEdit className="text-sky-900 shadow-lg text-2xl cursor-pointer"/>
            </Link>     

            </span>


            <span className="flex items-center justify-between border-b-gray-200">
              <p className="text-gray-500 text-sm mt-2">{course.courseDetail}</p>

              <MdDelete onClick={()=>handleDelete(course._id)} className="text-sky-900 shadow-lg text-2xl cursor-pointer"/>

            </span>

            <div className="flex gap-6 mt-3  border-b border-b-gray-200">  
              <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">{course.student}</p>  
              </span>
               <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">{course.courseNumber}</p>  
              </span>
            </div> 

            <div className="flex items-center mt-2  border-b border-b-gray-200 justify-between">
                <h1 className="text-md  text-gray-700">Professor :</h1>
                <p className="text-sm text-gray-500">{course.courseProfessor}</p>
            </div>  

            <div className="flex items-center mt-2  border-b border-b-gray-200 justify-between">
                <h1 className="text-md  text-gray-700">Duration :</h1>
                <p className="text-sm text-gray-500">{course.courseDuration}</p>
            </div> 

            <div className="flex items-center mt-2  border-b border-b-gray-200 justify-between">
                <h1 className="text-md  text-gray-700">price :</h1>
                <p className="text-sm text-gray-500">{course.coursePrice}</p>
            </div> 

            <div className="flex items-center mt-2  border-b border-b-gray-200 justify-between">
                <h1 className="text-md  text-gray-700">Deadline :</h1>
                <p className="text-sm text-gray-500">{course.courseDeadline}</p>
            </div>

            <div className="flex items-center mt-2  border-b border-b-gray-200 justify-between">
                <h1 className="text-md  text-gray-700">Lectures :</h1>
                <p className="text-sm text-gray-500">{course.lectures}</p>
            </div>

            <div className="flex items-center mt-2  border-b border-b-gray-200 justify-between">
                <h1 className="text-md  text-gray-700">Language :</h1>
                <p className="text-sm text-gray-500">{course.language}</p>
            </div>

            </div>
             
            </div> 
          )

             })} 

        </div>

    </>
)
}

export default Allcourse;