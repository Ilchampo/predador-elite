<script lang="ts">
	import ProgramCard from '$lib/components/Programs/ProgramCard.svelte';

	import { programs } from '$lib/constants/programs';
</script>

<section id="programs" class="bg-primary-900/80 relative py-20">
	<div
		class="absolute inset-0 z-0 opacity-50"
		style="background-image: url('data:image/svg+xml,%3Csvg width=\'300\' height=\'300\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23374151\' stroke-width=\'0.5\' stroke-opacity=\'0.3\' transform=\'rotate(0)\'%3E%3Cpath d=\'M0 0h60v60H0zM30 0v60M0 30h60\'/%3E%3C/g%3E%3C/svg%3E'); background-repeat: repeat;"
	>
		<div
			class="from-primary-700 absolute inset-0 bg-gradient-to-br via-transparent to-transparent"
		></div>
	</div>

	<div class="relative container mx-auto px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold">Nuestros Programas</h2>
			<p class="mx-auto max-w-2xl text-gray-300">
				Elige entre nuestros programas de entrenamiento especializados, cada uno diseñado para
				ayudarte a alcanzar tu máximo potencial como artista marcial.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			{#each programs as program (program.name)}
				<ProgramCard {program} lightTheme={false} />
			{/each}
		</div>
	</div>
</section>
