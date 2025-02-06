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
            <div className={"bg-black flex justify-center my-12"}>
              <Link href={"/form"} className="p-3 px-20 uppercase font-headlines font-bold text-headline-large bg-gradient-to-r bg-opacity-[26] from-[#e79ae7] via-[#ecd179]  to-[#80e8ec] border border-black hover:text-gray1 hover:transition-500 hover:bg-gradient-to-r bg-opacity-[26] hover:from-[#7fecf0] hover:via-[#ecd179]  hover:to-[#85eca6] hover:shadow">
                lets discuss your vision
              </Link>
            </div>
            <hr className="border-black dark:border-offWhite1B" />

          </section>
          <section id="benefits" className={"pt-12"}>
            <div className="p-8 ">
              <h2 className="h2 font-display text-secondary font-bold text-5xl mb-4 md:mb-8 mt-12">Why choose us?</h2>
              <div id="gradients p-8 bg-black">

                <div className="border-offWhite p-4 bg-gradient-to-r from-cyan-500 to-blue-500">I</div>
                <div className="border-offWhite p-4 bg-linear-to-t from-sky-500 to-indigo-500">II</div>
                <div className="border-offWhite p-4 bg-linear-to-bl from-violet-500 to-fuchsia-500">III</div>
                <div className="border-offWhite p-4 bg-linear-65 from-purple-500 to-pink-500">IV</div>
                <br />
                <br />
                <div className="border-offWhite p-4 size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
                <div className="border-offWhite p-4 size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
                <div className="border-offWhite p-4 size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>
                <br />
                <br />
                <div className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
                <div className="size-24 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"></div>
                <div className="size-24 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
                <br />
                <br />
                <div className="bg-linear-to-r/srgb from-indigo-500 to-teal-400"></div>
                <div className="bg-linear-to-r/hsl from-indigo-500 to-teal-400"></div>
                <div className="bg-linear-to-r/oklab from-indigo-500 to-teal-400"></div>
                <div className="bg-linear-to-r/oklch from-indigo-500 to-teal-400"></div>
                <div className="bg-linear-to-r/longer from-indigo-500 to-teal-400"></div>
                <div className="bg-linear-to-r/shorter from-indigo-500 to-teal-400"></div>
                <div className="bg-linear-to-r/increasing from-indigo-500 to-teal-400"></div>
                <div className="bg-linear-to-r/decreasing from-indigo-500 to-teal-400"></div>

              </div>
            </div>

            <hr className="border-black dark:border-offWhite1B" />
            <div className={"flex justify-center my-12"}>
              <div className="flex items-center">
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
            <hr className="border-black dark:border-offWhite1B" />
          </section>
          <section id="testimonials" className={"pt-12"}>
            <h2 className="h2 font-display text-secondaryRegal font-bold text-5xl px-8 mb-4 md:mb-8 mt-12">Here’s what others are saying
              <br />about us</h2>
            <div className={"grid grid-cols-2 md:grid-cols-6 border-y border-y-black dark:border-y-offWhite1B"}>
              <div className={"border-r border-r-black dark:border-r-offWhite1B"}></div>
              <div className={"border-r border-r-black dark:border-r-offWhite1B relative"}>
                <Image src={"/images/site/telephone.png"} alt={"max pete portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover"></Image>
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
                <Image src={"/images/site/telephone.png"} alt={"lisa chen portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover"></Image>
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
              <Link href={"/form"} className="p-3 px-20 uppercase font-headlines font-bold text-headline-large bg-gradient-to-r bg-opacity-[26] from-[#e79ae7] via-[#ecd179]  to-[#80e8ec] border border-black hover:text-gray1 hover:transition-500 hover:bg-gradient-to-r bg-opacity-[26] hover:from-[#7fecf0] hover:via-[#ecd179]  hover:to-[#85eca6] hover:shadow">
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
