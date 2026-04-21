import Header from "@/components/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="py-10 px-8 flex min-h-[calc(100dvh-68px-307px)] w-full">
      {children}
    </main>
  );
}
