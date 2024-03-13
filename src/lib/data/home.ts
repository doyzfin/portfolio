import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Alfin';

export const name = 'Muhammad';

export const lastName = 'Alfin';

export const description =
	'As a dedicated front-end developer, I bring a fusion of creativity and technical expertise to web design. With a fervent enthusiasm for crafting visually stunning and user-friendly interfaces, I thrive on the ever-evolving landscape of front-end technologies.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/alfin-12/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/allfinefin'
	},
	{
		platform: Platform.Email,
		link: 'alfinramadhan97@gmail.com'
	}
];

export const skills = getSkills(
	'js',
	'css',
	'html',
	'reactjs',
	'sass',
	'svelte',
	'ts',
	'express',
	'tailwind',
	'nextjs'
);
