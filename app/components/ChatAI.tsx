"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    Chatbox?: {
      initStandard: (config: { agentId: string }) => Promise<void>
    }
  }
}

export default function ChatAI() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@chatvolt/embeds@latest/dist/chatbox/index.js"
    script.type = "module"
    script.async = true
    script.onload = () => {
      setIsLoaded(true)
    }
    script.onerror = () => {
      setError("Failed to load Chatbox script")
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    if (isLoaded && window.Chatbox) {
      window.Chatbox.initStandard({
        agentId: "cm6y269wr017mwy0epgw5clo0",
      }).catch((err) => {
        console.error("Failed to initialize Chatbox:", err)
        setError("Failed to initialize Chatbox")
      })
    }
  }, [isLoaded])

  if (error) {
    console.error(error)
    return null // Or you could return an error message component
  }

  return (
    <div style={{ width: "100%", height: "650px" }}>
      <chatvolt-chatbox-standard style={{ width: "100%", height: "100%" }} />
    </div>
  )
}

