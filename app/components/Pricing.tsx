import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Gratuito",
    price: "R$0",
    features: ["Acesso básico à plataforma", "Análises limitadas", "Alertas básicos"],
  },
  {
    name: "Essential",
    price: "R$49/mês",
    features: ["Acesso a análises detalhadas", "Alertas personalizados", "Suporte prioritário"],
  },
  {
    name: "Pro",
    price: "R$99/mês",
    features: ["Tudo do plano Essential", "Relatórios setoriais", "Simulador de cenários avançado"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-800">Planos e Preços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6 text-primary-800">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-secondary-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary-600 hover:bg-primary-700 transition-all duration-300 ease-in-out">
                Escolher Plano
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

