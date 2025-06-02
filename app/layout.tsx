"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import UserNavbar from "@/components/user-navbar";
import AdminSidebar from "@/components/admin-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <html lang="en">
      <body>
        {isAdmin ? (
          <SidebarProvider>
            <SidebarTrigger />
            <AdminSidebar />
            <main>{children}</main>
          </SidebarProvider>
        ) : (
          <>
            <UserNavbar />
            <main>{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
