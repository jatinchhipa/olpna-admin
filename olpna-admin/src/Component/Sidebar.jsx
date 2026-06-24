import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaHome } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";



import Addcourses from '../Pages/Addcourses';
import Allcourse from '../Pages/Allcourse';
import Allprofessor from '../Pages/Allprofessor';
import Addprofessor from '../Pages/Addprofessor';
import Users from '../Pages/Users';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Sidebar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width:"100%",height:"100vh" }}
    >


      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' ,width:'25%', height:"100%", backgroundColor:"#0b4863",
            "& .MuiTabs-indicator": {
            backgroundColor: "transparent", 
            },
         }}
      >
        <Tab label={<div className="flex items-center gap-2 text-[16px]">
                  <FaHome className='text-xl'/>
                  <span>Dashboard</span>
                  </div>} 
        {...a11yProps(0)} 
         sx={{color:"white",fontWeight: "bold",textTransform: "none",
          "&.Mui-selected": {
          color: "white",
          backgroundColor: "#08384d",
         },
         }}
         />


         <Tab label={<div className="flex items-center gap-2 text-[16px]">
                  <RiGraduationCapFill className='text-xl'/>
                  <span>All Courses</span>
                  </div>} 
        {...a11yProps(1)} 
         sx={{color:"white",fontWeight: "bold" ,textTransform: "none",
          "&.Mui-selected": {
          color: "white",
        },}}
         />


         <Tab label={<div className="flex items-center gap-2 text-[16px]">
                  <IoPersonSharp className='text-xl'/>
                  <span>All Professors</span>
                  </div>} 
        {...a11yProps(2)} 
         sx={{color:"white",fontWeight: "bold",textTransform: "none",
          "&.Mui-selected": {
           color: "white",
           backgroundColor: "#08384d",
          },
         }}
         />



         <Tab label={<div className="flex items-center gap-2 text-[16px]">
                  
                   <TiUserAdd  className='text-xl'/>
                  <span>All Users</span>
                  </div>} 
        {...a11yProps(3)} 
         sx={{color:"white",fontWeight: "bold",textTransform: "none",
             "&.Mui-selected": {
              color: "white",
             backgroundColor: "#08384d",
            },
         }}
         />



         <Tab label={<div className="flex items-center gap-2 text-[16px]">
                  <span></span>
                  </div>} 
        {...a11yProps(4)} 
         sx={{color:"white",fontWeight: "bold",textTransform: "none",
          "&.Mui-selected": {
          color: "white",
          backgroundColor: "#08384d",
          },
         }}
         />
        
      </Tabs>










     <Box sx={{width:"75%",height:"100vh",overflowY:"auto",
      "&::-webkit-scrollbar": {display: "none",},scrollbarWidth: "none",msOverflowStyle: "none",}}>
        
    
      <TabPanel value={value} index={0}>

        

      </TabPanel>




      <TabPanel value={value} index={1}>
        <Allcourse/>
      </TabPanel>



      <TabPanel value={value} index={2}>
          <Allprofessor/>
      </TabPanel>



      <TabPanel value={value} index={3}>
          <Users/>
      </TabPanel>




      <TabPanel value={value} index={4}>
        
      </TabPanel>


      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>

    </Box>  
    </Box>
  );
}