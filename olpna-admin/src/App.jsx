import React from "react"
import { Routes, Route } from "react-router-dom";

import Topbar from "./Component/Topbar"
import Allcourse from "./Pages/Allcourse";
import Addcourse from "./Pages/Addcourses";
import Allprofessor from "./Pages/Allprofessor";
import Addprofessor from "./Pages/Addprofessor";
import Professorprofile from "./Pages/Professorprofile";
import Edituser from "./Pages/Edituser";
import Editcourse from "./Pages/Editcourse";
import Editprofessor from "./Pages/Editprofessor";


function App() {
  

  return (
    <>
      {/* < Topbar/> */}

      <Routes>

          <Route path="/" element={<Topbar/>}/>
          <Route path="/allcourse" element={<Allcourse/>}/>
          <Route path="/addcourse" element={<Addcourse/>}/>
          <Route path="/allprofessor" element={<Allprofessor/>}/>
          <Route path="/addprofessor" element={<Addprofessor/>}/>
          <Route path="/professorprofile/:id" element={<Professorprofile/>}/>
          <Route path="/edit/:id" element={<Edituser/>}/>
          <Route path="/editcourse/:id" element={<Editcourse/>}/>
          <Route path="/editprofessor/:id" element={<Editprofessor/>}/>

      </Routes>
     
    </>
  )
}

export default App
