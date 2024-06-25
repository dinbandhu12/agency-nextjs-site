"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/store-01.jpg",
    quote: "Landing team showed us to get started, what to do, and how to do it.",
    name: "Jason Scer",
  },
  {
    image: "/images/store-02.jpg",
    quote:
      "We had no idea how to get started, but Landing showed us the way. And we were able to create something amazing.",
    name: "John Prency",
  },

  {
    image: "/images/store-03.jpg",
    quote:
      "The team at Landing is amazing. They helped us create a stunning store that we are proud of.",
    name: "Miguel Martinez",
  },
];

const ShopeStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-gray-300 w-full
    rounded-3xl
  
  "
    >
      <div className="p-4 mx-auto relative z-10 w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Shop Stores <br />
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-800 text-center mx-auto">
          We create stunning Shopify stores that are designed to convert.
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-600 font-normal text-sm mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-600 font-bold text-md mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopeStores;