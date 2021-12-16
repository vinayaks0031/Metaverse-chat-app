import Image from 'next/image';
import { useMoralis } from 'react-moralis';
export default function Login() {
    const { authenticate, isAuthenticating } = useMoralis();
    return (
        <>
            <div className="bg-black relative">
                <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                    <Image className="rounded-full" src="/vr1.jpg" width={200} height={200} />
                    {isAuthenticating ?
                        <button className='bg-yellow-600 rounded-lg p-5 font-bold animate-pulse' onClick={authenticate}>Entering in Metaverse...</button>:
                        <button className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse' onClick={authenticate}>Login to the Metaverse</button>
                    }
                </div>
                <div className="w-full h-screen">
                    <Image src="/BG3.jpeg" layout='fill' objectFit='cover' />
                </div>
            </div>
        </>
    )
}
