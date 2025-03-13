import type { Program } from '$lib/interfaces/program.interface';

import assets from '$lib/constants/assets';

export const programs: Program[] = [
	{
		name: 'Brazilian Jiu-Jitsu',
		description:
			'El Jiu-Jitsu Brasileño es un arte marcial y deporte de combate que se centra en el agarre y la lucha en el suelo.',
		image: assets.PROGRAM_BJJ,
		age: 12,
		link: '/programs/bjj'
	},
	{
		name: 'Kickboxing',
		description:
			'El Kickboxing es un arte marcial y deporte de combate que se centra en patadas y puñetazos.',
		image: assets.PROGRAM_KICKBOXING,
		age: 12,
		link: '/programs/kickboxing'
	},
	{
		name: 'Mixed Martial Arts',
		description:
			'Las Artes Marciales Mixtas son un arte marcial y deporte de combate que combina técnicas de golpeo y agarre.',
		image: assets.PROGRAM_MMA,
		age: 12,
		link: '/programs/mma'
	}
];
