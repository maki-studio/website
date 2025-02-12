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
import { WorkCard, WorkCardProps } from "../components/WorkCard";
import FAQSection from "../about/sections/faq";


// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page() {

  const availableServicesA: WorkCardProps[] = [
    {
      imageUrl: "/images/site/web-design-abstract.png",
      title: "Web design",
      description: "From engaging homepages to conversion-focused layouts that turn visitors into customers.",
      startLink: "/form/web",
      exploreLink: "/portfolio/design/web"
    },
    {
      imageUrl: "/images/site/landing-pages-abstract.png",
      title: "Landing pages",
      description: "Turn clicks into customers with landing pages that convert.Clear, compelling, and crafted for your specific audience.",
      startLink: "/form/landing-page",
      exploreLink: "/portfolio/design/web?q=landing"
    },
    {
      imageUrl: "/images/site/uiux-design-abstract.png",
      title: "UI/UX design",
      description: "User-friendly interfaces that keep your customers coming back for more.Make every interaction count.",
      startLink: "/form/ui_ux",
      exploreLink: "/portfolio/design/web?q=ui_ux"
    },
    {
      imageUrl: "/images/site/seo-abstract.png",
      title: "SEO",
      description: "We build SEO right into your website, helping your business climb search rankings the right way.Get found by the right people.",
      startLink: "/form/seo",
      exploreLink: "/portfolio/design/seo"
    },
    {
      imageUrl: "/images/site/turnaround-abstract.png",
      title: "Brand Identity design",
      description: "Let's give your business a face that truly gives to your customers",
      startLink: "/form/branding",
      exploreLink: "/portfolio/design/branding"
    },
    {
      imageUrl: "/images/site/collaboration-abstract.png",
      title: "Digital marketing assets",
      description: "Set the right assets in place for your marketing message",
      startLink: "/form/marketing",
      exploreLink: "/portfolio/design/marketing"
    },
  ];
  const availableServicesB: WorkCardProps[] = [

    {
      imageUrl: "/images/site/extra-services-abstract.png",
      title: "Social Media Assets",
      description: "Let's give your business a presence that gains reach.",
      startLink: "/form/social",
      exploreLink: "/portfolio/design/social"
    },
    {
      imageUrl: "/images/site/landing-pages-abstract.png",
      title: "Copywriting",
      description: "our copy makes sure you get the message to the right people with the right tone.",
      startLink: "/form/copywriting",
      exploreLink: "/portfolio/copywriting"
    },
    {
      imageUrl: "/images/site/waves-abstract.png",
      title: "Print Designs",
      description: "T-shirts, caps, merchandise, vinyl designs. Having a uniform brand makes sure everyone recognizes you",
      startLink: "/form/print",
      exploreLink: "/portfolio/print"
    },
    {
      imageUrl: "/images/site/future-designs-abstract.png",
      title: "Stationery design",
      description: "Calenders, office stationery, envelopes, pens etc.",
      startLink: "/form/stationery",
      exploreLink: "/portfolio/stationery"
    },

  ];

  return <>
    <Header activeLink='lets-work'></Header>

    <main className="min-h-screen flex flex-col md:flex-row">
      <section id="leftBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-r  border-black dark:border-off-white">
        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-off-white place-content-center ">
          {/* <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
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

        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-0 border-black dark:border-off-white place-content-center ">
          {/* <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
            <Image src={circleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button> */}
        </div>
      </section>
      <section id="midPanel" className="flex-1 flex flex-col">
        <div>

          <div id="marketingContent" className="md:grid grid-cols-3 p-8 border-b md:border-b border-black dark:border-off-white">
            <div className="col-span-2 lg:px-44">
              <h1 className="font-display text-display-medium mb-4">Ready to Bring <br /> Your Vision to Life ?</h1>
              <h3 className="font-headlines text-headline-medium mb-8">Great design is a journey, and we are excited to embark on it with you.</h3>
              <Link href={'/form'}  >
                <Button className="bg-primary1B p-2.5 pl-4 pr-16 hover:bg-primary text-white dark:text-off-white font-label text-label-large hover:font-bold">Book a 15 minute meeting
                </Button>
              </Link>


            </div>
            <div className="">

            </div>

          </div>
          <div id="emptyDiv" className="h-14 md:h-16 border-b md:border-b border-black dark:border-off-white"></div>
          <h2 className="bg-primary1B/20 text-primary h2 font-display font-medium text-5xl pt-4 md:pt-12 pl-8">Here&apos;s how we will help you</h2>
          <div id="emptyDiv" className="bg-primary1B/20 h-14 md:h-16 border-b md:border-b border-black dark:border-off-white">
          </div>
          <div id="servicesContent1" className="grid grid-cols-1 md:grid-cols-3">

            {availableServicesA.map((serve, index) => <WorkCard key={"serveA" + index} imageUrl={serve.imageUrl} title={serve.title} description={serve.description} startLink={serve.startLink} exploreLink={serve.exploreLink}></WorkCard>)}
          </div>
          <div id="emptyDiv" className="h-14 md:h-16 border-b md:border-b border-black dark:border-off-white">
          </div>
          <div id="servicesContent2" className="grid grid-cols-1 md:grid-cols-2">

            {availableServicesB.map((serve, index) => <WorkCard key={"serveA" + index} imageUrl={serve.imageUrl} title={serve.title} description={serve.description} startLink={serve.startLink} exploreLink={serve.exploreLink}></WorkCard>)}
          </div>
          <div id="ctaContent" className="p-8 py-16 md:grid grid-cols-3">
            <div className="col-span-2 lg:px-44">
              <h2 className="font-display text-display-medium mb-4">Not sure what you need? <br />No worries! <br /></h2>
              <h3 className="font-headlines text-headline-medium mb-8">Tell us and we can figure it out together.</h3>
              <Link href={'/contact'} >
                <Button className="bg-secondary p-2.5 pl-4 pr-16 hover:bg-secondary-regal text-white dark:text-off-white font-label text-label-large font-bold">Send an email
                </Button>
              </Link>
            </div>
          </div>

          <hr className="border-black dark:border-off-white1B" />
          <div id="emptyDiv" className="h-14 md:h-16 border-b md:border-b border-black dark:border-off-white"></div>

          <FAQSection></FAQSection>


        </div>
      </section>
      <section id="rightBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-l-1  border-black dark:border-off-white">
        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-off-white place-content-center ">
          {/* <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
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

        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-0 border-black dark:border-off-white place-content-center ">
          {/* <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
            <Image src={starIcon} alt="star icon" className="h-8 dark:invert m-auto "></Image></button> */}
        </div>
      </section>
    </main>
    <Footer></Footer>
  </>;
}