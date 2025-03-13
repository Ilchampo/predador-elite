import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import assets from '$lib/constants/assets';

import Hero from './Hero.svelte';

describe('Hero Component', () => {
	it('renders the main heading and subheading', () => {
		render(Hero);

		expect(screen.getByText('Transforma')).toBeDefined();
		expect(screen.getByText('tu vida a través de las artes marciales.')).toBeDefined();

		expect(
			screen.getByText('Entrena con los mejores profesores de la región y se tu mejor versión.')
		).toBeDefined();
	});

	it('renders the call-to-action button', () => {
		render(Hero);

		const ctaButton = screen.getByText('Comienza tu viaje');
		expect(ctaButton).toBeDefined();
		expect(ctaButton.closest('a')?.getAttribute('href')).toBe('#contact');
	});

	it('includes the Navbar component', () => {
		const { container } = render(Hero);
		expect(container.querySelector('nav')).toBeDefined();
	});

	it('has the correct background image', () => {
		const { container } = render(Hero);
		const bgElement = container.querySelector('.bg-cover');
		expect(bgElement?.getAttribute('style')).toBe(
			`background-image: url('${assets.PREDADOR_HERO}')`
		);
	});
});
