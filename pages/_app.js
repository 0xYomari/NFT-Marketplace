import "../styles/globals.css"
import Link from "next/link"
import { ethers } from "ethers"

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <nav className=" border-b p-6 flex flex-row justify-between items-center">
                <p className="text-4xl font-bold py-4 px-4">NFT Marketplace</p>
                <div className="flex mt-4">
                    <Link href="/">
                        <a className="mr-4 p-6">Home</a>
                    </Link>
                    <Link href="/create-item">
                        <a className="mr-4 p-6">Sell</a>
                    </Link>
                    <Link href="/Buy">
                        <a className="mr-4 p-6">Buy</a>
                    </Link>
                    <Link href="/My Assets">
                        <a className="mr-4 p-6">My Assets</a>
                    </Link>
                </div>
            </nav>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
