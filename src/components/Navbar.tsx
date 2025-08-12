import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import Logo from "./common/Logo";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
            <div className="container h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3" aria-label={siteConfig.businessName}>
                    <Logo width={80} height={80} className="shrink-0 rounded" />
                    <span className="font-semibold text-lg text-brand-600">{siteConfig.businessName}</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
                    {siteConfig.nav.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-sm transition-colors ${isActive ? "text-brand-600 font-semibold underline underline-offset-8 decoration-brand-600" : "text-slate-700 hover:text-brand-600"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-600"
                    aria-label={open ? "Cerrar menú" : "Abrir menú"}
                    aria-controls="mobile-menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {open && (
                <div id="mobile-menu" className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur">
                    <nav className="container py-3 grid gap-2" aria-label="Móvil">
                        {siteConfig.nav.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `block rounded-md px-3 py-2 text-sm transition-colors ${isActive ? "bg-gray-100 text-cyan-700" : "text-gray-700 hover:bg-gray-50 hover:text-cyan-700"
                                    }`
                                }
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}


