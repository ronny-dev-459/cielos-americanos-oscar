import { whatsappQuoteLink } from "../config/siteConfig";

export default function FloatingWhatsapp() {
    return (
        <a
            href={whatsappQuoteLink("Hola, quiero información sobre cielos americanos")}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir WhatsApp para cotizar"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full flex items-center justify-center shadow-2xl text-white focus:outline-none z-50 transition-all duration-300 hover:scale-110 animate-pulse"
            style={{ backgroundColor: '#25D366' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#22BF5D'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
        >
            {/* icono */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.403 0 12.057 0c3.181 0 6.167 1.24 8.413 3.488a11.82 11.82 0 013.484 8.409c-.003 6.653-5.284 11.935-11.938 11.935a11.95 11.95 0 01-6.003-1.617L.057 24zm6.597-3.807c1.735 1.033 3.276 1.666 5.392 1.666 5.448 0 9.885-4.434 9.889-9.877.003-5.463-4.415-9.89-9.881-9.894-5.452 0-9.887 4.434-9.889 9.881 0 2.225.651 3.891 1.746 5.555l-.999 3.648 3.742-.979zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
            </svg>
        </a>
    );
}


