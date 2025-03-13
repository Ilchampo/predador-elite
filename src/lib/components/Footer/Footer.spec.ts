import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { contact } from '$lib/constants/contact';

import Footer from './Footer.svelte';

describe('Footer Component', () => {
	it('renders the three main sections', () => {
		render(Footer);

		expect(screen.getByText('Ubicación')).toBeDefined();
		expect(screen.getByText('Horarios')).toBeDefined();
		expect(screen.getByText('Contacto')).toBeDefined();
	});

	it('displays contact information correctly', () => {
		render(Footer);

		const addressLink = screen.getByText(contact.address);
		expect(addressLink).toBeDefined();
		expect(addressLink.getAttribute('href')).toBe(contact.map);

		const emailLink = screen.getByText(contact.email);
		expect(emailLink).toBeDefined();
		expect(emailLink.getAttribute('href')).toBe(`mailto:${contact.email}`);

		// Check if phone link exists
		const phoneLink = screen.getByText(contact.phone);
		expect(phoneLink).toBeDefined();
		expect(phoneLink.getAttribute('href')).toBe(`tel:${contact.phone.replace(/\s+/g, '')}`);
	});

	it('renders social media links', () => {
		render(Footer);

		const instagramLink = screen.getByLabelText('Instagram');
		expect(instagramLink).toBeDefined();
		expect(instagramLink.getAttribute('href')).toBe(contact.instagram);

		const facebookLink = screen.getByLabelText('Facebook');
		expect(facebookLink).toBeDefined();
		expect(facebookLink.getAttribute('href')).toBe(contact.facebook);

		const whatsappLink = screen.getByLabelText('WhatsApp');
		expect(whatsappLink).toBeDefined();
		expect(whatsappLink.getAttribute('href')).toBe(
			`https://wa.me/${contact.phone.replace(/\s+/g, '')}`
		);
	});

	it('renders navigation links correctly', () => {
		render(Footer);

		const navigationLinks = [
			{ text: 'Programas', href: '/programs' },
			{ text: 'Comunidad', href: '/community' },
			{ text: 'Sobre Nosotros', href: '/about-us' }
		];

		navigationLinks.forEach((link) => {
			const element = screen.getByText(link.text);
			expect(element).toBeDefined();
			expect(element.closest('a')?.pathname).toBe(link.href);
		});
	});

	it('displays current year in copyright notice', () => {
		render(Footer);

		const currentYear = new Date().getFullYear();
		expect(screen.getByText(`@${currentYear} Predador Elite MMA`)).toBeDefined();
		expect(screen.getByText('Web designed by Pablo Beltran')).toBeDefined();
	});
});
