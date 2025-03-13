<script lang="ts">
	import Hero from '$lib/components/Hero/Hero.svelte';
	import Programs from '$lib/components/Programs/Programs.svelte';
	import TrialAction from '$lib/components/TrialAction/TrialAction.svelte';
</script>

<svelte:head>
	<title>Predador Elite | Hernan Almeida</title>
</svelte:head>

<main class="bg-gray-900 text-white">
	<Hero />
	<Programs />
	<TrialAction />
</main>
