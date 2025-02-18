import designProjects from '@/app/projects/design.json'
import { Header, Footer } from "@/app/components";
import Image from 'next/image';
import Link from "next/link";

import circleIcon from '@/app/icons/ui/circle.svg'
import dTriangleIcon from '@/app/icons/ui/down-triangle.svg'
import triangleIcon from '@/app/icons/ui/triangle.svg'
import squareIcon from '@/app/icons/ui/square.svg'
import starIcon from '@/app/icons/ui/star.svg'



export async function generateStaticParams() {
    const posts = designProjects;

    return posts.map((post) => ({
        slug: post.name.trim().replaceAll(/ /g, '-').toLowerCase(),
    }))
}






// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params, }: Readonly<{ params: Promise<{ slug: string }> }>) {
    const { slug } = await params

    const projectData = designProjects.map((proj) => { if (proj.name.trim().replaceAll(/ /g, '-').toLowerCase() == slug) return proj });


    const resultsLi = (): React.JSX.Element[] => {

        const item = <li className='flex space-x-4 px-4'><span className=''>Results</span><Image src={starIcon} alt="star icon" className="h-4 invert dark:no-invert-0 m-auto "></Image></li>;
        const items: React.JSX.Element[] = [];
        for (let i = 0; i < 13; i++) {
            items.push(item)
        }
        return items;
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
                    <Link href={"/portfolio/design/"} title="back to view all">
                        <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:cursor-pointer hover:bg-off-white hover:p-4 duration-200 hover:invert">
                            <Image src={dTriangleIcon} alt="triangle icon" className="h-8 dark:invert m-auto rotate-90"></Image>
                        </button>
                    </Link>
                </div>
                <div className="flex-1 flex place-content-center">
                    <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
                        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
                            <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{projectData[0]?.name ?? 'Our Portfolio'}</p>
                        </div>
                    </div>
                    <p className="hidden md:block font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{projectData[0]?.name ?? 'Our Creative Playground'}</p>
                </div>

                <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-2 border-black dark:border-off-white place-content-center ">
                    <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
                        <Image src={circleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button>
                </div>
            </section>
            <section id="midPanel" className="flex-1 flex flex-col">
                <div id="carouselContent" className={" h-14 md:h-16 border-b md:border-b-2 border-black dark:border-off-white flex "}>
                    <div id="" className="md:hidden w-full inline-flex flex-nowrap overflow-hidden space-x-4 ">
                        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
                            <p className="font-display text-display-large m-auto text-nowrap ">Here&apos;s a taste of what happens when passion meets pixels</p>
                            <Image src={circleIcon} alt="circle icon" className="h-8 mx-4 dark:invert m-auto "></Image>
                        </div>
                    </div>

                </div>
                <div id="projectContent" className={"flex-1 grid grid-cols-1 md:grid-cols-2 "}>
                    <div className='flex flex-col justify-between p-8 border-b-2 border-black dark:border-off-white'>
                        <h3 id='projectName' className='font-headlines text-headline-large uppercase mb-8'>{projectData[0]?.name}</h3>
                        <div id='projectDescription' className=''>
                            <h4 className='font-headlines text-headline-small uppercase mb-2'>Brief Description</h4>
                            <p className='mb-4 font-body text-body-medium'>{projectData[0]?.description}</p>
                            <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                                <div className='flex'>
                                    <Link href={projectData[0]?.link ?? ''} target='_blank' className='pl-2 flex text-secondary-regal border-b-2 border-b-secondary-regal sm:border-b-secondary font-headlines text-headline-small uppercase  hover:text-white hover:bg-secondary hover:shadow-sm hover:duration-150'>
                                        <span>Visit Project</span>
                                        <span>
                                            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z" /></svg>
                                        </span>
                                    </Link>
                                </div>
                                <div className='flex'>
                                    <Link href={'/lets-work'} className='pl-2 flex text-primary border-b-2 border-b-primary sm:border-b-primary1B font-headlines text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow-sm hover:duration-150'>
                                        <span>Start Your Project</span>
                                        <span>
                                            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                                        </span>
                                    </Link>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className='md:border-l-2 border-b-2 border-black dark:border-off-white md:p-8'>
                        <img className='object-cover' src={projectData[0]?.images.mainImage} alt="main project image" />

                    </div>
                </div>
                <div id='imagesContent' className='md:p-8 border-b-2 border-black dark:border-off-white'>
                    <img src={projectData[0]?.images.wideImage} alt="wide image showcase" className='h-[50vh] w-full object-cover' />
                </div>
                <div id='challengesContent' className='grid grid-col-span-1 md:grid-cols-3 border-b-2 border-black dark:border-off-white '>
                    <div className='md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-off-white' >
                        <img src={projectData[0]?.images.challengesFacedImages[0]} alt="challenges faced" className=' object-cover' />
                    </div>
                    <div className='p-8 border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-off-white'>
                        <h4 className='font-headlines text-headline-small uppercase mb-2'>Challenges Faced</h4>
                        <p className='mb-4 font-body text-body-medium'>{projectData[0]?.description}</p>
                    </div>
                    <div></div>
                </div>
                <div id='solutionsContent' className='grid grid-cols-1 md:grid-cols-3 border-b-2 border-black dark:border-off-white'>
                    <div className='p-8 border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-off-white'>
                        <h4 className='font-headlines text-headline-small uppercase mb-2'>Solutions Provided</h4>
                        <p className='mb-4 font-body text-body-medium'>{projectData[0]?.description}</p>
                    </div>
                    <div className='md:col-span-2 md:p-8'>
                        <img src={projectData[0]?.images.solutionsImages[0]} alt="solutions provided" className='h-[50vh] w-full object-cover' />
                    </div>
                </div>
                <div id='resultsContent' className='md:p-8 '>
                    <h4 className='font-headlines text-headline-large flex uppercase place-content-center h-14  md:hidden border-y bg-black dark:bg-off-white text-white dark:text-black overflow-x-clip'>
                        <ul className='flex space-x-2 justify-center items-center animate-infinite-scroll'>
                            {resultsLi()}
                        </ul>
                        <ul className='flex space-x-2 justify-center items-center animate-infinite-scroll'>
                            {resultsLi()}
                        </ul>
                    </h4>
                    <img src={projectData[0]?.images.resultImages[0]} alt="results images" className='h-[50vh] w-full object-cover' />
                </div>
            </section>
            <section id="rightBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-l-2  border-black dark:border-off-white">
                <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-2 border-black dark:border-off-white place-content-center ">
                    <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
                        <Image src={starIcon} alt="star icon" className="h-8 dark:invert m-auto "></Image></button>
                </div>
                <div className="flex-1 flex place-content-center">
                    <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
                        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
                            <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{projectData[0]?.type ?? 'Our Portfolio'}</p>
                        </div>
                    </div>
                    <p className="hidden md:block font-display text-display-large m-auto md:rotate-90 text-nowrap capitalize">{projectData[0]?.type ?? 'Our Creative Playground'}</p>
                </div>

                <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-2 border-black dark:border-off-white place-content-center ">
                    <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
                        <Image src={starIcon} alt="star icon" className="h-8 dark:invert m-auto "></Image></button>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </>;
}