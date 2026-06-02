import { site } from "@/site.config";

export function HeroSection() {
	return (
		<section className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
			<p className="mb-3 text-sm font-medium text-[var(--muted)]">個人形象網站</p>

			<h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
				{site.name}
			</h1>

			<p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)] text-pretty">
				{site.tagline}
			</p>

			<div className="mt-8">
				<a
					href="#contact"
					className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
				>
					{site.heroCtaLabel}
				</a>
			</div>
		</section>
	);
}
