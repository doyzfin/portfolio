import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { base } from '$app/paths';

export const items: Array<Project> = [
	{
		slug: 'web-florsit',
		color: '#1B769C',
		description: `<p><strong>Nur Florist Depok</strong> is your go-to destination for exquisite floral arrangements and heartfelt gifts in the vibrant city of Depok. With a commitment to delivering floral masterpieces that convey emotions and celebrate special moments, we take pride in being your trusted local florist, adding a touch of nature's beauty to your life's milestones.</p><p>At <strong>Nur Florist</strong>, we understand the significance of every occasion, whether it's a joyous celebration, a heartfelt expression of love, or a moment of solace. Our skilled floral designers curate stunning arrangements using the freshest and most vibrant flowers, ensuring that each creation reflects the essence of the occasion and leaves a lasting impression.</p><p>Our wide range of floral offerings caters to various events, including birthdays, anniversaries, weddings, graduations, and sympathy gestures. From elegant bouquets that express romance to vibrant arrangements that brighten someone's day, we strive to capture the sentiment behind every order, making your floral gift truly meaningful.</p><p>As a customer-centric florist, <strong>Nur Florist Depok</strong> places a premium on quality, creativity, and timely delivery. We source our flowers from trusted suppliers, guaranteeing freshness and longevity. Our skilled florists pour their passion into crafting unique designs that not only showcase the beauty of each bloom but also evoke the intended emotions.</p><p>For added convenience, our online platform allows you to explore our diverse collection, place orders effortlessly, and schedule deliveries at your preferred time. Whether you're near or far, you can rely on us to deliver your sentiments with precision and care.</p><p>Beyond flowers, we offer a selection of complementary gifts, including chocolates, personalized cards, and plush toys, allowing you to create a customized and thoughtful package for your loved ones.</p><p>At <strong>Nur Florist Depok</strong>, we don't just sell flowers; we create moments. We take pride in being part of your celebrations, making them extra special with our artistic floral arrangements. Let us be your partner in expressing love, gratitude, and sympathy through the language of flowers.</p><p>Experience the joy of gifting with <strong>Nur Florist Depok</strong>, where every petal tells a story and every arrangement is a work of art.</p>`,
		shortDescription:
			'Explore the charm of NurFloristDepok.com, a delightful online flower haven meticulously crafted with the power of WordPress. This user-friendly platform allows seamless browsing and secure purchasing of exquisite blooms. From vibrant bouquets to elegant subscriptions, this project showcases my dedication to creating visually appealing and functional websites. Step into the digital floral paradise of NurFloristDepok.com, where beauty harmonizes with user-friendly design, bringing the joy of flowers to the online realm.',
		links: [{ to: 'https://nurfloristdepok.com/', label: 'Visit' }],
		logo: Assets.Florist,
		name: 'Florist Website',
		period: {
			from: new Date(2024, 0, 1)
		},
		skills: getSkills('wordpress', 'php'),
		type: 'Website',
		screenshots: [
			{
				label: 'Screen 1',
				src: `${base}/pics/img1.png`
			}
		]
	},
	{
		slug: 'web-coffee-express',
		color: '#6A4029',
		description: `<h1>Welcome to <strong>Coffee Express</strong>: Your Ultimate Coffee Destination</h1><p>Indulge in the rich world of coffee at <strong>Coffee Express</strong>, where passion meets perfection. We are not just a coffee shop; we are a haven for coffee enthusiasts seeking an extraordinary experience. Our web platform, built with the powerful combination of <strong>Next.js</strong> and <strong>Express.js</strong>, ensures a seamless and enjoyable journey through the world of exceptional coffee.</p><p>At <strong>Coffee Express</strong>, we believe in the art and science of coffee. Our commitment to excellence is reflected in our carefully curated selection of premium coffee beans sourced from the finest regions around the globe. Crafted with precision and love, each blend and single-origin offering is a testament to our dedication to delivering a cup of coffee that transcends the ordinary.</p><p>Why choose <strong>Coffee Express</strong>? Our online coffee shop, powered by <strong>Next.js</strong>, provides an immersive and user-friendly experience. Explore our extensive collection, from robust dark roasts to nuanced light roasts, all with detailed descriptions to help you discover the perfect flavor profile for your palate.</p><p>With the integration of <strong>Express.js</strong>, our platform ensures swift and secure transactions. Order your favorite beans, ground coffee, or brewing accessories effortlessly, and let us handle the rest. Our commitment to freshness means your coffee is roasted to perfection just before it reaches your doorstep, ensuring an unparalleled taste experience.</p><p>Whether you're a seasoned coffee connoisseur or a casual drinker, <strong>Coffee Express</strong> caters to all tastes and preferences. Dive into the world of high-quality beans, each sip telling a story of meticulous sourcing and expert roasting.</p>`,
		shortDescription:
			'Coffee Express: Your go-to for premium coffee beans and brewing essentials. Explore curated blends and single-origin beans for a delightful coffee experience. Conveniently order online for freshness delivered to your doorstep. Elevate your coffee ritual with Coffee Express!',
		links: [
			{ to: 'https://coffee-frontend.vercel.app/', label: 'Visit' },
			{ to: 'https://github.com/doyzfin/coffee-frontend', label: 'Github' }
		],
		logo: Assets.coffee,
		name: 'Coffee Express',
		period: {
			from: new Date(2020, 0, 1)
		},
		skills: getSkills('nextjs', 'express', 'css', 'mysql', 'js'),
		type: 'Website',
		screenshots: [
			{
				label: 'Main Web',
				src: `${base}/pics/coffee_bg.jpg`
			}
		]
	},
	{
		slug: 'web-jobshall',
		color: '#5E50A1',
		description: ` <p><strong>Jobshall</strong> is a cutting-edge job hiring and recruitment platform that leverages the power of Next.js and Express.js to revolutionize the way employers connect with talented professionals. Seamlessly blending robust technology with an intuitive user interface, Jobshall offers an unparalleled experience for both job seekers and recruiters alike.</p><p>Powered by <strong>Next.js</strong>, Jobshall delivers a highly responsive and dynamic front-end experience. Job seekers can explore a user-friendly interface that enables efficient job searches, tailored to their skills and preferences. The use of Next.js ensures fast page loads and smooth transitions, providing an engaging and enjoyable user journey.</p><p>The <strong>Express.js</strong> backend of Jobshall forms the backbone of its functionality, handling data processing, user authentication, and seamless communication between job seekers and employers. With Express.js, the platform ensures the reliability and efficiency required for a high-performance job portal.</p><p>Jobshall caters to both job seekers and recruiters, offering a comprehensive set of features. Job seekers can create detailed profiles, upload resumes, and explore a diverse range of job listings. The platform's advanced search and filtering capabilities make it easy for candidates to find the perfect job opportunities that match their skills and aspirations.</p><p>For recruiters, Jobshall provides a robust dashboard to manage job postings, review candidate profiles, and streamline the hiring process. The integration of Express.js ensures secure data handling, user authentication, and efficient communication channels, creating a seamless experience for employers seeking top-tier talent.</p><p>With a focus on user experience, Jobshall implements responsive design principles, ensuring accessibility across various devices. The combination of Next.js and Express.js not only enhances performance but also contributes to the scalability and maintainability of the platform, making it adaptable to the evolving needs of the job market.</p><p>Jobshall stands out as a go-to platform for job seekers looking to advance their careers and recruiters seeking exceptional talent. Its commitment to utilizing cutting-edge technologies like Next.js and Express.js underscores its dedication to providing a modern, efficient, and secure job hiring and recruitment solution.</p><p>In summary, <strong>Jobshall</strong> redefines the job hiring landscape with its innovative use of Next.js and Express.js, offering a seamless and feature-rich platform that empowers both job seekers and recruiters in their respective journeys.</p>`,
		shortDescription:
			'Jobshall: A next-gen job hiring and recruitment platform crafted with Next.js and Express.js. Job seekers enjoy a dynamic, user-friendly interface for efficient job searches, while recruiters benefit from a robust dashboard for streamlined hiring. With cutting-edge technology, Jobshall delivers a modern, secure, and efficient solution for connecting talent with opportunities.',
		links: [
			{ to: 'https://jobshall.netlify.app/', label: 'Visit' },
			{ to: 'https://github.com/twicks95/frontend-jobshall-app', label: 'Github' }
		],
		logo: Assets.Jobshall,
		name: 'Jobshall',
		period: {
			from: new Date(2020, 0, 1)
		},
		skills: getSkills('nextjs', 'express', 'css', 'mysql', 'js'),
		type: 'Website',
		screenshots: [
			{
				label: 'Main Web',
				src: `${base}/pics/design2.png`
			},
			{
				label: 'Profile',
				src: `${base}/pics/design3.png`
			}
		]
	},
	{
		slug: 'web-twoxone',
		color: '#554489',
		description: `<p><strong>TwoxOne</strong> stands as a sophisticated fusion of entertainment exploration, seamlessly merging the power of React.js and Express.js to create an immersive platform for movie and book enthusiasts. This dynamic web application offers users an unparalleled experience to discover, engage, and share their passion for cinematic and literary experiences.</p><p>Powered by <strong>React.js</strong>, TwoxOne delivers a visually stunning and responsive interface, ensuring an engaging user experience. The utilization of React.js enables seamless navigation, dynamic content rendering, and real-time updates, enhancing the overall enjoyment for users exploring the extensive library of movies and books.</p><p>The <strong>Express.js</strong> backend of TwoxOne serves as the backbone of the platform, handling data processing, user authentication, and facilitating a smooth interaction between users and the extensive catalog of movies and books. The integration of Express.js ensures secure data management, efficient communication, and a robust foundation for the platform's functionality.</p><p>TwoxOne caters to the diverse interests of its users by offering a comprehensive array of features. Movie enthusiasts can explore a vast collection of films, each accompanied by detailed information, ratings, and user reviews. Book lovers can delve into a rich literary database, discovering new reads, sharing opinions, and connecting with fellow readers.</p><p>With user-friendly interfaces tailored for movie and book aficionados, TwoxOne empowers users to rate, review, and bookmark their favorite titles. The platform's advanced search and recommendation algorithms ensure that users can easily discover new and exciting content that aligns with their preferences.</p><p>Whether you are a cinephile seeking the latest blockbuster or a bookworm searching for your next literary adventure, TwoxOne is the go-to destination. The integration of React.js and Express.js not only ensures a delightful user experience but also contributes to the scalability and adaptability of the platform, keeping pace with the evolving landscape of entertainment.</p><p>TwoxOne represents a digital haven where movie and book enthusiasts converge to celebrate their shared passions. The synergy between React.js and Express.js creates a harmonious blend of aesthetics, functionality, and security, making TwoxOne a premier destination for immersive entertainment exploration.</p><p>In conclusion, <strong>TwoxOne</strong> redefines the experience of exploring movies and books, utilizing the dynamic capabilities of React.js and the robust functionality of Express.js to create a platform that caters to the diverse tastes and preferences of entertainment enthusiasts.</p>`,
		shortDescription:
			'TwoxOne: Your ultimate movie and book hub, seamlessly blending React.js and Express.js for a sleek, responsive interface. Discover, rate, and review your favorite movies and books with ease. Experience entertainment at your fingertips with TwoxOne.',
		links: [
			{ to: 'https://twoxone.netlify.app/', label: 'Visit' },
			{ to: 'https://github.com/doyzfin/TwoxOne-FrontEnd', label: 'Github' }
		],
		logo: Assets.Movie,
		name: 'TwoxOne',
		period: {
			from: new Date(2020, 0, 1)
		},
		skills: getSkills('reactjs', 'express', 'css', 'mysql', 'js'),
		type: 'Website',
		screenshots: [
			{
				label: 'Main Web',
				src: `${base}/pics/design4.png`
			}
		]
	},
	{
		slug: 'web-teledemy',
		color: '#fff',
		description: `<p><strong>Teledemy</strong> redefines online communication with a state-of-the-art web chat platform that seamlessly integrates Next.js and Express.js technologies. This innovative chat application offers users a dynamic, responsive, and feature-rich environment for connecting with friends, colleagues, and groups in real-time.</p><p>Developed with <strong>Next.js</strong>, Teledemy boasts a sleek and intuitive user interface, ensuring a seamless and enjoyable chat experience. The use of Next.js contributes to fast page loads, smooth transitions, and an overall dynamic user interaction, creating an engaging platform for meaningful conversations.</p><p>The backend of Teledemy is powered by <strong>Express.js</strong>, providing a robust foundation for secure data handling, user authentication, and efficient communication channels. The integration of Express.js ensures the reliability and performance required for a high-quality and secure web chat application.</p><p>Teledemy is designed for individuals and groups, offering a range of features to enhance online interactions. Users can engage in one-on-one conversations, create group chats, and share multimedia content seamlessly. The platform's responsive design ensures accessibility across various devices, enabling users to stay connected wherever they go.</p><p>Whether used for casual conversations, professional collaboration, or group coordination, Teledemy is equipped with the tools to facilitate effective and enjoyable communication. The platform's advanced features include real-time message delivery, message history, and customizable chat settings, providing users with a comprehensive and personalized chat experience.</p><p>With Teledemy, the future of online communication is at your fingertips. The platform's blend of Next.js and Express.js ensures a modern, secure, and efficient chat solution, making it an ideal choice for individuals and businesses seeking a reliable and feature-rich web chat experience.</p><p>Experience the next level of online communication with Teledemy, where real-time interactions meet cutting-edge technology. Join the Teledemy community and elevate your chat experience today!</p>`,
		shortDescription:
			'Teledemy: Elevate your communication with this cutting-edge web chat platform. Built with Next.js and Express.js, Teledemy offers a seamless and responsive interface for effortless conversations. Engage in real-time interactions with friends, colleagues, or groups, all in one dynamic platform. Experience the future of online communication with Teledemy.',
		links: [
			{ to: 'https://teledemy.netlify.app/', label: 'Visit' },
			{ to: 'https://github.com/doyzfin/Frontend-teledemy', label: 'Github' }
		],
		logo: Assets.Unknown,
		name: 'Teledemy',
		period: {
			from: new Date(2020, 0, 1)
		},
		skills: getSkills('nextjs', 'express', 'css', 'mysql', 'js'),
		type: 'Website',
		screenshots: [
			{
				label: 'Main Web',
				src: `${base}/pics/design5.png`
			}
		]
	},
	{
		slug: 'web-tpay',
		color: '#fff',
		description: ` <p><strong>Tpay</strong> introduces a groundbreaking solution to online payments with its advanced web-based e-wallet platform. Meticulously crafted with the capabilities of Next.js and Express.js, Tpay stands as a secure, efficient, and user-friendly electronic payment system.</p><p>Driven by <strong>Next.js</strong>, Tpay ensures a seamless and responsive front-end experience for users engaging in electronic transactions. The use of Next.js facilitates swift page loads, smooth transitions, and an overall dynamic user interaction, creating an engaging platform for effortless online payments.</p><p>The robust backend of Tpay relies on <strong>Express.js</strong>, providing a solid foundation for secure data handling, user authentication, and efficient communication channels. With Express.js, Tpay guarantees the reliability and performance necessary for a high-quality e-wallet platform, ensuring users a secure and efficient digital payment experience.</p><p>Tpay caters to both consumers and businesses, offering a comprehensive range of features for electronic transactions. Users can conveniently load funds into their e-wallets, make online purchases, and transfer money seamlessly. The platform's responsive design ensures accessibility across various devices, allowing users to manage their finances on-the-go.</p><p>For businesses, Tpay provides a secure and streamlined platform for accepting electronic payments, enhancing customer convenience and accelerating transaction processing. The integration of advanced security measures ensures the protection of user data and financial information, instilling confidence in users and businesses alike.</p><p>Experience the future of online payments with Tpay, where Next.js and Express.js converge to create a cutting-edge, secure, and efficient e-wallet solution. Join the digital payment revolution with Tpay and enjoy the convenience of electronic transactions at your fingertips.</p>`,
		shortDescription:
			'Tpay: Simplify online payments with Tpay, a streamlined web payment solution. Crafted with Next.js and Express.js, Tpay ensures a secure and efficient payment experience. Seamlessly handle transactions, enhance user convenience, and elevate your online payment process with Tpay.',
		links: [
			{ to: 'https://tpay-frontend.vercel.app/', label: 'Visit' },
			{ to: 'https://github.com/doyzfin/Frontend-teledemy', label: 'Github' }
		],
		logo: Assets.Unknown,
		name: 'TPay',
		period: {
			from: new Date(2020, 0, 1)
		},
		skills: getSkills('nextjs', 'express', 'css', 'mysql', 'js'),
		type: 'Website',
		screenshots: [
			{
				label: 'Main Web',
				src: `${base}/pics/design6.png`
			}
		]
	},
	{
		slug: 'web-bright',
		color: '#FDC001',
		description: `<p><strong>Bright Star</strong> revolutionizes stock opname and inventory management with its advanced web-based solution. Crafted with the power of Next.js and Express.js, Bright Star offers businesses a comprehensive platform for streamlined and efficient stock tracking.</p><p>Powered by <strong>Next.js</strong>, Bright Star delivers a responsive and dynamic user interface that enhances the stock opname process. The use of Next.js ensures a seamless user experience, allowing businesses to efficiently manage their inventory with precision and accuracy.</p><p>The robust backend of Bright Star is built on <strong>Express.js</strong>, providing a solid foundation for secure data handling, real-time updates, and efficient communication channels. Express.js ensures the reliability and performance needed for a high-quality stock opname application, allowing businesses to stay on top of their inventory management effortlessly.</p><p>Bright Star offers a range of features designed to simplify stock opname processes. Users can easily track stock levels, manage inventory across multiple locations, and generate detailed reports for informed decision-making. The platform's intuitive interface and advanced functionalities contribute to a more streamlined and error-free stock management experience.</p><p>Whether utilized for small businesses or large enterprises, Bright Star adapts to the specific needs of each user. The platform's responsive design ensures accessibility across devices, enabling users to perform stock opname tasks conveniently, whether in the office or on the go.</p><p>Experience the future of stock opname with Bright Star, where Next.js and Express.js converge to create a powerful, user-friendly, and efficient solution. Join businesses worldwide in embracing accurate and hassle-free stock management with Bright Star.</p>`,
		shortDescription:
			'Bright Star: Transform stock management with Bright Star, a web stock opname solution. Built on Next.js and Express.js, Bright Star offers a seamless interface for efficient stock tracking and inventory management. Experience accuracy and ease in stock opname with Bright Star.',
		links: [{ to: 'https://post-self.vercel.app/signin', label: 'Visit' }],
		logo: Assets.Bright,
		name: 'Bright Star',
		period: {
			from: new Date(2021, 0, 1)
		},
		skills: getSkills('nextjs', 'css', 'js'),
		type: 'Website',
		screenshots: [
			{
				label: 'Main Web',
				src: `${base}/pics/design4.png`
			}
		]
	},
	{
		slug: 'web-tinc',
		color: '#5ECAD3',
		description: `<p><strong>Tinc Polaris</strong> stands as a pinnacle in web development, specifically tailored for Telkomsel's company profile. Crafted with the expertise of Next.js and TypeScript, Tinc Polaris offers a sophisticated, dynamic, and engaging platform to present your business to the world.</p><p>Powered by <strong>Next.js</strong>, Tinc Polaris ensures a modern and responsive front-end experience. With the dynamic capabilities of Next.js, the platform delivers fast page loads, smooth transitions, and an overall captivating user interface, providing an exceptional online profile tailored for Telkomsel.</p><p>The use of <strong>TypeScript</strong> adds an extra layer of efficiency and reliability to Tinc Polaris. As a statically typed superset of JavaScript, TypeScript enhances code quality and developer productivity, ensuring a robust and error-free web development experience for Telkomsel's company profile.</p><p>Tinc Polaris is designed to optimize your online presence. Whether showcasing Telkomsel's achievements, services, or corporate values, the platform provides a comprehensive and professional web experience. The responsive design ensures accessibility across various devices, allowing stakeholders to engage with the company profile seamlessly.</p><p>For Telkomsel, Tinc Polaris goes beyond a traditional company profile by offering advanced features and dynamic content presentation. The platform not only represents the brand's identity but also serves as a powerful tool for connecting with clients, partners, and the wider audience.</p><p>Experience the epitome of web development with Tinc Polaris, where Next.js and TypeScript converge to create a cutting-edge and tailored solution for Telkomsel's company profile. Elevate your online presence, engage your audience, and showcase your business with Tinc Polaris.</p>`,
		shortDescription:
			'Tinc Polaris: Elevate your web presence with the Tinc Polaris company profile. Tailored for Telkomsel and built with Next.js and TypeScript, Tinc Polaris delivers a modern, dynamic, and engaging platform to showcase your business. Optimize your online profile with Tinc Polaris for a cutting-edge and professional web experience.',
		links: [{ to: 'https://polaris.tinc.id/login', label: 'Visit' }],
		logo: Assets.Tinc,
		name: 'Tinc Polaris',
		period: {
			from: new Date(2022, 0, 1)
		},
		skills: getSkills('nextjs', 'ts', 'css', 'tailwind'),
		type: 'Website',
		screenshots: [
			{
				label: 'Main Web',
				src: `${base}/pics/design7.png`
			}
		]
	},
	{
		slug: 'web-dts',
		color: '#007DFF',
		description: `<p><strong>DTS Kominfo</strong> emerges as an innovative and technologically advanced platform for digital education and training. Developed by the Ministry of Communication and Information Technology (Kominfo), DTS is designed to provide accessible and interactive learning experiences through a diverse range of digital courses.</p><p>Built with the dynamic capabilities of <strong>Next.js</strong>, DTS Kominfo ensures a modern, responsive, and user-friendly interface. Leveraging the power of Next.js, the platform delivers fast page loads, smooth transitions, and an overall engaging learning environment, making digital education accessible to a broad audience.</p><p>DTS Kominfo serves as a gateway for individuals and professionals to enhance their skills and knowledge in the ever-evolving digital landscape. The platform offers a wide array of courses covering topics such as technology, communication, and information, empowering learners to stay ahead in the digital era.</p><p>With a commitment to fostering progress in the digital world, DTS Kominfo provides a comprehensive learning experience. Users can explore diverse courses, participate in interactive modules, and gain valuable insights from industry experts, all within a user-friendly and technologically advanced platform.</p><p>Join the digital revolution with DTS Kominfo, where Next.js converges with the mission of Kominfo to create a cutting-edge digital education platform. Elevate your skills, stay informed, and navigate the digital landscape with confidence through the immersive learning experiences offered by DTS Kominfo.</p>`,
		shortDescription:
			'DTS Kominfo: An innovative platform for digital education and training. Built with cutting-edge technology by the Ministry of Communication and Information Technology (Kominfo), DTS provides easy and interactive access to a variety of digital courses. Enhance your skills and knowledge with DTS Kominfo, supporting progress in the digital world.',
		links: [{ to: 'https://digitalent.kominfo.go.id/', label: 'Visit' }],
		logo: Assets.DTS,
		name: 'Digital Talent Schoolarship (DTS)',
		period: {
			from: new Date(2022, 0, 1)
		},
		skills: getSkills('nextjs', 'css', 'js'),
		type: 'Website',
		screenshots: [
			{
				label: 'Main Web',
				src: `${base}/pics/design8.png`
			}
		]
	}
];

export const title = 'Projects';
