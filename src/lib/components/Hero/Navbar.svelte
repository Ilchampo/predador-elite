<script lang="ts">
	import { page } from '$app/state';

	import assets from '$lib/constants/assets';

	let isMenuOpen = false;
</script>

<nav class="relative z-[100] container mx-auto px-6 py-4 shadow-2xl">
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-2 text-white">
			<img src={assets.PREDADOR_LOGO} alt="Predador Elite Logo" class="h-10 w-10" />
			<span class="text-2xl font-bold"><span class="text-secondary-500">PREDADOR</span> ELITE</span>
		</div>

		<div class="hidden space-x-8 text-white md:flex">
			<a href="/" class="hover:text-secondary-500 uppercase transition">Inicio</a>
			<a href="/programs" class="hover:text-secondary-500 uppercase transition">Programas</a>
			<a href="/schedule" class="hover:text-secondary-500 uppercase transition">Horarios</a>
			<a href="/community" class="hover:text-secondary-500 uppercase transition">Comunidad</a>
			<a href="/about-us" class="hover:text-secondary-500 uppercase transition">Sobre Nosotros</a>
		</div>

		<button
			class="text-white md:hidden"
			on:click={() => (isMenuOpen = !isMenuOpen)}
			aria-label="Menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
	</div>

	{#if isMenuOpen}
		<div
			class="from-primary-500/95 to-primary-500/90 absolute top-full right-0 left-0 z-[100] rounded-b-2xl border-t border-gray-800 bg-gradient-to-b text-white backdrop-blur-sm md:hidden"
		>
			<div class="container mx-auto px-6 py-6">
				<div class="flex flex-col space-y-2">
					<a
						href="/"
						class="hover:bg-secondary-500/10 rounded-lg p-4 transition-all duration-200 ease-in-out {page
							.url.pathname === '/'
							? 'bg-secondary-500 text-white'
							: ''}"
					>
						<div class="flex items-center space-x-4">
							<span class="text-lg font-medium uppercase">Inicio</span>
						</div>
					</a>
					<a
						href="/programs"
						class="hover:bg-secondary-500/10 rounded-lg p-4 transition-all duration-200 ease-in-out {page
							.url.pathname === '/programs'
							? 'bg-secondary-500 text-white'
							: ''}"
					>
						<div class="flex items-center space-x-4">
							<span class="text-lg font-medium uppercase">Programas</span>
						</div>
					</a>
					<a
						href="/schedule"
						class="hover:bg-secondary-500/10 rounded-lg p-4 transition-all duration-200 ease-in-out {page
							.url.pathname === '/schedule'
							? 'bg-secondary-500 text-white'
							: ''}"
					>
						<div class="flex items-center space-x-4">
							<span class="text-lg font-medium uppercase">Horarios</span>
						</div>
					</a>
					<a
						href="/community"
						class="hover:bg-secondary-500/10 rounded-lg p-4 transition-all duration-200 ease-in-out {page
							.url.pathname === '/community'
							? 'bg-secondary-500 text-white'
							: ''}"
					>
						<div class="flex items-center space-x-4">
							<span class="text-lg font-medium uppercase">Comunidad</span>
						</div>
					</a>
					<a
						href="/about-us"
						class="hover:bg-secondary-500/10 rounded-lg p-4 transition-all duration-200 ease-in-out {page
							.url.pathname === '/about-us'
							? 'bg-secondary-500 text-white'
							: ''}"
					>
						<div class="flex items-center space-x-4">
							<span class="text-lg font-medium uppercase">Sobre Nosotros</span>
						</div>
					</a>
				</div>
			</div>
		</div>

		<!-- Overlay -->
		<div
			class="fixed inset-0 z-[90] bg-black/20 backdrop-blur-sm md:hidden"
			on:click={() => (isMenuOpen = false)}
			style=""
			aria-hidden="true"
		></div>
	{/if}
</nav>
