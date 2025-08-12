import { siteConfig, whatsappQuoteLink } from "../config/siteConfig";

export default function Contact() {
    return (
        <main className="section">
            <h1 className="text-3xl md:text-4xl font-semibold">Contacto</h1>
            <p className="mt-3 text-base md:text-[17px] text-gray-600">Escríbenos y con gusto te ayudamos con tu cotización.</p>

            <div className="grid gap-8 md:grid-cols-2 mt-8">
                <form onSubmit={(e) => e.preventDefault()} className="card">
                    <div className="card-body p-6">
                        <div className="grid gap-4">
                            <label className="grid gap-1">
                                <span className="text-sm text-gray-700">Nombre</span>
                                <input className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-100 focus:border-cyan-400" placeholder="Nombre" />
                            </label>
                            <label className="grid gap-1">
                                <span className="text-sm text-gray-700">Email</span>
                                <input type="email" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-100 focus:border-cyan-400" placeholder="tu@correo.com" />
                            </label>
                            <label className="grid gap-1">
                                <span className="text-sm text-gray-700">Mensaje</span>
                                <textarea className="border border-gray-300 rounded-md px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-cyan-100 focus:border-cyan-400" placeholder="Cuéntanos qué necesitas" />
                            </label>
                            <button className="btn btn-primary" type="submit">Enviar (demo)</button>
                        </div>
                    </div>
                </form>

                <aside className="space-y-3">
                    <div className="card">
                        <div className="card-body p-6">
                            <p className="text-sm text-gray-700"><strong>Correo:</strong> {siteConfig.email}</p>
                            <p className="text-sm text-gray-700"><strong>Dirección:</strong> {siteConfig.address}</p>
                            <a className="btn btn-primary mt-3" href={whatsappQuoteLink()} target="_blank" rel="noreferrer" aria-label="Cotizar por WhatsApp">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}


