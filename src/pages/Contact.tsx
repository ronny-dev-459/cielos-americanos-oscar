import { useState } from "react";
import SEO from "../components/SEO";
import { siteConfig, whatsappQuoteLink } from "../config/siteConfig";

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
    privacy: boolean;
};

type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
    privacy?: string;
};

export default function Contact() {
    const contactContent = siteConfig.pages.contact;
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
        privacy: false
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [showSuccess, setShowSuccess] = useState(false);

    // Validación del formulario
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = contactContent.form.validation.nameRequired;
        }

        if (!formData.email.trim()) {
            newErrors.email = contactContent.form.validation.emailRequired;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = contactContent.form.validation.emailInvalid;
        }

        if (!formData.message.trim()) {
            newErrors.message = contactContent.form.validation.messageRequired;
        } else if (formData.message.trim().length < 15) {
            newErrors.message = contactContent.form.validation.messageTooShort;
        }

        if (!formData.privacy) {
            newErrors.privacy = contactContent.form.validation.privacyRequired;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Construir y abrir mailto
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Construir cuerpo del correo
        const emailBody = `Nombre: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Teléfono: ${formData.phone}` : ''}
Mensaje: ${formData.message}
Origen: Sitio Web (Formulario de Contacto)`;

        // Limitar longitud del mensaje si es muy largo
        const maxLength = 800;
        let finalBody = emailBody;
        if (emailBody.length > maxLength) {
            finalBody = emailBody.substring(0, maxLength) + '\n\n(mensaje completo a solicitud)';
        }

        // Construir mailto
        const mailtoUrl = `mailto:${contactContent.info.email}?subject=Consulta desde la web - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(finalBody)}`;

        // Intentar abrir mailto con múltiples métodos
        let mailtoOpened = false;

        try {
            // Método 1: window.location.href (más confiable)
            window.location.href = mailtoUrl;
            mailtoOpened = true;

        } catch (error) {
            console.error('Error con window.location.href:', error);

            try {
                // Método 2: window.open como fallback
                const mailtoWindow = window.open(mailtoUrl, '_blank');
                if (mailtoWindow) {
                    mailtoOpened = true;
                    // Cerrar la ventana vacía después de un momento
                    setTimeout(() => mailtoWindow.close(), 1000);
                }
            } catch (secondError) {
                console.error('Error con window.open:', secondError);
            }
        }

        // Mostrar mensaje apropiado
        if (mailtoOpened) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 8000); // Más tiempo para leer
        } else {
            // Si ningún método funcionó, mostrar fallback
            alert('No se pudo abrir el cliente de correo. Usa el botón "Copiar información" o escríbenos por WhatsApp.');
        }
    };

    // Actualizar campo del formulario
    const handleInputChange = (field: keyof FormData, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Limpiar error del campo cuando el usuario empiece a escribir
        if (errors[field as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [field as keyof FormErrors]: undefined }));
        }
    };

    return (
        <>
            <SEO
                title="Contacto - Cotiza tu Proyecto de Cielos Americanos | Cielos Americanos Oscar"
                description="Contáctanos para cotizar tu proyecto de cielos americanos. WhatsApp rápido, formulario de contacto y atención personalizada en Santiago, Chile."
                canonical="https://cieloamericanooscar.cl/contacto"
                keywords="contacto cielos americanos, cotizar proyecto, whatsapp instalación, formulario contacto, atención personalizada"
            />
            <div className="w-full">
                {/* Hero interno */}
                <section className="bg-gradient-to-br from-background-secondary to-white py-16">
                    <div className="section text-center">
                        <h1 className="mb-4">{contactContent.title}</h1>
                        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                            {contactContent.subtitle}
                        </p>
                    </div>
                </section>

                <main className="section">

                    <div className="grid gap-8 md:grid-cols-2 mt-8">
                        <form onSubmit={handleSubmit} className="card">
                            <div className="card-body p-6">
                                <h3 className="text-xl font-semibold mb-4 text-text-primary">Envíanos un mensaje</h3>

                                {/* Mensaje de éxito */}
                                {showSuccess && (
                                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-green-800 text-sm mb-3">
                                            ✅ Se abrió tu aplicación de correo. Si necesitas respuesta inmediata, escríbenos por WhatsApp.
                                        </p>

                                        {/* Botón de fallback si el correo no se abre */}
                                        <div className="text-center">
                                            <button
                                                onClick={() => {
                                                    // Copiar información del correo al portapapeles
                                                    const emailInfo = `Para: ${contactContent.info.email}
