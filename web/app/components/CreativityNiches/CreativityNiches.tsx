import Link from 'next/link';
import React from 'react';

export interface CreativityNichesProps {
  main: "design" | "software";
  softwareTags: string[];
  designTags: string[];
}

const designProjectsNicheTags = {
  "ui_ux_design": ["ui", "ux", "website_design", "app_icon_design", "landing_page_design", "email_template", "hero_design", "prototyping"],
  "web_design": ["one_page"],
  "landing_pages": ["course"],
  "seo_design": ["seo"],
  "identity_design": ["logo", "branding", "brand_guidelines", "brand_strategy", "color_palette", "typography", "stationery"],
  "marketing_design": ["advert"],
  "packaging_design": ["packaging_concept", "sustainable_packaging", "label_design", "pos_display", "bag_design", "special_editions"],
  "social_design": ["youtube"],
  "print_design": ["calender"],
  "stationery_design": ["business_cards"],
}
const softwareProjectsNicheTags = {
  "point_of_sale": ["retail", "restaurant", "hospitality", "fuel_and_energy", "technology", "education"],
}


interface NicheItem {
  tag: string;
  name: string;
};

const explodedDesignNiches: NicheItem[] = [];
const explodedSoftwareNiches: NicheItem[] = [];


// populate for design
for (const [niche, list] of Object.entries(designProjectsNicheTags)) {
  list.forEach(tag => explodedDesignNiches.push({ name: niche, tag: tag }))
}
// populate for software
for (const [niche, list] of Object.entries(softwareProjectsNicheTags)) {
  list.forEach(tag => explodedSoftwareNiches.push({ name: niche, tag: tag }))
}

// beautify niche title
// const beautifyNicheTitle = function (title: string) {
//   return title;
// }

export function CreativityNiches({ main, designTags, softwareTags }: Readonly<CreativityNichesProps>) {

  const extraStyling = (main === "design" ? '' : 'flex-col-reverse');
  const allNicheTags: string[] = [];
  //remove duplicates
  new Set<string>([...designTags, ...softwareTags]).forEach(n => allNicheTags.push(n));

  const getDesignNiches = (dNt: string[]) => {
    // get niches for the tags
    const currentNiches: NicheItem[] = [];
    dNt.forEach(tag => {
      const niche = explodedDesignNiches.filter(expN => { return expN.tag === tag })[0];
      if (niche != null) currentNiches.push(niche);
    });

    // produce unique list of niches
    const niches: Set<string> = new Set();
    currentNiches.forEach(niche => niches.add(niche?.name));
    // initialize the niche list
    const availableDesignNiches: React.JSX.Element[] = [];

    // get tag list & produce list
    niches.forEach((niche) => {
      const listItems: string[] = currentNiches.filter(cNiche => cNiche.name === niche).map(cN => cN.tag)

      availableDesignNiches.push(
        <>
          <h3 className='uppercase font-headlines text-secondary'>{niche.replace(/_/g, " ")}</h3>
          <ul className='mb-8 font-body space-y-1 text-body-medium'>
            {listItems.map((item, index) => <li key={item + index} className='capitalize underline hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white hover:px-2 duration-150 flex'><Link href={'/portfolio/design?search=' + item} className='w-full ' >{item.replace(/_/g, " ")}</Link></li>)}
          </ul>
        </>
      )
    });

    // done
    return <div id='designNiches' className='p-4 px-8'>{availableDesignNiches}</div>;
  }

  const getSoftwareNiches = (sNt: string[]) => {
    // get niches for the tags
    const currentNiches: NicheItem[] = [];
    sNt.forEach(tag => {
      const niche = explodedSoftwareNiches.filter(expN => { return expN.tag === tag })[0];
      if (niche != null) currentNiches.push(niche);
    });

    // produce unique list of niches
    const niches: Set<string> = new Set();
    currentNiches.forEach(niche => niches.add(niche?.name));
    // initialize the niche list
    const availableSoftwareNiches: React.JSX.Element[] = [];

    // get tag list & produce list
    niches.forEach((niche) => {
      const listItems: string[] = currentNiches.filter(cNiche => cNiche.name === niche).map(cN => cN.tag)

      availableSoftwareNiches.push(
        <>
          <h3 className='uppercase font-headlines text-secondary'>{niche.replace(/_/g, " ")}</h3>
          <ul className='mb-8 font-body space-y-1 text-body-medium'>
            {listItems.map((item, index) => <li key={item + index} className='capitalize underline hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white hover:px-2 duration-150 flex'><Link href={'/portfolio/software?search=' + item} className='w-full ' >{item.replace(/_/g, " ")}</Link></li>)}
          </ul>
        </>
      )
    });

    // done
    return <div id='softwareNiches' className='p-4 px-8'>{availableSoftwareNiches}</div>;
  }


  return <div className={['flex flex-col py-2', extraStyling].join(" ")}>
    {getDesignNiches(allNicheTags)}
    <hr className={'border-0 border-dashed border-b-2 border-black dark:border-off-white1B' + (
      // hide rule when there are no entries
      (softwareTags.length > 0 && main === "design" || softwareTags.length > 0 && main === "software") ? '' : ' hidden')} />
    {getSoftwareNiches(allNicheTags)}
  </div>;
}
