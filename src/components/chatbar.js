import React, { useEffect, useState } from 'react';
import Axios from '../axios';

function Chatbar({to, userid}) {
    const [users, setUsers] = useState([]);
    useEffect(async()=>{
        await Axios().get('/getall')
        .then((res)=>{
            // console.log(res.data);
            setUsers(res.data);
            // return res.json();
        }).catch((err)=>{
            console.log(err);
        });
    }, [])

  return (
    users && users.map((user, ind)=>{
        if(user.email==userid)return;
        return(
            <button key={ind}
            className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 focus:bg-red-300" 
            onClick={()=>{to(user.email)}}
            >
                <div
                    className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
                >
                    {user.email.charAt(0).toUpperCase()}
                </div>
                <div className="ml-2 text-sm font-semibold">{user.email}</div>
            </button>       
        )
    })
  );
}

export default Chatbar;
