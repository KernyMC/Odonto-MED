
import { Link } from "react-router-dom";
import { Phone, Star, Award, Users, Clock, CheckCircle } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import ParallaxSection from "../components/ParallaxSection";
import ReviewsSection from "../components/ReviewsSection";
import { 
  Stethoscope, 
  Smile, 
  Zap, 
  Heart,
  Shield,
  Sparkles
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Implantes Dentales",
      description: "Reemplaza dientes perdidos con implantes de titanio de última generación.",
      icon: Stethoscope,
      href: "/servicios/implantes-dentales",
      imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Implantes de titanio premium",
        "Cirugía guiada por computadora",
        "Garantía de por vida",
        "Resultados en 1-2 sesiones"
      ]
    },
    {
      title: "Ortodoncia Invisible",
      description: "Endereza tus dientes de forma discreta con alineadores transparentes.",
      icon: Smile,
      href: "/servicios/ortodoncia-invisible",
      imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffec00e57cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Alineadores removibles",
        "Tecnología 3D",
        "Sin brackets metálicos",
        "Resultados predecibles"
      ]
    },
    {
      title: "Blanqueamiento Dental",
      description: "Logra una sonrisa más blanca y brillante con nuestros tratamientos profesionales.",
      icon: Sparkles,
      href: "/servicios/blanqueamiento-dental",
      imageUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Hasta 8 tonos más blanco",
        "Tecnología LED avanzada",
        "Sin sensibilidad",
        "Resultados inmediatos"
      ]
    },
    {
      title: "Endodoncia",
      description: "Salva tus dientes naturales con tratamientos de conducto especializados.",
      icon: Heart,
      href: "/servicios/endodoncia",
      imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Microscopia dental",
        "Tratamiento indoloro",
        "Una sola sesión",
        "Alta tasa de éxito"
      ]
    },
    {
      title: "Odontología Estética",
      description: "Transforma tu sonrisa con carillas, coronas y diseño de sonrisa digital.",
      icon: Zap,
      href: "/servicios/odontologia-estetica",
      imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Diseño digital de sonrisa",
        "Carillas de porcelana",
        "Coronas estéticas",
        "Armonización facial"
      ]
    },
    {
      title: "Odontopediatría",
      description: "Cuidado dental especializado para niños en un ambiente cómodo y divertido.",
      icon: Shield,
      href: "/servicios/odontopediatria",
      imageUrl: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Especialistas en niños",
        "Ambiente lúdico",
        "Técnicas preventivas",
        "Primera consulta gratis"
      ]
    }
  ];

  const stats = [
    { icon: Users, number: "5,000+", label: "Pacientes Satisfechos" },
    { icon: Award, number: "48+", label: "Años de Experiencia" },
    { icon: Star, number: "4.9", label: "Calificación Promedio" },
    { icon: Clock, number: "24/7", label: "Urgencias Dentales" }
  ];

  const handleCTAClick = (location: string) => {
    // GA4 Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: `CTA - ${location}`,
      });
    }
  };

  const handleWhatsAppClick = () => {
    // GA4 Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'Hero WhatsApp Button',
      });
    }
    window.open("https://api.whatsapp.com/send?phone=593979286633&text=Hola%20ODONTOMED.%20%0AQuisiera%20informaci%C3%B3n%20de", "_blank");
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
          }}
        />
        
        {/* Darker Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-clr-dark/90 to-clr-main/80" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-clr-light/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/3 rounded-full blur-lg animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Tu Sonrisa es Nuestra 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 animate-pulse">
                Pasión
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Clínica dental con 48 años de experiencia en Quito. Tecnología de vanguardia, 
              especialistas certificados en implantes, ortodoncia invisible y estética dental.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
              <button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-clr-main to-clr-light hover:from-clr-light hover:to-clr-main text-white border-2 border-clr-main px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm"
              >
                <Phone size={20} />
                Reserva tu Cita Gratis
              </button>
              <Link
                to="/servicios"
                className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:scale-105"
              >
                Ver Servicios
              </Link>
            </div>

            {/* Features destacadas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in delay-700">
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CheckCircle size={24} className="text-green-300" />
                <span className="font-medium">Primera Consulta Gratis</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CheckCircle size={24} className="text-green-300" />
                <span className="font-medium">Financiamiento Disponible</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CheckCircle size={24} className="text-green-300" />
                <span className="font-medium">Urgencias 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex justify-center mb-4">
                  <div className="bg-clr-main/10 p-4 rounded-full group-hover:bg-clr-main/20 transition-all duration-300 group-hover:scale-110">
                    <stat.icon size={32} className="text-clr-main" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-clr-dark mb-2 group-hover:scale-105 transition-transform duration-300">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section 1 */}
      <div className="animate-fade-in">
        <ParallaxSection 
          imageUrl="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          height="h-64"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Tecnología de Vanguardia
            </h2>
            <p className="text-xl opacity-90 animate-fade-in delay-300">
              Equipos de última generación para diagnósticos precisos y tratamientos efectivos
            </p>
          </div>
        </ParallaxSection>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clr-dark mb-4 animate-fade-in">
              Nuestros Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-300">
              Ofrecemos tratamientos dentales integrales con tecnología avanzada 
              y el más alto estándar de calidad en Quito.
            </p>
          </div>
          
          {/* Horizontal Scrollable Services */}
          <div className="relative overflow-x-auto pb-6">
            <div className="flex gap-6 min-w-max">
              {services.map((service, index) => (
                <div key={index} className="flex-shrink-0 w-80 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12 animate-fade-in delay-500">
            <Link
              to="/servicios"
              className="bg-clr-main hover:bg-clr-light text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 hover:shadow-lg"
            >
              Ver Todos los Servicios
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Section 2 */}
      <div className="animate-fade-in">
        <ParallaxSection 
          imageUrl="https://images.unsplash.com/photo-1588776814546-1ffec00e57cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          height="h-64"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              48 Años de Experiencia
            </h2>
            <p className="text-xl opacity-90 animate-fade-in delay-300">
              Desde 1976 cuidando la salud dental de las familias ecuatorianas
            </p>
          </div>
        </ParallaxSection>
      </div>

      {/* Reviews Section */}
      <div className="animate-fade-in">
        <ReviewsSection />
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-clr-dark to-clr-main text-white relative overflow-hidden animate-fade-in">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border border-white rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in">
              ¿Por Qué Elegir ODONTOMED?
            </h2>
            <p className="text-xl mb-12 text-gray-100 animate-fade-in delay-300">
              Somos la clínica dental con más experiencia en Quito, comprometidos con tu salud y bienestar dental.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in delay-500">
                <Award size={48} className="mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-3">Especialistas Certificados</h3>
                <p className="text-gray-200">
                  Nuestro equipo cuenta con especialistas certificados internacionalmente.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in delay-700">
                <Zap size={48} className="mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-bold mb-3">Tecnología Avanzada</h3>
                <p className="text-gray-200">
                  Equipos de última generación para diagnósticos precisos y tratamientos efectivos.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in delay-900">
                <Heart size={48} className="mx-auto mb-4 text-red-300" />
                <h3 className="text-xl font-bold mb-3">Atención Personalizada</h3>
                <p className="text-gray-200">
                  Cada paciente recibe un plan de tratamiento personalizado y cuidado individual.
                </p>
              </div>
            </div>
            
            <div className="mt-12 animate-fade-in delay-1000">
              <Link
                to="/nosotros"
                className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-clr-dark transition-all duration-300 inline-flex items-center gap-2 hover:scale-105"
              >
                Conoce Nuestro Equipo
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-clr-dark mb-6 animate-fade-in">
            ¿Listo para Transformar tu Sonrisa?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in delay-300">
            Agenda tu consulta gratuita hoy mismo y descubre cómo podemos ayudarte 
            a lograr la sonrisa de tus sueños.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <button
              onClick={() => {
                handleCTAClick('Final CTA');
                handleWhatsAppClick();
              }}
              className="bg-gradient-to-r from-clr-main to-clr-light hover:from-clr-light hover:to-clr-main text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg"
            >
              <Phone size={20} />
              Agendar Cita Gratis
            </button>
            <a
              href="tel:+593979286633"
              className="border-2 border-clr-main text-clr-main px-8 py-4 rounded-lg font-bold text-lg hover:bg-clr-main hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
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
