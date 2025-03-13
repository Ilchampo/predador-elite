<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper/SectionWrapper.svelte';

	import assets from '$lib/constants/assets';
</script>

<SectionWrapper title="Kickboxing" imageUrl={assets.PROGRAM_KICKBOXING} sectionId="blog-kickboxing">
	<article class="mx-auto max-w-4xl px-4 py-8">
		<header class="mb-12 text-center">
			<h1 class="mb-4 text-4xl font-bold">Kickboxing</h1>
			<p class="text-secondary-500 mb-8 text-xl font-semibold">
				Arte marcial explosivo y efectivo para cuerpo y mente
			</p>
		</header>

		<figure class="mb-12 overflow-hidden rounded-lg">
			<img
				src={assets.BLOG_KICKBOXING}
				alt="Entrenamiento de Kickboxing"
				class="h-[400px] w-full object-cover"
			/>
		</figure>

		<section class="prose prose-invert max-w-none">
			<h2 class="mb-6 text-3xl font-bold">¿Qué es el Kickboxing?</h2>
			<p class="mb-8">
				El Kickboxing es un deporte de combate que combina puñetazos, patadas, rodillazos y
				bloqueos. Es una disciplina explosiva que mejora la resistencia, la fuerza y la
				coordinación.
			</p>

			<h2 class="mb-6 text-3xl font-bold">Beneficios del Kickboxing</h2>
			<ul class="mb-8 list-disc pl-6">
				<li>
					<strong>Defensa personal efectiva:</strong> Aprende a defenderte con golpes rápidos y potentes.
				</li>
				<li>
					<strong>Condición física extrema:</strong> Mejora tu resistencia, fuerza y velocidad en cada
					entrenamiento.
				</li>
				<li>
					<strong>Liberación de estrés:</strong> Golpear el saco o los pads es una excelente forma de
					liberar tensiones.
				</li>
				<li>
					<strong>Disciplina y confianza:</strong> Gana seguridad en ti mismo a medida que perfeccionas
					tu técnica.
				</li>
			</ul>

			<h2 class="mb-6 text-3xl font-bold">¿Para quién es el Kickboxing?</h2>
			<ul class="mb-8 list-disc pl-6">
				<li>Para quienes buscan mejorar su capacidad física y mental.</li>
				<li>Para aquellos interesados en aprender un sistema de defensa personal.</li>
				<li>Para los que desean competir en deportes de contacto.</li>
			</ul>

			<h2 class="mb-6 text-3xl font-bold">¿Qué aprenderás en nuestras clases?</h2>
			<div class="bg-primary-500/30 mb-8 rounded-lg p-6">
				<ul class="list-disc pl-6">
					<li>Combinaciones de golpes</li>
					<li>Técnicas defensivas</li>
					<li>Trabajo de piernas</li>
					<li>Estrategias de combate</li>
				</ul>
			</div>
		</section>
	</article>
</SectionWrapper>
