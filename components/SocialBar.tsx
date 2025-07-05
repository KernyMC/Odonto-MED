
"use client";

import { Link } from "react-router-dom";
import { Instagram, Facebook, Music } from "lucide-react";

interface SocialBarProps {
  variant?: "header" | "footer";
}

export default function SocialBar({ variant = "header" }: SocialBarProps) {
  const size = variant === "header" ? 20 : 24;
  const containerClass = variant === "header" 
    ? "flex items-center gap-3" 
    : "flex items-center gap-4";

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/odontomed1976?igshid=YmMyMTA2M2Y%3D",
      icon: Instagram,
      label: "@odontomed1976"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/odontomed1976",
      icon: Facebook,
      label: "ODONTOMED 1976"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@odontomed1976?_d=secCgYIASAHKAESPgo8RvQqRkKJ1spUVg6W%2FIroJS1LaHyiukeG%2BXQtzjDf1v3YE9L%2BR74PQxF2G%2BycNOeMLYSmH8vyfyL0QlmeGgA%3D&_r=1&language=es&sec_uid=MS4wLjABAAAAcl0_94Adl2uY7gOvfoljOVb9TkZsx3cvfFLJQgScd3uA_4rNu9r6-oQwfZhFav0O",
      icon: Music,
      label: "@odontomed1976"
    }
  ];

  return (
    <div className={containerClass}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clr-main hover:text-clr-light transition-colors duration-200"
          aria-label={`Síguenos en ${social.name}: ${social.label}`}
        >
          <social.icon size={size} />
        </a>
      ))}
    </div>
  );
}
