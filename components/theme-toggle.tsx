"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function readTheme(): Theme {
	const stored = localStorage.getItem("theme");

	if (stored === "light" || stored === "dark") {
		return stored;
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
	const root = document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(theme);
	root.setAttribute("data-theme", theme);
	localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const current = readTheme();
		applyTheme(current);
		setTheme(current);
		setMounted(true);
	}, []);

	function toggle() {
		const next: Theme = theme === "light" ? "dark" : "light";
		applyTheme(next);
		setTheme(next);
	}

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label={theme === "light" ? "切換到深色模式" : "切換到淺色模式"}
			className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
		>
			{mounted ? (theme === "light" ? "深色" : "淺色") : "主題"}
		</button>
	);
}
