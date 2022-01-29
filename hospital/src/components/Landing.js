import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './landing.css'
import { fontWeight } from '@mui/system';
function Landing() {
  const par ="A need for a centralised system for patients has been raised in today’s world which is facing pandemics,accidents and many unknown diseases. It becomes necessary that we take action on preferring a more compact but flexible hospital management system. Our System centraize the process "
  const [detail, setDetail] = useState(false);
  const Details=()=>{
    setDetail(true)
  }
  return(
    <div className='parent'>
        <div className='header'>
        A Commitment to Community
        
        
            <div className='subHeader'>
            Welcome to the portal
            <br></br>
            Get yourself registered
            
            </div>
            {/* <br></br> */}
            <div className='headbut'>
            <Button className='buttons' variant="contained" onClick={Details}>Get Started</Button>
            </div>
            {/* <div>
              Signup to know more!!
            </div> */}
            <div style={{fontWeight:'normal',fontSize:'2rem',backgroundColor:'white', borderRadius:'5px',opacity:0.7}}>
          {detail && <span>{par}</span>}
            </div>
        </div>
        <div className='image'>
            {/* <img src='https://d2ve6gs9iamg49.cloudfront.net/wp-content/uploads/2019/11/144-Doctor_iStock-1023224308_PowerPoint.jpg'></img> */}
            <img src='https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' alt='doctor'></img>
        </div>

    </div>
  );
}

export default Landing;
