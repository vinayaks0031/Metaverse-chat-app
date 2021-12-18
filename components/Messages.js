import React, { useRef } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis';
import SendMessage from './SendMessage';

export default function Messages() {
    const endOfMessageRef = useRef(null);
    const { user } = useMoralis();
    const { data, loading, error } = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt'),
        [],
        {
            live: true,
        }
    );
    
    console.log(data)
    return (
        <div className="relative message-section h-[440px] z-50 pb-56">
            {/* Message */}
            <div className="flex justify-center">
                <SendMessage endOfMessageRef={endOfMessageRef} />
            </div>
            <div className='text-center text-gray-500 mt-5'>
                <p ref={endOfMessageRef} >You're up to date {user.getUsername()} 🥳</p>
            </div>
        </div>
    )
}
