import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'fulltime-job1',
		company: 'Kopnuspos',
		description: `<p>Embark on a journey through my diverse web development endeavors at Kopnuspos, where I've passionately contributed to projects, demonstrating proficiency in JavaScript and TypeScript. Here's an in-depth look at key projects:</p><ul><li><strong>Backoffice Oren Partner Application:</strong> Took the lead in developing an advanced content support system using React.js for the Oren Partner application. This system not only elevated content management but also enhanced user engagement through a more seamless and dynamic interface.</li><li><strong>Backoffice Mytours:</strong> Crafted an intuitive and robust back-office system using Next.js for the Mytours application. This system streamlined administrative processes, fostering a more efficient user management experience while maintaining a user-friendly interface.</li><li><strong>Mytours Web Application:</strong> Pioneered the development of a comprehensive web application with TypeScript, offering users a seamless and feature-rich platform for booking tickets for flights, trains, and hotels. This project aimed at providing users with an immersive and user-friendly experience in the world of travel and bookings.</li><li><strong>Backoffice Oren:</strong> Played a crucial role in developing a content support system for the Oren application, ensuring consistent and captivating content delivery to users. This system became instrumental in maintaining the application's relevance and appeal.</li><li><strong>Cooppay Application:</strong> Engineered a versatile payment application using JavaScript, encompassing functionalities for mobile credit top-ups, PPOB transactions, and more. This application not only met diverse user needs but also ensured secure and efficient financial transactions.</li><li><strong>OTN Company Profile:</strong> Crafted an engaging and informative company profile for the OTN subsidiary, utilizing JavaScript to highlight the company's values, services, and achievements. This project aimed at presenting OTN as a distinguished entity within the industry.</li></ul><p>These projects stand testament to my technical prowess and strategic thinking in delivering solutions tailored to specific project requirements. I am driven by a commitment to excellence and look forward to contributing my skills to future projects, continuing to push the boundaries of web development at Kopnuspos.</p>`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'South Jakarta',
		period: { from: new Date(2022, 2) },
		skills: getSkills('ts', 'js', 'tailwind', 'sass', 'css', 'html', 'nextjs', 'reactjs', 'svelte'),
		name: 'Front End Developer',
		color: 'orange',
		links: [],
		logo: Assets.Kopnus,
		shortDescription:
			'Explore my impactful web development at Kopnuspos, including an advanced content support system for Oren Partner in React.js, an intuitive Mytours back-office in Next.js, and a comprehensive TypeScript-powered Mytours Web App. I also contributed to Orens content support, developed the versatile Cooppay payment app in JavaScript, and crafted an engaging OTN company profile. These projects showcase my technical prowess, strategic thinking, and commitment to excellence in web development at Kopnuspos.'
	},
	{
		slug: 'freelance',
		company: 'Freelance',
		description: `<p>As a versatile freelance front-end developer, I've had the opportunity to work on diverse and impactful projects, showcasing my proficiency in creating engaging and dynamic web applications. Here are two notable projects in my portfolio:</p><ul><li><strong>Bright Star Application:</strong> For this project, I developed a stock opname application using Next.js. By leveraging the power of Next.js, I ensured a seamless and efficient inventory management system for the client. The application not only streamlines the stock-taking process but also provides insightful analytics, contributing to optimized business operations.</li><li><strong>TINC Application for Telkomsel:</strong> I had the privilege of working on the TINC application, a crucial component of Telkomsel's online presence. Using Next.js with TypeScript, I crafted a modern and dynamic company profile application. This project involved meticulous attention to detail, ensuring a responsive and visually appealing platform that effectively communicates Telkomsel's brand identity and corporate information.</li></ul><p>These experiences have not only honed my technical skills but have also reinforced my commitment to delivering high-quality solutions tailored to the unique needs of each client. I am passionate about contributing my expertise to future projects and continuously expanding my capabilities in the ever-evolving field of front-end development.</p>`,
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2021, 0), to: new Date(2023, 0) },
		skills: getSkills('ts', 'js', 'nextjs', 'tailwind', 'reactjs'),
		name: 'Front End Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription:
			'Experienced freelance front-end developer specializing in impactful web applications, including seamless stock opname with Next.js ("Bright Star Application") and a modern company profile for Telkomsel using Next.js and TypeScript ("TINC Application"). Passionate about delivering high-quality, tailored solutions.'
	},
	{
		slug: 'fulltime-job',
		company: 'Majapahit',
		description: `<p>As a Front End Developer at Majapahit Teknologi, situated in the vibrant district of East Jakarta, I am immersed in the impactful development of the Digital Talent Scholarship (DTS) application, a project commissioned by the Ministry of Communication and Information Technology of the Republic of Indonesia.</p><p>My primary responsibility revolves around the meticulous crafting and enhancement of the "subvit" module within the application. This module encompasses a diverse array of test questions designed to assess the skills and knowledge of individuals participating in the scholarship program. Leveraging my proficiency in front-end development, I ensure the creation of engaging, intuitive, and user-friendly interfaces that optimize the overall user experience for those undergoing assessments.</p><p>Furthermore, my role extends beyond the user-facing aspects, encompassing the intricate development of the back-office functionalities dedicated to the "subvit" module. Here, I focus on creating a robust administrative interface that facilitates seamless data management, ensuring the efficient oversight and control of the test-related processes.</p><p>Being part of the dynamic and forward-thinking team at Majapahit Teknologi, I take pride in contributing to the advancement of digital education initiatives led by the Ministry. This experience not only serves to refine my technical skills in front-end development but also reinforces my commitment to creating impactful solutions within the realm of information and communication technology.</p><p>In conclusion, my tenure as a Front End Developer at Majapahit Teknologi not only allows me to thrive in a stimulating professional environment but also empowers me to be an integral part of initiatives that contribute to the growth and transformation of digital education landscapes in Indonesia.</p>`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'East Jakarta',
		period: { from: new Date(2021, 8), to: new Date(2021, 11) },
		skills: getSkills('ts', 'sass', 'css', 'html', 'js', 'nextjs', 'reactjs', 'tailwind'),
		name: 'Front End Developer',
		color: 'yellow',
		links: [],
		logo: Assets.Majapahit,
		shortDescription:
			'Passionate Front End Developer at Majapahit Teknologi, dedicated to enhancing the "subvit" module for the impactful Digital Talent Scholarship (DTS) application. Committed to crafting engaging assessments and robust back-office functionalities, contributing to the advancement of digital education initiatives in Indonesia.'
	},
	{
		slug: 'internship',
		company: 'IPB University',
		description: `<p>During my 4-month internship at IPB University as an IT Support Technician, I played a pivotal role in the daily operations of the university's computer labs, network installations, and server maintenance.</p><p>My responsibilities included:</p>		<ul><li><strong>Computer Lab Maintenance:</strong> Ensuring the optimal condition of computer labs through routine hardware and software checks, promptly addressing technical issues to provide a seamless working environment for students and faculty.</li><li><strong>Network Installation:</strong> Taking the lead in planning and implementing the installation of internet networks across the campus, configuring routers, switches, and troubleshooting connectivity problems to guarantee a stable and high-speed internet connection.</li><li><strong>Server Maintenance:</strong> Assuming a key role in server maintenance, conducting regular checks, updates, and collaborating with the IT team to implement security protocols, thereby upholding the integrity and reliability of server operations.</li></ul><p>Notable achievements include enhancing the efficiency of computer labs through the implementation of a systematic maintenance schedule and contributing to the successful installation of a robust network infrastructure.</p><p>This internship provided me with invaluable hands-on experience in managing complex systems within an educational environment, solidifying my commitment to a career in IT support and infrastructure management. The exposure to diverse challenges at IPB University significantly enriched my problem-solving abilities and contributed to my growth as an IT professional.</p>`,
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
			'During my 4-month IT Support internship at IPB University, I maintained computer labs, installed a resilient campus network, and oversaw server maintenance. Conducting regular checks, troubleshooting issues, and implementing security measures, I honed my technical skills and solidified my commitment to IT support and infrastructure management.'
	}
];

export const title = 'Experience';
