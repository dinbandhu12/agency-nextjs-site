"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { AlignJustify, X } from 'lucide-react';
import DropDownMenu from './drop-down-menu';


interface NavbarProps {
    scrollToWebsiteDesign: () => void;
    scrollToGraphicDesign: () => void;
    scrollToShopStores: () => void;
    scrollToBrands: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
        scrollToWebsiteDesign, 
        scrollToGraphicDesign, 
        scrollToShopStores, 
        scrollToBrands 
    }) => {

    const [isDropDwonVisible, setIsDropDwonVisible] = useState(false);

    const toggleDropDown = () => {
        setIsDropDwonVisible(!isDropDwonVisible);
    }

    const closeDropDown = () => {
        setIsDropDwonVisible(false);
    }

  return (
    <div>
        <div className='p-6 md:p-10 flex items-center justify-between z-50'>
            <div>
                <Link className="cursor-pointer" href="/">
                    <Image 
                        priority
                        src="/logo/degi-logo.png" 
                        alt="logo" 
                        width={100} 
                        height={100} 
                        className='w-full h-10 md:w-full md:h-12'
                        />
                </Link>
            </div>
            <div className='cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
                <div onClick={scrollToWebsiteDesign} className='hover:text-gray-50'>Website Design</div>
                <div onClick={scrollToGraphicDesign} className='hover:text-gray-50'>Graphic Design</div>
                <div onClick={scrollToShopStores} className='hover:text-gray-50'>Shop Store</div>
                <div onClick={scrollToBrands} className='hover:text-gray-50'>Brand Design</div>

                <Link href="/pricing" className='hover:text-gray-50'>
                    Pricing
                </Link>

            </div>

            <div className='flex md:hidden'>
                {isDropDwonVisible ? (
                    // display an X icon when the drop is visible
                    <div
                        onClick={toggleDropDown}
                        className='w-8 h-8 text-slate-300 cursor-pointer'
                    >
                        <X />
                        <DropDownMenu onClose={closeDropDown} />
                    </div>
                ): (
                    <AlignJustify 
                        onClick={toggleDropDown}
                        className='w-8 h-8 text-slate-300 cursor-pointer'
                    />
                )}
            </div>

            <div className='hidden md:flex'>
                <Link href="/contact" className='inline-flex h-10 animate-shimmer items-center justify-center rounded-full border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                    Contact Us
                </Link>

            </div>

        </div>
        
    </div>
  );
}

export default Navbar