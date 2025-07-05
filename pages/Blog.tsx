
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "¿Cuándo es necesario un implante dental?",
      excerpt: "Descubre las situaciones en las que un implante dental es la mejor opción para reemplazar dientes perdidos y recuperar tu sonrisa.",
      author: "Dr. María Elena Rodríguez",
      date: "15 de Enero, 2024",
      category: "Implantes",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "cuando-es-necesario-implante-dental"
    },
    {
      id: 2,
      title: "Ortodoncia invisible: Todo lo que debes saber",
      excerpt: "La ortodoncia invisible ha revolucionado el mundo de la odontología. Te contamos sus ventajas, proceso y resultados esperados.",
      author: "Dr. Carlos Mendoza",
      date: "10 de Enero, 2024",
      category: "Ortodoncia",
      image: "https://images.unsplash.com/photo-1588776814546-1ffec00e57cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "ortodoncia-invisible-todo-lo-que-debes-saber"
    },
    {
      id: 3,
      title: "Cuidados después de un blanqueamiento dental",
      excerpt: "Consejos esenciales para mantener tu sonrisa blanca y brillante después de un tratamiento de blanqueamiento profesional.",
      author: "Dra. Ana Lucía Vásquez",
      date: "5 de Enero, 2024",
      category: "Estética",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "cuidados-despues-blanqueamiento-dental"
    },
    {
      id: 4,
      title: "La importancia de la salud dental en niños",
      excerpt: "Establecer buenos hábitos de higiene dental desde temprana edad es fundamental para la salud bucal de por vida.",
      author: "Dra. Ana Lucía Vásquez",
      date: "28 de Diciembre, 2023",
      category: "Odontopediatría",
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "importancia-salud-dental-ninos"
    },
    {
      id: 5,
      title: "Mitos y verdades sobre el tratamiento de conducto",
      excerpt: "Desmitificamos las creencias más comunes sobre la endodoncia y te explicamos por qué es un tratamiento seguro y efectivo.",
      author: "Dr. María Elena Rodríguez",
      date: "20 de Diciembre, 2023",
      category: "Endodoncia",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "mitos-verdades-tratamiento-conducto"
    },
    {
      id: 6,
      title: "Tecnología 3D en odontología moderna",
      excerpt: "Conoce cómo la tecnología 3D está transformando los diagnósticos y tratamientos dentales para obtener mejores resultados.",
      author: "Dr. Carlos Mendoza",
      date: "15 de Diciembre, 2023",
      category: "Tecnología",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "tecnologia-3d-odontologia-moderna"
    }
  ];

  const categories = ["Todos", "Implantes", "Ortodoncia", "Estética", "Odontopediatría", "Endodoncia", "Tecnología"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-clr-dark via-clr-main to-clr-light py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Blog ODONTOMED
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Consejos, novedades y todo lo que necesitas saber sobre salud dental. 
              Información confiable de nuestros especialistas.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clr-main focus:border-transparent"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    index === 0 
                      ? 'bg-clr-main text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-clr-main hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-clr-main text-white px-3 py-1 rounded-full text-sm font-medium">
                      Destacado
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {blogPosts[0].author}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-clr-dark mb-4 group-hover:text-clr-main transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <Link
                    to={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center text-clr-main hover:text-clr-light font-medium transition-colors duration-200 group-hover:gap-3"
                  >
                    Leer más
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-clr-dark mb-4 animate-fade-in">
              Artículos Recientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-300">
              Mantente informado con nuestros últimos consejos y novedades sobre salud dental.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-clr-main/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author.split(' ')[0]}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-clr-dark mb-3 group-hover:text-clr-main transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-clr-main hover:text-clr-light font-medium text-sm transition-colors duration-200"
                  >
                    Leer más
                    <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-clr-dark to-clr-main text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">
            Suscríbete a Nuestro Newsletter
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto animate-fade-in delay-300">
            Recibe consejos de salud dental, novedades y promociones exclusivas directamente en tu correo.
          </p>
          
          <div className="max-w-md mx-auto animate-fade-in delay-500">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-clr-dark px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
