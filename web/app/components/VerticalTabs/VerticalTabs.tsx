'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import closeTabIcon from '@/app/icons/ui/closeTab.svg'

// import styles from './VerticalTabs.css';
export interface VerticalTab {
  title: string;
  element: React.JSX.Element;
}

export interface VerticalTabsProps {
  tabs: VerticalTab[],
  activeTabTitle?: string,
}


export function VerticalTabs({ tabs, activeTabTitle = '' }: Readonly<VerticalTabsProps>) {

  // get the index of the active tab
  const activeTabIndex = tabs.findIndex(tab => tab.title.trim().replace(/ /g, "_").toLowerCase() === activeTabTitle);

  const sidePanel = (title: string, i: number): React.JSX.Element => <button onClick={() => handleClick(i)} id="leftBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-r-2  border-black dark:border-off-white hover:bg-off-white hover:cursor-pointer hover:p-1 duration-200 hover:invert dark:hover:invert-0 dark:hover:text-primary1B hover:duration-150">
    <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-off-white place-content-center ">
      {/* <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
  <Image src={dTriangleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button> */}
    </div>
    <div className="flex-1 flex place-content-center w-full">
      <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
          <p className="font-display text-display-large  md:-rotate-90 text-nowrap capitalize">{title}</p>
        </div>
      </div>
      <p className="hidden md:block font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{title}</p>
    </div>

    <div className="md:h-16 w-16 border-x md:border-x-0 md:border-t-0 border-black dark:border-off-white place-content-center ">
      {/* <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
  <Image src={circleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button> */}
      <p className="font-display text-display-large m-auto text-nowrap capitalize">{i + 1}</p>
    </div>
  </button>;

  const midPanel = (content: React.JSX.Element, title: string, index: number): React.JSX.Element => <section id="midPanel" className="flex-1 flex flex-col md:border-r-2  border-black dark:border-off-white">
    <div className="flex place-content-center md:h-16 border-b-2 border-black dark:border-off-white">
      <div className=" w-full flex-1 inline-flex flex-nowrap overflow-hidden bg-black text-off-white1B ">
        <div className="flex flex-1 items-center justify-center md:justify-start font-display text-display-medium text-nowrap capitalize animate-infinite-scroll md:animate-none">
          <span className=' w-16 border-r-2 border-dashed border-primary1B dark:border-off-white flex justify-center '>0{index + 1}</span>
          <p className="flex-1 px-8 mx-auto flex justify-center">{title}</p>
          <span className=' w-16 border-l-2 border-dashed border-primary1B dark:border-off-white flex justify-center '>
            <Link title='view Full Page' className="flex justify-center" href={"/about/" + title.trim().replaceAll(/ /g, '-').toLowerCase()}>
              <Image src={closeTabIcon} alt="open tab icon" className="h-6 w-6 invert hover:invert-0 hover:bg-white mr-4  hover:rounded-full hover:p-[16px] duration-200"></Image>
            </Link>
          </span>
        </div>
      </div>

    </div>
    <div>
      {content}
    </div>
  </section>;


  const insertInitialTabs = (aT: number): React.JSX.Element[] => {
    const panelList: React.JSX.Element[] = []
    const count = tabs.length;
    const midElement = aT > -1 ? (aT + 1) : (Math.ceil(count / 2)); // check for ActiveTabTitle's index or calculate mid element
    tabs.forEach((tab, i) => {
      if (i == (midElement - 1))
        panelList.push(midPanel(tab.element, tab.title, i))
      else
        panelList.push(sidePanel(tab.title, i));
    });
    return panelList;
  };

  const insertShiftedTabs = (tabNum: number): React.JSX.Element[] => {
    const panelList: React.JSX.Element[] = []
    const midElement = tabNum;
    tabs.forEach((tab, i) => {
      if (i == (midElement))
        panelList.push(midPanel(tab.element, tab.title, i))
      else
        panelList.push(sidePanel(tab.title, i));
    });
    return panelList;
  };

  const handleClick = (n: number) => {
    setPanels(insertShiftedTabs(n))
  }

  const [panels, setPanels] = useState(insertInitialTabs(activeTabIndex))



  return <main className="min-h-screen flex flex-col md:flex-row">

    {panels}

  </main>;
}
