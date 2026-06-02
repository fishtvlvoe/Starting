import Image from "next/image";

import { site } from "@/site.config";

export function ProductsSection() {
	return (
		<section id="products" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--accent-soft)]">
			<div className="mx-auto max-w-5xl px-4 py-16">
				<h2 className="text-2xl font-semibold tracking-tight">產品展示</h2>

				<p className="mt-3 max-w-2xl text-[var(--muted)]">
					示範用產品卡片（不含價格）。學員只要在 <code>site.config.ts</code> 的{" "}
					<code>products</code> 改名稱、說明與圖片網址即可。
				</p>

				<ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{site.products.map((product) => (
						<li
							key={product.name}
							className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
						>
							<div className="relative aspect-[4/3] w-full bg-[var(--accent-soft)]">
								<Image
									src={product.imageUrl}
									alt={product.alt}
									fill
									className="object-cover"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
								/>

								{product.badge ? (
									<span className="absolute top-3 left-3 rounded-full bg-[var(--foreground)] px-2.5 py-0.5 text-xs font-medium text-[var(--background)]">
										{product.badge}
									</span>
								) : null}
							</div>

							<div className="p-4">
								<h3 className="font-medium">{product.name}</h3>

								<p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
									{product.description}
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
