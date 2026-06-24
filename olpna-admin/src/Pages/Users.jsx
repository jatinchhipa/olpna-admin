import React, { useEffect, useState } from "react";
import axios from 'axios';


import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";



function Users(){

        const[user , setUser] = useState([]);

        useEffect(()=>{
            fetchuser();
        },[])

        const fetchuser= async ()=>{

            try{
                const res = await axios.get('http://localhost:9000/api/getusers',user)

                setUser(res.data);

            }catch(err){
                console.log(err)
            }

        }


        const handleDelete= async(id)=>{

            try{
                const ok = window.confirm( "Are you sure?");
     
             if(!ok) return;       

               await axios.delete(`http://localhost:9000/api/delete/${id}`);  

                  alert("user delete")  

              fetchuser();  
      

            }catch(err){    

                console.log(err);

              }  

        }




return(
    <>

        <div className="flex w-full justify-between items-center h-[60px] shadow-md p-5"> 
            <h1 className="text-xl font-semibold text-orange-500">All Users</h1>
        </div>


        <div className="p-5">

            <table className="w-full border border-gray-300">

                <thead>

                    <tr className="bg-orange-500 text-white h-12">
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        user.map((item,index)=>(

                         <tr key={item._id} className="border-b h-12 text-center">

                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.course}</td>
                            <td>{item.phone}</td>

                            <td className="flex items-center">

                             <Link to={`/edit/${item._id}`}>  
                                <AiFillEdit className="text-orange-500 shadow-lg text-2xl cursor-pointer"/></Link>
                                <MdDelete
                                onClick={() => handleDelete(item._id)}
                                 className="text-red-700 shadow-lg text-2xl cursor-pointer"/>
                            </td>

                         </tr>   

                        ))

                    }

                </tbody>

            </table>

        </div>




    </>
)
}

export default Users;