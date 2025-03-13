import type { ProgramName } from '$lib/types/program.types';

export interface Schedule {
	program: ProgramName;
	time: string;
}

export interface ScheduleBlock {
	day: string;
	programs: Schedule[];
}
