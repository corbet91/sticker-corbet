import ShareIcon from "@/public/icons/share";
import { Button } from "../ui/button";
import MessageIcon from "@/public/icons/message";

const Footer = () => {
  return (
    <footer className="bg-[#EAE7E7] pt-12 pb-6">
      <div className="flex flex-row justify-between items-start h-full pb-12  px-12">
        <div className="flex flex-col gap-4">
          <h1 className="font-bungee text-[#2F2E2E] text-[18px] leading-7">
            Corbet Corp
          </h1>
          <span className="text-[#5B5B5B] text-[14px] leading-[22.8px] w-100">
            Xưởng in Sticker nghệ thuật của Việt Nam. Chúng tôi mang linh hồn
            vào từng miếng dán.
          </span>
          <div className="flex flex-row gap-2">
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full"
            >
              <ShareIcon />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full"
            >
              <MessageIcon />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="uppercase font-bold text-[#5C5B5B] leading-4 tracking-[1.2px]">
            Information
          </h1>
          <span className="uppercase text-[#5B5B5B] text-[14px]">Privacy Policy</span>
          <span className="uppercase text-[#5B5B5B] text-[14px]">Terms of Service</span>
          <span className="uppercase text-[#5B5B5B] text-[14px]">Shipping Info</span>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="uppercase font-bold text-[#5C5B5B] leading-4 tracking-[1.2px]">
            Connect
          </h1>
          <span className="uppercase text-[#5B5B5B] text-[14px]">Contact Us</span>
          <span className="uppercase text-[#5B5B5B] text-[14px]">Instagram</span>
          <span className="uppercase text-[#5B5B5B] text-[14px]">TikTok</span>
        </div>
      </div>
      <div className="border-t-[0.2px] border-[#AFACAC] flex items-center px-12 pt-6">
        <h1 className="font-bungee text-[#5B5B5B]">© 2026 Sticker Corbet.</h1>
      </div>
    </footer>
  );
};

export default Footer;
