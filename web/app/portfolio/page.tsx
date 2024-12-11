'use client'

import { Header, Footer, ProjectCard } from "@/app/components";
import Image from 'next/image';

import circleIcon from '@/app/icons/ui/circle.svg'
import dTriangleIcon from '@/app/icons/ui/down-triangle.svg'
import triangleIcon from '@/app/icons/ui/triangle.svg'
import squareIcon from '@/app/icons/ui/square.svg'

const ProjectWrapper = <div className="border-b-2 border-r-2 border-black dark:border-offWhite place-content-center  p-8">
  <ProjectCard imgSrc={"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"} title={"THE ONE"}></ProjectCard>
</div>;

export default function Page() {
  const projects: [typeof ProjectWrapper][] = [];
  // add items to array
  for (let i = 0; i < 16; i++) {
    projects.push([ProjectWrapper])

  }
  projects.push([ProjectWrapper])
  return <>
    <Header activeLink="portfolio"></Header>
    <div id="carouselContentTop" className={"hidden md:flex absolute h-14 md:h-16 border-b md:border-b-2 border-black dark:border-offWhite "}>
      <div id="" className="w-full inline-flex flex-nowrap overflow-hidden space-x-4 ">
        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">

          <Image src={triangleIcon} alt="triangle icon" className="h-8 mx-4 dark:invert m-auto "></Image>
          <p className="font-display text-display-large m-auto text-nowrap ">Here&apos;s a taste of what happens when passion meets pixels</p>
          <Image src={circleIcon} alt="circle icon" className="h-8 mx-4 dark:invert m-auto "></Image>
          <p className="font-display text-display-large m-auto text-nowrap ">Here&apos;s a taste of what happens when passion meets pixels</p>
          <Image src={squareIcon} alt="triangle icon" className="h-8 mx-4 dark:invert m-auto "></Image>
          <Image src={circleIcon} alt="triangle icon" className="h-8 mx-4 dark:invert m-auto "></Image>
        </div>
      </div>
    </div>
    <main className="min-h-screen flex flex-col md:flex-row">
    <section id="leftBar" className="md:flex flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-10 md:h-screen  md:w-16 md:border-r-2 border-black dark:border-offWhite">
        <div className="hidden md:block h-16 border-b-2 border-black dark:border-offWhite place-content-center ">
          <button id="triangleBtn" className="h-full w-full border-0 hover:bg-offWhite hover:p-4 duration-200 hover:invert"><Image src={dTriangleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button>
        </div>
        <div className="flex-1 flex place-content-center">
          <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap ">Our Creative Playground</p>
        </div>
        <div className="hidden md:block h-16 border-t-2 border-black dark:border-offWhite place-content-center">
          <button id="circleBtn" className="h-full w-full border-0 hover:bg-offWhite hover:p-4 duration-200 hover:invert"><Image src={circleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button>
        </div>
      </section>
      <section id="rightPanel" className="flex-1 flex flex-col">
        <div id="carouselContent" className={" h-14 md:h-16 border-b md:border-b-2 border-black dark:border-offWhite flex "}>
          <div id="" className="md:hidden w-full inline-flex flex-nowrap overflow-hidden space-x-4 ">
            <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
              <p className="font-display text-display-large m-auto text-nowrap ">Here&apos;s a taste of what happens when passion meets pixels</p>
              <Image src={circleIcon} alt="circle icon" className="h-8 mx-4 dark:invert m-auto "></Image>
            </div>
          </div>

        </div>
        <div id="panelContent" className={"flex-1 grid grid-cols-1 md:grid-cols-3"}>
          {projects}
        </div>
      </section>
    </main>
    <Footer></Footer>
  </>;
}