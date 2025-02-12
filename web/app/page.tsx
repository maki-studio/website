'use client'
import { Footer, Header } from "./components";
import FAQSection from "./about/sections/faq";
import Link from "next/link";
import Image from 'next/image';
import { Button } from "@carbon/react";
export const runtime = "edge";


import shareKnowledgeIcon from '@/app/icons/ui/share-knowledge.svg'
import partnershipIcon from '@/app/icons/ui/partnership.svg'
import turnaroundIcon from '@/app/icons/ui/turnaround.svg'
import futureDesignsIcon from '@/app/icons/ui/future-designs.svg'
import webIcon from '@/app/icons/ui/web.svg'
import devicesAppsIcon from '@/app/icons/ui/devices-apps.svg'
import docSentimentIcon from '@/app/icons/ui/doc-sentiment.svg'
import searchAdvIcon from '@/app/icons/ui/search-advanced.svg'
import taskAddIcon from '@/app/icons/ui/task-add.svg'

export default function Home() {
  return (
    <>
      <Header activeLink={"home"}></Header>
      <div className="">
        <main className="min-h-screen">
          <section id="hero" className={""}>
            <div className="md:p-8">
              <div className="relative h-[70vh] md:h-[90vh] w-full ">
                <div className="bg-black md:bg-gray-300 md:rounded-[90px] bg-cover bg-[url(/images/site/perfect-hero.png)] h-full w-full overflow-hidden">
                  <div className="w-full h-full bg-black/40  flex items-center justify-center md:justify-normal p-4 md:p-12 lg:p-[10rem]">
                    <div className=" text-off-white1B">
                      <p className="text-body-medium mb-2 hidden">Trusted by brands who love what they do</p>
                      <h2 className="font-display text-display-small md:text-display-large mb-12 lg:w-[40vw]">A Design studio for designs that give you 
                        confidence with your customers</h2>
                      <p className="mb-4 hidden">
                        Connect more with your customers
                      </p>
                      <div className="mb-2 flex flex-wrap space-x-12 space-y-6">
                        <Link href={'/portfolio'}>
                          <Button className="bg-secondary p-2.5 pl-4 pr-16 hover:cursor-pointer hover:bg-secondary-regal text-white dark:text-off-white font-label text-label-large font-bold">See our work
                          </Button>
                        </Link>
                        <Link href={'/lets-work'} >
                          <Button className="bg-primary1B p-2.5 pl-4 pr-16 hover:cursor-pointer hover:bg-primary text-white dark:text-off-white font-label text-label-large font-bold">Let&apos;s work on your vision
                          </Button>
                        </Link>
                      </div>
                      <p className="text-body-medium">
                        <b className="font-display font-bold text-title-medium animate-[ping_7s_infinite] ease-in">*</b>&nbsp;Empowering brands worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-black dark:border-off-white1B" />
            <h1 className="h2 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki Creative Studio</h1>
            <hr className="border-black dark:border-off-white1B" />
            <div className={"flex justify-center my-12"}>
              <div className="flex flex-wrap justify-center items-center px-8">
                <span className="relative h-28 w-24 ">
                  <Image src={"/images/site/thomas-watson-ibm.png"} alt={"thomas watson portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover rounded-[180px]"></Image>
                </span>
                <div className=" p-8">
                  <span className=" font-normal font-body leading-tight">&ldquo;<b>Good design is good business.</b>&rdquo;
                    <br />
                  </span>
                  <span className="text-title-medium font-medium font-title">— Thomas Watson Jr., Former CEO of IBM
                  </span>
                </div>
              </div>
            </div>
            <hr className="border-black dark:border-off-white1B mb-12" />
          </section>
          <section id="features" className={"border-t border-t-black dark:border-t-off-white bg-[#228B22]/20"}>
            <h2 className="h2 font-display text-5xl text-primary mb-4 md:mb-8 p-8">It&apos;s the design services that grow —<br /> with your business</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 p-8">
              <div className="bg-off-white1B p-8 flex flex-col justify-between">
                <div>
                  <p className="text-title-large font-bold mb-2 uppercase">Web design</p>
                  <p className="text-label-medium text-primary font-body mb-4 ">Websites that work as hard as you do.</p>
                  <p className="text-body-medium font-body mb-4">From engaging homepages to conversion-focused layouts that turn visitors into customers.</p>
                </div>
                <div className="relative h-80 w-full mx-auto ">
                  <div className="bg-gray-300 rounded-[180px] bg-cover bg-[url(/images/site/web-design-abstract.png)] flex items-center justify-center h-full w-full">
                    <Image src={webIcon} width={320} alt='web icon' className={'h-24 opacity-80'} />
                  </div>
                </div>
              </div>

              <div className="bg-off-white1B p-8 flex flex-col justify-between">
                <div>
                  <p className="text-title-large font-bold mb-2 uppercase">UI/UX design</p>
                  <p className="text-label-medium text-primary font-body mb-4 ">Make every interaction count.</p>
                  <p className="text-body-medium font-body mb-4">User-friendly interfaces that keep your customers coming back for more.</p>
                </div>
                <div className="relative h-80 w-full mx-auto ">
                  <div className="bg-gray-300 rounded-[180px] bg-cover bg-[url(/images/site/uiux-design-abstract.png)] flex items-center justify-center h-full w-full">
                    <Image src={devicesAppsIcon} width={320} alt='uI/ux icon' className={'h-24 opacity-80'} />
                  </div>
                </div>
              </div>

              <div className="bg-off-white1B p-8 flex flex-col justify-between">
                <div>
                  <p className="text-title-large font-bold mb-2 uppercase">SEO</p>
                  <p className="text-label-medium text-primary font-body mb-4 ">Get found by the right people.</p>
                  <p className="text-body-medium font-body mb-4">We build SEO right into your design, helping your business climb search rankings naturally.</p>
                </div>
                <div className="relative h-80 w-full mx-auto ">
                  <div className="bg-gray-300 rounded-[180px] bg-cover bg-[url(/images/site/seo-abstract.png)] flex items-center justify-center h-full w-full">
                    <Image src={searchAdvIcon} width={320} alt='search advanced icon' className={'h-24 opacity-80'} />
                  </div>
                </div>
              </div>

              <div className="bg-off-white1B p-8 flex flex-col justify-between">
                <div>
                  <p className="text-title-large mb-2 font-bold uppercase">Landing Pages</p>
                  <p className="text-label-medium text-primary font-body mb-4 ">Turn clicks into customers with landing pages that convert.</p>
                  <p className="text-body-medium font-body mb-4">Clear, compelling, and crafted for your specific audience.</p>
                </div>
                <div className="relative h-80 w-full mx-auto ">
                  <div className="bg-gray-300 rounded-[180px] bg-cover bg-[url(/images/site/landing-pages-abstract.png)] flex items-center justify-center h-full w-full">
                    <Image src={docSentimentIcon} width={320} alt='document sentiment icon' className={'h-24 opacity-80'} />
                  </div>
                </div>
              </div>

              <div className="bg-off-white1B p-8 flex flex-col justify-between">
                <div>
                  <p className="text-title-large font-bold mb-2 uppercase">Additional Services</p>
                  <p className="text-label-medium text-primary font-body mb-4 ">All your design needs under one roof,
                    minus the complexity</p>
                  <p className="text-body-medium font-body mb-4">
                    — Brand Identity Design <br />
                    — Social Media Graphics <br />
                    — Email Templates <br />
                    — Digital Marketing Assets <br />
                    — Print-Ready Designs <br />
                  </p>
                </div>
                <div className="relative h-80 w-full mx-auto ">
                  <div className="bg-gray-300 rounded-[180px] bg-cover bg-[url(/images/site/extra-services-abstract.png)] flex items-center justify-center h-full w-full">
                    <Image src={taskAddIcon} width={320} alt='task add icon' className={'h-24 opacity-80'} />
                  </div>
                </div>
              </div>

            </div>
          </section>
          <section id="process" className={""}>
            <div className="border-y border-y-black dark:border-y-off-white  mb-4 md:mb-8 ">
              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <h2 className="h2 font-display text-5xl p-8 border-r border-r-black dark:border-r-off-white">Using simple steps to a stunning design</h2>
                <div>
                  <div className="h-48 mx-auto overflow-hidden relative bg-[#D5DCE4] ">
                    <div
                      className="w-full h-97 absolute animate-[scroll_13s_linear_infinite] ease-in-out bg-cover bg-center"
                      style={{
                        backgroundImage: `url('/images/site/waves-abstract.png')`,
                      }}
                    />
                  </div>

                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-t-black dark:border-t-off-white">
                <div className="border-r border-r-black dark:border-r-off-white">
                  <div className="p-8 h-8"></div>
                  <div className={"relative h-96  border-y border-y-black dark:border-y-off-white"}>
                    <Image src={"/images/site/telephone.png"} alt={"telephone image"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover"></Image>
                  </div>
                  <div className="p-8">
                    <p className="text-title-large font-bold mb-6">1. Discovery Call </p>
                    <p className="text-body-large font-body mb-4">Let&apos;s talk about your vision. No complicated briefs — just a conversation about where you want to go.</p>
                  </div>


                </div>

                <div className="border-r border-r-black dark:border-r-off-white">
                  <div className="p-8 h-8"></div>
                  <div className={"relative h-96  border-y border-y-black dark:border-y-off-white"}>
                    <Image src={"/images/site/arrow.png"} alt={"arrow image"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover"></Image>
                  </div>
                  <div className="p-8">
                    <p className="text-title-large font-bold mb-6">2. Strategy & Planning </p>
                    <p className="text-body-large font-body mb-4">We map out your design needs and create a clear plan that fits your timeline and budget.</p>
                  </div>
                </div>

                <div className="border-r border-r-black dark:border-r-off-white">
                  <div className="p-8 h-8"></div>
                  <div className={"relative h-96  border-y border-y-black dark:border-y-off-white"}>
                    <Image src={"/images/site/cards.png"} alt={"cutout cards image"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover"></Image>
                  </div>
                  <div className="p-8">
                    <p className="text-title-large font-bold mb-6">3. Design & Revisions </p>
                    <p className="text-body-large font-body mb-4">We map out your design needs and create a clear plan that fits your timeline and budget.</p>
                  </div>
                </div>

                <div className="border-r border-r-black dark:border-r-off-white">
                  <div className="p-8 h-8"></div>
                  <div className={"relative h-96  border-y border-y-black dark:border-y-off-white"}>
                    <Image src={"/images/site/handshake.png"} alt={"handshake neon sign"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover"></Image>
                  </div>
                  <div className="p-8">
                    <p className="text-title-large font-bold mb-6">4. Launch & Support </p>
                    <p className="text-body-large font-body mb-4">We deliver your designs and stick around to make sure everything works perfectly.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={"bg-black flex justify-center my-12"}>
              <Link href={"/form"} className="p-3 px-20 uppercase font-headlines font-bold text-headline-large bg-linear-to-r bg-opacity-[26] from-[#e79ae7] via-[#ecd179]  to-[#80e8ec] border border-black hover:text-gray1 hover:transition-500 hover:bg-linear-to-r bg-opacity-[26] hover:from-[#7fecf0] hover:via-[#ecd179]  hover:to-[#85eca6] hover:shadow-sm">
                lets discuss your vision
              </Link>
            </div>
            <hr className="border-black dark:border-off-white1B" />

          </section>
          <section id="benefits" className={"pt-12"}>
            <div className="p-8 pb-16 bg-radial-[at_25%_25%] from-sky-200 via-accent3/50 to-accent2/50 to-90%">
              <h2 className="h2 font-display text-secondary font-bold text-5xl mb-4 md:mb-8 mt-12">Why choose us?</h2>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-off-white1B p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-title-large mb-6">Flexible Collaboration</p>
                    <p className="text-body-large font-body mb-4">Work with us from anywhere, anytime. Our remote setup means we&apos;re always just a message away.</p>
                  </div>
                  <div className="relative h-80 w-64 mx-auto ">
                    <div className="bg-gray-300 rounded-[180px] bg-cover bg-[url(/images/site/collaboration-abstract.png)] flex items-center justify-center h-full w-full">
                      <Image src={shareKnowledgeIcon} width={320} alt='share knowledge icon' className={'h-24 opacity-80'} />
                    </div>
                  </div>
                </div>
                <div className="bg-off-white1B p-8  flex flex-col justify-between">
                  <div>
                    <p className="text-title-large mb-6">Partnership Approach</p>
                    <p className="text-body-large font-body mb-4">We grow together. Get a dedicated design partner who understands your business goals and vision.</p>
                  </div>
                  <div className="relative h-80 w-64 mx-auto ">
                    <div className="bg-gray-300 rounded-[180px] bg-cover bg-[url(/images/site/partnership-abstract.png)] flex items-center justify-center h-full w-full">
                      <Image src={partnershipIcon} width={320} alt='partnership icon' className={'h-24 opacity-80'} />
                    </div>
                  </div>
                </div>
                <div className="bg-off-white1B p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-title-large mb-6">Quick Turnaround</p>
                    <p className="text-body-large font-body mb-4">We understand your speed. Get your designs when you need them, not weeks later.</p>
                  </div>
                  <div className="relative h-80 w-64 mx-auto ">
                    <div className="bg-gray-300 rounded-[180px] bg-cover bg-[url(/images/site/turnaround-abstract.png)] flex items-center justify-center h-full w-full">
                      <Image src={turnaroundIcon} width={320} alt='turnaround icon' className={'h-24 opacity-80'} />
                    </div>
                  </div>
                </div>
                <div className="bg-off-white1B p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-title-large mb-6">Future Proof designs</p>
                    <p className="text-body-large font-body mb-4">Scalable solutions that grow with your business. No need to start from scratch as you expand.</p>
                  </div>
                  <div className="relative h-80 w-64 mx-auto ">
                    <div className="bg-gray-300 rounded-[180px] bg-cover bg-[url(/images/site/future-designs-abstract.png)] flex items-center justify-center h-full w-full">
                      <Image src={futureDesignsIcon} width={320} alt='future designs icon' className={'h-24 opacity-80'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-black dark:border-off-white1B" />
            <div className={"flex justify-center my-12"}>
              <div className="flex flex-wrap justify-center items-center px-8">
                <span className="relative h-28 w-24 ">
                  <Image src={"/images/site/paul-rand.png"} alt={"paul rand portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover rounded-[180px]"></Image>
                </span>
                <div className=" p-8">
                  <span className=" font-normal font-body leading-tight">&ldquo;<b>Design is the silent ambassador of your brand.</b>&rdquo;
                    <br />
                  </span>
                  <span className="text-title-medium font-medium font-title">— Paul Rand, Legendary Designer
                  </span>
                </div>
              </div>
            </div>
            <hr className="border-black dark:border-off-white1B" />
          </section>
          <section id="testimonials" className={"pt-12"}>
            <h2 className="h2 font-display text-secondary-regal font-bold text-5xl px-8 mb-4 md:mb-8 mt-12">Here’s what others are saying
              <br />about us</h2>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-y border-y-black dark:border-y-off-white1B"}>
              <div className={"border-r border-r-black dark:border-r-off-white1B"}></div>
              <div className={"border-r border-r-black dark:border-r-off-white1B relative"}>
                <Image src={"/images/site/hero-banner.png"} alt={"max pete portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover"></Image>
              </div>

              <div className={"border-r border-r-black dark:border-r-off-white1B"}>
                <div className=" p-8">
                  <span className=" font-normal font-body leading-tight">&ldquo;Finally, a design studio that understands what startups need. Their work consistently shows that good design isn&apos;t about fancy tricks - it&apos;s about <b>solving real business problems.</b>&rdquo;
                    <br /><br />
                  </span>
                  <span className="text-title-medium font-medium font-title">— Pete, <br/>Marketing Manager
                  </span>
                </div>
              </div>

              <div className={"border-r border-r-black dark:border-r-off-white1B relative"}>
                <Image src={"/images/site/hero-banner.png"} alt={"lisa chen portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover"></Image>
              </div>
              <div className={"border-r border-r-black dark:border-r-off-white1B"}>
                <div className=" p-8">
                  <span className=" font-normal font-body leading-tight">&ldquo;What sets them apart is their ability to translate business goals into <b>designs that actually work.</b>&rdquo;
                    <br /><br />
                  </span>
                  <span className="text-title-medium font-medium font-title">— Sarah, <br />Digital Product Lead
                  </span>
                </div>
              </div>
              <div className={"border-r border-r-black dark:border-r-off-white1B"}></div>
            </div>
            <div className={"bg-black flex justify-center my-12"}>
              <Link href={"/form"} className="p-3 px-20 uppercase font-headlines font-bold text-headline-large bg-linear-to-r bg-opacity-[26] from-[#e79ae7] via-[#ecd179]  to-[#80e8ec] border border-black hover:text-gray1 hover:transition-500 hover:bg-linear-to-r bg-opacity-[26] hover:from-[#7fecf0] hover:via-[#ecd179]  hover:to-[#85eca6] hover:shadow-sm">
                lets discuss your vision
              </Link>
            </div>
            <hr className="border-black dark:border-off-white1B" />
          </section>
        </main>
        <FAQSection></FAQSection>

      </div>
      <Footer />
    </>
  );
}
