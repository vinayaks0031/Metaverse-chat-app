import Head from 'next/head'
import Login from '../components/Login'
import Header from '../components/Header'
import Messages from '../components/Messages'
import { useMoralis } from 'react-moralis';
import Image from 'next/image';

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) {
    return <Login />
  }
  return (
    <div className=" h-screen text-white lg:px-[100px]">
      <Head>
        <title>Metaverse chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
        <Messages />
      </div>
      <div>
        <Image src="/bg5.jpg" layout="fill" />
      </div>
    </div>
  )
}
