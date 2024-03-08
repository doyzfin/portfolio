import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'fulltime-job1',
		company: 'Kopnuspos',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'South Jakarta',
		period: { from: new Date(2022, 2) },
		skills: getSkills('ts', 'js', 'tailwind', 'sass', 'css', 'html', 'nextjs', 'reactjs', 'svelte'),
		name: 'Front End Developer',
		color: 'orange',
		links: [],
		logo: Assets.Kopnus,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'freelance',
		company: 'Freelance',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2021, 0), to: new Date(2023, 0) },
		skills: getSkills('ts', 'js', 'nextjs', 'tailwind', 'reactjs'),
		name: 'Front End Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'fulltime-job',
		company: 'Majapahit',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'East Jakarta',
		period: { from: new Date(2021, 8), to: new Date(2021, 11) },
		skills: getSkills('ts', 'sass', 'css', 'html', 'js', 'nextjs', 'reactjs', 'tailwind'),
		name: 'Front End Developer',
		color: 'yellow',
		links: [],
		logo: Assets.Majapahit,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'internship',
		company: 'IPB University',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Bogor',
		period: { from: new Date(2019, 0), to: new Date(2019, 4) },
		skills: [],
		name: 'IT Support Technician',
		color: 'blue',
		links: [],
		logo: Assets.Ipb,
		shortDescription:
			'I was there working on installing wifi, maintaining servers, maintaining computer labs.'
	}
];

export const title = 'Experience';
