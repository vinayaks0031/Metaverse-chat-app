import React, { useState } from 'react'
import { useMoralis } from 'react-moralis';
import InputEmoji from "react-input-emoji";

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
        <form className="flex z-50 fixed bottom-8 bg-white border-4 border-indigo-500 rounded-full pr-2 py-1 max-w-2xl  w-11/12">
            <InputEmoji
                type="text"
                value={inputData}
                onChange={setInputData}
                placeholder={`Type your Message ${user.getUsername()}.....`}
                className="flex-grow outline-none placeholder-slate-400" />
            <button onClick={sendMessage} className="font-bold text-indigo-500 " type="submit">Send</button>
        </form>
    )
}
