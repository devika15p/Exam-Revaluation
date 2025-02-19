import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Adminlogin from "./Amincomponents/Adminlogin";
import Admindashboard from "./Amincomponents/Admindashboard"
import Adminregistration from "./Amincomponents/Adminregistration"
import Dashboard from './Dashboardcomponents/Dashboard';
import Viewregistration from './Amincomponents/Viewregistration'
import Sidebar from './Dashboardcomponents/Sidebar';


    const App = () => {
      const [isLoggedIn, setIsloggedIn] = useState(false);
      return (
        <>
    
    
          <BrowserRouter>
            {isLoggedIn ? (
              <>
                <Sidebar />
                <Routes>
                  <Route path='/viewregistration' element={<Viewregistration />} />
                  <Route path='/dashboard' element={<Dashboard />} />
    
                </Routes>
              </>
            ) : (
              <>
                <Routes>
                  <Route path='/' element={<Adminlogin setIsLoggedIn={setIsloggedIn} />} />
                  <Route path='/adminregistration' element={<Adminregistration/>} />
                </Routes>
              </>
            )
            }
          </BrowserRouter>
        </>
      )
    }

    
 
export default App;
