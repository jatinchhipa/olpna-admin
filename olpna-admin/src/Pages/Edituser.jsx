import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";



function Edituser(){

    const { id } = useParams();

    const [user , setUser]=useState({

        name:"",
        email:"",
        course:"",
        phone:"",

    });




        useEffect(()=>{
            fetchuser()    
        },[])

        const fetchuser = async ()=>{
            try{
                const res = await axios.get(`http://localhost:9000/api/user/${id}`,user)

                setUser(res.data);

                console.log(res)

            }catch(err){
                console.log(err)
            }
        };

        const handleChange=(e)=>{
            setUser({
                ...user,[e.target.name] : e.target.value
            });
        }

        const handleSubmit = async(e)=>{

            e.preventDefault();

            try{
                  
                await axios.patch(`http://localhost:9000/api/edit/${id}`, user)

                    alert("user update successfully")  ;

            }catch(err){
                console.log(err)

                alert("update fail")
            }
             
           
        }







return(
    <>
        <div className="flex w-full justify-between items-center h-[60px] shadow-md p-5"> 
            <h1 className="text-xl font-semibold text-orange-500">All Users</h1>
        </div>



        <div className="p-10 w-[60%]">

      
      <form onSubmit={handleSubmit}>

        <input type="text"  name="name" value={user.name} onChange={handleChange} className="border p-2 w-full mt-5" placeholder="Name"/>

        <input type="email" name="email" value={user.email} onChange={handleChange}  className="border p-2 w-full mt-5" placeholder="Email"/>

        <input type="text"  name="course" value={user.course} onChange={handleChange} className="border p-2 w-full mt-5" placeholder="Course"/>

        <input type="tel"   name="phone" value={user.phone} onChange={handleChange}className="border p-2 w-full mt-5" placeholder="Phone"/>

          

        <button type="submit" className="bg-orange-500 text-white px-5 py-2 mt-5" >Update</button>

      </form>

    </div>

    </>
)
}

export default Edituser;