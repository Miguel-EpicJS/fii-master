import Header from "../components/Header"
import Footer from "../components/Footer"
import Services from "../components/Services"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Services />
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Como Funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">1. Análise de Dados</h3>
                <p className="mb-4">
                  Nossa IA coleta e processa dados de múltiplas fontes, incluindo relatórios da CVM, B3 e análises de
                  mercado.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">2. Geração de Insights</h3>
                <p className="mb-4">
                  Algoritmos avançados identificam padrões e tendências, gerando insights valiosos sobre o mercado de
                  FIIs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">3. Recomendações Personalizadas</h3>
                <p className="mb-4">
                  Com base no seu perfil de investidor e objetivos, nossa plataforma oferece recomendações sob medida.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Pronto para Começar?</h2>
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
              Criar Conta Gratuita
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

