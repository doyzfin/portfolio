import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Full Stack Web Developer',
		description: '',
		location: 'Online',
		logo: Assets.Fazz,
		name: '',
		organization: 'Fazztrack',
		period: { from: new Date(2021, 2, 1), to: new Date(2021, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: [
			'Soft Skill',
			'React JS',
			'JS',
			'HTML',
			'CSS',
			'Next JS',
			'Express JS',
			'MySql',
			'Full Stack'
		]
	},
	{
		degree: 'Vocational High School',
		description: '',
		location: 'Bogor',
		logo: Assets.Unknown,
		name: '',
		organization: 'SMKN 3 Bogor',
		period: { from: new Date(2017, 0, 1), to: new Date(2020, 0, 1) },
		shortDescription: '',
		slug: 'vocational',
		subjects: [
			'Software Development',
			'Network Management',
			'Network Security',
			'Operating Systems',
			'Web Programming',
			'Database Management',
			'Microcontroller Programming',
			'Troubleshooting and Maintenance'
		]
	}
];

export const title = 'Education';
