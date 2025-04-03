import { redirect } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function Home() {
  // Get environment variables
  const phoneNumber = process.env.WHATSAPP_PHONE
  const message = process.env.WHATSAPP_MESSAGE

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message || "")

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  // Redirect to WhatsApp
  redirect(whatsappUrl)

  // This will only show briefly before the redirect
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-green-500 mx-auto" />
        <h1 className="mt-6 text-2xl font-semibold text-gray-900">Redirigiendo a WhatsApp...</h1>
        <p className="mt-2 text-gray-600">Por favor espere un momento</p>
      </div>
    </div>
  )
}

