import Image from 'next/image';
import { useMoralis } from 'react-moralis';
export default function Login() {
    const { authenticate, isAuthenticating } = useMoralis();
    return (
        <>
            <div className="bg-black relative ">
                <div className=" absolute z-50 w-full">
                    <div className="card flex flex-col items-center p-10 space-y-4 mx-[510px] mt-[150px]">
                    <Image className="rounded-full" src="/vr1.jpg" width={200} height={200} />
                    {isAuthenticating ?
                        <button className='bg-yellow-600 rounded-lg p-5 font-bold animate-pulse' onClick={authenticate} >Entering in Metaverse...</button>:
                        <button className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse' onClick={authenticate}>Login to the Metaverse</button>
                    }
                    </div>
                </div>
                <div className="w-full h-screen">
                    <Image src="/BG3.jpeg" layout='fill' objectFit='cover' />
                </div>
            </div>
        </>
    )
}
