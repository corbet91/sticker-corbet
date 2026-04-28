import ShareIcon from "@/public/icons/share";
import { Button } from "../ui/button";
import MessageIcon from "@/public/icons/message";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#EAE7E7] h-50 px-8">
      <div className="flex flex-row justify-between  h-full items-center">
        <div className="flex flex-col gap-4">
          <h1 className="font-bungee text-[#2F2E2E] text-[18px] leading-7">
            Corbet Corp
          </h1>
          <span className="uppercase text-[#78716C] text-[10px] lg:text-[14px] leading-[22.8px] w-full lg:w-100">
            Xưởng in Sticker nghệ thuật của Việt Nam. Chúng tôi mang linh hồn
            vào từng miếng dán.
          </span>
          <h1 className="uppercase text-[#78716C] text-[12px] leading-4 tracking-[1.2px]">
            © 2026 Sticker Corbet.
          </h1>
        </div>
        <div className="gap-4 hidden lg:flex lg:flex-col">
          <Link className="uppercase text-[#5B5B5B] text-[14px] tracking-[1.4px]" href="/chinh-sach-bao-mat">
            Privacy Policy
          </Link>
          <Link className="uppercase text-[#5B5B5B] text-[14px] tracking-[1.4px]" href="/dieu-khoan-dich-vu">
            Terms of Service
          </Link>
          <span className="uppercase text-[#5B5B5B] text-[14px] tracking-[1.4px]">
            Shipping Info
          </span>
        </div>
        <div className="gap-4 hidden lg:flex lg:flex-col">
          <span className="uppercase text-[#5B5B5B] text-[14px] tracking-[1.4px]">
            Contact Us
          </span>
          <span className="uppercase text-[#5B5B5B] text-[14px] tracking-[1.4px]">
            Instagram
          </span>
          <span className="uppercase text-[#5B5B5B] text-[14px] tracking-[1.4px]">
            TikTok
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
