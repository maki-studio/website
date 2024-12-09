import React from 'react';
import Image from 'next/image'
import styles from './Header.css';
import primaryLogo from '@/app/icons/primaryLogo.svg'
import Link from 'next/link';

export interface HeaderProps {
  hTopColor?: string;
  hBottomColor?: string;
  activeLink?: 'home' | 'portfolio' | 'lets-work' | 'contact' | 'about' | '404'
}

export function Header({ hTopColor = 'bg-primary1B', hBottomColor = 'bg-primary', activeLink = '404' }: HeaderProps) {
  const activeLinkStyling: string = 'border-b-4 border-b-primary';
  const linkStyling:string = 'hover:text-primary1B hover:duration-150';

  return <header>
    <div className='h-32 px-36 bg-primary0 text-white dark:text-offWhite flex items-center'>
      <div id="logo">
        <Image className='h-20' src={primaryLogo} alt="primary-logo" />
      </div>
      <nav id="navbar-default" className={'hidden  flex-1 w-full md:block md:w-auto'}>
        <ul className="mx-10 font-headlines text-headline-large uppercase flex  justify-between flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
          <li><Link href={'/'} className={[linkStyling, (activeLink === 'home' ? activeLinkStyling : '')].join(' ')}>Home</Link></li>
          <li><Link href={'/portfolio/'} className={[linkStyling, (activeLink === 'portfolio' ? activeLinkStyling : '')].join(' ')}>Portfolio</Link></li>
          <li><Link href={'/lets-work/'} className={[linkStyling, (activeLink === 'lets-work' ? activeLinkStyling : '')].join(' ')}>Let's Work</Link></li>
          <li><Link href={'/contact/'} className={[linkStyling, (activeLink == 'contact' ? activeLinkStyling : '')].join(' ')}>Contact</Link></li>
          <li><Link href={'/about/'} className={[linkStyling, (activeLink == 'about' ? activeLinkStyling : '')].join(' ')}>About Us</Link></li>
        </ul>
      </nav>
    </div>
    <div id='hTop' className={['h-10 ', hTopColor].join(' ')}></div>
    <div id='hBottom' className={['h-10 ', hBottomColor].join(' ')}></div>
  </header>;
}
