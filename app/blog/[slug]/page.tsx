import Link from "next/link";
import { notFound } from "next/navigation";

import { site } from "@/site.config";

export const dynamic = "force-static";

export function generateStaticParams() {
	return site.blog.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = site.blog.find((p) => p.slug === slug);

	if (!post) {
		notFound();
	}

	const paragraphs = post.content.split("\n\n").filter(Boolean);

	return (
		<article className="mx-auto max-w-3xl px-4 py-12">
			<Link
				href="/blog"
				className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
			>
				← 返回部落格
			</Link>

			{post.tags && post.tags.length > 0 ? (
				<div className="mt-6 flex flex-wrap gap-2">
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

			<header className="mt-4">
				<h1 className="text-3xl font-semibold tracking-tight text-balance">{post.title}</h1>

				<p className="mt-3 text-lg text-[var(--muted)] text-pretty">{post.excerpt}</p>

				<div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--muted)]">
					{post.author ? <span>{post.author}</span> : null}
					{post.author && post.date ? <span aria-hidden>·</span> : null}
					{post.date ? (
						<time dateTime={post.date}>{formatBlogDate(post.date)}</time>
					) : null}
				</div>
			</header>

			<div className="mt-10 space-y-5 text-[var(--foreground)] leading-relaxed">
				{paragraphs.map((paragraph, idx) => (
					<p key={`${post.slug}-${idx}`} className="whitespace-pre-wrap text-pretty">
						{paragraph}
					</p>
				))}
			</div>
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
