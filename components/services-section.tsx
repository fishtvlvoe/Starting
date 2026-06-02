import { site } from "@/site.config";

export function ServicesSection() {
	return (
		<section id="services" className="scroll-mt-20 border-t border-[var(--border)]">
			<div className="mx-auto max-w-4xl px-4 py-16">
				<h2 className="text-2xl font-semibold tracking-tight">服務項目</h2>

				<ul className="mt-8 grid gap-4 md:grid-cols-2">
					{site.services.map((service) => (
						<li
							key={service.title}
							className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
						>
							<h3 className="font-medium">{service.title}</h3>

							<p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
								{service.description}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
