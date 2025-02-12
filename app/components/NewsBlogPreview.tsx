import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "5 FIIs para ficar de olho em 2025",
    excerpt: "Descubra quais são os Fundos Imobiliários mais promissores para o próximo ano, segundo nossa análise.",
    date: "2025-01-15",
    author: "Maria Santos",
  },
  {
    title: "Como o cenário macroeconômico afeta os FIIs",
    excerpt: "Entenda a relação entre as mudanças na economia e o desempenho dos Fundos Imobiliários.",
    date: "2025-01-10",
    author: "João Oliveira",
  },
  {
    title: "Guia do iniciante: como montar uma carteira de FIIs",
    excerpt: "Aprenda os passos essenciais para começar a investir em Fundos Imobiliários de forma inteligente.",
    date: "2025-01-05",
    author: "Ana Rodrigues",
  },
]

export default function NewsBlogPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Últimas do Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.author}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button className="bg-blue-900 hover:bg-blue-800">Ver Todos os Artigos</Button>
        </div>
      </div>
    </section>
  )
}

