import Image from 'next/image'
import Link from 'next/link'
import commonLogo from '@/assets/tradeafrikalogo.png'

export default function ProductLogo() {
    return (
        <Link href="/" className=" flex items-center space-x-2">
            <Image src={commonLogo} width="40" height="40" alt="product-logo" />
            <span className=" font-medium text-sm text-black">Trade <br></br> Afrika</span>
        </Link>
    )
}
