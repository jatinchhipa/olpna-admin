import { darken } from "@mui/material/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




function Editcourse(){

    const { id } = useParams();

    const[course , setCourse]=useState([]);


    useEffect(()=>{
        fetchcourse();
    },[]);


      const fetchcourse = async()=>{

        try{

            const res = await axios.get(`http://localhost:9000/course/${id}` ,course)

            setCourse(res.data);

        }catch(err){
            console.log(err)
        }

      };   






      const handleChange = (e)=>{
        setCourse({
              ...course,[e.target.name]:e.target.value  
        });
      };

      
    const handleSubmit = async (e) => {
            e.preventDefault();

        try {
            const formData = new FormData();

            for (let key in course) {
                formData.append(key, course[key]);
            }

            await axios.patch(`http://localhost:9000/editcourse/${id}`,formData,
      
                {
                    headers: {"Content-Type": "multipart/form-data",},
  
                }
            );

            alert("course successfully update");
        } catch (err) {
                    console.log(err);
                    alert("course update error");
                }
        };
    





return(
    <>

        <div className="flex w-full justify-between items-center h-[60px] shadow-md p-5"> 
            <h1 className="text-xl font-semibold text-orange-500">Edit Courses</h1>
        </div> 


    <form onSubmit={handleSubmit}>

        <div className="w-full mt-8 p-5">

            <div className="w-full flex flex-wrap items-center gap-8">

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Name</p>
                    <input type="text" name="courseName" value={course.courseName} onChange={handleChange}  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Details</p>
                    <input type="text" name="courseDetail" value={course.courseDetail} onChange={handleChange}  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Price</p>
                    <input type="text" name="coursePrice" value={course.coursePrice} onChange={handleChange}  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Students</p>
                    <input type="text" name="student" value={course.student} onChange={handleChange}  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Number</p>
                    <input type="text" name="courseNumber" value={course.courseNumber} onChange={handleChange}  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Duration</p>
                    <input type="text" name="courseDuration" value={course.courseDuration} onChange={handleChange}  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Professor</p>
                    <input type="text" name="courseProfessor" value={course.courseProfessor} onChange={handleChange} className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Course Deadline</p>
                    <input type="date" name="courseDeadline" value={course.courseDeadline} onChange={handleChange}  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Lectures</p>
                    <input type="text" name="lectures" value={course.lectures} onChange={handleChange}  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>

                <div className="w-[48%] ">
                    <p className="text-[15px] text-gray-600">Language</p>
                    <input type="text" name="language" value={course.language} onChange={handleChange}  className="outline-none w-full h-[40px] border border-gray-300 rounded-sm shadow-sm" />
                </div>
                
            </div>


            <div className="w-full  mt-8">
                <p className="text-[15px] text-gray-600">Course Image</p>
                <input type="file" id="courseImage" onChange={(e) => {setCourse({...course,courseImg: e.target.files[0]})}}  className="hidden" />
                <label htmlFor="courseImage" className="w-full h-[60px] border border-gray-300 rounded-sm shadow-sm flex items-center justify-center cursor-pointer bg-white hover:bg-gray-100 text-md text-gray-500">Upload Course Image</label>
            </div>



            <button type="submit" className="w-[120px] h-[50px] bg-orange-500 text-white rounded-sm font-semibold hover:bg-sky-900 cursor-pointer duration-500 mt-10">Submit</button>


        </div>

    </form>

    </>
)
}

export default Editcourse;