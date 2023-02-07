import Head from 'next/head'
import Image from 'next/image'
import logo from '../../public/911-color.png';
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <div className='text-black flex flex-col w-screen h-screen justify-center items-center'>
      <Image priority src={logo} width="100" alt={"logo"} className=""></Image>
      <div className='title text-4xl md:text-7xl mt-2 font-black text-center'>
        COMING SOON
      </div>
    </div>
  )
}

export default Home;
