import { BlogPostCard } from "@/components/blog-post-card";
import { site } from "@/site.config";

export default function BlogPage() {
	return (
		<div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
			<header className="text-center">
				<h1 className="text-4xl font-semibold tracking-tight">我的部落格</h1>

				<p className="mx-auto mt-3 max-w-2xl text-lg text-[var(--muted)]">
					閱讀我們的最新消息與教學心得
				</p>
			</header>

			<ul className="mt-12 space-y-6">
				{site.blog.map((post) => (
					<li key={post.slug}>
						<BlogPostCard post={post} />
					</li>
				))}
			</ul>
		</div>
	);
}
