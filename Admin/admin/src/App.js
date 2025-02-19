import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adminlogin from "./Amincomponents/Adminlogin";
import Admindashboard from "./Amincomponents/Admindashboard"
import Adminregistration from "./Amincomponents/Adminregistration"

function App() {
  return (
    {/*<Router>
      <Routes>
         <Route path="/" element={<Adminlogin />} />
        <Route path="/admindashboard" element={<Admindashboard/>} />
        <Route path='/adminregistration' element={<Adminregistration/>}/>
      </Routes>
    </Router>*/}
  );
}

export default App;
