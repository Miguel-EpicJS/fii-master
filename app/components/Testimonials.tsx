import Image from "next/image"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Investidor Iniciante",
    image: "/placeholder.svg",
    quote:
      "A FIIMaster me ajudou a entender o mercado de FIIs e tomar decisões mais informadas. Recomendo para todos os iniciantes!",
  },
  {
    name: "Ana Rodrigues",
    role: "Analista Financeiro",
    image: "/placeholder.svg",
    quote:
      "As análises detalhadas e os relatórios setoriais da FIIMaster são essenciais para o meu trabalho. Uma ferramenta indispensável.",
  },
  {
    name: "Roberto Almeida",
    role: "Gestor de Patrimônio",
    image: "/placeholder.svg",
    quote:
      "O algoritmo RiskGuard™ da FIIMaster nos ajudou a identificar riscos potenciais e otimizar nossa carteira de FIIs.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">O que Nossos Clientes Dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

