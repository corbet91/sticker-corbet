import CommingSoon from "@/components/comming-soon";
import TextTitle from "@/components/text-title";
import LeafIcon from "@/public/icons/leaf";
import PaintIcon from "@/public/icons/paint";
import ThunderIcon from "@/public/icons/thunder";
const Home = () => {
  return (
    <div className="w-full">
      <div className="bg-bone py-12 px-3">
        <div className="bg-[#1A1A1A] rounded-[12px] h-64 lg:h-128 w-full">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-white font-bungee text-5xl md:text-7xl lg:text-[180px]">
              CORBET <span className="text-[#00E5FF]">corp</span>
            </h1>
            <div className="text-white text-xs md:text-base">
              Nâng tầm phong cách cá nhân với dòng sticker độc bản.
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 px-3 bg-bone rounded-[12px]">
        <TextTitle
          title="BỘ SƯU TẬP ĐIỂN HÌNH"
          content="Dòng Husky Art độc bản "
        />
        <CommingSoon />
      </div>
      <div className="py-16 px-3 flex flex-row gap-4 h-125 w-full">
        <div className="rounded-3xl bg-[#005863] w-1/2 lg:w-full lg:flex-[2.5] flex flex-row p-4">
          <div className="flex flex-col justify-end ml-8 gap-2">
            <h1 className="font-bungee text-[24px] leading-6 text-[#26E6FF]">
              TỰ THIẾT KẾ
            </h1>
            <span className="uppercase text-white">
              Đầy sáng tạo và tinh tế
            </span>
          </div>
          <PaintIcon className="opacity-10 ml-auto" />
        </div>
        <div className="flex-1 flex-col flex gap-2 h-full w-full">
          <div className="flex-1 rounded-3xl bg-[#26E6FF] p-4 flex flex-col justify-between">
            <ThunderIcon />
            <h1 className="font-bungee text-[24px] leading-6 text-[#004F59]">
              SHIP SIÊU TỐC
            </h1>
          </div>
          <div className="flex-1 rounded-3xl bg-[#DFDCDC] p-4 flex flex-col justify-between">
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
