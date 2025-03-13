<script lang="ts">
	import { contact } from '$lib/constants/contact';
</script>

<div class="flex w-full flex-col">
	<div class="bg-primary-800">
		<div class="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
			<div class="flex flex-col gap-6">
				<h2 class="text-primary-100 text-2xl font-bold uppercase">Ubicación</h2>
				<a href={contact.map} target="_blank" class="text-secondary-500 text-xl font-semibold"
					>{contact.address}</a
				>
				<ul class="text-secondary-500 flex flex-col gap-4 font-semibold">
					<li>
						<a href="/programs" class="hover:text-secondary-400"
							><span class="text-primary-100 mr-2">1.</span>Programas</a
						>
					</li>
					<li>
						<a href="/community" class="hover:text-secondary-400"
							><span class="text-primary-100 mr-2">2.</span>Comunidad</a
						>
					</li>
					<li>
						<a href="/about-us" class="hover:text-secondary-400"
							><span class="text-primary-100 mr-2">3.</span>Sobre Nosotros</a
						>
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-6">
				<h2 class="text-primary-100 text-2xl font-bold uppercase">Horarios</h2>
				<ul class="flex flex-col gap-2">
					{#each Object.entries(contact.schedules) as [day, schedule] (day)}
						<div class="text-primary-100 flex">
							<span class="mr-2 font-semibold">{day}</span>
							<span class="font-extralight">{schedule}</span>
						</div>
					{/each}
				</ul>
				<span class="text-primary-100 text-sm font-extralight">
					**Los horarios pueden variar dependiendo de la disponibilidad de los profesores.
				</span>
			</div>
			<div class="flex flex-col gap-6">
				<h2 class="text-primary-100 text-2xl font-bold uppercase">Contacto</h2>
				<span class="text-primary-100"
					>Escribenos a nuestro correo <a
						href="mailto:{contact.email}"
						class="text-secondary-500 hover:text-secondary-400 font-semibold">{contact.email}</a
					>
					o llámanos al
					<a
						href="tel:{contact.phone.replace(/\s+/g, '')}"
						class="text-secondary-500 hover:text-secondary-400 font-semibold">{contact.phone}</a
					></span
				>
				<div class="flex items-center gap-4">
					<a
						href={contact.instagram}
						target="_blank"
						class="text-secondary-500 hover:text-secondary-400"
						aria-label="Instagram"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
							/>
						</svg>
					</a>
					<a
						href={contact.facebook}
						target="_blank"
						class="text-secondary-500 hover:text-secondary-400"
						aria-label="Facebook"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
							/>
						</svg>
					</a>
					<a
						href={`https://wa.me/${contact.phone.replace(/\s+/g, '')}`}
						target="_blank"
						class="text-secondary-500 hover:text-secondary-400"
						aria-label="WhatsApp"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-primary-600">
		<div
			class="text-primary-300 container mx-auto flex flex-col items-center justify-center gap-2 px-4 py-4 md:flex-row"
		>
			<span class="font-bold">@{new Date().getFullYear()} Predador Elite MMA</span>
			<span class="hidden md:flex">|</span>
			<span class="font-extralight">Web designed by Pablo Beltran</span>
		</div>
	</div>
</div>
