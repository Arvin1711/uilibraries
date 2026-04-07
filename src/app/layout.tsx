import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MainLayout from "@/components/MainLayout";
import { SidebarProvider } from "@/contexts/SidebarContext";

export const metadata: Metadata = {
  title: "Admin Panel - UI Libraries",
  description: "Admin panel with reusable UI component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <MainLayout>{children}</MainLayout>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

