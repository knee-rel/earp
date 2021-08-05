import React, { useState } from "react";
import Button from "../../../components/button";
import Image from "next/image";

import BannerImage from "../../../assets/wynonna_earp.jpeg";

const HomePagePropertyTypeData = [
  {
    value: "Earpers UK",
    item: "All Property Types",
  },
  {
    value: "residential with land",
    item: "Residential w/ Land",
  },
  {
    value: "residential without land",
    item: "Residential w/o Land",
  },
  {
    value: "office",
    item: "Office",
  },
  {
    value: "commercial",
    item: "Commercial",
  },
  {
    value: "land",
    item: "Land",
  },
  {
    value: "storage",
    item: "Storage",
  },
  {
    value: "leisure",
    item: "Leisure",
  },
];

const HeroBanner = () => {
  return (
    <div className="relative flex justify-center">
      <Image
        src={BannerImage}
        alt="hero_image"
        width={1200}
        height={900}
        className="object-cover w-full h-screen"
      />
      <div className="absolute w-full h-screen bg-nero opacity-20" />
      <div className="absolute z-10 flex flex-col items-center justify-center w-full top-1/4">
        <div className="p-5">
          <p className="text-3xl text-center text-white lg:text-4xl font-fredoka">
            A go to portal for your Earpiness!
          </p>
        </div>
        <div className="flex flex-col w-11/12 lg:w-8/12">
          <div className="flex w-full">{/* Buttons go here */}</div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="relative flex items-start w-full py-1 lg:w-3/12">
              <div className="absolute top-0 right-0 z-0 lg:p-5">
                {/* <Image
                  src="/svg/down-arrow.svg"
                  alt="dropdown"
                  className="object-cover h-4"
                /> */}
              </div>
            </div>
            <div className="w-full lg:w-2/12">
              {/* <Button
                caption="Search"
                style="primary"
                btStyle="py-3 lg:w-auto w-full rounded-t-none lg:rounded-lg"
                className="w-full lg:p-1 lg:w-auto"
                type="link"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
