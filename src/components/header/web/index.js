import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import Image from "@components/image";
// import Button from "@components/button";

const Web = ({ transparent, nav }) => {
  const MainMenu = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Tickets",
      url: "/tickets",
    },
    {
      name: "Guests",
      url: "/guests",
    },
    {
      name: "Venue",
      url: "/venue",
    },
  ];

  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    if (openNav) {
      setOpenNav(false);
    } else {
      setOpenNav(true);
    }
  };

  useEffect(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [openNav]);

  return (
    <div
      className={`${transparent ? "" : "bg-white"} ${
        nav && "bg-white shadow-lg"
      } ${
        openNav && "bg-white shadow-lg"
      } hidden lg:flex fixed top-0 z-50 items-center justify-between w-full md:px-10 p-4`}
    >
      <div>
        {/* <Image
          src="images/patio-logo.png"
          alt="logo"
          className="object-contain h-16 p-1 cursor-pointer"
          linkType="link"
          url="/"
        /> */}
      </div>
      <div className="flex items-center">
        <div className="hidden lg:flex">
          {MainMenu.map((value, key) => {
            return (
              // eslint-disable-next-line @next/next/link-passhref
              <Link key={key} href={value?.url}>
                <div className="w-full px-10 py-5 font-bold cursor-pointer animate--buton hover:bg-seagreen">
                  {value?.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Web;
