import type { ScheduleBlock } from '$lib/interfaces/schedule.interface';

export const scheduleBlocks: ScheduleBlock[] = [
	{
		day: 'Lunes',
		programs: [
			{
				program: 'Kickboxing',
				time: '18:00 - 19:00'
			},
			{
				program: 'Brazilian Jiu-Jitsu',
				time: '19:00 - 20:00'
			},
			{
				program: 'Kickboxing',
				time: '20:00 - 21:00'
			}
		]
	},
	{
		day: 'Martes',
		programs: [
			{
				program: 'Kickboxing',
				time: '18:00 - 19:00'
			},
			{
				program: 'Brazilian Jiu-Jitsu',
				time: '19:00 - 20:00'
			},
			{
				program: 'Kickboxing',
				time: '20:00 - 21:00'
			}
		]
	},
	{
		day: 'Miercoles',
		programs: [
			{
				program: 'Mixed Martial Arts',
				time: '18:00 - 19:00'
			},
			{
				program: 'Brazilian Jiu-Jitsu',
				time: '19:00 - 20:00'
			},
			{
				program: 'Mixed Martial Arts',
				time: '20:00 - 21:00'
			}
		]
	},
	{
		day: 'Jueves',
		programs: [
			{
				program: 'Mixed Martial Arts',
				time: '18:00 - 19:00'
			},
			{
				program: 'Brazilian Jiu-Jitsu',
				time: '19:00 - 20:00'
			},
			{
				program: 'Mixed Martial Arts',
				time: '20:00 - 21:00'
			}
		]
	},
	{
		day: 'Viernes',
		programs: [
			{
				program: 'Mixed Martial Arts',
				time: '18:00 - 19:00'
			}
		]
	}
] as const;
