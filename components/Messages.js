import React, { useRef } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis';
import Message from './subComponents/Message';
import SendMessage from './subComponents/SendMessage';

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

    return (
        <div>
            <div className="message-section sticky z-40 pb-56">

                <div className="p-4 px-9 space-y-3">
                    {data.map((message) => (
                        <Message key={message.id} message={message} />
                    ))}
                </div>

                

                <div className='text-center text-gray-500 mt-5'>
                    <p ref={endOfMessageRef} >You're up to date {user.getUsername()} 🥳</p>
                </div>
            </div>
            <div className="flex justify-center">
                    <SendMessage endOfMessageRef={endOfMessageRef} />
                </div>
        </div>
    )
}
