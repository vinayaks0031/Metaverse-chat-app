import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';
import Image from 'next/image';

export default function Home() {
  const {isAuthenticated, logout } =useMoralis();

  if(!isAuthenticated) {
    return <Login />
  }
  return (
    <div >
      <Head>
        <title>Metaverse chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black relative">
                <div className="text-white flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                    <p  style={{fontSize:"50px",fontWeight:"500"}}>Welcome to the metaverse</p>
                    <button className='bg-gray-900 rounded-lg p-5 font-bold animate-pulse' onClick={logout}>Logout</button>
                </div>
                <div className="w-full h-screen">
                    <Image src="/bg4.jpg" layout='fill' objectFit='cover' />
                </div>
            </div>
    </div>
  )
}
