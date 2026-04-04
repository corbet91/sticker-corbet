import { MENU_TOP_BAR } from "@/constant";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import SearchIcon from "@/public/icons/search";
import CartIcon from "@/public/icons/cart";
import UserIcon from "@/public/icons/user";
import { Button } from "../ui/button";

const Header = () => {
  return ( 
    <div className="py-4 px-8 flex flex-row items-center justify-between bg-white">
      <div className="flex flex-row">
        <h1 className="leading-8 text-[16px] font-bungee">Sticker Corbet</h1>
        {MENU_TOP_BAR.map((item, index) => {
          return (
            <h1
              className=" ml-10 leading-8 text-[14px] font-bold font-space-grotesk uppercase cursor-pointer"
              key={index}
            >
              {item.title}
            </h1>
          );
        })}
      </div>
      <div className="flex flex-row items-center gap-8">
        <InputGroup className="rounded-2xl border-none bg-light-gray h-9 w-[256px] mr-2">
          <InputGroupInput placeholder="Tìm sản phẩm" className="h-9"/>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
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
