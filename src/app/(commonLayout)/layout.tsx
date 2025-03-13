import Footer from "@/components/shared/footer/Footer";
import BottomNavbar from "@/components/shared/navbar/BottomNavbar";
import Navbar from "@/components/shared/navbar/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar />
            <BottomNavbar />
            {children}
            <Footer />
        </div>
    );
}