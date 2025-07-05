
"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import SocialBar from "./SocialBar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ];

  const handleCTAClick = () => {
    // GA4 Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Header CTA - Reserva tu cita',
      });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-clr-dark">
                ODONTOMED
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-clr-main px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Social + CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <SocialBar variant="header" />
            <Link
              to="/contacto"
              onClick={handleCTAClick}
              className="bg-[color:var(--clr-main)] hover:bg-[color:var(--clr-light)] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <Phone size={16} />
              Reserva tu cita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-clr-main p-2"
              aria-label="Menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-clr-main block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={handleCTAClick}
                className="bg-[color:var(--clr-main)] hover:bg-[color:var(--clr-light)] text-white block px-3 py-2 rounded-lg font-medium transition-colors duration-200 mt-4"
              >
                Reserva tu cita
              </Link>
              <div className="pt-4">
                <SocialBar variant="footer" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
