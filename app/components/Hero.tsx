import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-primary-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in-down">
          Inteligência Artificial para Decisões Imobiliárias Inteligentes
        </h1>
        <p className="text-xl mb-8 animate-fade-in-up">
          Sua plataforma de referência em análise e educação sobre Fundos Imobiliários no Brasil
        </p>
        <Link href="/pricing">
          <Button
            size="lg"
            className="bg-secondary-500 hover:bg-secondary-600 transition-all duration-300 ease-in-out hover:shadow-lg animate-pulse"
          >
            Comece Gratuitamente
          </Button>
        </Link>
      </div>
    </section>
  )
}

