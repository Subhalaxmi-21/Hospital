import React, { useState } from 'react';
import { Alert } from '@mui/material';
// import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Card } from '@mui/material';
import './forms.css'
import Stack from '@mui/material/Stack';
import { v4 as uuid } from 'uuid';
import axios from 'axios'

function Register() {
  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  const [name, setName] = useState('');
  const [pswd, setPswd] = useState(null);
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState('');
  const [blood, setBlood] = useState('');
  const [phone, setPhone] = useState(null);
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name,phone,pswd,email,age,sex,blood);
    const data ={
      id: small_id,
      name:name,
      pswd:pswd,
      phone:phone,
      email:email,
      sex:sex,
      age:age,
      blood:blood
    }
    axios.post('/preg',data).then(res=>{
      console.log(res.status);
      if(res.status==200){
        setStatus(true)
      }
    }).catch(err=>{
    setErrors(true)
    })  
  }
  return(
    <div className="imgs">
    {status &&  <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert sx={{p:3}} onClose={() => {setStatus(false)}}>Successfully registered...Id generated is <em>{small_id}</em></Alert></Stack>}
    {errors &&  <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error" sx={{p:1}} onClose={() => {setErrors(false)}}>Oops! something went wrong...Try again</Alert></Stack>}
    <>
    <Card className='cards'>  
    <form onSubmit={handleSubmit} enctype='multipart/form-data' > 
     
    <Box className='forms' >
      <TextField
        label="Name"
        variant="filled"
        InputLabelProps={{ required: false }}
        required={true}
        className='texts'
        // value="SUbham"
        onChange={e => setName(e.target.value)}
      />
            <TextField
        label="Password."
        variant="filled"
        type="password"
        InputLabelProps={{ required: false }}
        required={true}
        onChange={e=>setPswd(e.target.value)}
        className='texts'/>
      <TextField
        label="Phone No."
        variant="filled"
        type='number'
        InputLabelProps={{ required: false }}
        required={true}
        className='texts'
        // value={git}
        onChange={e => setPhone(e.target.value)}
      />
      {/* <TextField label="Licence number of doctor" variant="filled" required className='texts'></TextField>
      <TextField label="Specialization" variant="filled" required className='texts'></TextField> */}

      <TextField label="Email" variant="filled" className='texts' onChange={e => setEmail(e.target.value)}></TextField>

      <TextField label="Gender" InputLabelProps={{ required: false }}
    required={true} variant="filled"  className='texts' onChange={e => setSex(e.target.value)}></TextField>
      
      <TextField label="Age" variant="filled" type="number" InputLabelProps={{ required: false }}
    required={true} className='texts' onChange={e => setAge(e.target.value)}></TextField>
      <TextField label="Blood group" variant="filled" className='texts' onChange={e => setBlood(e.target.value)}></TextField>
      <div  >
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

export default Register;
