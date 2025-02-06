'use client'
import Link from "next/link";
import { Footer, Header } from "./components";
import { Button } from "@carbon/react";
import Image from 'next/image';

import scissorsIcon from '@/app/icons/ui/scissors.svg'

export default function NotFound() {
  return (
    <>
      <Header activeLink={"404"} hTopColor="bg-gray2" hBottomColor="bg-gray1" ></Header>
      <main className="md:min-h-screen md:grid grid-cols-4">
        <div className="hidden md:block md:w-auto"></div>
        <div className="col-span-2 flex flex-col md:border-2 border-x-black dark:border-x-off-white border-dashed h-full">
          <div className="flex-1 flex items-between flex-col">
            <div className=" md:flex flex-col p-8">
              <h4 className="font-headlines text-headline-large uppercase ">Oops</h4>
              <h2 className="font-display text-display-large md:mb-8">Page Not Found</h2>
              <p className="font-technical text-technical-large text-red-600 uppercase font-medium">Error 404</p>
            </div>
            <div className="w-full mt-auto self-end flex justify-between">
              {/* TODO: make this icon to follow the design */}
              <Image src={scissorsIcon} alt="scissors icon" className="h-8 hidden md:block text-red-500 dark:invert top-4 -left-16 relative z-10"></Image>
              <Image src={scissorsIcon} alt="scissors icon" className="h-8 text-red-500 bg-white dark:bg-off-white dark:invert relative z-10 top-4 -right-16 -rotate-180"></Image>
            </div>
          </div>
          <div className="flex-1  p-8 border-t md:border-t-2 border-t-black dark:border-t-off-white border-dashed">
            <Link href={'/'} >
              <Button className="bg-primary1B p-2.5 pl-4 pr-16 hover:bg-primary text-white dark:text-off-white font-label text-label-large font-bold">Take me to the Home Page
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden w-full md:block md:w-auto"></div>
      </main>
      <Footer fTopColor="bg-gray1" fBottomColor="bg-gray2"></Footer>
    </>
  );
}
