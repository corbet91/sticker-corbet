import CardProduct from "@/components/card";
import TextTitle from "@/components/text-title";
import LeafIcon from "@/public/icons/leaf";
import PaintIcon from "@/public/icons/paint";
import ThunderIcon from "@/public/icons/thunder";
const Home = () => {
  return (
    <div className="w-full">
      <div className="bg-size-[46px_46px] bg-[#282828] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] py-12 px-3">
        <div className="relative w-full h-100 "></div>
      </div>
      <div className="py-16 pb-0 px-3  rounded-[12px] flex flex-col gap-8 ">
        <TextTitle
          title="BỘ SƯU TẬP STICKER ĐIỂN HÌNH"
          content="Dòng Husky Art độc bản "
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full">
          <CardProduct />
          
        </div>
      </div>
      <div className="py-16 px-3 flex flex-row gap-4 h-125 w-full">
        <div className="rounded-3xl bg-[#282828] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[46px_46px] w-1/2 lg:w-full lg:flex-[2.5] flex flex-row p-4">
          <div className="flex flex-col justify-end ml-8 gap-2">
            <h1 className="font-bungee text-[24px] leading-6 text-white">
              TỰ THIẾT KẾ
            </h1>
            <span className="uppercase text-white">
              Đầy sáng tạo và tinh tế
            </span>
          </div>
          <PaintIcon className=" ml-auto" />
        </div>
        <div className="flex-1 flex-col flex gap-2 h-full w-full">
          <div className="flex-1 rounded-3xl bg-[#282828] p-4 flex flex-col justify-between bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[46px_46px]">
            <ThunderIcon />
            <h1 className="font-bungee text-[24px] leading-6 text-white">
              SHIP SIÊU TỐC
            </h1>
          </div>
          <div className="flex-1 rounded-3xl bg-[#ffd967] bg-[linear-gradient(to_right,rgba(40,40,40,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(40,40,40,0.08)_1px,transparent_1px)] bg-size-[46px_46px] p-4 flex flex-col justify-between">
            <LeafIcon />
            <h1 className="font-bungee text-[24px] leading-6 text-[#2F2E2E]">
              VẬT LIỆU XANH
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
