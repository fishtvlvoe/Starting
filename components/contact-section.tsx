import { site } from "@/site.config";

export function ContactSection() {
	const { email, lineUrl, phone } = site.contact;

	return (
		<section id="contact" className="scroll-mt-20 border-t border-[var(--border)]">
			<div className="mx-auto max-w-4xl px-4 py-16 text-center">
				<h2 className="text-2xl font-semibold tracking-tight">聯繫我們</h2>

				<p className="mx-auto mt-3 max-w-lg text-[var(--muted)]">
					歡迎透過以下方式聯絡。第一版教學站不需要後台，按鈕會直接開啟你的 Email 或 LINE。
				</p>

				<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
					{email ? (
						<a
							href={`mailto:${email}`}
							className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm font-medium transition hover:border-[var(--foreground)]"
						>
							Email：{email}
						</a>
					) : null}

					{lineUrl ? (
						<a
							href={lineUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex rounded-full bg-[#06c755] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
						>
							加 LINE 好友
						</a>
					) : null}

					{phone ? (
						<a
							href={`tel:${phone}`}
							className="inline-flex rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition hover:border-[var(--foreground)]"
						>
							電話：{phone}
						</a>
					) : null}
				</div>

				{!email && !lineUrl && !phone ? (
					<p className="mt-6 text-sm text-amber-700">
						請在 site.config.ts 的 contact 區塊填入 email 或 lineUrl。
					</p>
				) : null}
			</div>
		</section>
	);
}
