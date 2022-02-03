import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button, TextField} from '@material-ui/core';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Axios from '../axios';


const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(async () => {
        await Axios().get('/')
        .then((res)=>{
            // console.log(res);
            if(res.data.auth){
                window.location.href = '/home';
            }
        }).catch((err)=>{
            console.log(err);
        })
          
    }, []);
    

    const handleLogin = () =>{
        if(email === '' || password==='') return;
        // console.log(email, password);
        fetch('http://127.0.0.1:4000/login', {
            method:"POST",
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({email: email, password: password})
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            // console.log(data["auth"]);
            if(data["auth"]){
                localStorage.setItem("token", data["token"]);
                localStorage.setItem("email", data["email"]);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className='flex h-screen justify-center items-center'> 
            <div className='flex flex-col space-y-5'>
            <h1 className='text-red-400 text-2xl text-center'>LOGIN</h1>
            <TextField id="outlined-basic" className='' label="Email" variant="outlined"  onChange={(e)=>setEmail(e.target.value)} />
            <TextField id="outlined-basic" label="Password" variant="outlined"  onChange={(e)=>setPassword(e.target.value)} />
            <Link className='text-right text-xs font-semibold' to="/forgotpassword"> Forgot Password?</Link>
            <Button
            onClick={()=>handleLogin()}
            variant="contained"
            > Login </Button>
            <Link to="/signup">
                <Button className='text-center w-full h-full'>Sign Up</Button> 
            </Link>
            </div>
                             
        </div>
    )
}

export default Login;