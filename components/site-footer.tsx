import { site } from "@/site.config";

export function SiteFooter() {
	return (
		<footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted)]">
			<p>{site.footerNote}</p>
		</footer>
	);
}
