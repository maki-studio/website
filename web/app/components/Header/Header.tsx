import React from 'react';
import Image from 'next/image'
// import styles from './Header.css';
import primaryLogo from '@/app/icons/primaryLogo.svg'
import Link from 'next/link';

export interface HeaderProps {
  hTopColor?: string;
  hBottomColor?: string;
  activeLink: 'home' | 'portfolio' | 'lets-work' | 'contact' | 'about' | '404'
}

export function Header({ activeLink, hTopColor = 'bg-primary1B', hBottomColor = 'bg-primary' }: HeaderProps) {
  const activeLinkStyling: string = 'border-b-4 border-b-primary';
  const linkStyling: string = 'hover:text-primary1B hover:duration-150';

  return <header>
    <div className='min-h-32 items-center md:h-32 md:px-16 bg-primary0 text-white dark:text-offWhite '>
      <nav id="navbar-default" className={'p-4'}>
        <ul className="font-headlines text-headline-small font-bold uppercase p-4 md:p-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:w-min  md:mx-auto items-center md:space-x-8 rtl:space-x-reverse md:mt-0 ">
          <li className='w-36'><Link href={'/'} className={"w-10"}><Image className='h-20' src={primaryLogo} alt="primary-logo" /></Link></li>
          <li><Link href={'/'} className={[linkStyling, (activeLink === 'home' ? activeLinkStyling : '')].join(' ')}>Home</Link></li>
          <li><Link href={'/portfolio/'} className={[linkStyling, (activeLink === 'portfolio' ? activeLinkStyling : '')].join(' ')}>Portfolio</Link></li>
          <li><Link href={'/lets-work/'} className={[linkStyling, (activeLink === 'lets-work' ? activeLinkStyling : '')].join(' ')}>Let&apos;s&nbsp;Work</Link></li>
          <li><Link href={'/contact/'} className={[linkStyling, (activeLink == 'contact' ? activeLinkStyling : '')].join(' ')}>Contact</Link></li>
          <li><Link href={'/about/'} className={[linkStyling, (activeLink == 'about' ? activeLinkStyling : '')].join(' ')}>About&nbsp;Us</Link></li>
        </ul>
      </nav>
    </div>
    <div id='hTop' className={['h-10 ', hTopColor].join(' ')}></div>
    <div id='hBottom' className={['h-10 ', hBottomColor].join(' ')}></div>
  </header>;
}
