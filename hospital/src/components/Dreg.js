import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import './forms.css'
import { v4 as uuid } from 'uuid';
import IconButton from '@mui/material/IconButton';
import { Card, Typography } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Stack from '@mui/material/Stack';
import axios from "axios";
// import Stack from '@mui/material/Stack';
import { Alert } from '@mui/material';
const Input = styled('input')({
  display: 'none',
});

function Dreg() {
  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [phn, setPhn] = useState('');
  const [lic, setLic] = useState(null);
  const [spec, setSpec] = useState(null);
  const [hemail, setHemail] = useState(null);
  const [hphn, setHphn] = useState(null);
  const [hlic, setHlic] = useState(null);
  const [hcity, setHcity] = useState(null);
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(small_id,email,pswd,phn,lic,spec,hemail,hphn,hlic,hcity);
    const data ={
      id: small_id,
      email:email,
      pswd:pswd,
      phn:phn,
      lic:lic,
      spec:spec,
      hemail:hemail,
      hphn:hphn,
      hlic:hlic,
      hcity:hcity
    }
    axios.post('/dreg',data).then(res=>{
      console.log(res.status);
      if(res.status==200){
        setStatus(true)
      }
    }).catch(err=>{
    setErrors(true)
    })
  }

// const handleSubmit = () => {

// }
  return(
    <div className="imgs">
      {status &&  <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert sx={{p:3}} onClose={() => {setStatus(false)}}>Successfully registered...Id generated is {small_id}</Alert></Stack>}
    {errors &&  <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error" sx={{p:1}} onClose={() => {setErrors(false)}}>Oops! something went wrong...Try again</Alert></Stack>}
    <>
    <Card className='cards'>  
    <form onSubmit={handleSubmit} enctype='multipart/form-data' > 
     
    <Box className='forms' >
      <TextField
        label="Email"
        variant="filled"
        InputLabelProps={{ required: false }}
        required={true}
        className='texts'
        onChange={e => setEmail(e.target.value)}
      />
        <TextField
        label="Password"
        variant="filled"
        type='password'
        InputLabelProps={{ required: false }}
        required={true}
        className='texts'
        onChange={e=>setPswd(e.target.value)}
        />

      <TextField
        label="Phone No."
        variant="filled"
        type='number'
        InputLabelProps={{ required: false }}
        required={true}
        className='texts'
        // value={git}
        onChange={e => setPhn(e.target.value)}
      />
      <TextField label="Licence number of doctor" variant="filled" InputLabelProps={{ required: false }}
    required={true} className='texts' onChange={e=>setLic(e.target.value)}></TextField>
      <TextField label="Specialization" variant="filled" InputLabelProps={{ required: false }}
    required={true} className='texts' onChange={e => setSpec(e.target.value)}></TextField>

      <TextField label="Hospital's Email" variant="filled" className='texts' onChange={e => setHemail(e.target.value)}></TextField>
      <TextField label="Hospital's Phone Number" variant="filled" type='number' className='texts' onChange={e => setHphn(e.target.value)}></TextField>
      
      <TextField label="Licence number of hospital" variant="filled" InputLabelProps={{ required: false }}
    required={true} className='texts' onChange={e => setHlic(e.target.value)}></TextField>
      <TextField label="City" variant="filled" className='texts' onChange={e => setHcity(e.target.value)}></TextField>
      <div>
      <Button style={{textAlign:'right'}} type="submit"  variant="contained" color="primary">
          Signup
        </Button>
      </div>
      </Box>
      
      </form>
      </Card>
    </>
    </div>
  );
}

export default Dreg;
