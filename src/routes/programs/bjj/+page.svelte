<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper/SectionWrapper.svelte';

	import assets from '$lib/constants/assets';
</script>

<SectionWrapper title="Brazilian Jiu-Jitsu" imageUrl={assets.PROGRAM_BJJ} sectionId="blog-bjj">
	<article class="mx-auto max-w-4xl px-4 py-8">
		<header class="mb-12 text-center">
			<h1 class="mb-4 text-4xl font-bold">Brazilian Jiu-Jitsu (BJJ)</h1>
			<p class="text-secondary-500 mb-8 text-xl font-semibold">
				El arte suave que revolucionó las artes marciales
			</p>
		</header>

		<figure class="mb-12 overflow-hidden rounded-lg">
			<img
				src={assets.BLOG_BJJ}
				alt="Brazilian Jiu-Jitsu Training"
				class="h-[400px] w-full object-cover"
			/>
		</figure>

		<section class="prose prose-invert max-w-none">
			<h2 class="mb-6 text-3xl font-bold">¿Qué es el Brazilian Jiu-Jitsu?</h2>
			<p class="mb-8">
				El Brazilian Jiu-Jitsu es un arte marcial y deporte de combate que se centra en la lucha
				cuerpo a cuerpo y el combate en el suelo. Desarrollado por la familia Gracie en Brasil, el
				BJJ enfatiza la técnica sobre la fuerza física, permitiendo que una persona más pequeña se
				defienda contra un oponente más grande.
			</p>

			<h2 class="mb-6 text-3xl font-bold">Beneficios del BJJ</h2>
			<ul class="mb-8 list-disc pl-6">
				<li>Mejora la condición física y la flexibilidad</li>
				<li>Desarrolla la disciplina mental y la confianza</li>
				<li>Enseña defensa personal efectiva</li>
				<li>Promueve el desarrollo estratégico y el pensamiento táctico</li>
				<li>Fomenta el respeto y la humildad</li>
			</ul>

			<h2 class="mb-6 text-3xl font-bold">Sistema de Graduación</h2>
			<p class="mb-8">
				El BJJ utiliza un sistema de cinturones que representa el nivel de habilidad del
				practicante:
			</p>
			<div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<h3 class="mb-2 text-xl font-semibold">Cinturones Adultos</h3>
					<ul class="list-disc pl-6">
						<li>Blanco - Principiante</li>
						<li>Azul - Fundamentos</li>
						<li>Púrpura - Intermedio</li>
						<li>Marrón - Avanzado</li>
						<li>Negro - Experto</li>
					</ul>
				</div>
				<div>
					<h3 class="mb-2 text-xl font-semibold">Tiempo Estimado</h3>
					<p>
						El tiempo promedio para alcanzar el cinturón negro es de 8 a 12 años de entrenamiento
						constante y dedicado.
					</p>
				</div>
			</div>

			<h2 class="mb-6 text-3xl font-bold">¿Por Qué Practicar BJJ?</h2>
			<p class="mb-8">
				El BJJ no es solo un arte marcial, es un camino de desarrollo personal que combina ejercicio
				físico, desarrollo mental y crecimiento espiritual. Es una disciplina que te enseña a
				superar desafíos, desarrollar resiliencia y formar parte de una comunidad global de
				practicantes.
			</p>
		</section>
	</article>
</SectionWrapper>
