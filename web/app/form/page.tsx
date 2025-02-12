'use client'
import { Header, Footer } from "@/app/components";

// import circleIcon from '@/app/icons/ui/circle.svg'
// import dTriangleIcon from '@/app/icons/ui/down-triangle.svg'
import React from 'react';
import FAQSection from "../about/sections/faq";

import { useSearchParams } from 'next/navigation'




// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function FormPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get('q')

  const getTitle = (s: string | null): string => {
    const startProject = (s: string | null) => "Start your " + s + (s ? " ": "") + "project";


    switch (s) {
      case "seo":
        return startProject("SEO (website search ranking)");
      case "web":
        return startProject("Website Design");
      case "landing-page":
        return startProject("Landing Page");
      case "ui_ux":
        return startProject("UI/UX Design");
      case "branding":
        return startProject("Brand Identity");
      case "marketing":
        return startProject("Marketing Media Assets");
      case "social":
        return startProject("Social Media Templates");
      case "print":
        return startProject("Print Design");
      case "Stationery":
        return startProject("Stationery Design");
      default:
        return startProject("");
    }
  };

  return <>
    <Header activeLink="contact"></Header>

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
          <div id="emptyDiv" className="bg-off-white1B text-gray3 border-b md:border-b border-black dark:border-off-white p-8 flex justify-center">
            <h1 className="mx-auto h2 font-display font-medium text-5xl ">{getTitle(search)}</h1>
          </div>
          <div id="emptyDiv" className="h-12 md:h-16 border-b md:border-b border-black dark:border-off-white"></div>
          <iframe title="booking form" src="https://tally.so/embed/3x47B5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" className="min-h-screen w-full md:w-[70vw] lg:w-[50vw] p-8 mx-auto bg-off-white1B border-x-2 border-dashed border-x-black/40 dark:border-off-white" allowFullScreen />
          <hr className="border-black dark:border-off-white1B" />
          <div id="emptyDiv" className="h-12 md:h-16 border-b md:border-b border-black dark:border-off-white"></div>

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