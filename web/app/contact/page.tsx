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
export default function Page() {


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

          <div id="contactsContent" className="border-b md:border-b-2 border-black dark:border-off-white border-dashed p-8 lg:grid grid-cols-3">
            <div className="">
              <p className="font-display text-display-medium">Connect with <br /></p>
              <h2 className="h2 font-headline font-bold text-primary text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki Creative Studio</h2>
              <p className="font-headlines text-headline-medium">Transform your brand&apos;s vision into reality. We are ready to begin when you are.</p>
            </div>
          </div>
          <div id="servicesContent" className="grid grid-cols-1 md:grid-cols-2 border-b md:border-b-2 border-black dark:border-off-white border-dashed">
            <div className="border-b md:border-b-0 md:border-r-2 border-black dark:border-off-white border-dashed p-8">
              <h4 className="font-headlines text-headline-large uppercase mb-5">Direct Lines</h4>
              <ul className="space-y-1">
                <li className="flex">
                  <Image src={mailIcon} alt="circle icon" className="h-6 w-6 dark:invert mr-4 "></Image> <span>info@makistudio.online</span>
                </li>
                <li className="flex hidden">
                  <Image src={phoneIcon} alt="circle icon" className="h-6 w-6 dark:invert mr-4 "></Image> <span className="">+000 0000 000</span>
                </li>
                <li className="flex">
                  <Image src={locationIcon} alt="circle icon" className="h-6 w-6 dark:invert mr-4 "></Image> <span>Remote Studio</span>
                </li>
              </ul>
            </div>
            <div className="p-8">
              <h4 className="font-headlines text-headline-large uppercase mb-5">Book a consultation</h4>
              <p className="font-title text-title-large mb-3">Schedule a 15-minute discovery call to discuss your project and explore possibilities</p>
              <Link href={'#!'} >
                <Button className="bg-primary1B p-2.5 pl-4 pr-16 hover:bg-primary text-white dark:text-off-white font-label text-label-large font-bold" data-tally-open="3x47B5" data-tally-layout="modal" data-tally-overlay="1" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" >Book Now
                </Button>
              </Link>
            </div>

          </div>
          <div id="ctaContent" className="flex justify-center p-8 ">
            <div className="hidden">
              <h3 className="uppercase font-headlines font-bold text-headline-large text-secondary-regal mb-8">Have a project in mind? <br />Share the basics</h3>
              <Form className="font-headlines">
                <TextInput id={"name"} name="name" labelText={'Your Name'} className=""></TextInput>
                <TextInput id={"email"} name="email" labelText={'Email Address'}></TextInput>
                <TextInput id={"emailSubject"} name="emailSubject" labelText={'Email Subject'}></TextInput>
                <TextArea
                  enableCounter
                  // helperText="TextArea helper text"
                  id="message"
                  name="message"
                  invalidText="Error message that is really long can wrap to more lines but should not be excessively long."
                  labelText="Brief Message"
                  maxCount={500}
                  placeholder=""
                  rows={4}
                  warnText="This is a warning message."
                />
                <Link className="mt-4" href={'/send-form'} >
                  <Button className="bg-primary1B p-2.5 pl-4 pr-16 hover:bg-primary text-white dark:text-off-white font-label text-label-large font-bold">Send email
                  </Button>
                </Link>
              </Form>
            </div>
          </div>


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
  </>;
}