import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsapp from "./FloatingWhatsapp";
import MobileCTA from "./MobileCTA";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export default function Layout() {
    const location = useLocation();

    useRevealOnScroll();

    // Scroll al inicio al cambiar de página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col w-full">
            <Navbar />
            <main className="flex-1 w-full mb-16 md:mb-0">
                <Outlet />
            </main>
            <Footer />
            <FloatingWhatsapp />
            <MobileCTA />
        </div>
    );
}


