import Link from 'next/link';
import React from 'react';

// import styles from './CreativityNiches.css';

export interface CreativityNichesProps {
  main: "design" | "software";
  softwareTags: string[];
  designTags: string[];
}

const designProjectsNicheTags = {
  "ui_ux_design": ["ui", "ux","website_design", "app_icon_design", "landing_page_design", "email_template", "hero_design", "prototyping"].toSorted((a, b) => a.localeCompare(b)),
  "web_design": ["one_page"].toSorted((a, b) => a.localeCompare(b)),
  "landing_pages": ["course"].toSorted((a, b) => a.localeCompare(b)),
  "seo_design": ["seo"].toSorted((a, b) => a.localeCompare(b)),
  "brand_identity_design": ["logo", "branding", "brand_guidelines", "brand_strategy", "color_palette", "typography", "stationery"].toSorted((a, b) => a.localeCompare(b)),
  "marketing_design": ["advert"].toSorted((a, b) => a.localeCompare(b)),
  "packaging_design": ["packaging_concept", "sustainable_packaging", "label_design", "pos_display", "bag_design", "special_editions"].toSorted((a, b) => a.localeCompare(b)),
  "social_design": ["youtube"].toSorted((a, b) => a.localeCompare(b)),
  "print_design": ["calender"].toSorted((a, b) => a.localeCompare(b)),
  "stationery_design": ["business_cards"].toSorted((a, b) => a.localeCompare(b)),
}
const softwareProjectsNicheTags = {

  // software niches
  "point_of_sale": ["retail", "restaurant", "hospitality", "fuel_and_energy", "technology", "education"].toSorted((a, b) => a.localeCompare(b)),
}


interface NicheItem {
  tag: string;
  niche: string;
};

const explodedNiches: NicheItem[] = [];

for (const [niche, list] of Object.entries(designProjectsNicheTags)) {
  list.forEach(item => explodedNiches.push({ tag: niche, niche: item }))
}

export function CreativityNiches({ main, designTags, softwareTags }: Readonly<CreativityNichesProps>) {

  const extraStyling = (main === "design" ? '' : 'flex-col-reverse');

  // const sortedNiches: string[] = [...Object.keys(projectNicheTags)];

  const getDesignNiches = (dNt: string[]) => {
    // get niches for the tags
    const currentNiches: NicheItem[] = [];
    dNt.forEach(item => currentNiches.push(explodedNiches.filter(ni => ni.tag === item)[0]));

    // produce list of niches
    const niches: Set<string> = new Set();
    currentNiches.forEach(item => niches.add(item.niche));

    const availableDesignNiches: React.JSX.Element[] = [];

    // produce list
    niches.forEach((item) => {
      const listItems: string[] = dNt.filter(tag => {
        return currentNiches.filter(i => i.tag === tag)[0]
      })

      availableDesignNiches.push(
        <>
          <h3 className='uppercase font-headlines text-secondary'>{item.replace(/_/g, " ")}</h3>
          <ul className='mb-8 font-body space-y-1 text-body-medium'>
            {listItems.map((item, index) => <li key={item + index} className='capitalize underline hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white hover:px-2 duration-150 flex'><Link href={'/portfolio/design?search=' + item} className='w-full ' >{item.replace(/_/g, " ")}</Link></li>)}
          </ul>
        </>
      )
    });



    // done
    return <div id='designNiches' className='p-4 px-8'>{availableDesignNiches}</div>;
  }

  return <div className={['flex flex-col ', extraStyling].join(" ")}>
    {getDesignNiches(designTags)}
    <br />
    <hr className='border-0 border-dashed border-b-2 border-black dark:border-off-white1B' />
    <br />
    <hr className='border-0 border-dashed border-b-2 border-black dark:border-off-white1B' />
    <div id='designNiches' className='p-4 px-8'>
      <h3 className='uppercase font-headlines text-secondary'>Identity design</h3>
      <ul className='mb-8 font-body space-y-1 text-body-medium'>
        <li className='capitalize underline '><Link href={''} >Logo identity</Link></li>
        <li className='capitalize underline'><Link href={''} >Brand guidelines</Link></li>
        <li className='capitalize underline'><Link href={''} >Brand Strategy</Link></li>
        <li className='capitalize underline'><Link href={''} >Color palette</Link></li>
        <li className='capitalize underline'><Link href={''} >Typography selection</Link></li>
        <li className='capitalize underline'><Link href={''} >Business stationery</Link></li>
      </ul>

      <h3 className='uppercase font-headlines text-secondary'>Packaging design</h3>
      <ul className='mb-8 font-body space-y-1 text-body-medium'>
        <li className='capitalize underline'><Link href={''} >Product packaging concepts</Link></li>
        <li className='capitalize underline'><Link href={''} >Sustainable packaging</Link></li>
        <li className='capitalize underline'><Link href={''} >label design</Link></li>
        <li className='capitalize underline'><Link href={''} >Point of sale display</Link></li>
        <li className='capitalize underline'><Link href={''} >Box and bag design</Link></li>
        <li className='capitalize underline'><Link href={''} >Special editions</Link></li>
      </ul>

  return <div className={['flex flex-col py-2', extraStyling].join(" ")}>
    {getDesignNiches(designTags)}
    <hr className={'border-0 border-dashed border-b-2 border-black dark:border-off-white1B' + (
      // hide rule when there are no entries
      (softwareTags.length > 0 && main==="design" || softwareTags.length > 0 && main==="software") ? '' : ' hidden')} />
    {getSoftwareNiches(softwareTags)}
  </div>;
}
