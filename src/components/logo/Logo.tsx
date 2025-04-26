import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface LogoProp {
    href:string,
    title?:string
}
function Logo({href="/"}: LogoProp) {
  return <Link href={href} className='w-[185px] h-[63px] !relative  '>
    <Image
    src={"/images/logo_lg.png"}
    alt=''
    fill
    priority
    quality={100}
    className='!w-full !h-full !object-cover '
    />
  </Link>;
}

export default Logo