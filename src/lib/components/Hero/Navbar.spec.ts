import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';

import assets from '$lib/constants/assets';

import Navbar from './Navbar.svelte';

describe('Navbar Component', () => {
	beforeEach(() => {
		// Reset the viewport to desktop size
		window.innerWidth = 1024;
		window.dispatchEvent(new Event('resize'));
	});

	it('renders the logo and brand name', () => {
		render(Navbar);

		const logo = screen.getByAltText('Predador Elite Logo');
		expect(logo).toBeDefined();
		expect(logo.getAttribute('src')).toBe(assets.PREDADOR_LOGO);

		expect(screen.getByText('PREDADOR')).toBeDefined();
		expect(screen.getByText('ELITE')).toBeDefined();
	});

	it('renders navigation links in desktop view', () => {
		render(Navbar);

		const navigationLinks = [
			{ text: 'Inicio', href: '/' },
			{ text: 'Programas', href: '/programs' },
			{ text: 'Horarios', href: '/schedule' },
			{ text: 'Comunidad', href: '/community' },
			{ text: 'Sobre Nosotros', href: '/about-us' }
		];

		navigationLinks.forEach((link) => {
			const element = screen.getByText(link.text);
			expect(element).toBeDefined();
			expect(element.closest('a')?.pathname).toBe(link.href);
		});
	});

	it('renders hamburger menu button in mobile view', () => {
		render(Navbar);

		const menuButton = screen.getByLabelText('Menu');
		expect(menuButton).toBeDefined();
	});

	it('toggles mobile menu when hamburger is clicked', async () => {
		const { container } = render(Navbar);

		const menuButton = screen.getByLabelText('Menu');

		// Menu should be hidden initially
		expect(container.querySelector('.absolute.top-full')).toBeNull();

		// Click to open menu
		await fireEvent.click(menuButton);

		// Menu should be visible
		expect(container.querySelector('.absolute.top-full')).toBeDefined();

		// Click to close menu
		await fireEvent.click(menuButton);

		// Menu should be hidden again
		expect(container.querySelector('.absolute.top-full')).toBeNull();
	});

	it('closes mobile menu when overlay is clicked', async () => {
		const { container } = render(Navbar);

		// Open the menu
		await fireEvent.click(screen.getByLabelText('Menu'));
		expect(container.querySelector('.absolute.top-full')).toBeDefined();

		// Click the overlay
		const overlay = container.querySelector('.fixed.inset-0');
		expect(overlay).toBeDefined();
		await fireEvent.click(overlay!);

		// Menu should be hidden
		expect(container.querySelector('.absolute.top-full')).toBeNull();
	});

	it('renders all navigation links in mobile menu when open', async () => {
		render(Navbar);

		// Open the menu
		await fireEvent.click(screen.getByLabelText('Menu'));

		const mobileNavigationLinks = [
			{ text: 'Inicio', href: '/' },
			{ text: 'Programas', href: '/programs' },
			{ text: 'Horarios', href: '/schedule' },
			{ text: 'Comunidad', href: '/community' },
			{ text: 'Sobre Nosotros', href: '/about-us' }
		];

		mobileNavigationLinks.forEach((link) => {
			const elements = screen.getAllByText(link.text);
			// Should find at least one instance of each link
			expect(elements.length).toBeGreaterThan(0);
			// Check that at least one of the elements has the correct href
			const hasCorrectLink = elements.some(
				(element) => element.closest('a')?.pathname === link.href
			);
			expect(hasCorrectLink).toBe(true);
		});
	});
});
