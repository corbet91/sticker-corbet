export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="py-10 px-8 flex min-h-[calc(100dvh-68px-200px)] w-full">
      {children}
    </main>
  );
}
