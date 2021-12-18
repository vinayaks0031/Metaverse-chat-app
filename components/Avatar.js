import Image from 'next/image';
import { useMoralis } from 'react-moralis';

export default function Avatar({username}) {
    const { user } = useMoralis();
    return <Image
        src={`https://avatars.dicebear.com/api/micah/${username || user.get("username")}.svg`}
    height={100}
        width={100}
        className="rounded-full "

    />
}
