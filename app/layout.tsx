import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { site } from "@/site.config";

import "./globals.css";

export const metadata: Metadata = {
	title: site.title,
	description: site.tagline,
};

const themeInitScript = `
(function () {
	try {
		var stored = localStorage.getItem("theme");
		var theme =
			stored === "light" || stored === "dark"
				? stored
				: window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light";
		var root = document.documentElement;
		root.classList.remove("light", "dark");
		root.classList.add(theme);
		root.setAttribute("data-theme", theme);
	} catch (e) {
		var root = document.documentElement;
		root.classList.remove("light", "dark");
		root.classList.add("light");
		root.setAttribute("data-theme", "light");
	}
})();
`;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="zh-Hant" className="light" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
			</head>

			<body className="min-h-screen antialiased">
				<SiteNav />

				<main>{children}</main>

				<SiteFooter />
			</body>
		</html>
	);
}
