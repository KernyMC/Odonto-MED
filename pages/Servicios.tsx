
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Smile, 
  Zap, 
  Heart,
  Shield,
  Sparkles,
  Phone,
  CheckCircle
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";

export default function Servicios() {
  const services = [
    {
      title: "Implantes Dentales",
      description: "Reemplaza dientes perdidos con implantes de titanio de última generación con garantía de por vida.",
      icon: Stethoscope,
      href: "/servicios/implantes-dentales",
      imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Implantes de titanio premium",
        "Cirugía guiada por computadora",
        "Garantía de por vida",
        "Resultados en 1-2 sesiones",
        "Tecnología 3D para planificación",
        "Especialistas certificados"
      ]
    },
    {
      title: "Ortodoncia Invisible",
      description: "Endereza tus dientes de forma discreta con alineadores transparentes removibles.",
      icon: Smile,
      href: "/servicios/ortodoncia-invisible",
      imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffec00e57cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Alineadores removibles",
        "Tecnología 3D avanzada",
        "Sin brackets metálicos",
        "Resultados predecibles",
        "Cómodo y discreto",
        "Planes de financiamiento"
      ]
    },
    {
      title: "Blanqueamiento Dental",
      description: "Logra una sonrisa más blanca y brillante con nuestros tratamientos profesionales sin sensibilidad.",
      icon: Sparkles,
      href: "/servicios/blanqueamiento-dental",
      imageUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Hasta 8 tonos más blanco",
        "Tecnología LED avanzada",
        "Sin sensibilidad dental",
        "Resultados inmediatos",
        "Tratamiento en 1 hora",
        "Productos profesionales"
      ]
    },
    {
      title: "Endodoncia",
      description: "Salva tus dientes naturales con tratamientos de conducto especializados usando microscopia dental.",
      icon: Heart,
      href: "/servicios/endodoncia",
      imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Microscopia dental",
        "Tratamiento indoloro",
        "Una sola sesión",
        "Alta tasa de éxito (95%)",
        "Tecnología rotativa",
        "Anestesia computarizada"
      ]
    },
    {
      title: "Odontología Estética",
      description: "Transforma tu sonrisa con carillas, coronas y diseño de sonrisa digital personalizado.",
      icon: Zap,
      href: "/servicios/odontologia-estetica",
      imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Diseño digital de sonrisa",
        "Carillas de porcelana",
        "Coronas estéticas",
        "Armonización facial",
        "Resinas compuestas",
        "Resultado inmediato"
      ]
    },
    {
      title: "Odontopediatría",
      description: "Cuidado dental especializado para niños en un ambiente cómodo, divertido y libre de estrés.",
      icon: Shield,
      href: "/servicios/odontopediatria",
      imageUrl: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Especialistas en niños",
        "Ambiente lúdico y divertido",
        "Técnicas preventivas",
        "Primera consulta gratis",
        "Sedación consciente",
        "Programas educativos"
      ]
    }
  ];

  const specialties = [
    {
      title: "Cirugía Oral",
      description: "Extracciones complejas y cirugías reconstructivas",
      icon: Stethoscope
    },
    {
      title: "Periodoncia",
      description: "Tratamiento de encías y enfermedades periodontales",
      icon: Heart
    },
    {
      title: "Prótesis Dental",
      description: "Prótesis fijas y removibles de alta calidad",
      icon: Smile
    },
    {
      title: "Urgencias 24/7",
      description: "Atención de emergencias dentales las 24 horas",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-clr-dark via-clr-main to-clr-light py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Nuestros Servicios Dentales
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Tratamientos integrales con tecnología de vanguardia y el más alto estándar de calidad. 
              48 años de experiencia cuidando tu sonrisa.
            </p>
            <div className="flex justify-center animate-fade-in delay-500">
              <Link
                to="/contacto"
                className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-clr-dark transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Phone size={20} />
                Agenda tu Consulta Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-clr-dark mb-4 animate-fade-in">
              Servicios Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-300">
              Especialidades odontológicas con tecnología avanzada y atención personalizada.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Specialties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-clr-dark mb-4 animate-fade-in">
              Especialidades Adicionales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-300">
              Servicios complementarios para una atención dental completa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex justify-center mb-4">
                  <div className="bg-clr-main/10 p-4 rounded-full group-hover:bg-clr-main/20 transition-all duration-300">
                    <specialty.icon size={32} className="text-clr-main" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-clr-dark mb-3">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-clr-dark mb-6">
                ¿Por Qué Elegir Nuestros Servicios?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-clr-main flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-clr-dark">Tecnología de Vanguardia</h3>
                    <p className="text-gray-600">Equipos digitales y técnicas avanzadas para tratamientos precisos y efectivos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-clr-main flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-clr-dark">Especialistas Certificados</h3>
                    <p className="text-gray-600">Equipo de profesionales con certificaciones internacionales y experiencia comprobada.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-clr-main flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-clr-dark">Atención Personalizada</h3>
                    <p className="text-gray-600">Plan de tratamiento único para cada paciente según sus necesidades específicas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-clr-main flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-clr-dark">Garantía y Seguimiento</h3>
                    <p className="text-gray-600">Garantías en nuestros tratamientos y seguimiento continuo post-tratamiento.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in delay-300">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffec00e57cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Servicios ODONTOMED"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-clr-dark to-clr-main text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">
            ¿Necesitas Más Información?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto animate-fade-in delay-300">
            Nuestros especialistas están listos para evaluar tu caso y recomendarte 
            el mejor tratamiento para tu sonrisa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Link
              to="/contacto"
              className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-clr-dark transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              <Phone size={20} />
              Agenda tu Consulta Gratis
            </Link>
            <a
              href="tel:+593979286633"
              className="bg-white text-clr-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              <Phone size={20} />
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
