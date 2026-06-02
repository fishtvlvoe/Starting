import Link from "next/link";

import { BlogPostCard } from "@/components/blog-post-card";
import { site } from "@/site.config";

export function BlogPreviewSection() {
	const posts = site.blog.slice(0, 2);

	return (
		<section id="blog" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--accent-soft)]">
			<div className="mx-auto max-w-4xl px-4 py-16">
				<h2 className="text-2xl font-semibold tracking-tight">部落格</h2>

				<p className="mt-3 max-w-lg text-[var(--muted)]">
					閱讀我們的最新消息與教學心得。內容都在 <code>site.config.ts</code> 的{" "}
					<code>blog</code>，改完就會同步到列表與文章頁。
				</p>

				<ul className="mt-8 grid gap-4 md:grid-cols-2">
					{posts.map((post) => (
						<li key={post.slug}>
							<BlogPostCard post={post} />
						</li>
					))}
				</ul>

				<div className="mt-8 text-center">
					<Link
						href="/blog"
						className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
					>
						查看全部文章
					</Link>
				</div>
			</div>
		</section>
	);
}
