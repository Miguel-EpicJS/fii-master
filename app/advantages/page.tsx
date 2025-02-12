import Header from "../components/Header"
import Footer from "../components/Footer"
import Advantages from "../components/Advantages"

const faqs = [
  {
    question: "O que é o algoritmo RiskGuard™?",
    answer:
      "O RiskGuard™ é nosso sistema proprietário de monitoramento contínuo de riscos. Ele analisa em tempo real diversos indicadores dos FIIs e alerta sobre mudanças significativas que possam impactar seu investimento.",
  },
  {
    question: "Como funciona o Simulador de Cenários?",
    answer:
      "O Simulador de Cenários permite que você teste diferentes estratégias de investimento baseadas em variações de fatores como taxa de juros, vacância e outros indicadores macroeconômicos. Isso ajuda a prever possíveis resultados e tomar decisões mais informadas.",
  },
  {
    question: "O que são os Selos de Confiança?",
    answer:
      "Os Selos de Confiança são nossa certificação própria que classifica os FIIs em categorias de risco: Conservador, Moderado e Arrojado. Essa classificação ajuda os investidores a identificar rapidamente quais fundos se alinham melhor com seu perfil de risco.",
  },
  {
    question: "A FIIMaster oferece recomendações de investimento?",
    answer:
      "Sim, oferecemos recomendações personalizadas baseadas no seu perfil de investidor, objetivos financeiros e tolerância ao risco. No entanto, sempre recomendamos que você consulte um assessor financeiro antes de tomar decisões de investimento.",
  },
]

export default function AdvantagesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Advantages />
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

