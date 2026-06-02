import Link from "next/link";

import type { BlogPost } from "@/site.config";

type BlogPostCardProps = {
	post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
	return (
		<article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:border-[var(--foreground)]/30">
			{post.tags && post.tags.length > 0 ? (
				<div className="flex flex-wrap gap-2">
					{post.tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--muted)]"
						>
							#{tag}
						</span>
					))}
				</div>
			) : null}

			<Link href={`/blog/${post.slug}`} className="mt-4 block group">
				<h2 className="text-lg font-semibold tracking-tight group-hover:underline">
					{post.title}
				</h2>

				<p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{post.excerpt}</p>
			</Link>

			<footer className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--muted)]">
				{post.author ? <span>{post.author}</span> : null}
				{post.author && post.date ? <span aria-hidden>·</span> : null}
				{post.date ? <time dateTime={post.date}>{formatBlogDate(post.date)}</time> : null}
			</footer>
		</article>
	);
}

function formatBlogDate(isoDate: string) {
	const date = new Date(isoDate);

	if (Number.isNaN(date.getTime())) {
		return isoDate;
	}

	return date.toLocaleDateString("zh-TW", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
