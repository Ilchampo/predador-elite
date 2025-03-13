<script lang="ts">
	import '../app.css';

	import Footer from '$lib/components/Footer/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-black">
	{@render children()}
	<Footer />
</div>
