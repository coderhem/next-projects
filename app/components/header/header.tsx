import React from 'react';
import topHeaderData from './header.json';
import Image from 'next/image';
import headerLogo from '../../../public/images/frame-hub-header-logo.png';
import Link from 'next/link';

interface topHeaderItem {
 anchorLink: string;
 targetValue: string;
 relValue: string;
 iconClass?: string;
 iconSvg?: string;
}

const Header: React.FC = ({ }) => {
 return (
  <>
   <div className="bg-primary py-3 text-center">
    <div className="container">
     <div className="flex flex-wrap items-center justify-center md:justify-between gap-3">
      <div className="text-light-gray [&_a]:underline  [&_a]:hover:no-underline">
       <span>Grand Opening Buy form <a href="#">Here !</a> and Grab 20% Off All Premium Frames at FrameHub! </span>
      </div>
      {topHeaderData.topHeader && topHeaderData.topHeader.length > 0 && (
       <ul className='flex gap-3'>
        {topHeaderData.topHeader.map((item: topHeaderItem, index: number) => (
         <li key={index} className='[&_a]:bg-lovry [&_a]:border [&_a]:border-brown/30 [&_a]:rounded-full [&_a]:p-2 [&_a]:size-10 [&_a]:inline-flex [&_a]:justify-center [&_a]:items-center [&_a]:hover:bg-transparent [&_a]:transition-all [&_a]:duration-300 [&_a]:text-xl [&_a]:focus:ring-3 [&_a]:focus:border-white [&_a]:focus:ring-light-gray/70'>
          <a href={item.anchorLink} target={item.targetValue} rel={item.relValue}>
           {item.iconClass &&
            <i className={item.iconClass}></i>
           }
           {item.iconSvg &&
            <span dangerouslySetInnerHTML={{ __html: item.iconSvg }}
            />
           }
          </a>
         </li>
        ))}
       </ul>
      )}
     </div>
    </div>
   </div >
   {/* Top Header */}

   <header className='py-5'>
    <div className="container">
     <div className="flex items-center justify-between">
      <div className="relative">
       <figure>
        <Image
         src={headerLogo}
         width={250}
         height={80}
         alt='Header Logo'
         loading='lazy'
        />
       </figure>
       <Link href="/" className='stretched-link'></Link>
      </div>
      <nav>
       <ul>
        <li><a href="#">About</a></li>
       </ul>
      </nav>
     </div>
    </div>
   </header>
  </>
 );
};

export default Header;
