import { CONTACT } from "../data.js";

// wa.me needs the number in international format with no spaces/symbols.
const WHATSAPP_NUMBER = "919843093936"; // +91 98430 93936
const PREFILLED_MESSAGE = "Hi Srikara Academy, I'd like to know more about the IGNITE and ASCEND programs.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label={`Chat with Srikara Academy on WhatsApp at ${CONTACT.phone}`}
      title={`Chat on WhatsApp — ${CONTACT.phone}`}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.02 4C9.4 4 4 9.37 4 15.98c0 2.11.56 4.09 1.53 5.8L4 28l6.37-1.49a12.03 12.03 0 0 0 5.65 1.43h.01c6.62 0 12.02-5.37 12.02-11.98C28.05 9.37 22.65 4 16.02 4Zm0 21.86h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.78.88.9-3.68-.24-.38a9.87 9.87 0 0 1-1.53-5.3c0-5.47 4.47-9.92 9.98-9.92 2.67 0 5.17 1.04 7.05 2.92a9.88 9.88 0 0 1 2.92 7.02c0 5.47-4.47 9.92-9.88 9.92-.005 0-.005 0 0 0Zm5.47-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
        />
      </svg>
    </a>
  );
}
