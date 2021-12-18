import React from 'react'
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';

export default function Message({ message }) {
    const { user } = useMoralis();
    const isUserMessage = message.get('ethAdress') == user.get('ethAddress');

    return (
        <div className={`flex items-end ${isUserMessage && 'justify-end'}`}>
            <div className={`h-8 w-8 ${isUserMessage && 'order-last'}`}>
                <Avatar />    
            </div>
            <div className={`flex rounded-lg p-2 ${isUserMessage ? 'rounded-br-none bg-sky-700':'rounded-br-none bg-slate-700'}`}>
                <p>{message.get('message')}</p>
            </div>
        </div>
    )
}