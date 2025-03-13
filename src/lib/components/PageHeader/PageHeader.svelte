<script lang="ts">
	export let title: string;
	export let imageUrl: string;
</script>

<div class="bg-primary-800 relative h-[150px] w-full overflow-hidden md:h-[300px]">
	<div class="absolute inset-0">
		<div
			class="bg-secondary-400 absolute top-0 left-0 h-[800px] w-[600px] origin-top-left -rotate-45 transform md:left-[380px]"
		></div>
		<div
			class="bg-secondary-600 absolute top-0 left-[20px] h-[800px] w-[600px] origin-top-left -rotate-45 transform md:left-[400px]"
		></div>
	</div>

	<div class="clip-diagonal absolute top-0 left-0 hidden h-full w-[600px] md:block">
		<div class="relative h-full w-full">
			<img src={imageUrl} alt={title} class="h-full w-full object-cover opacity-95" />
			<div class="bg-secondary-500/20 absolute inset-0"></div>
		</div>
	</div>

	<div class="relative container mx-auto flex h-full items-center px-6">
		<div class="flex flex-1 justify-center md:ml-[400px]">
			<h1 class="text-center text-4xl font-bold text-white md:text-5xl">
				{title}
			</h1>
		</div>
	</div>
</div>

<style>
	.clip-diagonal {
		clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
	}
</style>
