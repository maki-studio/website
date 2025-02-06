'use client'
import { Footer, Header } from "./components";
import FAQSection from "./about/sections/faq";
import Link from "next/link";
import Image from 'next/image';
export const runtime = "edge";

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
            <h2 className="h2 font-display text-5xl mb-4 md:mb-8">Simple steps to a stunning design</h2>
          </section>
          <section id="benefits" className={""}>
            <h2 className="h2 font-display text-5xl mb-4 md:mb-8">Why choose us?</h2>
          </section>
          <section id="testimonials" className={""}>
            <h2 className="h2 font-display text-secondaryRegal text-5xl px-8 mb-4 md:mb-8 mt-12">Here’s what others are saying
              <br/>about us</h2>
            <div className={"grid grid-cols-2 md:grid-cols-6 border-y border-y-black dark:border-y-offWhite1B"}>
              <div className={"border-r border-r-black dark:border-r-offWhite1B"}></div>
              <div className={"border-r border-r-black dark:border-r-offWhite1B relative"}>
                <Image src={"/images/site/telephone.png"} alt={"max pete portrait"} layout="fill" className="bg-green-300 object-cover"></Image>
              </div>

              <div className={"border-r border-r-black dark:border-r-offWhite1B"}>
                <div className=" p-8">
                  <span className=" font-normal font-body leading-tight">&ldquo;Finally, a design studio that understands what startups need. Their work consistently shows that good design isn&apos;t about fancy tricks - it&apos;s about <b>solving real business problems.</b>&rdquo;
                    <br /><br />
                  </span>
                  <span className="text-title-medium font-medium font-title">— Max Pete, Head of Design at LaunchLab
                  </span>
                </div>
              </div>

              <div className={"border-r border-r-black dark:border-r-offWhite1B relative"}>
                <Image src={"/images/site/telephone.png"} alt={"lisa chen portrait"} layout="fill" className="bg-green-300 object-cover"></Image>
              </div>
              <div className={"border-r border-r-black dark:border-r-offWhite1B"}>
                <div className=" p-8">
                  <span className=" font-normal font-body leading-tight">&ldquo;What sets them apart is their ability to translate business goals into <b>designs that actually work.</b>&rdquo;
                    <br /><br />
                  </span>
                  <span className="text-title-medium font-medium font-title">— Sarah Chen, Digital Product Lead at StartupScale
                  </span>
                </div>
              </div>
              <div className={"border-r border-r-black dark:border-r-offWhite1B"}></div>
            </div>
            <div className={"bg-black flex justify-center my-12"}>
              <Link href={"/contact"} className="p-3 px-20 uppercase font-headlines font-bold text-headline-large bg-gradient-to-r bg-opacity-[26] from-[#e79ae7] via-[#ecd179]  to-[#80e8ec] border border-black hover:text-gray1 hover:transition-500 hover:bg-gradient-to-r bg-opacity-[26] hover:from-[#7fecf0] hover:via-[#ecd179]  hover:to-[#85eca6] hover:shadow">
                lets discuss your vision
              </Link>
            </div>
            <hr className="border-black dark:border-offWhite1B" />
          </section>
        </main>
        <FAQSection></FAQSection>

      </div>
      <Footer />
    </>
  );
}
