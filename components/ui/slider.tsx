"use client"

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {

    const isMediumScreen = useMediaQuery({minWidth: 768, maxWidth: 1023});
    const isSmallScreen = useMediaQuery({maxWidth: 767});

    const settings = {
        arrow: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,

        className: "w-full mx-auto cursor-pointer center-mode",
    };

    if(isMediumScreen){
        settings.slidesToShow = 1.67;
    } else if(isSmallScreen){
        settings.slidesToShow = 1;
    }


    return (  
        <div>
            <Slider {...settings}>
                <>
                <div className="rounded-md px-2 md:p-4">
                    <a href="https://www.behance.net/tempacc5">
                        <Image 
                            priority
                            src="/images/img01.png"
                            alt="slider"
                            width={500}
                            height={500}
                            className="rounded-2xl"
                        />
                    </a>
                </div>
                </>
                
                <>
                <div className="rounded-md px-2 md:p-4">
                    <a href="https://www.behance.net/tempacc5">
                        <Image 
                            priority
                            src="/images/img02.png"
                            alt="slider"
                            width={500}
                            height={500}
                            className="rounded-md"
                        />
                    </a>
                </div>
                </>
                
                <>
                <div className="rounded-md px-2 md:p-4">
                    <a href="https://www.behance.net/tempacc5">
                        <Image 
                            priority
                            src="/images/img03.png"
                            alt="slider"
                            width={500}
                            height={500}
                            className="rounded-md"
                        />
                    </a>
                </div>
                </>
                
                <>
                <div className="rounded-md px-2 md:p-4">
                    <a href="https://www.behance.net/tempacc5">
                        <Image 
                            priority
                            src="/images/img04.png"
                            alt="slider"
                            width={500}
                            height={500}
                            className="rounded-md"
                        />
                    </a>
                </div>
                </>
                
                <>
                <div className="rounded-md px-2 md:p-4">
                    <a href="https://www.behance.net/tempacc5">
                        <Image 
                            priority
                            src="/images/img05.png"
                            alt="slider"
                            width={500}
                            height={500}
                            className="rounded-md"
                        />
                    </a>
                </div>
                </>
                
                <>
                <div className="rounded-md px-2 md:p-4">
                    <a href="https://www.behance.net/tempacc5">
                        <Image 
                            priority
                            src="/images/img06.png"
                            alt="slider"
                            width={500}
                            height={500}
                            className="rounded-md"
                        />
                    </a>
                </div>
                </>
                
                <>
                <div className="rounded-md px-2 md:p-4">
                    <a href="https://www.behance.net/tempacc5">
                        <Image 
                            priority
                            src="/images/img07.jpg"
                            alt="slider"
                            width={500}
                            height={500}
                            className="rounded-md"
                        />
                    </a>
                </div>
                </>
            </Slider>
        </div>
    );
}




 
export default SliderOne;