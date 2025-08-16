import { siteConfig, whatsappQuoteLink } from "../config/siteConfig";

export default function Contact() {
    const contactContent = siteConfig.pages.contact;

    return (
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
                    <form onSubmit={(e) => e.preventDefault()} className="card">
                        <div className="card-body p-6">
                            <h3 className="text-xl font-semibold mb-4 text-text-primary">Envíanos un mensaje</h3>
                            <div className="grid gap-4">
                                <label className="grid gap-1">
                                    <span className="text-sm text-text-secondary">{contactContent.form.nameLabel}</span>
                                    <input
                                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500"
                                        placeholder={contactContent.form.namePlaceholder}
                                    />
                                </label>
                                <label className="grid gap-1">
                                    <span className="text-sm text-text-secondary">{contactContent.form.emailLabel}</span>
                                    <input
                                        type="email"
                                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500"
                                        placeholder={contactContent.form.emailPlaceholder}
                                    />
                                </label>
                                <label className="grid gap-1">
                                    <span className="text-sm text-text-secondary">{contactContent.form.messageLabel}</span>
                                    <textarea
                                        className="border border-gray-300 rounded-md px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500"
                                        placeholder={contactContent.form.messagePlaceholder}
                                    />
                                </label>
                                <button className="btn btn-primary" type="submit">
                                    {contactContent.form.submitDemo}
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
                                <a href={whatsappQuoteLink()} className="btn btn-primary w-full">
                                    💬 {contactContent.cta.buttonText}
                                </a>
                                <p className="text-xs text-text-light mt-2 text-center">
                                    {contactContent.cta.hours}
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}


