export default function DashboardLayout({
    children, //Will be a page or nested layout 
} : {
    children: React.ReactNode}) {
        return (
            <section>
                <nav>
                    nav here
                </nav>
                {children}
            </section>
        )

}