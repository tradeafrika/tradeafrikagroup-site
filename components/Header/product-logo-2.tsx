import Image from 'next/image'
import Link from 'next/link'
import commonLogo from '@/assets/tradeafrikalogo.png'

export default function ProductLogo2() {
    return (
        <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src={commonLogo} width="40" height="40" alt="product-logo" />
            <span className=" font-medium text-sm text-white">Trade <br></br> Afrika</span>
        </Link>
    )
}
