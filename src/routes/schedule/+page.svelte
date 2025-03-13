<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper/SectionWrapper.svelte';
	import ScheduleBlock from '$lib/components/ScheduleBlock/ScheduleBlock.svelte';

	import assets from '$lib/constants/assets';
</script>

<SectionWrapper title="Horarios" imageUrl={assets.PAGE_SCHEDULE} sectionId="schedule">
	<div class="mb-12 flex flex-col items-center gap-4">
		<h2 class="relative pb-2 text-center text-3xl font-bold text-gray-900 md:text-4xl">
			Conoce nuestros horarios
			<span
				class="bg-secondary-500 absolute bottom-0 left-1/2 h-1 w-[80%] -translate-x-1/2 rounded-full"
			></span>
		</h2>
		<p class="text-extralight text-center text-gray-600 md:text-lg">
			En Predador Elite, ofrecemos entrenamientos de Jiu-Jitsu Brasileño (BJJ), Kickboxing y MMA
			diseñados para todos los niveles, desde principiantes hasta competidores avanzados. Consulta
			los horarios de nuestras clases.
		</p>
	</div>
	<ScheduleBlock />
</SectionWrapper>
