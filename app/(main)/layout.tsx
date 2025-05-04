import { TopBar } from "@/components/topbar/top-bar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>
    <TopBar />
    {children}
    </main>;
}
