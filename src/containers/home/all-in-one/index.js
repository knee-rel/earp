import React from "react";
import Card from "./card";

const data = [
  {
    image: "",
    caption: "Earp-a-palooza",
    description: "Bristol, UK",
  },
  {
    image: "",
    caption: "ClexaCON",
    description: "Louisiana, USA",
  },
  {
    image: "",
    caption: "Comic Con",
    description: "San Diego, California, USA",
  },
  {
    image: "",
    caption: "Toy Con",
    description: "Las Vegas, Nevada, USA",
  },
  {
    image: "",
    caption: "EH Con Canada",
    description: "Toronto, Canada",
  },
  {
    image: "",
    caption: "Galaxy Con",
    description: "British Columbia, Canada",
  },
];

const AllInOne = () => {
  return (
    <div className="flex flex-col h-full py-12 bg-white lg:py-20 md:py-16">
      <div className="z-10 px-8 lg:px-24 md:px-16">
        <p className="py-5 text-4xl font-bold text-center font-fredoka md:text-left">
          All-in-one Platform for Earpers Worldwide
        </p>
        <p className="text-center md:text-left">
          Get your tickets for the latest events with the Wynonna Earp Cast! Sign-up now to learn more.
        </p>
      </div>
      <div className="relative flex flex-wrap items-center justify-center px-8 lg:px-24 md:px-16">
        <div
          className="absolute w-full bg-whitesmoke"
          style={{ height: "50%" }}
        />
        {data.map((value, key) => {
          return (
            <Card
              key={key}
              image={value.image}
              caption={value.caption}
              description={value.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllInOne;
