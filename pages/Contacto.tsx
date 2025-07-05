
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // GA4 Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: 'Contact Form',
      });
    }
    
    // Handle form submission
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Implantes Dentales",
    "Ortodoncia Invisible",
    "Blanqueamiento Dental",
    "Endodoncia",
    "Odontología Estética",
    "Odontopediatría",
    "Cirugía Oral",
    "Periodoncia",
    "Prótesis Dental",
    "Urgencia Dental"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-clr-dark via-clr-main to-clr-light py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Contáctanos
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Estamos aquí para responder tus preguntas y ayudarte a lograr la sonrisa de tus sueños. 
              Agenda tu consulta gratuita hoy mismo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-clr-dark mb-8">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-clr-main/10 p-3 rounded-full group-hover:bg-clr-main/20 transition-colors duration-300">
                    <MapPin size={24} className="text-clr-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-clr-dark mb-2">Dirección</h3>
                    <p className="text-gray-600">Av. Jaime Roldos Aguilera, Quito, Ecuador</p>
                    <a 
                      href="https://g.co/kgs/4MasWYB" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-clr-main hover:text-clr-light transition-colors text-sm"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-clr-main/10 p-3 rounded-full group-hover:bg-clr-main/20 transition-colors duration-300">
                    <Phone size={24} className="text-clr-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-clr-dark mb-2">Teléfono</h3>
                    <a href="tel:+593979286633" className="text-gray-600 hover:text-clr-main transition-colors">
                      +593 979 286 633
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-clr-main/10 p-3 rounded-full group-hover:bg-clr-main/20 transition-colors duration-300">
                    <Mail size={24} className="text-clr-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-clr-dark mb-2">Email</h3>
                    <a href="mailto:info@odontomed.ec" className="text-gray-600 hover:text-clr-main transition-colors">
                      info@odontomed.ec
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-clr-main/10 p-3 rounded-full group-hover:bg-clr-main/20 transition-colors duration-300">
                    <Clock size={24} className="text-clr-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-clr-dark mb-2">Horarios de Atención</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                      <p>Sábados: 8:00 AM - 2:00 PM</p>
                      <p>Domingos: Solo urgencias</p>
                      <p className="text-clr-main font-medium">Urgencias 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <a
                  href="https://api.whatsapp.com/send?phone=593979286633&text=Hola%20ODONTOMED.%20%0AQuisiera%20informaci%C3%B3n%20de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 w-full justify-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Escribir por WhatsApp
                </a>
                <a
                  href="tel:+593979286633"
                  className="border-2 border-clr-main text-clr-main hover:bg-clr-main hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 w-full justify-center"
                >
                  <Phone size={20} />
                  Llamar Ahora
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl animate-fade-in delay-300">
              <h2 className="text-3xl font-bold text-clr-dark mb-8">Agenda tu Consulta</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clr-main focus:border-transparent transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clr-main focus:border-transparent transition-colors"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clr-main focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clr-main focus:border-transparent transition-colors"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clr-main focus:border-transparent transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu caso o pregunta..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-clr-main hover:bg-clr-light text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg"
                >
                  <Send size={20} />
                  Enviar Consulta
                </button>
              </form>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 text-green-800">
                  <CheckCircle size={20} />
                  <span className="font-medium">Primera consulta GRATIS</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Evaluación completa sin costo. Te contactaremos en menos de 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-clr-dark mb-4 animate-fade-in">
              Nuestra Ubicación
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-300">
              Nos encontramos en una ubicación accesible en Quito, con fácil acceso en transporte público y privado.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in delay-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817267134371!2d-78.51408968573684!3d-0.1806532997944668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002e6c5b7%3A0x1c02b8a7b94e55c8!2sAv.%20Jaime%20Rold%C3%B3s%20Aguilera%2C%20Quito!5e0!3m2!1ses!2sec!4v1647891234567!5m2!1ses!2sec"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación ODONTOMED"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
