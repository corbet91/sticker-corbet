import CommingSoon from "@/components/comming-soon";
import TextTitle from "@/components/text-title";
import bgHusky from "@/public/husky3d.png";
const Home = () => {
  return (
    <div>
      <div className="bg-bone py-12 px-3">
        <div className="bg-[#1A1A1A] rounded-[12px] h-128 w-full">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-white font-bungee text-[180px]">
              CORBET <span className="text-[#00E5FF]">corp</span>
            </h1>
            <div className="text-white">
              Nâng tầm phong cách cá nhân với dòng sticker độc bản.
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 px-3 bg-bone rounded-[12px]">
      <TextTitle title="BỘ SƯU TẬP ĐIỂN HÌNH" content="Dòng Husky Art độc bản " />
      <CommingSoon/>
      </div>

    </div>
  );
};

export default Home;
