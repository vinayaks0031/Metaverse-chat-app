import React from 'react'
import { useMoralis } from 'react-moralis';

export default function ChangeUsername() {
    const { setUserData, isUserUpdating, user } = useMoralis();
    
    const setUserName=()=>{
        const username=prompt(`Enter new User Name (Current is ${user.getUsername()})`)
        console.log(username);
        if(!username) return;
        setUserData({
            username,
        });
    }

    return (
        <div className="absolute card p-2 top-1 right-1 text-[9px]  lg:text-[15px] hover:opacity-75">
            <button 
            disabled={isUserUpdating}
            onClick={setUserName}
            >change username</button>
        </div>
    )
}
