"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import GoogleIcon from "@/public/icons/google";
import TagIcon from "@/public/icons/tag";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-col gap-2 items-center w-md h-full border rounded-xl bg-linear-to-r from-white to-[#E0FBFF] border-[#CCF8FF] p-6 ">
        <TagIcon />
        <h1 className="leading-9 tracking-[-1.8px] text-[30px] font-bungee">
          ĐĂNG NHẬP
        </h1>
        <h2 className="text-[#5C5B5B] leading-5 text-sm tracking-[-0.35px]">
          Chào mừng bạn trở lại với Sticker Corbet.
        </h2>
        <form className="flex flex-col gap-2 mt-4 w-full">
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

          <Button
            type="submit"
            className="font-bungee text-[18px] p-8 cursor-pointer"
          >
            Đăng nhập
          </Button>
          <div className="flex flex-row items-center gap-3 justify-between px-1 py-4">
            <div className="w-full h-px bg-[#DFDCDC]" />
            <h2 className="leading-4 text-[10px] tracking-[1px] text-[#787676]">
              HOẶC
            </h2>
            <div className="w-full h-px bg-[#DFDCDC]" />
          </div>
          <Button
            type="submit"
            className="font-bungee text-[18px] p-8 cursor-pointer bg-[#E5E2E1] text-[#2F2E2E]"
          >
           <GoogleIcon /> Đăng nhập bằng Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
