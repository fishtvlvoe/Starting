import { site } from "@/site.config";

export function AboutSection() {
	const paragraphs = site.about.split("\n\n").filter(Boolean);

	return (
		<section id="about" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--accent-soft)]">
			<div className="mx-auto max-w-4xl px-4 py-16">
				<h2 className="text-2xl font-semibold tracking-tight">關於我</h2>

				<div className="mt-6 space-y-4 text-[var(--muted)] leading-relaxed">
					{paragraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>
			</div>
		</section>
	);
}
