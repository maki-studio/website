import Link from 'next/link';
import React from 'react';

// import styles from './CreativityNiches.css';

export interface CreativityNichesProps {
  main: "design" | "software";
  softwareNiches: string[];
  designNiches: string[];
}

export function CreativityNiches({ main }: Readonly<CreativityNichesProps>) {
  const extraStyling = (main === "design" ? '' : 'flex-col-reverse');
  return <div className={['flex flex-col ', extraStyling].join(" ")}>
    <div id='designNiches' className='p-4 px-8'>
      <h3 className='uppercase text-secondary'>Identity design</h3>
      <ul className='mb-8 font-body space-y-1'>
        <li className='capitalize underline'><Link href={''} >Logo identity</Link></li>
        <li className='capitalize underline'><Link href={''} >Brand guidelines</Link></li>
        <li className='capitalize underline'><Link href={''} >Brand Strategy</Link></li>
        <li className='capitalize underline'><Link href={''} >Color palette</Link></li>
        <li className='capitalize underline'><Link href={''} >Typography selection</Link></li>
        <li className='capitalize underline'><Link href={''} >Business stationery</Link></li>
      </ul>

      <h3 className='uppercase text-secondary'>Packaging design</h3>
      <ul className='mb-8 font-body space-y-1'>
      <li className='capitalize underline'><Link href={''} >Product packaging concepts</Link></li>
      <li className='capitalize underline'><Link href={''} >Sustainable packaging</Link></li>
      <li className='capitalize underline'><Link href={''} >label design</Link></li>
      <li className='capitalize underline'><Link href={''} >Point of sale display</Link></li>
      <li className='capitalize underline'><Link href={''} >Box and bag design</Link></li>
      <li className='capitalize underline'><Link href={''} >Special editions</Link></li>
      </ul>

      <h3 className='uppercase text-secondary'>UI/UX design</h3>
      <ul className='mb-8'>
      <li className='capitalize underline'><Link href={''} >Website visual design</Link></li>
      <li className='capitalize underline'><Link href={''} >App icon design</Link></li>
      <li className='capitalize underline'><Link href={''} >Landing page design</Link></li>
      <li className='capitalize underline'><Link href={''} >Email newsletter template</Link></li>
      <li className='capitalize underline'><Link href={''} >Banner Ad design</Link></li>
      <li className='capitalize underline'><Link href={''} >Wireframe & Prototyping</Link></li>
      </ul>
    </div>
    <hr className='border-0 border-dashed border-b-2 border-black dark:border-off-white1B' />
    <div id='softwareNiches' className='p-4 px-8'>
      <h3 className='uppercase text-secondary'>Point of sale</h3>
      <ul className='mb-8'>
      <li className='capitalize underline'><Link href={''} >Retail</Link></li>
      <li className='capitalize underline'><Link href={''} >Restaurant</Link></li>
      <li className='capitalize underline'><Link href={''} >Hospitality</Link></li>
      <li className='capitalize underline'><Link href={''} >Fuel & Energy</Link></li>
      </ul>
    </div>
  </div>;
}
