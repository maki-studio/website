import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import subMark from '@/app/icons/submark.svg'
import instagramIcon from '@/app/icons/social/instagram.svg'
import behanceIcon from '@/app/icons/social/behance.svg'
import dribbleIcon from '@/app/icons/social/dribble.svg'

// import styles from './Footer.css';


export interface FooterProps {
  fTopColor?: string;
  fBottomColor?: string;
}

export function Footer({ fTopColor = 'bg-secondary', fBottomColor = 'bg-secondaryRegal' }: FooterProps) {
  const linkStyling: string = ' hover:text-secondary hover:duration-150 ';
  const iconLinkStyling: string = 'hover:bg-secondary hover:p-1 hover:duration-200 hover:rounded-sm';

  return <footer className='bg-primary0 text-white dark:text-offWhite'>
    <div id='fTop' className={['h-10 ', fTopColor].join(' ')}></div>
    <div id='fBottom' className={['h-10 ', fBottomColor].join(' ')}></div>
    <div className={'min-h-64 md:h-64 grid grid-cols-1 md:grid-cols-4 justify-evenly border-t-2 border-t-white dark:border-t-offWhite'}>
      <div className={'flex p-4 md:p-0 items-center justify-center'}>
        <Image src={subMark} alt='logo mark' className='h-28 p-1' />
      </div>
      <div className={'flex items-center justify-center p-4 md:p-1 px-8 border-t-2 md:border-t-0 md:border-l-2 border-l-white dark:border-l-offWhite font-headlines text-headline-large'}>
        <div className=''>
          <p><Link href={'tel:0000000000'} className={'underline' + linkStyling}>Phone +000000000</Link></p>
          <p><Link href={'mailto:info@makistudio.online?subject=Hello%20MCS'} className={'underline' + linkStyling}>info@makistudio.online</Link></p>
        </div>
      </div>
      <div className={'flex items-center justify-center p-4 md:p-1 px-8 border-t-2 md:border-t-0 md:border-l-2 border-l-white dark:border-l-offWhite'}>
        <ul className={'font-headlines text-headline-large uppercase'}>
          <li><Link href={'/privacy'} className={'' + linkStyling}>Privacy Policy</Link></li>
          <li><Link href={'/terms'} className={'' + linkStyling}>Terms and Conditions</Link></li>
          <li><Link href={'/affiliates'} className={'' + linkStyling}>Affiliate Program</Link></li>
          <li><Link href={'/contact'} className={'' + linkStyling}>Contact</Link></li>
        </ul>
      </div>
      <div className={'md:border-l-2 border-l-white dark:border-l-offWhite'}></div>

    </div>
    <div className={'p-4 md:p-1.5 px-8 flex flex-wrap border-t-2 border-t-white dark:border-t-offWhite align-middle'}>
      <p className={'uppercase font-headlines text-headline-large mb-2 md:mb-0 md:mr-8'}>&copy; 2024 <br className='md:hidden'/>Maki Creative Studio</p>
      <ul className={'flex justify-between flex-row space-x-8 rtl:space-x-reverse items-center'}>
        {/*TODO: use personal instagram account*/}
        <li><Link href={'https://www.instagram.com/'} target='_blank'><Image src={instagramIcon} alt='instagram icon' className={'h-8 ' + iconLinkStyling} /></Link></li>
        <li><Link href={'https://www.behance.net/mcsamuelshoko'} target='_blank'><Image src={behanceIcon} alt='behance icon' className={'h-8 ' + iconLinkStyling} /></Link></li>
        <li><Link href={'https://dribbble.com/McSamuel'} target='_blank'><Image src={dribbleIcon} alt='dribble icon' className={'h-8 ' + iconLinkStyling} /></Link></li>
      </ul>
    </div>
    <div className={' border-t-2 border-y-white dark:border-y-offWhite flex justify-center'}>
      <Link className={'p-3 px-20 uppercase font-headlines text-headline-large border-x-2 border-x-white text-accent2 hover:text-secondary hover:bg-offWhite1B hover:duration-150'} href={'/contact'}>Get in touch</Link>
    </div>
  </footer>;
}
