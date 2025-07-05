
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SocialBar from "./SocialBar";

export default function Footer() {
  return (
    <footer className="bg-clr-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">ODONTOMED</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-clr-main mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-sm text-gray-300">
                    Av. Jaime Roldós Aguilera<br />
                    Quito, Ecuador
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-clr-main" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <a 
                    href="tel:+593979286633" 
                    className="text-sm text-gray-300 hover:text-clr-light"
                  >
                    +593 97 928 6633
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-clr-main" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:info@odontomed.ec" 
                    className="text-sm text-gray-300 hover:text-clr-light"
                  >
                    info@odontomed.ec
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Horarios</h3>
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-clr-main mt-1 flex-shrink-0" />
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <p className="font-medium text-white">Lunes - Viernes</p>
                  <p>8:00 AM - 7:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-white">Sábados</p>
                  <p>8:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-white">Domingos</p>
                  <p>Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/servicios/implantes-dentales" className="text-gray-300 hover:text-clr-light transition-colors">
                  Implantes Dentales
                </Link>
              </li>
              <li>
                <Link to="/servicios/ortodoncia-invisible" className="text-gray-300 hover:text-clr-light transition-colors">
                  Ortodoncia Invisible
                </Link>
              </li>
              <li>
                <Link to="/servicios/blanqueamiento-dental" className="text-gray-300 hover:text-clr-light transition-colors">
                  Blanqueamiento Dental
                </Link>
              </li>
              <li>
                <Link to="/servicios/endodoncia" className="text-gray-300 hover:text-clr-light transition-colors">
                  Endodoncia
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-clr-light transition-colors">
                  Agendar Cita
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <SocialBar variant="footer" />
            <p className="text-sm text-gray-300 mt-4">
              Mantente al día con nuestros consejos de salud dental y promociones especiales.
            </p>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-12 mb-8">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8010885887583!2d-78.48547368469427!3d-0.17901349994194477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a5faba3e18f%3A0x4f8b7c6b52fe34e2!2sAv.%20Jaime%20Rold%C3%B3s%20Aguilera%2C%20Quito!5e0!3m2!1ses!2sec!4v1640995200000!5m2!1ses!2sec"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación ODONTOMED - Av. Jaime Roldós Aguilera, Quito"
              className="w-full h-72 rounded-lg"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2024 ODONTOMED. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacidad" className="text-sm text-gray-300 hover:text-clr-light">
                Política de Privacidad
              </Link>
              <Link to="/terminos" className="text-sm text-gray-300 hover:text-clr-light">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
