import TopBar from "@/components/topbar/top-bar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col">
      <TopBar />
      <div className="flex-1 w-full">
        {children}
      </div>
    </main>
  );
}
