<script lang="ts">
	import type { ICommunityPost } from '$lib/interfaces/community.interface';

	export let post: ICommunityPost;
</script>

<a
	href={post.linkToPost}
	target="_blank"
	rel="noopener noreferrer"
	class="block transition-transform duration-200 hover:-translate-y-1"
>
	<article
		class="bg-primary-500 flex h-[400px] flex-col overflow-hidden rounded-xl text-white shadow-md transition-shadow duration-200 hover:shadow-lg"
	>
		<div class="aspect-square overflow-hidden">
			<img
				src={post.imageUrl}
				alt="Community post"
				loading="lazy"
				class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
			/>
		</div>
		<div class="flex flex-1 flex-col p-4">
			<p class="mb-2 line-clamp-2 text-sm leading-relaxed font-light">
				{post.description}
			</p>
			<time class="mt-auto text-xs text-white/70">
				{post.date}
			</time>
		</div>
	</article>
</a>
