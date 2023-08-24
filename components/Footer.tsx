import { footerLinks } from "@/constant";
import { TFooterLinks, TLinks } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            className="object-contain"
            width={188}
            height={18}
          />
          <p className="text-base text-gray-700">
            CurHub 2023 <br /> All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((item: TFooterLinks, index: number) => (
            <div className="footer__link" key={index}>
              <h3 className="font-bold">{item?.title}</h3>
              {item.links?.map((link: TLinks, i: number) => (
                <Link key={i} href={link.url} className="text-gray-500">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
