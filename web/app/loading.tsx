'use client'
import React from 'react';
// import type { SVGProps } from 'react';
import Image from 'next/image';

import subMark from '@/app/icons/submark.svg'

export default function Loading() {
  // Or a custom loading skeleton component
  return <>
    <div className='bg-black h-screen w-full place-content-center py-12'>
      <main className="grid grid-cols-1 md:grid-cols-4 h-64">
        <div className="hidden md:block border-y-2 border-white "></div>
        <div className={'flex p-4 md:p-0 items-center justify-center border-y-2 border-white md:border-l-2'}>
          <Image src={subMark} alt='logo mark' className='h-28 p-1' />
        </div>
        <div className="hidden md:block border-y-2 border-white border-l-2"></div>
        <div className="hidden md:block border-y-2 border-white border-l-2"></div>
      </main>
      <div className='border-b-2 border-white font-headlines text-white text-headline-small uppercase h-10 place-content-center'>
        <div className="w-full inline-flex flex-nowrap space-x-4 overflow-hidden">
          <div className=" animate-infinite-scroll space-x-4 flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ">
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
          </div>
          <div className=" animate-infinite-scroll space-x-4 flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
            <p className=''>Loading</p>
          </div>
        </div>
      </div>
    </div>
  </>
}

// export function SvgSpinnersClock(props: SVGProps<SVGSVGElement>) {
//   return (<svg xmlns="http://www.w3.org/2000/svg" className='h-32' viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"></path><rect width={2} height={7} x={11} y={6} fill="currentColor" rx={1}><animateTransform attributeName="transform" dur="36s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></rect><rect width={2} height={9} x={11} y={11} fill="currentColor" rx={1}><animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></rect></svg>);
// }