import React from 'react';
import { useState } from 'react';

// import styles from './VerticalTabs.css';

export interface VerticalTabsProps {
  tabs: { title: string; element: React.JSX.Element }[]
}


export function VerticalTabs({ tabs, }: VerticalTabsProps) {


  const sidePanel = (title: string): React.JSX.Element => <button onClick={handleClick} id="leftBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-r-2  border-black dark:border-offWhite">
    <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-offWhite place-content-center ">
      {/* <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-offWhite hover:p-4 duration-200 hover:invert">
  <Image src={dTriangleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button> */}
    </div>
    <div className="flex-1 flex place-content-center">
      <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
          <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{title}</p>
        </div>
      </div>
      <p className="hidden md:block font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{title}</p>
    </div>

    <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-0 border-black dark:border-offWhite place-content-center ">
      {/* <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-offWhite hover:p-4 duration-200 hover:invert">
  <Image src={circleIcon} alt="circle icon" className="h-8 dark:invert m-auto "></Image></button> */}
    </div>
  </button>;

  const midPanel = (content: React.JSX.Element | string): React.JSX.Element => <section id="midPanel" className="flex-1 flex flex-col">
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
        panelList.push(midPanel(tab.element))
      else
        panelList.push(sidePanel(tab.title));
    });
    return panelList;
  };

  const insertShiftedTabs = (tabNum: number): React.JSX.Element[] => {
    const panelList: React.JSX.Element[] = []
    const midElement = tabNum;
    tabs.map((tab, i) => {
      if (i == (midElement - 1))
        panelList.push(midPanel(tab.element))
      else
        panelList.push(sidePanel(tab.title));
    });
    return panelList;
  };

  const handleClick = () => {
    setPanels(insertShiftedTabs(1))
  }

  const [panels, setPanels] = useState(insertInitialTabs())



  return <main className="min-h-screen flex flex-col md:flex-row">

    {panels}

  </main>;
}
