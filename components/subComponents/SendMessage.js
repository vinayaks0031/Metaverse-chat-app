import React, { useState } from 'react'
import { useMoralis } from 'react-moralis';

export default function SendMessage({endOfMessageRef}) {

    const {user , Moralis}=useMoralis();
    const [inputData,setInputData]=useState("");

    const sendMessage = (e)=>{
        e.preventDefault();
        if(!inputData) return;

        
        const Messages=Moralis.Object.extend("Messages");//creating a table in DB for messages
        const messages =new Messages();//it gives us an object so we can push data
        
        messages.save({ //save for save this in database
            message: inputData,
            username:user.getUsername(),
            ethAdress:user.get('ethAddress')
        }).then((message)=>{
            //message is saved
        },
        (error)=>{
            console.log(error);
        });
        endOfMessageRef.current.scrollIntoView({behavior: 'smooth'});
        setInputData("");
    }

    return (
        <form className="border-4 border-yellow-500 rounded-full px-2 py-1 max-w-2xl shadow-xl flex bottom-8 fixed w-11/12">
            <input
                type="text"
                value={inputData}
                onChange={(e)=> setInputData(e.target.value)}
                placeholder={`Type your Message ${user.getUsername()}.....`}
                className="flex-grow outline-none bg-transparent placeholder-slate-400 pr-5 pl-2" />
            <button onClick={sendMessage} className="font-bold text-yellow-500 " type="submit">Send</button>
        </form>
    )
}
