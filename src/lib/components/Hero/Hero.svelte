<script lang="ts">
	import Navbar from '$lib/components/Hero/Navbar.svelte';
	import assets from '$lib/constants/assets';
</script>

<header class="relative h-screen">
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('{assets.PREDADOR_HERO}')"
	>
		<div class="bg-primary-500 absolute inset-0 opacity-50"></div>
	</div>

	<Navbar />

	<div class="relative z-10 flex h-full items-center">
		<div class="container mx-auto px-6">
			<h2 class="mb-4 text-5xl font-bold md:text-7xl">
				<span class="text-secondary-500">Transforma</span> tu vida a través de las artes marciales.
			</h2>
			<p class="mb-8 text-xl">
				Entrena con los mejores profesores de la región y se tu mejor versión.
			</p>
			<a
				href="#contact"
				class="bg-secondary-600 hover:bg-secondary-700 rounded-lg px-8 py-4 text-lg font-semibold text-white transition"
				>Comienza tu viaje</a
			>
		</div>
	</div>
</header>
