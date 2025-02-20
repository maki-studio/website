'use client'

import { Header, Footer, ProjectCard } from "@/app/components";
import Image from 'next/image';
import designProjects from '@/app/projects/design.json';
import softwareProjects from '@/app/projects/software.json';

import circleIcon from '@/app/icons/ui/circle.svg';
import dTriangleIcon from '@/app/icons/ui/down-triangle.svg';
import triangleIcon from '@/app/icons/ui/triangle.svg';
import squareIcon from '@/app/icons/ui/square.svg';
import Link from "next/link";
import { CreativityNiches } from "@/app/components/CreativityNiches";
import { Button } from "@carbon/react";


export default function Page() {
  //design
  const projects: JSX.Element[] = [];
  const designProjectsTags: string[] = [];
  const designTags: Set<string> = new Set();
  //software
  const softwareProjectsTags: string[] = [];
  const softwareTags: Set<string> = new Set();



  // add items to array---software--1️⃣
  for (const softwareProject of softwareProjects) {
    const ProjectWrapper = <div className="border-b-2 border-r-2 border-black dark:border-off-white place-content-center  p-8">
      <ProjectCard imgSrc={softwareProject.images.mainImage} title={softwareProject.name} link={'/portfolio/software/' + softwareProject.name.trim().replaceAll(/ /g, '-').toLowerCase()}></ProjectCard>
    </div>;

    projects.push(ProjectWrapper)
    //load unique tags
    softwareProject.tags.forEach(tag => softwareTags.add(tag));

  }
  // add items to array---design--2️⃣
  for (const designProject of designProjects) {
    const ProjectWrapper = <div className="border-b-2 border-r-2 border-black dark:border-off-white place-content-center  p-8">
      <ProjectCard imgSrc={designProject.images.mainImage} title={designProject.name} link={'/portfolio/design/' + designProject.name.trim().replaceAll(/ /g, '-').toLowerCase()}></ProjectCard>
    </div>;

    projects.push(ProjectWrapper)
    //load unique tags
    designProject.tags.forEach(tag => designTags.add(tag));
  }

  //add items to tag arrays
  designTags.forEach(tag => designProjectsTags.push(tag));
  softwareTags.forEach(tag => softwareProjectsTags.push(tag));

  return <>
    <Header activeLink="portfolio"
    // hTopColor="bg-[#22478C]" hBottomColor="bg-[#002466]"
    ></Header>
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
      <section id="leftBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-64 border-y md:border-y-0 md:border-r-2  border-black dark:border-off-white">
        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-2 md:border-dashed border-black dark:border-off-white place-content-center flex">

          <Link href={"/portfolio/"} title="back to view all">
            <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:cursor-pointer hover:bg-off-white hover:p-4 duration-200 hover:invert">
              <Image src={dTriangleIcon} alt="triangle icon" className="h-8 dark:invert m-auto rotate-90"></Image>
            </button>
          </Link>
          <div className="flex-1 hidden md:flex items-center justify-center">
            <p className="text-body-medium font-technical uppercase pl-4 ltr:pr-8 rtl:pl-8 ">Creativity&nbsp;niches</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
            <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
              <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">Our Portfolio</p>
            </div>
          </div>
          <div className="hidden md:block overflow-y-auto h-[80vh]">
            <CreativityNiches main="software" softwareTags={softwareProjectsTags} designTags={designProjectsTags} ></CreativityNiches>
          </div>
        </div>

        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-2 border-black dark:border-off-white place-content-center ">
          <Link href={"/portfolio/design"} title="switch to design portfolio">
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

        <div id="panelWrapper">
          <div id="searchBar" className={"hidden md:flex sticky top-0 bg-white dark:bg-gray3 min-h-14 md:min-h-16 border-b md:border-b-2 border-black dark:border-off-white "}>
            <div className=" grid-cols-1 md:grid-cols-2 p-1 px-8">
              <div className=" py-1 min-w-[25vw]">

                <form >
                  <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray1 dark:text-off-white1B" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9" />
                      </svg>
                    </div>
                    <input type="search" id="search" className="block w-full p-2.5 ps-10 text-technical-medium font-technical text-gray-900 border border-gray-300 bg-gray-50 focus:ring-primary1B focus:border-primary1B dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary1B dark:focus:border-primary1B" placeholder="Search" required />
                    <Button type="submit" className="bg-primary1B p-2.5 pl-4 pr-16 hover:cursor-pointer hover:bg-primary text-white dark:text-off-white font-label text-label-large font-bold absolute -end-34 bottom-0">Search
                    </Button>
                  </div>
                </form>

              </div>
            </div>

          </div>
          <div id="panelContent" className={"flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
            {projects}
          </div>
        </div>
      </section>
    </main>
    <Footer
    // fTopColor="bg-[#22228C]" fBottomColor="bg-[#000066]"
    ></Footer>
  </>;
}