import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/site.config";

const links = [
	{ href: "/#about", label: "關於" },
	{ href: "/#services", label: "服務" },
	{ href: "/#products", label: "產品" },
	{ href: "/#faq", label: "Q&A" },
	{ href: "/blog", label: "部落格" },
	{ href: "/#contact", label: "聯絡" },
];

export function SiteNav() {
	return (
		<header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
			<div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
				<Link href="/" className="text-sm font-semibold tracking-tight">
					{site.name}
				</Link>

				<div className="flex items-center gap-3">
					<nav className="flex flex-wrap justify-end gap-4 text-sm text-[var(--muted)]">
						{links.map((link) =>
							link.href.startsWith("/#") ? (
								<a
									key={link.href}
									href={link.href}
									className="transition hover:text-[var(--foreground)]"
								>
									{link.label}
								</a>
							) : (
								<Link
									key={link.href}
									href={link.href}
									className="transition hover:text-[var(--foreground)]"
								>
									{link.label}
								</Link>
							),
						)}
					</nav>

					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
