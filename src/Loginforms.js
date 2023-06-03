import React from 'react'
import FarmerLogin from './FarmerLogin'
import LearnerLogin from './LearnerLogin'
import { Link } from 'react-router-dom'

const Loginforms=()=> {
//   client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
// });

// client.initialize();
  return (
    <>
    <div classname="fillupdiv">
      <center>
     <h1 classname ="filluph1">Thanks for Signing up as a learner at Fresh Farms</h1>
    <div classname="container"> <Link to="/" className='m-2 btn btn-danger'>Go to Home page</Link>
    </div>
    
     
     <FarmerLogin></FarmerLogin>
     {/* login is takin me to dashboard */}
     <LearnerLogin></LearnerLogin>
     {/* login is taking me to dashboard */}
      




     </center>
      </div>
      
    </>
  )
}

export default Loginforms
