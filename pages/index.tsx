import { NextPage } from "next";
import Head from "next/head";


const Home: NextPage = () => {
  return (
    <>
      <div className="text-center">
        <Head>
          <title>Crypto Tools - NFTs2Me</title>
          <meta name="description" content="Crypto Tools by NFTs2Me" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div>
            <div className="py-16 bg-black">
              <iframe id='iframe-widget' src='https://tools.nfts2me.com/swap?widget=classic&bgColor=000000' style={{ height: "480px", width: "100%", border: "none" }}></iframe>
            </div>

            <div className="container flex flex-col mx-auto">

              <div className="mt-24 mb-32 flex flex-wrap md:flex-nowrap flex-row w-full space-x-8">
                <h1 className="uppercase w-full md:w-2/3 font-black text-6xl">
                  Unleashing the Power of DEX: A Comprehensive Guide to Crypto Swaps
                </h1>
                <p className="w-full md:w-1/3 font-bold self-end text-sm">
                  Welcome to the exciting world of crypto! As the global economy continues to embrace the power of blockchain technology, more and more people are diving into the world of decentralized finance (DeFi). One of the hottest topics in this space is DEX, or decentralized exchanges.
                </p>
              </div>
            </div>

          </div>

        </main>
      </div>
    </>
  )
}

export default Home

