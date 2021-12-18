import Head from 'next/head'
import Login from '../components/Login'
import Header from '../components/Header'
import { useMoralis } from 'react-moralis';
import Image from 'next/image';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return <Login />
  }
  return (
    <div className="bg-[#0a192f] h-screen text-white lg:px-[100px]">
      <Head>
        <title>Metaverse chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
        
      </div>

    </div>
  )
}
