import { site } from "@/site.config";

export function FaqSection() {
	return (
		<section id="faq" className="scroll-mt-20 border-t border-[var(--border)]">
			<div className="mx-auto max-w-4xl px-4 py-16">
				<h2 className="text-2xl font-semibold tracking-tight">Q&A</h2>

				<p className="mt-3 max-w-lg text-[var(--muted)]">
					把客戶最常問的問題先回答好，讓他們更快覺得你「懂他」。
				</p>

				<div className="mt-8 space-y-4">
					{site.faq.map((item) => (
						<details
							key={item.question}
							className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
						>
							<summary className="cursor-pointer list-none text-base font-medium">
								<span>{item.question}</span>
							</summary>

							<p className="mt-3 whitespace-pre-wrap text-[var(--muted)] leading-relaxed">
								{item.answer}
							</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}

