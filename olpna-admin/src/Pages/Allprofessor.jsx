import React, { useEffect, useState } from "react";

import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import axios from "axios";
import { Link } from "react-router-dom";


function Allprofessor(){

    const[professor , setProfessor]=useState([]);

    
   useEffect(()=>{
        fetchprofessor()
   },[]);


   const fetchprofessor = async()=>{

        try{
            const res = await axios.get("http://localhost:9000/getprofessor" , professor)

            setProfessor(res.data);

        }catch(err){
            console.log(err)
        }

   }

   const handleDelete =async(id)=>{

        try{
            await axios.delete(`http://localhost:9000/deleteprofessor/${id}`);

            alert("professor delete")

            fetchprofessor();
        }catch(err){
            console.log(err)
        }

   }





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


        {professor.map((item)=>{

        return(


        <div key={item._id} className="w-full flex items-center mt-2 justify-between">

            <div className="w-[7%] h-[50px] text-center">
                <img src={`http://localhost:9000/uploads/${item.professorImg}`} alt={item.professorImg} className="w-full h-full"/>
            </div>


            <div className="w-[12%] h-[50px] text-center">
                <p className="text-gray-600 ">{item.name}</p>
            </div>

             <div className="w-[12%] h-[50px] text-center">
                <p className="text-gray-600 ">{item.department}</p>
            </div>

            <div className="w-[10%] h-[50px] text-center">
                <p className="text-gray-600 ">{item.gender}</p>
            </div>

            <div className="w-[12%] h-[50px] text-center">
                <p className="text-gray-600 ">{item.education}</p>
            </div>

            <div className="w-[12%] h-[50px] text-center">
                <p className="text-gray-600 ">{item.univercity}</p>
            </div>

            <div className="w-[12%] h-[50px] text-center">
                <p className="text-gray-600 ">{item.experience}</p>
            </div>

            <div className="w-[12%] h-[50px] text-center">
                <p className="text-gray-600 ">{item.experienceUrl}</p>
            </div>

            <div className="w-[10%] h-[50px] text-center flex justify-between">

            <Link to={`/Editprofessor/${item._id}`}>     
                <AiFillEdit className="text-orange-500 shadow-lg text-2xl cursor-pointer"/>
            </Link>    
                <MdDelete onClick={()=>handleDelete(item._id)} className="text-red-700 shadow-lg text-2xl cursor-pointer"/>

            <Link to={`/professorprofile/${item._id}`}>
                <LuEye className="text-sky-900 shadow-lg text-2xl cursor-pointer"/>
             </Link>   

            </div>

        </div>

      )          

      })}      


    </>
)
}

export default Allprofessor;