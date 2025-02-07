import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// import styles from './WorkCard.css';

export interface WorkCardProps {
  imageUrl: string;
  title: string;
  description: string;
  startLink: string;
  exploreLink: string;
  hasBorder?:boolean;

}

export function WorkCard({ imageUrl, title, description, startLink, exploreLink,hasBorder = false }: Readonly<WorkCardProps>) {
  return <div id="brandIdentity" className={"flex flex-col justify-between p-8 border-b md:border-r md:border-b border-black dark:border-off-white"+ (hasBorder ? "" : " border-0")}>
    <div className=''>
      <div className='relative h-64 w-full bg-gray-300'>
        <Image src={imageUrl} alt={title + " banner"} className="object-cover" layout='fill' />
      </div>

      <h4 className='font-headlines text-headline-small uppercase my-2'>{title}</h4>
      <p className='mb-4 font-body text-body-large'>{description}
      </p>
    </div>
    <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
      <div className='flex'>
        <Link href={startLink} target='_blank' className='pl-2 flex text-primary border-b border-b-primary sm:border-b-primary1B font-headlines text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow-sm hover:duration-150'>
          <span>Start Your Project</span>
          <span>
            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z" /></svg>
          </span>
        </Link>
      </div>
      <div className='flex'>
        <Link href={exploreLink} className='pl-2 flex text-secondary-regal border-b border-b-secondary-regal sm:border-b-secondary font-headlines text-headline-small uppercase  hover:text-white hover:bg-secondary hover:shadow-sm hover:duration-150'>
          <span>Explore Projects</span>
          <span>
            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
          </span>
        </Link>
      </div>
    </span>

  </div>;
}
