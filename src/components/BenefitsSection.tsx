export default function BenefitsSection() {
    const benefits = [
        {
            title: "Respuesta en minutos",
            description: "Cotiza por WhatsApp rápido",
            icon: "⚡"
        },
        {
            title: "Instalación garantizada",
            description: "Equipo propio y soporte",
            icon: "🔧"
        },
        {
            title: "Calidad comprobada",
            description: "Marcas y materiales confiables",
            icon: "⭐"
        }
    ];

    return (
        <section className="section">
            <div className="grid gap-4 sm:grid-cols-3">
                {benefits.map((benefit) => (
                    <div
                        key={benefit.title}
                        className="card p-5 flex items-start gap-3 hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-700 text-lg">
                            {benefit.icon}
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">{benefit.title}</h3>
                            <p className="text-slate-600 text-sm">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
