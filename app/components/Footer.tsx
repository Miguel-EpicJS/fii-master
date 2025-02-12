import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Sobre Nós</h4>
            <p className="text-sm">
              FIIMaster Solutions: Sua plataforma de referência em análise e educação sobre Fundos Imobiliários no
              Brasil.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm hover:text-secondary-400 transition-colors duration-300">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/advantages" className="text-sm hover:text-secondary-400 transition-colors duration-300">
                  Vantagens
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-secondary-400 transition-colors duration-300">
                  Preços
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p className="text-sm">São Paulo, SP</p>
            <p className="text-sm">contato@fiimaster.com.br</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-secondary-400 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-secondary-400 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-secondary-400 transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 FIIMaster Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

