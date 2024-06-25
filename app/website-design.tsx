"use client";

import Image from 'next/image'
import React from 'react'

const WebsiteDesign = () => {
  return (
    <div className='text-white'>
         <div className="p-4 mx-auto relative z-10 w-full pt-14 md:pt-32 px-2">
            <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to bg-sky-200 bg-opacity-50">
                Website Design <br /> that works
            </div>

            <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
                Custom tailored solutions for your business. We help you create a unique brand identity and grow your business.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 pt-10 md:p-20">
              <div className="grid gap-2 md:gap-4">
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i3.jpeg" alt=""/>
                </div>
                <div>
                    <video src="/design-imgs/vid-01.mp4" autoPlay muted loop className='rounded-2xl'>
                    </video>
                </div>
                <div>
                <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i7.jpg" alt=""/>
                </div>
              </div>

              <div className="grid gap-2 md:gap-4">
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i5.png" alt=""/>
                </div>
                <div>
                  <Image
                      width={400}
                      height={400}
                      priority
                      className="h-auto max-w-full rounded-lg" src="/design-imgs/i2.png" alt=""/>
                </div>
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i14.jpg" alt=""/>
                </div>
              </div>

              <div className="grid gap-2 md:gap-4">
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i4.jpeg" alt=""/>
                </div>
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i11.png" alt=""/>
                </div>
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i13.png" alt=""/>
                </div>
              </div>

              <div className="grid gap-2 md:gap-4">
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i6.png" alt=""/>
                </div>
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i1.png" alt=""/>
                </div>
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i9.jpg" alt=""/>
                </div>
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i18.png" alt=""/>
                </div>
              </div>

              <div className="grid gap-2 md:gap-4 max-sm:hidden">
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i20.png" alt=""/>
                </div>
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i21.png" alt=""/>
                </div>
                <div>
                  <video src="/design-imgs/vid-05.mp4" autoPlay muted loop className='rounded-2xl'>
                  </video>
                </div>
                <div>
                  <Image
                    width={400}
                    height={400}
                    priority
                    className="h-auto max-w-full rounded-lg" src="/design-imgs/i10.png" alt=""/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default WebsiteDesign