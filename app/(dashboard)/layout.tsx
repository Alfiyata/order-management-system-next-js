export default function DashboardLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <header className="border-b border-white">Dashboard Layout</header>
            {children}
        </main>
    );
}