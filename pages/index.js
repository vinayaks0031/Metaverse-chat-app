import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';

export default function Home() {
  const {isAuthenticated, logout, isInitializing } =useMoralis();

  if(!isAuthenticated) {
    return <Login />
  }
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to metaverse</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
