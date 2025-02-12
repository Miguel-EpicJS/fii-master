import { ShieldCheck, TrendingUp, Award } from "lucide-react"

const advantages = [
  { icon: ShieldCheck, title: "Algoritmo RiskGuard™", description: "Sistema de monitoramento contínuo de riscos." },
  {
    icon: TrendingUp,
    title: "Simulador de Cenários",
    description: "Teste estratégias de investimento com base em variações de mercado.",
  },
  {
    icon: Award,
    title: "Selos de Confiança",
    description: "Certificação própria que classifica FIIs por categorias de risco.",
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-primary-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-800">Nossos Diferenciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center transition-all duration-300 ease-in-out hover:transform hover:scale-105"
            >
              <advantage.icon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary-800">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

