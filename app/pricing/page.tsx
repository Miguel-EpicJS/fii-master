import Header from "../components/Header"
import Footer from "../components/Footer"
import Pricing from "../components/Pricing"
import { Check, X } from "lucide-react"

const features = [
  { name: "Análises básicas de FIIs", free: true, essential: true, pro: true },
  { name: "Alertas de mercado", free: true, essential: true, pro: true },
  { name: "Acesso à comunidade", free: true, essential: true, pro: true },
  { name: "Análises detalhadas", free: false, essential: true, pro: true },
  { name: "Alertas personalizados", free: false, essential: true, pro: true },
  { name: "Relatórios setoriais", free: false, essential: false, pro: true },
  { name: "Simulador de cenários avançado", free: false, essential: false, pro: true },
  { name: "Suporte prioritário", free: false, essential: true, pro: true },
  { name: "Acesso antecipado a novos recursos", free: false, essential: false, pro: true },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Pricing />
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Comparação de Recursos</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Recurso</th>
                    <th className="py-3 px-6 text-center">Gratuito</th>
                    <th className="py-3 px-6 text-center">Essential</th>
                    <th className="py-3 px-6 text-center">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-4 px-6">{feature.name}</td>
                      <td className="py-4 px-6 text-center">
                        {feature.free ? (
                          <Check className="inline-block text-green-500" />
                        ) : (
                          <X className="inline-block text-red-500" />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {feature.essential ? (
                          <Check className="inline-block text-green-500" />
                        ) : (
                          <X className="inline-block text-red-500" />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {feature.pro ? (
                          <Check className="inline-block text-green-500" />
                        ) : (
                          <X className="inline-block text-red-500" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

