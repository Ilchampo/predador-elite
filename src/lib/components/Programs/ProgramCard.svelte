<script lang="ts">
	import type { Program } from '$lib/interfaces/program.interface';

	export let lightTheme: boolean;
	export let program: Program;
</script>

<div
	class="group relative overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:-translate-y-2 {lightTheme
		? 'bg-primary-500'
		: 'bg-primary-500/50 bg-opacity-50'}"
>
	<div class="flex flex-col">
		<div class="h-64 w-full overflow-hidden">
			<img
				src={program.image}
				alt="{program.name} Training"
				class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
		</div>
		<div class="p-8">
			<div class="mb-4 flex items-center text-white">
				<h3 class="text-2xl font-bold">{program.name}</h3>
			</div>
			<p class="mb-4 text-gray-200">
				{program.description}
			</p>
			<div class="flex items-center justify-between">
				<a
					href={program.link}
					class="text-secondary-500 group-hover:text-secondary-500 z-10 inline-flex items-center font-medium transition"
					>Saber más <span class="ml-2">→</span></a
				>
				<span
					class="bg-opacity-20 bg-secondary-900 text-secondary-100 rounded-full px-3 py-1 text-sm"
					>+{program.age} años</span
				>
			</div>
		</div>
	</div>
</div>
