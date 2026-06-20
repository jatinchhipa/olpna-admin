import React from "react";


function Professorprofile(){
return(
    <>

        <div className="flex w-full justify-between items-center h-[60px] shadow-md p-5"> 
            <h1 className="text-xl font-semibold text-orange-500">Professor Profile</h1>
  
            
            <button type="button" className="w-[120px] h-[50px] bg-orange-500 text-white rounded-sm font-semibold hover:bg-sky-900 cursor-pointer duration-500">Add Course</button>
           
        </div>

        <div className="w-[95%] flex flex-wrap  mx-auto mt-8 gap-8">

            <div className="w-[40%] bg-sky-100">
                <img src="/team3.avif" alt="" className="w-[100%] "/>
            </div>

            <div className="w-[50%]">
                <h1 className="text-xl font-semibold text-sky-900">About Me</h1>
                <p className=" text-gray-600 pt-2">Our professors are dedicated professionals who play a vital role in shaping the future of every student. With years of academic experience and industry knowledge, they are committed to providing high-quality education in a supportive and engaging learning environment. Their goal is not only to teach subjects but also to inspire students to think creatively, solve real-world problems, and develop the skills required for a successful career. Each professor brings expertise, passion, and a student-focused approach to the classroom. They use modern teaching methods, interactive sessions, practical examples, and project-based learning to make complex topics easier to understand. By combining theoretical concepts with hands-on experience, our professors ensure that students are prepared for both academic excellence and professional challenges. Our faculty members believe in continuous learning and encourage students to ask questions, participate in discussions, and explore new ideas with confidence. They provide individual guidance, career advice, and mentorship to help students identify their strengths and achieve their goals.  </p>
            </div>

            <div className="w-[40%] flex justify-center">
                <img src="/c1.jpg" alt=""  className="w-[70%]"/>
            </div>

            <div className="w-[50%]">
                <h1 className="text-xl font-semibold text-sky-900">Certificate Details</h1>

                <p className=" text-gray-600 pt-2">Our institute provides industry-recognized certificates to students upon successful completion of their courses and training programs. These certificates represent the knowledge, practical skills, and dedication students have gained throughout their learning journey. They are designed to enhance professional credibility and help students stand out in competitive academic and job environments.

                Each certificate reflects the student's commitment to learning and the quality education provided by our institute. We focus on practical training, real-world projects, and skill-based learning to ensure that every student is prepared for future opportunities. Our certification programs are structured to meet current industry standards and support career growth in various fields.
                </p>

            </div>


            <div className="w-[40%] flex justify-center">
                <img src="/c2.jpg" alt=""  className="w-[70%]"/>
            </div>

            <div className="w-[50%]">

               <h1 className="text-xl font-semibold text-sky-900">Certificate Details</h1> 

                <p className=" text-gray-600 pt-2">Our institute provides industry-recognized certificates to students upon successful completion of their courses and training programs. These certificates represent the knowledge, practical skills, and dedication students have gained throughout their learning journey. They are designed to enhance professional credibility and help students stand out in competitive academic and job environments.

                Each certificate reflects the student's commitment to learning and the quality education provided by our institute. We focus on practical training, real-world projects, and skill-based learning to ensure that every student is prepared for future opportunities. Our certification programs are structured to meet current industry standards and support career growth in various fields.
                </p>

            </div>

        </div>

    </>
)
}

export default Professorprofile;