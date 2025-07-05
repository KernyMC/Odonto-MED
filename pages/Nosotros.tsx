
import { Award, Users, Heart, Clock, Stethoscope, UserCheck } from "lucide-react";

export default function Nosotros() {
  const team = [
    {
      name: "Dr. María Elena Rodríguez",
      specialty: "Directora General - Implantología",
      experience: "25 años de experiencia",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Especialista en implantes dentales con certificación internacional. Pionera en técnicas de implantología avanzada en Ecuador."
    },
    {
      name: "Dr. Carlos Mendoza",
      specialty: "Especialista en Ortodoncia",
      experience: "18 años de experiencia",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Experto en ortodoncia invisible y técnicas de alineamiento dental. Certificado en sistemas Invisalign y Clear Aligner."
    },
    {
      name: "Dra. Ana Lucía Vásquez",
      specialty: "Odontopediatra",
      experience: "15 años de experiencia",
      image: "https://images.unsplash.com/photo-1594824375914-d0c5e0b4f026?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Especialista en odontología infantil con enfoque en técnicas preventivas y tratamientos sin dolor para niños."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Dedicados al bienestar y salud dental de nuestros pacientes con atención personalizada."
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Mantenemos los más altos estándares de calidad en todos nuestros tratamientos."
    },
    {
      icon: Users,
      title: "Confianza",
      description: "48 años construyendo relaciones duraderas basadas en la confianza y transparencia."
    },
    {
      icon: Stethoscope,
      title: "Innovación",
      description: "Incorporamos las últimas tecnologías para ofrecer los mejores resultados."
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
              Conoce a ODONTOMED
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              48 años de experiencia cuidando la salud dental de las familias ecuatorianas 
              con tecnología de vanguardia y atención personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-clr-dark mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ODONTOMED nació en 1976 con la visión de brindar atención dental de calidad 
                a las familias quiteñas. Desde entonces, hemos sido pioneros en la adopción 
                de nuevas tecnologías y técnicas avanzadas de odontología.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A lo largo de estas cinco décadas, hemos tratado a más de 5,000 pacientes, 
                manteniéndonos siempre a la vanguardia de la odontología moderna y 
                comprometidos con la excelencia en cada tratamiento.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hoy, somos reconocidos como una de las clínicas dentales más confiables 
                de Quito, con un equipo de especialistas certificados y tecnología de última generación.
              </p>
            </div>
            <div className="animate-fade-in delay-300">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Historia ODONTOMED"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-clr-dark mb-4 animate-fade-in">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-300">
              Los principios que guían nuestro trabajo diario y nuestra relación con cada paciente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex justify-center mb-4">
                  <div className="bg-clr-main/10 p-4 rounded-full group-hover:bg-clr-main/20 transition-all duration-300 group-hover:scale-110">
                    <value.icon size={32} className="text-clr-main" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-clr-dark mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-clr-dark mb-4 animate-fade-in">
              Nuestro Equipo de Especialistas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-300">
              Profesionales altamente calificados dedicados a tu salud dental.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-clr-dark mb-2">{member.name}</h3>
                  <p className="text-clr-main font-medium mb-2">{member.specialty}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-clr-dark to-clr-main text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">
              ODONTOMED en Números
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group animate-fade-in">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">48+</div>
              <div className="text-gray-200">Años de Experiencia</div>
            </div>
            <div className="text-center group animate-fade-in delay-200">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">5,000+</div>
              <div className="text-gray-200">Pacientes Satisfechos</div>
            </div>
            <div className="text-center group animate-fade-in delay-400">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-gray-200">Especialistas</div>
            </div>
            <div className="text-center group animate-fade-in delay-600">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">4.9</div>
              <div className="text-gray-200">Calificación Promedio</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
