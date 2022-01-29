import React,{useState} from 'react';
import { Card} from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios'
import Stack from '@mui/material/Stack';
import { Alert } from '@mui/material';
import { Box } from '@mui/system';
function Dlog() {
  const [unique, setUnique] = useState('');
  const [pswd, setPswd] = useState(null);
  const [type, setType] = useState(null);
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState(false);
  // const temp;
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = {
      type: type,
      unique:unique,
      pswd:pswd
    }
    axios.post('/dlog',data).then(res=>{
      if(res.status==200){
        setStatus(true)
      }

    }).catch(err=>{setErrors(true)
    })
  }
  return(
    <div className="imgs">

{status &&  <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert sx={{p:3}} onClose={() => {setStatus(false)}}>Successfully Logged in!!</Alert></Stack>}
    {errors &&  <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error" sx={{p:1}} onClose={() => {setErrors(false)}}>Oops! something went wrong...Try again</Alert></Stack>}
    <>
    <Card className='cards' >  
    <form onSubmit={handleSubmit} > 
     
    <Box className='forms' style={{padding:'10% 10%'}}>
    <FormControl variant="filled" sx={{ minWidth: '101%' }}>
        <InputLabel id="visit">Visiting as:</InputLabel>
        <Select
          labelId="visit"
          // value={age}
          onChange={e=>setType(e.target.value)}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value='Patient'>Patient</MenuItem>
          <MenuItem value='Doctor'>Doctor</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="uniqueId"
        variant="filled"
        InputLabelProps={{ required: false }}
        required={true}
        sx={{color:"yellow"}}
        className='texts'
        // value="SUbham"
        onChange={e => setUnique(e.target.value)}
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
      <div>
      <Button style={{textAlign:'right'}} type="submit"  variant="contained" color="primary">
          Login
        </Button>
      </div>
      </Box>
      
      </form>
      </Card>
    </>
    </div>
    );
}

export default Dlog;
