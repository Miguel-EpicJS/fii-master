import Link from "next/link"
import { Building2 } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-primary-800 text-white p-4 transition-all duration-300 ease-in-out hover:bg-primary-900">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <Building2 className="h-8 w-8 text-secondary-400" />
          <span className="text-xl font-bold">FIIMaster Solutions</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/services" className="hover:text-secondary-400 transition-colors duration-300">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/advantages" className="hover:text-secondary-400 transition-colors duration-300">
                Vantagens
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-secondary-400 transition-colors duration-300">
                Preços
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="bg-secondary-500 hover:bg-secondary-600 px-4 py-2 rounded transition-all duration-300 ease-in-out hover:shadow-lg"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

