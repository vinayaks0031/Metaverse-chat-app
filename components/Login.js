import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Container = styled(animated.div)`
cursor:pointer`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Login() {
    const { authenticate, isAuthenticating } = useMoralis();
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 200, friction: 50 } }))

    return (
        <>

            <div className="bg-black relative ">

                <div className=" absolute z-50 w-[60%] ml-[20%]">
                    <Container
                        onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{
                            transform: props.xys.interpolate(trans)
                        }}
                    >
                        <div>
                            <div className="card flex flex-col items-center p-10 space-y-4 mx-auto mt-[150px] h-90 w-80 ">
                                <Image className="rounded-full" src="/vr1.jpg" width={200} height={200} />
                                {isAuthenticating ?
                                    <button className='bg-yellow-600 rounded-lg p-5 font-bold animate-pulse' onClick={authenticate} >Entering in Metaverse...</button> :
                                    <button className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse' onClick={authenticate}>Login to the Metaverse</button>
                                }
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="w-full h-screen">
                    <Image src="/BG3.jpeg" layout='fill' objectFit='cover' />
                </div>
            </div>
        </>
    )
}
