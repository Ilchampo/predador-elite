import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { programs } from '$lib/constants/programs';

import Programs from './Programs.svelte';

describe('Programs Component', () => {
	it('renders the section title and description', () => {
		render(Programs);

		expect(screen.getByText('Nuestros Programas')).toBeDefined();
		expect(
			screen.getByText(/Elige entre nuestros programas de entrenamiento especializados/)
		).toBeDefined();
	});

	it('renders all program cards', () => {
		render(Programs);

		programs.forEach((program) => {
			const ageElements = screen.getAllByText(`+${program.age} años`);
			expect(ageElements.length).toBeGreaterThan(0);

			expect(screen.getByText(program.name)).toBeDefined();
			expect(screen.getByText(program.description)).toBeDefined();

			const image = screen.getByAltText(`${program.name} Training`) as HTMLImageElement;
			expect(image.src).toContain(program.image);
		});
	});

	it('has correct section id and styling classes', () => {
		const { container } = render(Programs);

		const section = container.querySelector('section');
		expect(section?.id).toBe('programs');
		expect(section?.classList.contains('bg-primary-900/80')).toBe(true);
	});
});
