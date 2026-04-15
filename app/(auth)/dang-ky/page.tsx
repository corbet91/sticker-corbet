"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import TagIcon from "@/public/icons/tag";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

const formSchema = z
  .object({
    username: z.string().min(1, "Username must be at least 1 character"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
  
const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-col gap-2 items-start w-md h-full border rounded-xl bg-linear-to-r from-white to-[#E0FBFF] border-[#CCF8FF] p-6 ">
        <h1 className="leading-9 tracking-[-1.8px] text-[30px] font-bungee w-70">
          TẠO TÀI KHOẢN MỚI
        </h1>
        <h2 className="text-[#5C5B5B] leading-5 text-sm tracking-[-0.35px]">
          Gia nhập cộng đồng Sticker Corbet ngay hôm nay.
        </h2>
        <form className="flex flex-col gap-2 mt-4 w-full">
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1 mb-4">
                <FieldLabel
                  htmlFor={field.name}
                  className="text-[#5C5B5B] uppercase text-[11px] leading-[16.5px] tracking-[1.1px]"
                >
                  HỌ VÀ TÊN *
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Nhập họ và tên của bạn"
                  className="w-full h-14 rounded-[8px] bg-[#EAE7E7] border-none focus-visible:ring-0"
                  autoComplete="off"
                />
              </Field>
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1 mb-4">
                <FieldLabel
                  htmlFor={field.name}
                  className="text-[#5C5B5B] uppercase text-[11px] leading-[16.5px] tracking-[1.1px]"
                >
                  Email *
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Nhập email của bạn"
                  className="w-full h-14 rounded-[8px] bg-[#EAE7E7] border-none focus-visible:ring-0"
                  autoComplete="off"
                />
              </Field>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1 mb-4">
                <FieldLabel
                  htmlFor={field.name}
                  className="text-[#5C5B5B] uppercase text-[11px] leading-[16.5px] tracking-[1.1px]"
                >
                  Password *
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Nhập mật khẩu của bạn"
                  className="w-full h-14 rounded-[8px] bg-[#EAE7E7] border-none focus-visible:ring-0"
                  autoComplete="off"
                />
              </Field>
            )}
          />
          <Controller
            name="confirmPassword"
            control={form.control}
            rules={{
              required: "Vui lòng xác nhận mật khẩu",
              validate: (value) =>
                value === form.getValues("password") ||
                "Mật khẩu nhập lại không khớp",
            }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1 mb-4">
                <FieldLabel
                  htmlFor={field.name}
                  className="text-[#5C5B5B] uppercase text-[11px] leading-[16.5px] tracking-[1.1px]"
                >
                  XÁC NHẬN MẬT KHẨU *
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Nhập lại mật khẩu của bạn"
                  className="w-full h-14 rounded-[8px] bg-[#EAE7E7] border-none focus-visible:ring-0"
                  autoComplete="off"
                />
                {fieldState.error && (
                  <span className="text-red-500 text-xs mt-1">
                    {fieldState.error.message}
                  </span>
                )}
              </Field>
            )}
          />
          <Button
            type="submit"
            className="font-bungee text-[18px] p-8 cursor-pointer"
          >
            Đăng ký
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
