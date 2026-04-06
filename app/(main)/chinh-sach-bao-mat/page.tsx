"use client";

import { BreadcrumbComponent } from "@/components/breadcrumb";
import { useBreadcrumbStore } from "@/hooks/use-breadcrumb-store";
import GmailIcon from "@/public/icons/gmail";
import InfoIcon from "@/public/icons/info";
import MarketIcon from "@/public/icons/market";
import NotificationIcon from "@/public/icons/notification";
import PhoneIcon from "@/public/icons/phone";
import SecurityLevelIcon from "@/public/icons/security-level";
import SupportIcon from "@/public/icons/support";
import UserInfoIcon from "@/public/icons/user-info";
import { useEffect } from "react";

const Page = () => {
  const { setBreadcrumbs } = useBreadcrumbStore();

  useEffect(() => {
    setBreadcrumbs([
      { label: "Trang chủ", href: "/trang-chu" },
      {
        label: "Chính sách bảo mật",
        href: `/chinh-sach-bao-mat`,
      },
    ]);
  }, []);
  return (
    <div className="h-full flex flex-col gap-8 w-full">
      <BreadcrumbComponent />
      <h1 className="font-bungee text-7xl font-bold leading-18 w-125">
        CHÍNH SÁCH BẢO MẬT
      </h1>
      <div className="grid grid-cols-3 w-full gap-8">
        <div className="col-span-1 flex flex-col gap-2">
          <div className="w-full flex flex-col rounded-xl p-4 bg-[#EAE7E7] gap-2">
            <SecurityLevelIcon />
            <h2>Cam kết an toàn</h2>
            <span>
              Chúng tôi trân trọng quyền riêng tư và cam kết bảo vệ thông tin cá
              nhân của bạn một cách tuyệt đối.
            </span>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <h1 className="font-bungee text-4xl font-bold leading-10 text-[#26E6FF]">
                01
              </h1>
              <span className="leading-9 tracking-[-0.75px] uppercase text-3xl">
                Thu thập thông tin
              </span>
            </div>
            <div className="p-4 bg-[#F3F0EF] rounded-xl flex flex-col gap-4">
              <span className="leading-7.5">
                Sticker Corbet thu thập thông tin khi bạn đăng ký tài khoản, đặt
                hàng hoặc đăng ký nhận bản tin của chúng tôi. Thông tin bao gồm:
              </span>
              <div className="grid grid-cols-2 w-full gap-4 flex-wrap">
                <div className="bg-white rounded-[8px] flex flex-row items-center py-4 px-4">
                  <UserInfoIcon />
                  <span className="ml-2">Họ và tên khách hàng</span>
                </div>
                <div className="bg-white rounded-[8px] flex flex-row items-center py-4 px-4">
                  <GmailIcon />
                  <span className="ml-2">Địa chỉ email liên hệ</span>
                </div>
                <div className="bg-white rounded-[8px] flex flex-row items-center py-4 px-4">
                  <InfoIcon />
                  <span className="ml-2">Địa chỉ giao nhận hàng</span>
                </div>
                <div className="bg-white rounded-[8px] flex flex-row items-center py-4 px-4">
                  <PhoneIcon />
                  <span className="ml-2">Số điện thoại di động</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <h1 className="font-bungee text-4xl font-bold leading-10 text-[#26E6FF]">
                02
              </h1>
              <span className="leading-9 tracking-[-0.75px] uppercase text-3xl">
                Sử dụng thông tin
              </span>
            </div>
            <span>
              Thông tin của bạn giúp chúng tôi cải thiện dịch vụ và mang lại
              trải nghiệm mua sắm cá nhân hóa tốt nhất:
            </span>
            <div className="flex flex-row gap-4 items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#006571]/10">
                <MarketIcon />
              </div>
              <div className="flex flex-col justify-between">
                <span className="text-xl leading-7">Xử lý đơn hàng</span>
                <span className="text-[16px] leading-6 text-[#5C5B5B]">
                  Thực hiện quy trình đóng gói, vận chuyển và thông báo tình
                  trạng đơn hàng đến bạn.
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#006571]/10">
                <NotificationIcon />
              </div>
              <div className="flex flex-col justify-between">
                <span className="text-xl leading-7">Cập nhật khuyến mãi</span>
                <span className="text-[16px] leading-6 text-[#5C5B5B]">
                  Gửi thông báo về sản phẩm mới, bộ sưu tập giới hạn hoặc các
                  chương trình ưu đãi độc quyền.
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#006571]/10">
                <SupportIcon />
              </div>
              <div className="flex flex-col justify-between">
                <span className="text-xl leading-7">Hỗ trợ khách hàng</span>
                <span className="text-[16px] leading-6 text-[#5C5B5B]">
                  Giải đáp thắc mắc và hỗ trợ kỹ thuật về các sản phẩm decal,
                  sticker của Sticker Corbet.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <h1 className="font-bungee text-4xl font-bold leading-10 text-[#26E6FF]">
                03
              </h1>
              <span className="leading-9 tracking-[-0.75px] uppercase text-3xl">
                Bảo mật thông tin
              </span>
            </div>
            <div className="flex flex-col gap-4 p-4 bg-[#2F2E2E] rounded-xl">
              <span className="text-white ">
                Chúng tôi áp dụng các tiêu chuẩn bảo mật SSL 256-bit hàng đầu để
                đảm bảo an toàn cho dữ liệu truyền tải. Sticker Corbet cam kết:
              </span>
              <div className="grid grid-cols-2 gap-4 items-center justify-between h-24">
                <div className="flex flex-row gap-4 items-center h-full">
                  <div className="w-1 h-full bg-[#26E6FF]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-[18px]">
                      Không bán dữ liệu
                    </span>
                    <span className="leading-5 text-[14px] text-[#F9F6F5]">
                      Chúng tôi không bao giờ bán, trao đổi hoặc cho bên thứ ba
                      thuê thông tin cá nhân của khách hàng.
                    </span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center h-full">
                  <div className="w-1 h-full bg-[#26E6FF]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-[18px]">
                      Mã hóa thanh toán
                    </span>
                    <span className="leading-5 text-[14px] text-[#F9F6F5]">
                      Thông tin thẻ tín dụng và thanh toán được xử lý qua cổng
                      an toàn, không lưu trữ trực tiếp trên máy chủ của chúng
                      tôi.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