Asunto: Consulta desde la web - ${formData.name}
Cuerpo: ${formData.message}`;

                                                    navigator.clipboard.writeText(emailInfo).then(() => {
                                                        alert('Información del correo copiada al portapapeles. Puedes pegarla en tu cliente de correo.');
                                                    });
                                                }}
                                                className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded hover:bg-blue-200 transition-colors"
                                            >
                                                📋 Copiar información del correo
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className="grid gap-4">
                                    {/* Campo Nombre */}
                                    <label className="grid gap-1">
                                        <span className="text-sm text-text-secondary">{contactContent.form.nameLabel}</span>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 ${errors.name ? 'border-red-300' : 'border-gray-300'
                                                }`}
                                            placeholder={contactContent.form.namePlaceholder}
                                            aria-label="Nombre completo"
                                        />
                                        {errors.name && (
                                            <span className="text-red-500 text-xs">{errors.name}</span>
                                        )}
                                    </label>

                                    {/* Campo Email */}
                                    <label className="grid gap-1">
                                        <span className="text-sm text-text-secondary">{contactContent.form.emailLabel}</span>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 ${errors.email ? 'border-red-300' : 'border-gray-300'
                                                }`}
                                            placeholder={contactContent.form.emailPlaceholder}
                                            aria-label="Correo electrónico"
                                        />
                                        {errors.email && (
                                            <span className="text-red-500 text-xs">{errors.email}</span>
                                        )}
                                    </label>

                                    {/* Campo Teléfono (opcional) */}
                                    <label className="grid gap-1">
                                        <span className="text-sm text-text-secondary">{contactContent.form.phoneLabel}</span>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500"
                                            placeholder={contactContent.form.phonePlaceholder}
                                            aria-label="Teléfono (opcional)"
                                        />
                                    </label>

                                    {/* Campo Mensaje */}
                                    <label className="grid gap-1">
                                        <span className="text-sm text-text-secondary">{contactContent.form.messageLabel}</span>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => handleInputChange('message', e.target.value)}
                                            className={`border rounded-md px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 ${errors.message ? 'border-red-300' : 'border-gray-300'
                                                }`}
                                            placeholder={contactContent.form.messagePlaceholder}
                                            aria-label="Mensaje"
                                        />
                                        {errors.message && (
                                            <span className="text-red-500 text-xs">{errors.message}</span>
                                        )}
                                    </label>

                                    {/* Checkbox de Privacidad */}
                                    <label className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            checked={formData.privacy}
                                            onChange={(e) => handleInputChange('privacy', e.target.checked)}
                                            className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                        />
                                        <span className="text-sm text-text-secondary">{contactContent.form.privacyText}</span>
                                    </label>
                                    {errors.privacy && (
                                        <span className="text-red-500 text-xs ml-7">{errors.privacy}</span>
                                    )}

                                    {/* Botón Enviar */}
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-full"
                                        aria-label="Enviar correo electrónico"
                                    >
                                        📧 {contactContent.form.submitText}
                                    </button>
                                </div>
                            </div>
                        </form>

                        <aside className="space-y-6">
                            <div className="card">
                                <div className="card-body p-6">
                                    <h3 className="text-lg font-semibold mb-4 text-text-primary">Información de contacto</h3>
                                    <div className="space-y-3">
                                        <p className="text-sm text-text-secondary">
                                            <strong>Dirección:</strong> {contactContent.info.address}
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            <strong>Teléfono:</strong> {contactContent.info.phone}
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            <strong>Correo:</strong> {contactContent.info.email}
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            <strong>Horarios:</strong> {contactContent.info.hours}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-gradient-to-br from-primary-50 to-white border-primary-100">
                                <div className="card-body p-6">
                                    <h3 className="text-lg font-semibold mb-2 text-text-primary">
                                        {contactContent.cta.title}
                                    </h3>
                                    <p className="text-sm text-text-secondary mb-4">
                                        {contactContent.cta.subtitle}
                                    </p>

                                    {/* WhatsApp con nombre del formulario si está disponible */}
                                    <a
                                        href={whatsappQuoteLink(formData.name ? `Hola, soy ${formData.name} y quiero cotizar mi proyecto de cielos americanos` : undefined)}
                                        className="btn btn-primary w-full mb-3"
                                    >
                                        💬 {contactContent.cta.buttonText}
                                    </a>

                                    <p className="text-xs text-text-light mt-2 text-center">
                                        {contactContent.cta.hours}
                                    </p>

                                    {/* Información adicional */}
                                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <p className="text-blue-800 text-xs text-center mb-2">
                                            💡 {contactContent.cta.fallbackText}
                                        </p>
                                        <p className="text-blue-700 text-xs text-center font-medium">
                                            📱 Respuesta garantizada en menos de 1 hora
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>
        </>
    );
}


