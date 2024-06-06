import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-1'>
        <Link href="/">
            <div className='relative w-[200px] h-[50px]'>
                <Image src="/img/logotipo512.webp" alt="logo" fill sizes="
                (max-width:768px) 50vw, (max-width:1200px) 100vw, 100vw"
                className='object-contain' /> 
            </div>
        </Link>
    </div>
  )
}

export default Header
