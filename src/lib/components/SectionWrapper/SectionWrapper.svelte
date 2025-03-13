<script lang="ts">
	import Navbar from '$lib/components/Hero/Navbar.svelte';
	import PageHeader from '$lib/components/PageHeader/PageHeader.svelte';

	let { children, title, imageUrl, sectionId } = $props();
</script>

<div>
	<Navbar />
	<PageHeader {title} {imageUrl} />

	<main class="text-primary-900 bg-white">
		<section id={sectionId} class="container mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
			{@render children()}
		</section>
	</main>
</div>
