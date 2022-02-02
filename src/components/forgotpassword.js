import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [isEmail, setIsEmail]= useState(false);
    const handleSetPassword = async () =>{
        // if(email === '' || password==='') return;
        // console.log(email, password);
        await axios.post( 'http://localhost:4000/forgotpassword',{
            email: email, password : password
        }).then((res)=>{
            // console.log(res.data.user);
            setIsEmail(res.data.user);
        }).catch((err)=>{
            console.log(err);
        })
    };

  return (
    <div className='flex h-screen justify-center items-center'> 
    <div className='flex flex-col space-y-5'>
    <h1 className='text-red-400 text-2xl text-center'>Forgot Password</h1>
    {!isEmail && <TextField id="outlined-basic" className='' label="Email" variant="outlined"  onChange={(e)=>setEmail(e.target.value)} />}
    {isEmail && <TextField id="outlined-basic" label="Password" variant="outlined"  onChange={(e)=>setPassword(e.target.value)} />}
    <Button
    onClick={()=>handleSetPassword()}
    variant="contained"
    > {isEmail ? "Set Password":"Check email"} </Button>
    <Link className='text-base text-center' to="/">
        Login
    </Link>
    </div>
                     
</div>
  );
}

export default ForgotPassword;
