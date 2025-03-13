<script lang="ts">
	import assets from '$lib/constants/assets';

	import { contact } from '$lib/constants/contact';
</script>

<section class="relative overflow-hidden bg-white py-20">
	<div
		class="absolute inset-0 opacity-20"
		style="background-image: url({assets.PREDADOR_LOGO}); background-repeat: no-repeat; background-position: center; background-size: contain;"
	></div>
	<div class="relative container mx-auto px-6 text-center">
		<h2 class="mb-8 text-4xl font-bold text-gray-900">¡Inscríbete a una clase de prueba gratis!</h2>
		<p class="mb-8 text-xl text-gray-700">
			No te pierdas la oportunidad de conocer nuestro programa y lo que podemos ofrecerte.
		</p>
		<a
			href={`https://wa.me/${contact.phone.replace(/\s+/g, '')}`}
			target="_blank"
			rel="noopener noreferrer"
			class="rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
			>¡Inscríbete!</a
		>
	</div>
</section>
