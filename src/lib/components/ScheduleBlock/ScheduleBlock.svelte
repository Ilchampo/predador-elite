<script lang="ts">
	import { scheduleBlocks } from '$lib/constants/schedule';

	const programColors = {
		Kickboxing: 'bg-primary-500 border-l-4 border-l-primary-900 hover:bg-primary-400',
		'Brazilian Jiu-Jitsu':
			'bg-secondary-500 border-l-4 border-l-secondary-900 hover:bg-secondary-400',
		'Mixed Martial Arts': 'bg-slate-600 border-l-4 border-l-slate-900 hover:bg-slate-500'
	};
</script>

<div class="container mx-auto px-6 py-8">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-5">
		{#each scheduleBlocks as block (block.day)}
			<div class="flex flex-col">
				<h3 class="relative mb-6 text-center text-xl font-bold tracking-wide">
					{block.day}
					<div
						class="bg-secondary-500 absolute -bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full"
					></div>
				</h3>
				<div class="space-y-3">
					{#each block.programs as program (program.program)}
						<div
							class={`rounded-lg p-4 text-white shadow-sm transition-all duration-200 ${programColors[program.program]}`}
						>
							<p class="font-semibold tracking-wide">{program.program}</p>
							<p class="mt-1 text-sm text-gray-300">{program.time}</p>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
