'use client'
import { Header, Footer } from "@/app/components";
import { Button, Form, TextArea, TextInput } from "@carbon/react";
import Image from 'next/image';
import Link from "next/link";

// import circleIcon from '@/app/icons/ui/circle.svg'
// import dTriangleIcon from '@/app/icons/ui/down-triangle.svg'
import locationIcon from '@/app/icons/ui/location.svg'
import phoneIcon from '@/app/icons/ui/phone.svg'
import mailIcon from '@/app/icons/ui/mail.svg'
import React from 'react';





// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function FormPage() {


  return <>
    <Header activeLink="contact"></Header>

    <main className="min-h-screen flex flex-col md:flex-row">
      <section id="leftBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-r-2  border-black dark:border-off-white">
        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-off-white place-content-center ">
          {/* <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
            <Image src={dTriangleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button> */}
        </div>
        <div className="flex-1 flex place-content-center">
          <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
            <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
              <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">We&apos;re ready to begin when you are.</p>
            </div>
          </div>
          <p className="hidden md:block font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">We&apos;re ready to begin when you are.</p>
        </div>

        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-0 border-black dark:border-off-white place-content-center ">
          {/* <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
            <Image src={circleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button> */}
        </div>
      </section>

      <section id="midPanel" className="flex-1 flex flex-col">
        <div>
          {/* <iframe data-tally-src="https://tally.so/embed/3x47B5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="576" frameBorder={0} marginHeight={0} marginWidth={0} title="Contact form">
          </iframe> */}

          {/* <iframe src="https://www.youtube.com/embed/19g66ezsKAg" allowFullScreen /> */}
          <iframe src="https://tally.so/embed/3x47B5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" className="min-h-screen w-full md:w-[70vw] lg:w-[50vw] p-8 pt-0 mx-auto" allowFullScreen />

          
        </div>
      </section>

      <section id="rightBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-l-2  border-black dark:border-off-white">
        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-off-white place-content-center ">
          {/* <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
            <Image src={starIcon} alt="star icon" className="h-8 dark:invert m-auto "></Image></button> */}
        </div>
        <div className="flex-1 flex place-content-center">
          <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
            <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
              <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">We&apos;re ready to begin when you are.</p>
            </div>
          </div>
          <p className="hidden md:block font-display text-display-large m-auto md:rotate-90 text-nowrap capitalize">We&apos;re ready to begin when you are.</p>
        </div>

        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-0 border-black dark:border-off-white place-content-center ">
          {/* <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
            <Image src={starIcon} alt="star icon" className="h-8 dark:invert m-auto "></Image></button> */}
        </div>
      </section>
    </main>
    <Footer></Footer>

    {/* <script>{`var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined" != typeof Tally ? Tally.loadEmbeds() : d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function (e) { e.src = e.dataset.tallySrc }))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`}</script> */}
  </>;
}