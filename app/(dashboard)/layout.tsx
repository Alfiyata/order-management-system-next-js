import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app_sidebar"

export default function DashboardLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-1 w-full h-full">
                <SidebarTrigger className="mt-2"/>
                <div className="p-4 w-full h-full flex-1 mt-14">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    );
}