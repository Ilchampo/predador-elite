<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper/SectionWrapper.svelte';
	import CommunityPost from '$lib/components/Community/CommunityPost.svelte';

	import { communityPosts } from '$lib/constants/community';

	import assets from '$lib/constants/assets';
</script>

<SectionWrapper title="Comunidad" imageUrl={assets.PAGE_COMMUNITY} sectionId="community">
	<div class="mb-12 flex flex-col items-center gap-4">
		<h2 class="relative pb-2 text-center text-3xl font-bold text-gray-900 md:text-4xl">
			Se parte de nuestra comunidad
			<span
				class="bg-secondary-500 absolute bottom-0 left-1/2 h-1 w-[80%] -translate-x-1/2 rounded-full"
			></span>
		</h2>
		<p class="text-extralight text-center text-gray-600 md:text-lg">
			En Predador Elite, nos esforzamos por crear un ambiente de apoyo y motivación para todos
			aquellos que buscan alcanzar sus objetivos.
		</p>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each communityPosts as post (post.linkToPost)}
				<CommunityPost {post} />
			{/each}
		</div>
	</div>
</SectionWrapper>
