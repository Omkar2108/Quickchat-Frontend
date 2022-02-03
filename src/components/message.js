import React, { useEffect, useState } from 'react';
import Axios from '../axios';
function Message({to, userid, msg}) {

    const [messages, setMessages] = useState([]);
    useEffect(()=>{

        data();
    }, [to, msg])


    async function data(){
        await Axios().get('/getmessages')
    .then((res)=>{
        // console.log(res.data);
        setMessages(res.data);
        // return res.json();
    }).catch((err)=>{
        console.log(err);
    });

    if(to!=null){
        await Axios().post('/getmessages', {
            to,
            from: userid
        }).then((res)=>{
            console.log(res.data);
            setMessages(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
}

  return (
        messages && messages.map((msg, ind)=>{
        if((msg.email && msg.email!==userid) || (msg.to && msg.to===userid) || (msg.from && msg.from!==userid)) return(
            <div key={ind} className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-center">
                <div
                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                {msg.email && msg.email.charAt(0).toUpperCase() || msg.from && msg.from.charAt(0).toUpperCase()}
                </div>
                <div
                className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                {msg.message || msg.msg}
                {/* {msg.createdAt && <div className="text-xs text-gray-500 absolute right-0 mt-1">{msg.createdAt.toString()}</div>} */}
                </div>
            </div>
            </div>
        );
        return(
            <div key={ind} className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex items-center justify-start flex-row-reverse">
                <div
                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                 {msg.email && msg.email.charAt(0).toUpperCase() || msg.from && msg.from.charAt(0).toUpperCase()}
                </div>
                <div
                className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                >
               {msg.message || msg.msg}
               {/* {msg.createdAt && <div className="text-xs text-gray-500 absolute right-0 mt-1">{msg.createdAt.toString()}</div>} */}
                </div>
            </div>
            </div>
        )
    }) 
  );
}

export default Message;
