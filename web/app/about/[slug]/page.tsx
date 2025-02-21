import { Header, Footer } from "@/app/components";
import Image from 'next/image';
import Link from "next/link";

// import circleIcon from '@/app/icons/ui/circle.svg'
// import dTriangleIcon from '@/app/icons/ui/down-triangle.svg'
// import locationIcon from '@/app/icons/ui/location.svg'
// import phoneIcon from '@/app/icons/ui/phone.svg'
import openTabIcon from '@/app/icons/ui/openTab.svg'
import React from 'react';

import BusinessSection from "@/app/about/sections/business";
import StorySection from "@/app/about/sections/story";
import GoodSection from "@/app/about/sections/good";
import TeamSection from "@/app/about/sections/team";
import TermsSection from "@/app/about/sections/terms";
import PrivacySection from "@/app/about/sections/privacy";
import AffiliateSection from "@/app/about/sections/affiliates";
import { notFound } from "next/navigation";

const contentTabs = [ //VerticalTab[] = [
  {
    title: "Our Story",
    element: <StorySection></StorySection>,
  },
  {
    title: "The Business",
    element: <BusinessSection></BusinessSection>,
  },
  {
    title: "Design For Social Good",
    element: <GoodSection></GoodSection>,
  },
  {
    title: "Our Team",
    element: <TeamSection></TeamSection>,
  },
  {
    title: "Affiliates",
    element: <AffiliateSection />,
  },
  {
    title: "Terms and Conditions",
    element: <TermsSection />,
  },
  {
    title: "Privacy Policy",
    element: <PrivacySection />,
  },
];


// generate different routes for the respective tabs
export async function generateStaticParams() {
  const tabs = contentTabs;

  return tabs.map((tab) => ({
    slug: tab.title.trim().replaceAll(/ /g, '-').toLowerCase(),
  }))
}


// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params, }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params

  const aboutSectionData = contentTabs.filter((tab) => tab.title.trim().replaceAll(/ /g, '-').toLowerCase() === slug)[0];
  //check if there's no value
  if (aboutSectionData == null) { return notFound() };


  return <>
    <Header activeLink='about'></Header>
    <main>
      <section id="midPanel" className="flex-1 flex flex-col md:border-r-2  border-black dark:border-off-white">
        <div className="flex place-content-center md:h-16 border-b-2 border-black dark:border-off-white">
          <div className="sticky w-full flex-1 inline-flex flex-nowrap overflow-hidden bg-black text-off-white1B ">
            <div className="flex flex-1 items-center justify-center md:justify-start font-display text-display-medium text-nowrap capitalize ">
              <span className=' w-16 border-r-2 border-dashed border-primary1B dark:border-off-white flex justify-center '>
                <Link title="view as Tabs" className="flex justify-center" href={"/about?active=" + slug.trim().replaceAll(/-/g, '_').toLowerCase()}>
                  <Image src={openTabIcon} alt="open tab icon" className="h-6 w-6 invert hover:invert-0 hover:bg-white mr-4 hover:rounded-full hover:p-[16px] duration-200"></Image>
                </Link>
              </span><p className="flex-1 px-8 mx-auto flex justify-center">{aboutSectionData.title}</p>
            </div>
          </div>

        </div>
      </section>
      <div className="mx-16 border-x-2 border-dashed border-black dark:border-off-white">
        {aboutSectionData.element}
      </div>
    </main>
    <Footer></Footer>
  </>;
}