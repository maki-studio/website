'use client'
import React from 'react';
import { useState } from 'react';

// import styles from './VerticalTabs.css';
export interface VerticalTab {
  title: string;
  element: React.JSX.Element;
}

export interface VerticalTabsProps {
  tabs: VerticalTab[]
}


export function VerticalTabs({ tabs, }: VerticalTabsProps) {


  const sidePanel = (title: string, i: number): React.JSX.Element => <button onClick={()=>handleClick(i)} id="leftBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-r-2  border-black dark:border-offWhite hover:bg-offWhite hover:p-1 duration-200 hover:invert dark:hover:invert-0 dark:hover:text-primary1B hover:duration-150">
    <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-offWhite place-content-center ">
      {/* <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-offWhite hover:p-4 duration-200 hover:invert">
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

    <div className="md:h-16 w-16 border-x md:border-x-0 md:border-t-0 border-black dark:border-offWhite place-content-center ">
      {/* <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-offWhite hover:p-4 duration-200 hover:invert">
  <Image src={circleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button> */}
      <p className="font-display text-display-large m-auto text-nowrap capitalize">{i + 1}</p>
    </div>
  </button>;

  const midPanel = (content: React.JSX.Element, title: string, index: number): React.JSX.Element => <section id="midPanel" className="flex-1 flex flex-col md:border-r-2  border-black dark:border-offWhite">
    <div className="flex place-content-center md:h-16 border-b-2 border-black dark:border-offWhite">
      <div className=" w-full flex-1 inline-flex flex-nowrap overflow-hidden bg-black text-offWhite1B ">
        <div className="flex flex-1 items-center justify-center md:justify-start font-display text-display-medium text-nowrap capitalize animate-infinite-scroll md:animate-none">
          <span className=' w-16 border-r-2 border-dashed border-primary1B dark:border-offWhite flex justify-center '>0{index + 1}</span><p className="flex-1 px-8 mx-auto flex justify-center">{title}</p>
        </div>
      </div>

    </div>
    <div>
      {content}
    </div>
  </section>;


  const insertInitialTabs = (): React.JSX.Element[] => {
    const panelList: React.JSX.Element[] = []
    const count = tabs.length;
    const midElement = Math.ceil(count / 2);
    tabs.map((tab, i) => {
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
    tabs.map((tab, i) => {
      if (i == (midElement))
        panelList.push(midPanel(tab.element, tab.title, i))
      else
        panelList.push(sidePanel(tab.title, i));
    });
    return panelList;
  };

  const handleClick = (n:number) => {
    setPanels(insertShiftedTabs(n))
  }

  const [panels, setPanels] = useState(insertInitialTabs())



  return <main className="min-h-screen flex flex-col md:flex-row">

    {panels}

  </main>;
}
