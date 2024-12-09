'use client'
// import Image from "next/image";
import { Footer, Header } from "./components";
import Link from "next/link";
import { Button } from "@carbon/react";
export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Header activeLink={"home"}></Header>
      <div className="">
        <main className="flex min-h-screen">
          <section className={'flex-1 flex flex-col'}>
            <div className={'flex-1 flex justify-center items-center'}>
              <div className={"p-10 ml-auto -mr-32"}>
                <p className="font-display text-display-large">Welcome to <br />
                  Maki Creative Studio</p>
                <p className="font-headlines text-headline-large uppercase  bg-white dark:bg-offWhite p-2 z-10 relative">Connecting you with your customers</p>
                <div className="flex  bg-white dark:bg-offWhite p-2 z-10 relative">
                  <Link href={'/portfolio'}>
                    <Button className="bg-secondary p-2.5 pl-4 pr-16 hover:bg-secondaryRegal text-white dark:text-offWhite font-label text-label-large font-bold">See Our Work
                    </Button>
                  </Link>
                  <div className="flex-1"></div>
                  <Link href={'/work'} >
                    <Button className="bg-primary1B p-2.5 pl-4 pr-16 hover:bg-primary text-white dark:text-offWhite font-label text-label-large font-bold">Let&apos;s Create together
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={"flex-1 border-t-2 border-t-black dark:border-t-offWhite"}>
              <p className={"p p-16 font-headlines text-headline-medium"}>
                At Maki Studio, we&apos;re not just designers –
                we&apos;re visual problem solvers. Whether you
                need a stunning brand identity, an intuitive
                user interface, or scroll-stopping social
                media graphics, we&apos;ve got you covered.
                <br />
                <br />
                Our team brings big ideas to life, one pixel
                at a time
              </p>
            </div>
          </section>
          <section className={'flex-1 flex justify-center items-center border-l-2 border-l-black dark:border-l-offWhite'}>
            <div className={"p-10"}>
              <p className={"font-headlines text-headline-large uppercase"}>Where Creativity meets purpose</p>
              <div className="h-64 ">

              </div>`
              <p className={" font-headlines text-headline-large uppercase"}>We turn Ideas into <br/> visual masterpieces</p>
            </div>
          </section>
        </main>

      </div>
      <Footer />
    </>
  );
}
