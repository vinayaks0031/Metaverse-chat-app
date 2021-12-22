import React from 'react'
import { useMoralis } from 'react-moralis';
import Avatar from './subComponents/Avatar'
import ChangeUsername from './subComponents/ChangeUsername'

export default function Header() {
    const {user ,logout}=useMoralis();
    // user contain all the data about user
    
    return (
        <>
            <div className="sticky top-0 z-20 shadow-sm header-glass">
                <div className="pt-5">
                    <p onClick={logout} className="text-2xl lg:text-4xl font-Carter underline decoration-sky-500 text-center">Welcome To MetaVerse</p>
                </div>
                <div>
                    <div className="border-8 border-gray-300 rounded-full mt-5 mx-auto w-[110px]">
                        <Avatar />
                    </div>
                    <h1 className="text-center text-xl my-3 font-bold truncate">{user.getUsername()}</h1>
                </div>
                <ChangeUsername />
            </div>
        </>
    )
}
