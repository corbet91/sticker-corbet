import Image from "next/image";

interface ICardProduct {}

const CardProduct = () => {
  return (
    <div className="will-change-[opacity,transform] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] delay-[80ms] flex flex-col cursor0">
      <div className="ease-[cubic-bezier(0.2,0.8,0.2,1)] group flex flex-col h-full border border-border bg-white hover:border-foreground hover:-translate-y-1 transition-[transform,border-color,box-shadow] duration-300">
        <div className="aspect-square bg-muted h-full relative">
          <Image
            src="https://lstjwsxuqsqbqcnnvswg.supabase.co/storage/v1/object/public/thich-truyen-chu-vn-store/hinh_nen_husky.png"
            alt="hinh_nen_husky"
            fill
            className="transition-transform duration-500 scale-75 object-contain group-hover:scale-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col flex-1 p-3 sm:p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5 truncate">
            STICKER
          </p>
          <h3 className="text-sm sm:text-base leading-tight mb-2 line-clamp-2 sm:line-clamp-1">Sticker Husky Ngáo</h3>
          <p className="hidden sm:block text-xs text-muted-foreground line-clamp-1 mb-2 min-h-4">&nbsp;</p>
          <div className="mt-1 flex flex-wrap items-baseline gap-x-2"><span className="text-xs text-muted-foreground whitespace-nowrap">Chỉ từ</span><span className="font-extrabold text-base sm:text-lg whitespace-nowrap">15.000d&nbsp;₫</span></div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
