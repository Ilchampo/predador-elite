import type { ProgramName } from '$lib/types/program.types';

export interface Program {
	name: ProgramName;
	description: string;
	image: string;
	age: number;
	link: string;
}
