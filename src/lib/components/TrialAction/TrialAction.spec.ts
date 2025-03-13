import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { contact } from '$lib/constants/contact';

import assets from '$lib/constants/assets';

import TrialAction from './TrialAction.svelte';

describe('TrialAction Component', () => {
	it('renders the main heading and description', () => {
		render(TrialAction);

		expect(screen.getByText('¡Inscríbete a una clase de prueba gratis!')).toBeDefined();
		expect(
			screen.getByText(
				'No te pierdas la oportunidad de conocer nuestro programa y lo que podemos ofrecerte.'
			)
		).toBeDefined();
	});

	it('renders the call-to-action button with correct WhatsApp link', () => {
		render(TrialAction);

		const ctaButton = screen.getByText('¡Inscríbete!');
		expect(ctaButton).toBeDefined();

		const expectedWhatsAppLink = `https://wa.me/${contact.phone.replace(/\s+/g, '')}`;
		expect(ctaButton.getAttribute('href')).toBe(expectedWhatsAppLink);
		expect(ctaButton.getAttribute('target')).toBe('_blank');
		expect(ctaButton.getAttribute('rel')).toBe('noopener noreferrer');
	});

	it('has the background logo with correct styling', () => {
		const { container } = render(TrialAction);

		const bgElement = container.querySelector('.absolute.inset-0') as HTMLElement;
		expect(bgElement).toBeDefined();
		expect(bgElement.style.backgroundImage).toBe(`url(${assets.PREDADOR_LOGO})`);
		expect(bgElement.classList.contains('opacity-20')).toBe(true);
	});
});
