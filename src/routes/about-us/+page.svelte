<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper/SectionWrapper.svelte';
	import assets from '$lib/constants/assets';
</script>

<SectionWrapper title="Sobre nosotros" sectionId="about-us" imageUrl={assets.PAGE_ABOUT_US}>
	<div class="mb-12 flex flex-col items-center gap-4">
		<h2 class="relative pb-2 text-center text-3xl font-bold text-gray-900 md:text-4xl">
			Descubre quiénes somos
			<span
				class="bg-secondary-500 absolute bottom-0 left-1/2 h-1 w-[80%] -translate-x-1/2 rounded-full"
			></span>
		</h2>

		<p class="text-extralight text-center text-gray-600 md:text-lg">
			Te ayudamos a alcanzar tus objetivos, desde principiantes hasta competidores avanzados con los
			mejores profesionales.
		</p>

		<div class="mt-8 w-full max-w-4xl">
			<article class="space-y-12">
				<div class="grid gap-8 md:grid-cols-2">
					<img
						src={assets.BLOG_ABOUT_US}
						alt="Hernán Almeida"
						class="h-[400px] w-full transform rounded-lg object-cover shadow-xl transition-transform duration-300 hover:scale-105"
					/>
					<div
						class="bg-primary-900/90 flex h-[400px] flex-col justify-center rounded-lg p-6 backdrop-blur-sm"
					>
						<h3 class="text-secondary-500 mb-4 text-2xl font-bold">Trayectoria y Experiencia</h3>
						<p class="leading-relaxed text-gray-300">
							Hernán Almeida es un artista marcial ecuatoriano con más de 26 años de experiencia en
							diversas disciplinas y 17 años dedicados a la enseñanza. Es reconocido como uno de los
							mejores exponentes del Brazilian Jiu-Jitsu en Ecuador, además de ser cinturón negro en
							Taekwondo, Kickboxing y Jiu-Jitsu.
						</p>
					</div>
				</div>

				<div class="from-primary-900/80 to-primary-800/80 rounded-lg bg-gradient-to-r p-6">
					<h3 class="text-secondary-500 mb-4 text-center text-2xl font-bold">Logros Destacados</h3>
					<div class="grid gap-6 md:grid-cols-2">
						<div class="rounded-lg bg-black/40 p-4">
							<h4 class="text-secondary-400 mb-2 text-xl font-semibold">Como Competidor</h4>
							<p class="leading-relaxed text-gray-300">
								A lo largo de su carrera, ha demostrado su excelencia competitiva, siendo campeón en
								múltiples torneos nacionales de Kickboxing y logrando importantes títulos en
								competiciones nacionales e internacionales de Jiu-Jitsu. Su experiencia también
								incluye combates en MMA, consolidándolo como un instructor completo y un referente
								en el mundo de las artes marciales.
							</p>
						</div>
						<div class="rounded-lg bg-black/40 p-4">
							<h4 class="text-secondary-400 mb-2 text-xl font-semibold">Como Instructor</h4>
							<p class="leading-relaxed text-gray-300">
								Bajo su enseñanza, sus alumnos han alcanzado importantes logros en competiciones
								nacionales e internacionales. En Kickboxing, han conquistado medallas de oro en K1 y
								plata en Light-Kick. En Brazilian Jiu-Jitsu, han logrado oro, plata y bronce en
								prestigiosos torneos como el Circuito Ecuatoriano de BJJ, Capital Jits y otras
								competencias a nivel nacional.
							</p>
						</div>
					</div>
				</div>

				<div class="relative">
					<img
						src={assets.BLOG_ACCOMPLISHMENTS}
						alt="Hernán Almeida en MMA"
						class="h-[300px] w-full transform rounded-lg object-cover object-[center_20%] shadow-xl transition-transform duration-300 hover:scale-105"
					/>
					<div
						class="absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 to-transparent"
					></div>
					<p
						class="absolute right-4 bottom-4 left-4 text-center text-lg font-semibold text-gray-200"
					>
						Estos resultados reflejan la calidad de su entrenamiento y su compromiso con la
						formación de atletas de alto rendimiento.
					</p>
				</div>
			</article>
		</div>
	</div>
</SectionWrapper>
