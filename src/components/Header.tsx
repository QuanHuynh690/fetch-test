import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTER } from "constanst/router";
import ucarsLogo from "assets/icons/ucars.svg";
import headerLocation from "assets/icons/headerLocation.svg";
import headerMail from "assets/icons/headerMail.svg";
import headerPhone from "assets/icons/headerPhone.svg";
import search from "assets/icons/search.svg";

import Image from "next/image";
import Button from "./Form/Button";
const Header = () => {
  const router = useRouter();
  const navigation = [
    {
      name: "New Cars",
      href: ROUTER.NEW_CARS,
      current: router.pathname === ROUTER.NEW_CARS,
      children: [],
    },
    {
      name: "Used Cars",
      href: ROUTER.USED_CARS,
      current: router.pathname === ROUTER.USED_CARS,
      children: [],
    },
    {
      name: "Reviews",
      href: ROUTER.REVIEWS,
      current: router.pathname === ROUTER.REVIEWS,
      children: [],
    },
    {
      name: "News",
      href: "NEWS",
      current: router.pathname === ROUTER.NEWS,
      children: [],
    },
  ];
  return (
    <>
      <div className="fixed w-full z-10 bg-white hidden md:block">
        <div className="flex justify-between items-center px-16 h-[72px]">
          <div className="flex">
            <div className="flex text-xs w-52 border-r-2">
              <Image
                src={headerLocation}
                alt="location"
                height="16"
                width="17"
                className="mr-2"
              />
              71 Ayer Rajah Crescent, #06-14, Singapore 139951
            </div>
            <div className="flex text-xs w-52 ml-4">
              <Image
                src={headerMail}
                alt="location"
                height="16"
                width="17"
                className="mr-2"
              />
              Email us at:
              <br />
              hello@carbuyer.com.sg
            </div>
          </div>
          <div className="flex text-xs">
            <Image
              src={headerPhone}
              alt="location"
              height="16"
              width="17"
              className="mr-2"
            />
            +65 8808 7905
            <br />
            +7 (700) 51 51 518
          </div>
        </div>
        <div className="flex items-center justify-between px-16 h-[77px] bg-neutral8 text-white ">
          <div>
            <Image src={ucarsLogo} alt="ucars logo" height="16" width="150" />
          </div>
          <nav className="flex">
            {navigation.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="px-6 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="ml-5">
            <Button title="Login" className="h-10 w-44" />
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-between px-4 pt-14 fixed w-full z-10 bg-white">
        <Image src='/images/mobile-logo.png' alt="mobile logo" height="40" width="120" />
        <Image src={search} alt="search" height="20" width="20" />
      </div>
    </>
  );
};

export default Header;
