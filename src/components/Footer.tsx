import React from "react";
import Image from "next/image";
import ucarsLogo from "assets/icons/ucars.svg";
import linkedin from "assets/icons/linkedin.svg";
import youtube from "assets/icons/youtube.svg";
import facebook from "assets/icons/facebook.svg";
import telegram from "assets/icons/telegram.svg";
import instagram from "assets/icons/instagram.svg";
import { ROUTER } from "constanst/router";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
const Footer = () => {
  const router = useRouter();
  const navigation = [
    {
      name: "About",
      children: [
        { name: "About us", href: ROUTER.ABOUT_US },
        { name: "Contact us", href: ROUTER.CONTACT_US },
        { name: "Careers", href: ROUTER.CAREERS },
      ],
    },
    {
      name: "Services",
      children: [
        { name: "Buy Used Cars", href: ROUTER.BUY_USED_CARS },
        { name: "Buy New Cars", href: ROUTER.BUY_NEW_CARS },
        { name: "Be a Dealer with UCARS", href: ROUTER.BE_A_DEALER },
      ],
    },
    {
      name: "Resources",
      children: [
        { name: "News", href: ROUTER.NEWS },
        { name: "Sell My Car", href: ROUTER.SELL_MY_CAR },
        { name: "COE Prices", href: ROUTER.COE_PRICES },
      ],
    },
  ];
  return (
    <footer className="md:px-28 px-0 md:p-10 pt-10">
      <div className="md:grid md:grid-flow-col flex flex-col gap-9 pb-6 md:mx-0 mx-4">
        <div className="text-xs">
          <Image
            src="/images/CarbuyerLogo2.png"
            width="300"
            height="62"
            alt="Second Logo"
          />
          <p className="flex mt-4">
            <Image
              src="/images/location.svg"
              width="14"
              height="14"
              className="mr-2"
              alt="location"
            />
            71 Ayer Rajah Crescent, #06-14, Singapore 139951
          </p>
          <p className="flex mt-4">
            <Image
              src="/images/phone.svg"
              width="14"
              height="14"
              className="mr-2"
              alt="location"
            />
            +65 8808 7905
          </p>
          <p className="flex mt-4">
            <Image
              src="/images/mail.svg"
              width="14"
              height="14"
              className="mr-2"
              alt="location"
            />
            hello@carbuyer.com.sg
          </p>
        </div>

        <div className="md:grid grid-flow-col md:gap-2 text-sm flex flex-col md:border-t-0 border-t">
          {navigation.map((item, index) => {
            return (
              <>
                <nav key={index} className="md:flex flex-col hidden">
                  <span className="font-semibold">{item.name}</span>
                  {item.children.map((link, i) => (
                    <Link
                      href={link.href || "/"}
                      key={i}
                      className="text-neutral7 mt-4 hover:text-primary max-w-[150px]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <nav className="md:hidden " key={index}>
                  <Disclosure>
                    {({ open }) => (
                      <div className=' border-b border border-t-0 border-x-0'>
                        <Disclosure.Button className="flex w-full justify-between py-3 text-left text-sm font-medium">
                          <span>{item.name}</span>
                          <ChevronDownIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500 flex flex-col">
                          {item.children.map((link, i) => (
                            <Link
                              href={link.href || "/"}
                              key={i}
                              className="text-neutral7 first:mt-0 mt-1 hover:text-primary max-w-[150px]"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                </nav>
              </>
            );
          })}
        </div>
        <div className="text-sm">
          <span>
            Get the <span className="text-primary">latest</span> automotive news
            sent to your inbox!
          </span>
          <form className="mt-3 bg-white w-full h-[38px] flex">
            <input
              className="flex-1 rounded-l-[5px] pl-3 border"
              type="email"
              placeholder="Enter your email"
            ></input>
            <button className="w-32 bg-primary rounded-r-[5px] text-white font-semibold hover:bg-white hover:text-primary hover:border-2 hover:border-primary">
              Subcribe
            </button>
          </form>
          <p className="flex mt-4">
            Follow us
            <Image
              src={instagram}
              width="20"
              height="20"
              className="ml-2 mr-5"
              alt="location"
            />
            <Image
              src={facebook}
              width="20"
              height="20"
              className="mr-5"
              alt="location"
            />
            <Image
              src={telegram}
              width="20"
              height="20"
              className="mr-5"
              alt="location"
            />
            <Image
              src={linkedin}
              width="20"
              height="20"
              className="mr-5"
              alt="location"
            />
            <Image
              src={youtube}
              width="20"
              height="20"
              className="mr-5"
              alt="location"
            />
          </p>
        </div>
      </div>
      <div className="border border-neutral2 hidden md:block"></div>
      <div className="flex flex-col md:flex-row justify-between text-sm mt-6">
        <div className="mx-4 md:mx-0">
          <nav className="hidden md:block">
            <Link href="/" className="hover:text-primary mr-3">
              Advertising Terms and Conditions
            </Link>
            <Link href="/" className="hover:text-primary mr-3">
              Platform Terms and Conditions
            </Link>
            <Link href="/" className="hover:text-primary mr-3">
              Privacy Policy
            </Link>
          </nav>
          <div className="flex mt-5 text-xs text-neutral7 md:text-left text-center">
            <Image
              src={ucarsLogo}
              width="56"
              height="20"
              className="mr-2 "
              alt="location"
            />
            CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned
            by UCARS Pte Ltd
          </div>
        </div>
        <p className="items-center text-sm text-white md:text-neutral6 md:bg-white bg-neutral8 text-center md:text-left md:p-0 p-4 md:mt-0 mt-6">
          © 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
