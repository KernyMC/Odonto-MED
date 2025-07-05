
"use client";

import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    // GA4 Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'WhatsApp Button',
      });
    }

    window.open("https://api.whatsapp.com/send?phone=593979286633&text=Hola%20ODONTOMED.%20%0AQuisiera%20informaci%C3%B3n%20de", "_blank");
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-all duration-300 animate-fade-in hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-8 h-8"
      />
    </button>
  );
}
