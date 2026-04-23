import { MENU_TOP_BAR } from "@/constant";
import CartIcon from "@/public/icons/cart";
import UserIcon from "@/public/icons/user";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupInput
} from "../ui/input-group";

const Header = () => {
  return ( 
    <div className="py-4 px-8 flex flex-row items-center justify-between bg-white">
      <div className="flex flex-row">
        <Link href={"/"} className="leading-8 text-[16px] font-bungee">Sticker Corbet</Link>
        {MENU_TOP_BAR.map((item, index) => {
          return (
            <h1
              className="lg:block hidden ml-10 leading-8 text-[14px] font-bold font-space-grotesk uppercase cursor-pointer"
              key={index}
            >
              {item.title}
            </h1>
          );
        })}
      </div>
      <div className="flex flex-row items-center gap-8">
        <InputGroup className="rounded-2xl border-none bg-light-gray h-9  mr-2 lg:block hidden">
          <InputGroupInput placeholder="Tìm sản phẩm" className="h-9"/>
        </InputGroup>
        <Button variant="outline" size="icon" aria-label="Submit" className="border-none cursor-pointer">
          <CartIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Submit" className="border-none cursor-pointer">
          <UserIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;
