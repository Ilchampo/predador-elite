<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper/SectionWrapper.svelte';

	import assets from '$lib/constants/assets';
</script>

<SectionWrapper title="MMA" imageUrl={assets.PROGRAM_MMA} sectionId="blog-mma">
	<article class="mx-auto max-w-4xl px-4 py-8">
		<header class="mb-12 text-center">
			<h1 class="mb-4 text-4xl font-bold">Artes Marciales Mixtas (MMA)</h1>
			<p class="text-secondary-500 mb-8 text-xl font-semibold">
				La evolución definitiva del combate deportivo
			</p>
		</header>

		<figure class="mb-12 overflow-hidden rounded-lg">
			<img src={assets.PROGRAM_MMA} alt="MMA Training" class="h-[400px] w-full object-cover" />
		</figure>

		<section class="prose prose-invert max-w-none">
			<h2 class="mb-6 text-3xl font-bold">¿Qué es el MMA?</h2>
			<p class="mb-8">
				Las Artes Marciales Mixtas (MMA) combinan las mejores técnicas de distintas disciplinas como
				BJJ, Kickboxing, Muay Thai, Boxeo y Lucha Olímpica. Es un sistema completo que permite
				pelear de pie y en el suelo, adaptándose a cualquier situación de combate.
			</p>

			<h2 class="mb-6 text-3xl font-bold">Beneficios del MMA</h2>
			<ul class="mb-8 list-disc pl-6">
				<li>
					<strong>Desarrollo completo:</strong> Aprende a pelear de pie y en el suelo con técnicas efectivas.
				</li>
				<li>
					<strong>Condición física al máximo nivel:</strong> Trabaja fuerza, resistencia, velocidad y
					agilidad en un solo entrenamiento.
				</li>
				<li>
					<strong>Estrategia y adaptabilidad:</strong> Aprende a pensar y reaccionar bajo presión.
				</li>
				<li>
					<strong>Defensa personal realista:</strong> Prepárate para cualquier escenario de combate.
				</li>
			</ul>

			<h2 class="mb-6 text-3xl font-bold">¿Para quién es el MMA?</h2>
			<ul class="mb-8 list-disc pl-6">
				<li>Para los que buscan un sistema de combate completo.</li>
				<li>Para competidores que quieren llevar sus habilidades al siguiente nivel.</li>
				<li>Para quienes desean una condición física de alto rendimiento.</li>
			</ul>

			<h2 class="mb-6 text-3xl font-bold">¿Qué aprenderás en nuestras clases?</h2>
			<div class="bg-primary-500/30 mb-8 rounded-lg p-6">
				<ul class="list-disc pl-6">
					<li>Golpeo (striking)</li>
					<li>Derribos y proyecciones</li>
					<li>Grappling y control en suelo</li>
					<li>Sumisiones</li>
					<li>Defensa y contraataques</li>
					<li>Estrategias de combate</li>
				</ul>
			</div>

			<h2 class="mb-6 text-3xl font-bold">Disciplinas que integra el MMA</h2>
			<div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<h3 class="mb-2 text-xl font-semibold">Combate de Pie</h3>
					<ul class="list-disc pl-6">
						<li>Boxeo</li>
						<li>Kickboxing</li>
						<li>Muay Thai</li>
					</ul>
				</div>
				<div>
					<h3 class="mb-2 text-xl font-semibold">Combate en Suelo</h3>
					<ul class="list-disc pl-6">
						<li>Brazilian Jiu-Jitsu</li>
						<li>Lucha Olímpica</li>
						<li>Judo</li>
					</ul>
				</div>
			</div>
		</section>
	</article>
</SectionWrapper>
