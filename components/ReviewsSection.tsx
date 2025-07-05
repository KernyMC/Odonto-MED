
import { Star, Quote } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
}

export default function ReviewsSection() {
  const reviews: Review[] = [
    {
      id: 1,
      name: "María González",
      rating: 5,
      comment: "Excelente atención y profesionalismo. Me realizaron un implante dental y quedé muy satisfecha con el resultado. El equipo es muy amable y las instalaciones están impecables.",
      date: "Hace 2 semanas",
      service: "Implantes Dentales"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      rating: 5,
      comment: "Llevé a mi hija para ortodoncia invisible y el resultado ha sido increíble. El trato hacia los niños es excepcional y siempre explican todo detalladamente.",
      date: "Hace 1 mes",
      service: "Ortodoncia Invisible"
    },
    {
      id: 3,
      name: "Ana Patricia Vega",
      rating: 5,
      comment: "El blanqueamiento dental superó mis expectativas. Sin dolor y con resultados inmediatos. Definitivamente recomiendo ODONTOMED para cualquier tratamiento dental.",
      date: "Hace 3 semanas",
      service: "Blanqueamiento Dental"
    },
    {
      id: 4,
      name: "Diego Morales",
      rating: 5,
      comment: "Urgencia dental un domingo y me atendieron de inmediato. Profesionales 24/7 realmente comprometidos con la salud de sus pacientes. Muy agradecido.",
      date: "Hace 1 semana",
      service: "Urgencias Dentales"
    },
    {
      id: 5,
      name: "Lucía Hernández",
      rating: 5,
      comment: "Mi experiencia con la endodoncia fue excelente. Sin dolor durante todo el proceso y con seguimiento post-tratamiento. El equipo es muy profesional.",
      date: "Hace 2 meses",
      service: "Endodoncia"
    },
    {
      id: 6,
      name: "Roberto Silva",
      rating: 5,
      comment: "Instalaciones modernas, tecnología de punta y personal altamente calificado. La primera consulta gratuita me permitió conocer todas las opciones de tratamiento.",
      date: "Hace 1 mes",
      service: "Consulta General"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-clr-dark mb-4">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {renderStars(Math.round(averageRating))}
            </div>
            <span className="text-xl font-bold text-clr-dark">{averageRating.toFixed(1)}</span>
            <span className="text-gray-600">({reviews.length} reseñas)</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de pacientes confían en ODONTOMED para su salud dental. 
            Lee sus experiencias y descubre por qué somos la clínica líder en Quito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
                <Quote size={24} className="text-clr-main/30" />
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-clr-dark">{review.name}</p>
                    <p className="text-sm text-clr-main font-medium">{review.service}</p>
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://g.co/kgs/4MasWYB"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-clr-main hover:bg-clr-light text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 inline-flex items-center gap-2"
          >
            <Star size={20} />
            Ver Todas las Reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
