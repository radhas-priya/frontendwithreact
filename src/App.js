import {Route , Routes} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact  from './Contact';
import Navbar from './Navbar';
import Gallery from './Gallery';
import './index.css';
import Shop from "./Shop";
import Farmerform from "./Farmerform";
import Volunteerform from "./Volunteerform";
import Signup from "./Signup";
import Login from "./Login";
import FarmerLogin from "./FarmerLogin";
import LearnerLogin from "./LearnerLogin";
// import Farmerdashboard from "./Farmerdashboard";
// import Learnerdashboard from "./Learnerdashboard";
import Chat from "./Chat";
import Loginforms from "./Loginforms";


const App = ()=>{

  return(
    
    <>
       

    <Navbar/>
    
{/* we use routes on the place of switches nowadays snd path is currently in working but its also
       been replaced with exact path but right now we are using path, path tell us about the endpoint that at what point we want the page to be opened
       without 
       reloading element is the name of the jsx element on wbic you want the given path to be opened  */}
    <Routes>
        <Route path="/" element ={<Home></Home>}/>
        <Route path ="/About" element ={<About></About>}/>
        <Route path = "/Contact" element= {<Contact></Contact>}/>
        <Route path = "/Gallery" element = {<Gallery></Gallery>}/>
        <Route path = "/Volunteerform" element = {<Volunteerform></Volunteerform>}/>
        <Route path = "/Fillupforms" element = {<Loginforms></Loginforms>}/>
        <Route path = "/Farmerform" element = {<Farmerform></Farmerform>}/>
        <Route path = "/Login" element = {<Login></Login>}/>
        <Route path = "/Signup" element = {<Signup></Signup>}/>
        <Route path = "/FarmerLogin" element = {<FarmerLogin></FarmerLogin>}/>
        <Route path = "/LearnerLogin" element = {<LearnerLogin></LearnerLogin>}/>
        <Route path = "/Shop" element = {<Shop></Shop>}/>
        <Route path = "/Chat" element = {<Chat></Chat>}/>
      </Routes>  

    </>
  );
};
export default App;