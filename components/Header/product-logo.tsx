import Image from 'next/image'
import Link from 'next/link'
import whiteLogo from '@/assets/White.png'
import blackLogo from '@/assets/black-logo.png'


interface IProductLogoProps {
    color: 'white' | 'black'
}

export default function ProductLogo({ color }: IProductLogoProps) {
    if (color == 'black') {
        return (
            <Link href="/" className=" flex items-center space-x-2">
                <Image src={blackLogo} width="98" height="30" alt="product-logo" />
            </Link>
        )
    } else {
        return (
            <Link href="/" className=" flex items-center space-x-2">
                <Image src={whiteLogo} width="98" height="30" alt="product-logo" />
            </Link>
        )
    }
}
