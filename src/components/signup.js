import { Button, TextField } from '@material-ui/core';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Signup = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup  = () =>{
        // if(email === '' || password==='') return;
        console.log(email, password);
        fetch('http://localhost:4000/register', {
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
        }).then((data)=>{
            localStorage.setItem("token", data["token"]);
            localStorage.setItem("email", data["email"]);
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    return(
        <div className='flex h-screen justify-center items-center'> 
            <div className='flex flex-col space-y-5'>
            <h1 className='text-red-400 text-2xl text-center'>SIGN UP</h1>
            <TextField id="outlined-basic" className='' label="Email" variant="outlined"  onChange={(e)=>setEmail(e.target.value)} />
            <TextField id="outlined-basic" label="Password" variant="outlined"  onChange={(e)=>setPassword(e.target.value)} />
            <Button
            onClick={()=>handleSignup()}
            variant="contained"
            > Register </Button>
            <Link to="/">
                <Button className='text-center w-full h-full'>Login</Button> 
            </Link>
            </div>
                             
        </div>
    )
}

export default Signup;