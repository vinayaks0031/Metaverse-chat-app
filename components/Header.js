import React from 'react'
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

export default function Header() {
    const {user ,logout}=useMoralis();
    return (
        <>
            <div className="sticky top-0 z-50 header-glass bg-[black]">
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