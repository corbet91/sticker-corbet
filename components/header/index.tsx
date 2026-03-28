import StickerCorbet from "@/public/icons/corbet";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Search } from "lucide-react";
import SearchIcon from "@/public/icons/search";
import logo from "@/public/sticker-corbet.png"
import Image from "next/image";

const Header = () => {
  return (
    <div className="py-4 px-8">
      <h1 className="leading-8 text-[16px]">Sticker Corbet</h1>
    </div>
  );
};

export default Header;
