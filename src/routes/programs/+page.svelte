<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper/SectionWrapper.svelte';
	import ProgramCard from '$lib/components/Programs/ProgramCard.svelte';

	import { programs } from '$lib/constants/programs';

	import assets from '$lib/constants/assets';
</script>

<SectionWrapper title="Programas" imageUrl={assets.PAGE_PROGRAMS} sectionId="programs">
	<div class="mb-12 flex flex-col items-center gap-4">
		<h2 class="relative pb-2 text-center text-3xl font-bold text-gray-900 md:text-4xl">
			Conoce nuestros programas
			<span
				class="bg-secondary-500 absolute bottom-0 left-1/2 h-1 w-[80%] -translate-x-1/2 rounded-full"
			></span>
		</h2>
		<p class="text-extralight text-center text-gray-600 md:text-lg">
			En Predador Elite, ofrecemos diferentes programas de entrenamiento para todos los niveles,
			desde principiantes hasta competidores avanzados. Revisa los programas que tenemos para ti.
		</p>
		<div class="grid gap-8 md:grid-cols-3">
			{#each programs as program (program.name)}
				<ProgramCard {program} lightTheme={true} />
			{/each}
		</div>
	</div>
</SectionWrapper>
