'use client'
import { Footer, Header } from "./components";
import FAQSection from "./about/sections/faq";
import Link from "next/link";
import Image from 'next/image';
export const runtime = "edge";
import shareKnowledgeIcon from '@/app/icons/ui/share-knowledge.svg'
import partnershipIcon from '@/app/icons/ui/partnership.svg'
import turnaroundIcon from '@/app/icons/ui/turnaround.svg'
import futureDesignsIcon from '@/app/icons/ui/future-designs.svg'

export default function Home() {
  return (
    <>
      <Header activeLink={"home"}></Header>
      <div className="">
        <main className="min-h-screen">
          <section id="hero" className={""}>
            <h1 className="h2 font-headline font-bold text-5xl mb-4 md:mb-8 uppercase">Maki Creative Studio</h1>
          </section>
          <section id="features" className={""}>
            <h2 className="h2 font-display text-5xl mb-4 md:mb-8">Design services that grow —<br /> with your business</h2>
          </section>
          <section id="process" className={""}>
            <div className="grid grid-cols-2 border-y border-y-black  mb-4 md:mb-8 ">
              <h2 className="h2 font-display text-5xl p-8 border-r border-r-black">Simple steps to a stunning design</h2>
              <div>
                <div className="h-48 mx-auto overflow-hidden relative bg-[#D5DCE4] ">
                  <div
                    className="w-full h-97 absolute animate-[scroll_13s_linear_infinite] ease-in-out bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/images/site/waves abstract.png')`,
                    }}
                  />
                </div>
                <div>

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
              <div className="flex flex-wrap justify-center items-center">
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
                <Image src={"/images/site/telephone.png"} alt={"max pete portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover"></Image>
              </div>

              <div className={"border-r border-r-black dark:border-r-off-white1B"}>
                <div className=" p-8">
                  <span className=" font-normal font-body leading-tight">&ldquo;Finally, a design studio that understands what startups need. Their work consistently shows that good design isn&apos;t about fancy tricks - it&apos;s about <b>solving real business problems.</b>&rdquo;
                    <br /><br />
                  </span>
                  <span className="text-title-medium font-medium font-title">— Max Pete, Head of Design at LaunchLab
                  </span>
                </div>
              </div>

              <div className={"border-r border-r-black dark:border-r-off-white1B relative"}>
                <Image src={"/images/site/telephone.png"} alt={"lisa chen portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover"></Image>
              </div>
              <div className={"border-r border-r-black dark:border-r-off-white1B"}>
                <div className=" p-8">
                  <span className=" font-normal font-body leading-tight">&ldquo;What sets them apart is their ability to translate business goals into <b>designs that actually work.</b>&rdquo;
                    <br /><br />
                  </span>
                  <span className="text-title-medium font-medium font-title">— Sarah Chen, Digital Product Lead at StartupScale
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
