
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  imageUrl: string;
  features: string[];
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  imageUrl,
  features 
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full">
          <Icon size={24} className="text-clr-main" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-clr-dark mb-3 group-hover:text-clr-main transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-clr-main rounded-full mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Link
          to={href}
          className="inline-flex items-center text-clr-main hover:text-clr-light font-medium transition-all duration-200 group-hover:gap-3"
        >
          Más información
          <svg 
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
