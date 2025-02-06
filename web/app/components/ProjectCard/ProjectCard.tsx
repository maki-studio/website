import React from 'react';
import Link from "next/link";
// import Image from 'next/image';
// import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { UrlObject } from 'url';
// import { Link } from '@carbon/react';
// import styles from './ProjectCard.css';

export interface ProjectCardProps {
  link?: string | UrlObject;
  imgSrc: string;
  alt?: string;
  title: string;

}

export function ProjectCard({ link = 'default value', imgSrc, title }: ProjectCardProps) {
  return <div className={''}>
    <div className='mb-2'>
      <img src={imgSrc} className='w-auto h-64' alt='' />
    </div>
    <p className='mb-1 font-medium font-headlines text-headline-large uppercase'>
      {title}
    </p>
    <div>
      <div className='flex'>
        <Link href={link} className='flex  pl-2 text-primary border-b-2 border-b-primary sm:border-b-primary1B font-headlines text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow-sm hover:duration-150'>
          <span>Explore Project</span>
          <span>
            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
          </span>
        </Link>
      </div>
    </div>
  </div>;
}
