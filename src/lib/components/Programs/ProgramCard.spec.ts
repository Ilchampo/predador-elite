import type { Program } from '$lib/interfaces/program.interface';

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import ProgramCard from './ProgramCard.svelte';

describe('ProgramCard Component', () => {
	const mockProgram: Program = {
		name: 'Brazilian Jiu-Jitsu',
		description: 'Test Description',
		image: '/test-image.jpg',
		age: 16,
		link: '/programs/bjj'
	};

	it('renders program name and description', () => {
		render(ProgramCard, { props: { program: mockProgram } });

		expect(screen.getByText(mockProgram.name)).toBeDefined();
		expect(screen.getByText(mockProgram.description)).toBeDefined();
	});

	it('displays program image with correct attributes', () => {
		render(ProgramCard, { props: { program: mockProgram } });

		const image = screen.getByAltText(`${mockProgram.name} Training`) as HTMLImageElement;
		expect(image).toBeDefined();
		expect(image.src).toContain(mockProgram.image);
	});

	it('renders age requirement', () => {
		render(ProgramCard, { props: { program: mockProgram } });

		expect(screen.getByText(`+${mockProgram.age} años`)).toBeDefined();
	});

	it('renders "Saber más" link with correct href', () => {
		render(ProgramCard, { props: { program: mockProgram } });

		const link = screen.getByText('Saber más').closest('a');
		expect(link).toBeDefined();
		expect(link?.getAttribute('href')).toBe(mockProgram.link);
	});
});
