import Head from 'next/head';
import Script from 'next/script';

import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Advantages from "./components/Advantages"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import NewsBlogPreview from "./components/NewsBlogPreview"
import Footer from "./components/Footer"

export default function Home() {
  return (
<>
      <Head>
        <title>My Awesome Website</title>
        <meta name="description" content="This is the description of my awesome website." />
      </Head>

      {/* Dynamically Load the Chatbox Script */}
      <Script
        type="module"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            import Chatbox from 'https://cdn.jsdelivr.net/npm/@chatvolt/embeds@latest/dist/chatbox/index.js';
            const widget = await Chatbox.initBubble({
              agentId: 'cm6y269wr017mwy0epgw5clo0',
            });
          `,
        }}
      />
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Testimonials />
        <NewsBlogPreview />
        <Pricing />
      </main>
      <Footer />
    </div>
</>
  )
}

