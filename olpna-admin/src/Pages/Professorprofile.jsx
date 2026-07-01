import React, { useEffect, useState } from "react";

import axios from 'axios';
import { useParams } from "react-router-dom";



function Professorprofile(){

    const { id } = useParams();

    const[professor , setProfessor]=useState([]);

    useEffect(()=>{
        fetchprofessor()
    },[id]);

    const fetchprofessor = async ()=>{

        try{
            const res = await axios.get(`http://localhost:9000/professor/${id}`)

            setProfessor(res.data)
        }catch(err){
            console.log(err)
        }

    };





return(
    <>

        <div className="flex w-full justify-between items-center h-[60px] shadow-md p-5"> 
            <h1 className="text-xl font-semibold text-orange-500">Professor Profile</h1>
  
            
            <button type="button" className="w-[120px] h-[50px] bg-orange-500 text-white rounded-sm font-semibold hover:bg-sky-900 cursor-pointer duration-500">Add Course</button>
           
        </div>

        <div className="w-[95%] flex flex-wrap  mx-auto mt-8 gap-8">

            <div className="w-[40%] bg-sky-100">
                <img src={`http://localhost:9000/uploads/${professor.professorImg}`} alt={professor.professorImg} className="w-[100%] "/>
            </div>

            <div className="w-[50%]">
                <h1 className="text-xl font-semibold text-sky-900">About Me</h1>
                <p className=" text-gray-600 pt-2">{professor.about}</p>
            </div>

            <div className="w-[40%] flex justify-center">
                <img src="/c1.jpg" alt=""  className="w-[70%]"/>
            </div>

            <div className="w-[50%]">
                <h1 className="text-xl font-semibold text-sky-900">Certificate Details</h1>

                <p className=" text-gray-600 pt-2">{professor.certificate}
                </p>

            </div>


            <div className="w-[40%] flex justify-center">
                <img src={`http://localhost:9000/uploads/${professor.certificateImg}`}  alt={professor.certificateiMg}  className="w-[70%]"/>
            </div>

            <div className="w-[50%]">

               <h1 className="text-xl font-semibold text-sky-900">Certificate Details</h1> 

                <p className=" text-gray-600 pt-2">{professor.certificate}</p>
                

            </div>

        </div>

    </>
)
}

export default Professorprofile;