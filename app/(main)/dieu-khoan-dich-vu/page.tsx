"use client";

import { BreadcrumbComponent } from "@/components/breadcrumb";
import TermForm from "@/components/term-form";
import { useBreadcrumbStore } from "@/hooks/use-breadcrumb-store";
import BankIcon from "@/public/icons/bank";
import CreditIcon from "@/public/icons/credit";
import HugIcon from "@/public/icons/hug";
import MoneyIcon from "@/public/icons/money";
import QrIcon from "@/public/icons/qr";
import SecurityIcon from "@/public/icons/security";
import TrueIcon from "@/public/icons/true";
import WarningIcon from "@/public/icons/warning";
import { useEffect } from "react";

const Page = () => {
  const { setBreadcrumbs } = useBreadcrumbStore();

  useEffect(() => {
    setBreadcrumbs([
      { label: "Trang chủ", href: "/trang-chu" },
      {
        label: "Điều khoản dịch vụ",
        href: `/dieu-khoan-dich-vu`,
      },
    ]);
  }, []);

  return (
    <div className="h-full flex flex-col gap-8">
      <BreadcrumbComponent />
      <h1 className="font-bungee text-7xl font-bold leading-18 w-125">
        ĐIỀU KHOẢN DỊCH VỤ
      </h1>
      <span className="w-200">
        Chào mừng bạn đến với Sticker Corbet. Vui lòng đọc kỹ các điều khoản
        dưới đây trước khi sử dụng dịch vụ của chúng tôi để đảm bảo quyền lợi
        của chính mình.
      </span>
      <div className="flex flex-col gap-8">
        <TermForm
          title="Điều khoản chung"
          content={
            <span>
              Bằng việc truy cập và sử dụng website Sticker Corbet, quý khách
              mặc nhiên đồng ý tuân thủ các quy định và điều kiện sử dụng được
              nêu tại đây. Chúng tôi có quyền thay đổi, chỉnh sửa, thêm hoặc
              lược bỏ bất kỳ phần nào trong Điều khoản dịch vụ này vào bất cứ
              lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên website
              mà không cần thông báo trước.
            </span>
          }
          index={"01"}
        />
        <TermForm
          title="Quy định đặt hàng"
          content={
            <div className="flex flex-row justify-between">
              <div className="flex-1 flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                  <TrueIcon />
                  <h2 className="uppercase font-bold">Sản phẩm có sẵn</h2>
                </div>
                <span>
                  Đơn hàng sẽ được xác nhận ngay sau khi hệ thống ghi nhận thanh
                  toán hoặc lựa chọn COD thành công.
                </span>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                  <HugIcon />
                  <h2 className="uppercase font-bold">Sản phẩm Custom</h2>
                </div>
                <span>
                  Đối với các mẫu thiết kế riêng, quý khách cần cung cấp file
                  chất lượng cao. Chúng tôi không chịu trách nhiệm về độ mờ của
                  hình ảnh do chất lượng file gốc kém.
                </span>
              </div>
            </div>
          }
          index={"02"}
        />
        <TermForm
          title="Chính sách thanh toán"
          content={
            <div className="flex flex-col justify-between w-200">
              <h2>
                Chúng tôi hỗ trợ các hình thức thanh toán linh hoạt bao gồm:
              </h2>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="flex flex-row gap-2 items-center">
                  <MoneyIcon className="w-5.5 h-4" />
                  <h2 className="uppercase font-bold text-sm">
                    Thanh toán khi nhận hàng (COD)
                  </h2>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <BankIcon className="w-5.5 h-4" />
                  <h2 className="uppercase font-bold text-sm">
                    Chuyển khoản ngân hàng
                  </h2>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <CreditIcon className="w-5.5 h-4" />
                  <h2 className="uppercase font-bold text-sm">Thẻ tín dụng</h2>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <QrIcon className="w-5.5 h-4" />
                  <h2 className="uppercase font-bold text-sm">QR Code</h2>
                </div>
              </div>
            </div>
          }
          index={"03"}
        />
        <TermForm
          title="Quyền và nghĩa vụ của khách hàng"
          content={
            <div className="flex flex-col gap-2 justify-between w-200">
              <div className="flex flex-row gap-2 items-center">
                <SecurityIcon />
                <h2>
                  Cung cấp đầy đủ và chính xác thông tin cá nhân bao gồm: tên,
                  số điện thoại, địa chỉ nhận hàng để Sticker Corbet phục vụ tốt
                  nhất.
                </h2>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <WarningIcon />
                <h2>
                  Không sử dụng các sản phẩm của Sticker Corbet cho các mục đích
                  vi phạm pháp luật, tuyên truyền nội dung đồi trụy hoặc chống
                  phá nhà nước.
                </h2>
              </div>
            </div>
          }
          index={"04"}
        />
      </div>
    </div>
  );
};

export default Page;
