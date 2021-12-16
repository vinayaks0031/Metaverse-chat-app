import Image from 'next/image';
import { useMoralis } from 'react-moralis';
export default function Login() {
    const { authenticate }=useMoralis();
    return (
        <>
            <div className="z-1">
            <h1>login </h1>
            <button onClick={authenticate}>Login</button> 
            </div>
            <div>

            <Image src="/bg1.png" layout='fill'/>
            </div>
        </>
    )
}
