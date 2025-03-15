'use client'

import softwareProjects from '@/app/projects/software.json';
import designProjects from '@/app/projects/design.json';
import { Header, Footer, ProjectCard } from "@/app/components";
import Image from 'next/image';

import circleIcon from '@/app/icons/ui/circle.svg'
import dTriangleIcon from '@/app/icons/ui/down-triangle.svg'
import triangleIcon from '@/app/icons/ui/triangle.svg'
import squareIcon from '@/app/icons/ui/square.svg'
import Link from "next/link";


export default function PortfolioPage() {

  //design
  const projects: JSX.Element[] = [];


  // add items to array---design
  for (let i = 0; i < 5; i++) {
    const ProjectWrapper = <div className="border-b-2 border-r-2 border-black dark:border-off-white place-content-center  p-8">
      <ProjectCard imgSrc={designProjects[0].images.mainImage} title={designProjects[0].name} link={'/portfolio/design/' + designProjects[0].name.trim().replaceAll(/ /g, '-').toLowerCase()}></ProjectCard>
    </div>;

    projects.push(ProjectWrapper);
  }
  // add items to array---software
  for (let i = 0; i < 4; i++) {
    const ProjectWrapper = <div className="border-b-2 border-r-2 border-black dark:border-off-white place-content-center  p-8">
      <ProjectCard imgSrc={softwareProjects[0].images.mainImage} title={softwareProjects[0].name} link={'/portfolio/software/' + softwareProjects[0].name.trim().replaceAll(/ /g, '-').toLowerCase()}></ProjectCard>
    </div>;

    projects.push(ProjectWrapper);

  }


  return <>
    <Header activeLink="portfolio"></Header>
    <div id="carouselContentTop" className={"hidden md:flex absolute w-screen h-14 md:h-16 border-b md:border-b-2 border-black dark:border-off-white "}>
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
      <section id="leftBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-r-2  border-black dark:border-off-white">
        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-2 border-black dark:border-off-white place-content-center ">
          <Link href={"/portfolio/design"} title="open panel Menu">
            <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:cursor-pointer hover:bg-off-white hover:p-4 duration-200 hover:invert">
              <Image src={dTriangleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button>
          </Link>
        </div>
        {/* <div className="flex-1 flex place-content-center">
          <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap ">Our Creative Playground</p>
        </div> */}
        <div className="flex-1 flex place-content-center">
          <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
            <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
              <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">Our Portfolio</p>
            </div>
          </div>
          <p className="hidden md:block font-display text-display-large m-auto md:-rotate-90 text-nowrap ">Our Creative Playground</p>
        </div>

        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-2 border-black dark:border-off-white place-content-center ">
          <Link href={"/portfolio/software"} title="switch to Software portfolio">
            <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:cursor-pointer hover:bg-off-white hover:p-4 duration-200 hover:invert">
              <Image src={circleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image>
            </button>
          </Link>
        </div>
      </section>
      <section id="rightPanel" className="flex-1 flex flex-col">
        <div id="carouselContent" className={" h-14 md:h-16 border-b md:border-b-2 border-black dark:border-off-white flex "}>
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