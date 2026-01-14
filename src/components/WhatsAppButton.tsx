import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '250788664840';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello HELLO MULTI-SERVICES LTD, I would like to inquire about your services.');

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg whatsapp-pulse hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </a>
  );
}
