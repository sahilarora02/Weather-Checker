import React from 'react'
import Image from 'next/image'
import Spin from '../public/SVKL.gif';
export default function Spinner() {
  return (
    <>
      <Image className='w-[200px] m-auto block' src={Spin} alt = 'loading..'></Image>
    </>
  )
}
