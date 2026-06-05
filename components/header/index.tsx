import { MENU_TOP_BAR } from "@/constant";
import CartIcon from "@/public/icons/cart";
import SearchIcon from "@/public/icons/search";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const Header = () => {
  return (
    <div className="py-4 px-8 flex flex-row items-center justify-between bg-white">
      <div className="flex flex-row flex-1 gap-4 items-center ">
        <Link href={"/"} className="leading-8 text-[16px] font-bungee">
          Sticker Corbet
        </Link>
        {MENU_TOP_BAR.map((item, index) => {
          return (
            <Button
              className="flex border-none  leading-8 text-[14px] font-bold font-space-grotesk uppercase cursor-pointer px-3 py-5 justify-center items-center rounded-2xl"
              key={index}
              variant="outline"
            >
              {item.title}
            </Button>
          );
        })}
      </div>
      <div className="flex flex-row items-center gap-8 flex-1">
        <div className="relative hidden lg:block w-full ">
          <Input
            className="focus-visible:ring-0 focus-visible:border-[#312b36] rounded-[24px] border-[#312b36] border-2 bg-white h-12 pl-4 pr-14 py-4 w-full"
            placeholder="Search for anything"
          />
          <Button
            variant="outline"
            size="icon"
            aria-label="Submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full h-9 w-9 border-none bg-transparent hover:bg-gray-100 cursor-pointer"
          >
            <SearchIcon className="w-4 h-4" />
          </Button>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              aria-label="Submit"
              className=" border-none cursor-pointer p-1 hover:bg-blue-200 rounded-full"
            >
              <CartIcon className="w-6 h-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-[#122868]">
            <p>Basket</p>
          </TooltipContent>
        </Tooltip>

        <Button
          className="flex border-none  leading-8 text-[14px] font-bold font-space-grotesk uppercase cursor-pointer px-3 py-5 justify-center items-center rounded-2xl"
          variant="outline"
        >
         <Link href={"/dang-ky"}>Đăng ký</Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
