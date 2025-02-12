import { Brain, GraduationCap, Users, FileText } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "FIIMaster AI",
    description: "Assistente virtual para análise de relatórios e recomendações personalizadas.",
  },
  {
    icon: GraduationCap,
    title: "Academia FIIMaster",
    description: "Cursos online e webinars sobre Fundos Imobiliários.",
  },
  {
    icon: Users,
    title: "Marketplace de Consultoria",
    description: "Rede de assessores financeiros especializados em FIIs.",
  },
  {
    icon: FileText,
    title: "Relatórios Premium",
    description: "Análises trimestrais setoriais e rankings de desempenho.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-800">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            >
              <service.icon className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

