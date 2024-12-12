'use client'
import { Header, Footer } from "@/app/components";
// import Image from 'next/image';
import Link from "next/link";
import { Button } from "@carbon/react";

// import circleIcon from '@/app/icons/ui/circle.svg'
// import dTriangleIcon from '@/app/icons/ui/down-triangle.svg'
// import triangleIcon from '@/app/icons/ui/triangle.svg'
// import squareIcon from '@/app/icons/ui/square.svg'
// import starIcon from '@/app/icons/ui/star.svg'
import React from 'react';


// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page() {


  return <>
    <Header activeLink='lets-work'></Header>

    <main className="min-h-screen flex flex-col md:flex-row">
      <section id="leftBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-r-2  border-black dark:border-offWhite">
        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-offWhite place-content-center ">
          {/* <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-offWhite hover:p-4 duration-200 hover:invert">
            <Image src={dTriangleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button> */}
        </div>
        <div className="flex-1 flex place-content-center">
          <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
            <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
              {/* <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{projectData[0]?.name ?? 'Our Portfolio'}</p> */}
            </div>
          </div>
          {/* <p className="hidden md:block font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{projectData[0]?.name ?? 'Our Creative Playground'}</p> */}
        </div>

        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-0 border-black dark:border-offWhite place-content-center ">
          {/* <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-offWhite hover:p-4 duration-200 hover:invert">
            <Image src={circleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button> */}
        </div>
      </section>
      <section id="midPanel" className="flex-1 flex flex-col">
        <div>

          <div id="marketingContent" className="md:grid grid-cols-3 p-8 border-b md:border-b-2 border-black dark:border-offWhite">
            <div className="col-span-2 lg:px-44">
              <h1 className="font-display text-display-large mb-8">Ready to Bring <br /> Your Vision to Life ?</h1>
              <h3 className="font-headlines text-headline-large mb-4">Great design is a journey, and we are excited to embark on it with you.</h3>
              <Link href={'/form'}  >
                <Button className="bg-primary1B p-2.5 pl-4 pr-16 hover:bg-primary text-white dark:text-offWhite font-label text-label-large font-bold">Fill in Form
                </Button>
              </Link>
              <h2 className="font-display text-display-small mt-8"> Here&apos;s how we can help</h2>
            </div>
            <div className="">

            </div>

          </div>
          <div id="emptyDiv" className="h-14 md:h-16 border-b md:border-b-2 border-black dark:border-offWhite">
          </div>
          <div id="servicesContent1" className="grid grid-cols-1 md:grid-cols-3">
            <div id="brandIdentity" className="p-8 border-b md:border-r-2 md:border-b-2 border-black dark:border-offWhite">
              <img src={"https://images.unsplash.com/photo-1626798801949-8ec7c7a43918?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="brand identity banner" className="object-cover h-64 w-full" />

              <h4 className='font-headlines text-headline-small uppercase my-2'>Brand Identity</h4>
              <p className='mb-4 font-body text-body-large'> Let&apos;s give your business a face that turns heads.
              </p>
              <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                <div className='flex'>
                  <Link href={'/form/brand-identity'} target='_blank' className='pl-2 flex text-primary border-b-2 border-b-primary sm:border-b-primary1B font-headlines text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow hover:duration-150'>
                    <span>Start Your Project</span>
                    <span>
                      <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z" /></svg>
                    </span>
                  </Link>
                </div>
                <div className='flex'>
                  <Link href={'/lets-work'} className='pl-2 flex text-secondaryRegal border-b-2 border-b-secondaryRegal sm:border-b-secondary font-headlines text-headline-small uppercase  hover:text-white hover:bg-secondary hover:shadow hover:duration-150'>
                    <span>Explore Projects</span>
                    <span>
                      <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                    </span>
                  </Link>
                </div>
              </span>

            </div>
            <div id="uixDesign" className="p-8 border-b md:border-r-2 md:border-b-2 border-black dark:border-offWhite">
              <img src={"https://images.unsplash.com/photo-1626798801949-8ec7c7a43918?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="brand identity banner" className="object-cover h-64 w-full" />

              <h4 className='font-headlines text-headline-small uppercase my-2'>Ui/Ux&nbsp;&nbsp;Design</h4>
              <p className='mb-4 font-body text-body-large'>We&apos;ll make your digital products not just look good,
                but feel good too.
              </p>
              <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                <div className='flex'>
                  <Link href={'/form/brand-identity'} target='_blank' className='pl-2 flex text-primary border-b-2 border-b-primary sm:border-b-primary1B font-headlines text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow hover:duration-150'>
                    <span>Start Your Project</span>
                    <span>
                      <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z" /></svg>
                    </span>
                  </Link>
                </div>
                <div className='flex'>
                  <Link href={'/lets-work'} className='pl-2 flex text-secondaryRegal border-b-2 border-b-secondaryRegal sm:border-b-secondary font-headlines text-headline-small uppercase  hover:text-white hover:bg-secondary hover:shadow hover:duration-150'>
                    <span>Explore Projects</span>
                    <span>
                      <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                    </span>
                  </Link>
                </div>
              </span>

            </div>
            <div id="printDesign" className="p-8 border-b md:border-r-2 md:border-b-2 border-black dark:border-offWhite">
              <img src={"https://images.unsplash.com/photo-1626798801949-8ec7c7a43918?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="brand identity banner" className="object-cover h-64 w-full" />

              <h4 className='font-headlines text-headline-small uppercase my-2'>Print Design</h4>
              <p className='mb-4 font-body text-body-large'> From business cards to billboards, we&apos;ve got you covered.
              </p>
              <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                <div className='flex'>
                  <Link href={'/form/brand-identity'} target='_blank' className='pl-2 flex text-primary border-b-2 border-b-primary sm:border-b-primary1B font-headlines text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow hover:duration-150'>
                    <span>Start Your Project</span>
                    <span>
                      <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z" /></svg>
                    </span>
                  </Link>
                </div>
                <div className='flex'>
                  <Link href={'/lets-work'} className='pl-2 flex text-secondaryRegal border-b-2 border-b-secondaryRegal sm:border-b-secondary font-headlines text-headline-small uppercase  hover:text-white hover:bg-secondary hover:shadow hover:duration-150'>
                    <span>Explore Projects</span>
                    <span>
                      <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                    </span>
                  </Link>
                </div>
              </span>

            </div>
          </div>
          <div id="emptyDiv" className="h-14 md:h-16 border-b md:border-b-2 border-black dark:border-offWhite">
          </div>
          <div id="servicesContent2" className="grid grid-cols-1 md:grid-cols-2">
            <div id="socialMedia" className="p-8 border-b md:border-r-2 md:border-b-2 border-black dark:border-offWhite">
              <img src={"https://images.unsplash.com/photo-1626798801949-8ec7c7a43918?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="brand identity banner" className="object-cover h-64 w-full" />

              <h4 className='font-headlines text-headline-small uppercase my-2'>Social Media Engagement</h4>
              <p className='mb-4 font-body text-body-large'> Let&apos;s give your business a presence that gains reach.
              </p>
              <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                <div className='flex'>
                  <Link href={'/form/brand-identity'} target='_blank' className='pl-2 flex text-primary border-b-2 border-b-primary sm:border-b-primary1B font-headlines text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow hover:duration-150'>
                    <span>Start Your Project</span>
                    <span>
                      <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z" /></svg>
                    </span>
                  </Link>
                </div>
                <div className='flex'>
                  <Link href={'/lets-work'} className='pl-2 flex text-secondaryRegal border-b-2 border-b-secondaryRegal sm:border-b-secondary font-headlines text-headline-small uppercase  hover:text-white hover:bg-secondary hover:shadow hover:duration-150'>
                    <span>Explore Projects</span>
                    <span>
                      <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                    </span>
                  </Link>
                </div>
              </span>

            </div>
            <div id="saas" className="p-8 border-b md:border-r-2 md:border-b-2 border-black dark:border-offWhite">
              <img src={"https://images.unsplash.com/photo-1626798801949-8ec7c7a43918?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="brand identity banner" className="object-cover h-64 w-full" />

              <h4 className='font-headlines text-headline-small uppercase my-2'>Software Solutions</h4>
              <p className='mb-4 font-body text-body-large'> From consultations to full fledged SAAS solutions.
              </p>
              <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                <div className='flex'>
                  <Link href={'/form/brand-identity'} target='_blank' className='pl-2 flex text-primary border-b-2 border-b-primary sm:border-b-primary1B font-headlines text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow hover:duration-150'>
                    <span>Start Your Project</span>
                    <span>
                      <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z" /></svg>
                    </span>
                  </Link>
                </div>
                <div className='flex'>
                  <Link href={'/lets-work'} className='pl-2 flex text-secondaryRegal border-b-2 border-b-secondaryRegal sm:border-b-secondary font-headlines text-headline-small uppercase  hover:text-white hover:bg-secondary hover:shadow hover:duration-150'>
                    <span>Explore Projects</span>
                    <span>
                      <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                    </span>
                  </Link>
                </div>
              </span>

            </div>
          </div>
          <div id="ctaContent" className="p-8 py-16 md:grid grid-cols-3">
            <div className="col-span-2 lg:px-44">
              <p className="font-display text-headline-medium mb-4">Not sure what you need? <br />No worries! <br />Let&apos;s chat and figure it out together.</p>
              <Link href={'/chat'} >
                <Button className="bg-secondary p-2.5 pl-4 pr-16 hover:bg-secondaryRegal text-white dark:text-offWhite font-label text-label-large font-bold">Let&apos;s Chat
                </Button>
              </Link>
            </div>
          </div>


        </div>
      </section>
      <section id="rightBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-l-2  border-black dark:border-offWhite">
        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-offWhite place-content-center ">
          {/* <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-offWhite hover:p-4 duration-200 hover:invert">
            <Image src={starIcon} alt="star icon" className="h-8 dark:invert m-auto "></Image></button> */}
        </div>
        <div className="flex-1 flex place-content-center">
          <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
            <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
              {/* <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{projectData[0]?.type ?? 'Our Portfolio'}</p> */}
            </div>
          </div>
          {/* <p className="hidden md:block font-display text-display-large m-auto md:rotate-90 text-nowrap capitalize">{projectData[0]?.type ?? 'Our Creative Playground'}</p> */}
        </div>

        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-0 border-black dark:border-offWhite place-content-center ">
          {/* <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-offWhite hover:p-4 duration-200 hover:invert">
            <Image src={starIcon} alt="star icon" className="h-8 dark:invert m-auto "></Image></button> */}
        </div>
      </section>
    </main>
    <Footer></Footer>
  </>;
}