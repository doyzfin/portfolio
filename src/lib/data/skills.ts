import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: `<p><strong>JavaScript</strong>, a versatile and dynamic programming language, plays a pivotal role in web development by seamlessly integrating with HTML. The combination of JavaScript and HTML empowers developers to create highly interactive and responsive web applications. JavaScript primarily operates on the client side, allowing developers to execute scripts directly within users' web browsers.</p><p>At its core, JavaScript is designed to manipulate the <strong>Document Object Model (DOM)</strong>, which represents the structure of an HTML document. This capability enables developers to dynamically modify the content, structure, and style of web pages based on user interactions. JavaScript interacts closely with HTML elements, allowing developers to respond to events such as button clicks, form submissions, and user input, thereby creating a dynamic and engaging user experience.</p><p>JavaScript code is typically embedded within HTML documents using the <code>&lt;script&gt;</code> tag. This tag can be placed in the <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code> section of the document. As the browser parses the HTML, it executes the JavaScript code, enabling developers to perform various tasks, from simple manipulations to complex asynchronous operations.</p><p>One of the key strengths of JavaScript lies in its ability to facilitate <strong>asynchronous programming</strong>. Through features like callbacks, Promises, and the <code>async/await</code> syntax, developers can perform tasks such as fetching data from servers without blocking the execution of other code. This asynchronous nature contributes to the creation of fast and responsive web applications.</p><p>Additionally, JavaScript seamlessly integrates with <strong>Cascading Style Sheets (CSS)</strong> to dynamically update the visual presentation of web pages. By manipulating CSS properties, developers can create smooth transitions, animations, and style changes in response to user actions, enhancing the overall aesthetics of the user interface.</p><p>The advent of <strong>HTML5</strong> has further expanded the capabilities of JavaScript, providing support for advanced features such as multimedia elements, local storage, and the Canvas API for graphics rendering. Web developers commonly leverage JavaScript to validate forms, create image sliders, implement navigation menus, and handle user authentication, among other tasks.</p><p>Popular JavaScript libraries and frameworks, such as <strong>jQuery</strong>, <strong>React</strong>, <strong>Angular</strong>, and <strong>Vue.js</strong>, offer additional tools and abstractions that streamline development tasks and enhance code organization. Furthermore, the advent of <strong>Node.js</strong> allows developers to use JavaScript on the server side, facilitating full-stack development with a unified language.</p><p>In summary, the combination of JavaScript and HTML forms the backbone of modern web development, enabling the creation of dynamic, interactive, and visually appealing web applications. Whether it's enhancing user interfaces, handling asynchronous operations, or building full-stack applications, JavaScript remains an indispensable tool for web developers seeking to deliver rich and engaging online experiences.</p>`,
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: `<p><strong>TypeScript</strong> stands as a robust and feature-rich programming language that extends the capabilities of JavaScript, introducing static typing to the dynamic world of web development. This superset of JavaScript offers developers a powerful set of tools to enhance code maintainability, scalability, and overall development experience.</p><p>At its core, TypeScript provides a type system that allows developers to define and enforce variable types during development. This early type checking helps catch potential errors before runtime, offering a level of confidence and predictability in code behavior. This is particularly valuable in larger codebases and collaborative projects where clear contracts and robust code structures are essential.</p><p>One of the key advantages of TypeScript is its seamless integration with the latest ECMAScript features. Developers can leverage modern JavaScript syntax, ensuring compatibility across various environments while benefiting from the additional features TypeScript brings to the table. The language supports concepts like interfaces, enabling the definition of custom data structures and promoting a more structured and maintainable codebase.</p><p>As developers write TypeScript code, the TypeScript compiler transpiles it into standard JavaScript, maintaining broad compatibility with all major browsers and runtime environments. This means that while developers enjoy the benefits of static typing during development, end-users experience the performance and cross-browser compatibility typical of JavaScript applications.</p><p>Tooling support is another area where TypeScript shines. With advanced autocompletion, intelligent code suggestions, and robust refactoring tools, developers can navigate and manipulate their codebase with ease. JSDoc comments further enhance code documentation, ensuring that projects remain well-documented and accessible to both current and future contributors.</p><p>Furthermore, TypeScript aligns seamlessly with popular development frameworks and libraries, offering a cohesive development ecosystem. Whether integrated into projects using React, Angular, Vue.js, or other frameworks, TypeScript provides a solid foundation for building scalable, maintainable, and high-performance web applications.</p><p>In summary, TypeScript is not merely a superset of JavaScript; it is a toolset that empowers developers to elevate their coding practices. By introducing static typing, interfaces, and advanced tooling, TypeScript fosters a development environment where code becomes more reliable, maintainable, and adaptable to the evolving needs of web development projects, regardless of their size or complexity.</p>`,
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: `<p><strong>CSS</strong> (Cascading Style Sheets) is a fundamental technology in web development that defines the presentation and layout of HTML documents. This style sheet language allows developers to control the visual aspects of a website, providing a means to create visually appealing and consistent user interfaces across different devices and screen sizes.</p><p>CSS operates by selecting HTML elements and applying styles to define attributes such as colors, fonts, spacing, and positioning. This separation of content (HTML) and presentation (CSS) facilitates efficient website maintenance and enables a responsive design approach, ensuring optimal user experiences on desktops, tablets, and smartphones.</p><p>Selectors and rules form the foundation of CSS, allowing developers to target specific HTML elements and apply styles accordingly. The cascading nature of CSS enables the combination of styles from various sources, including user stylesheets and browser defaults. This flexibility ensures adaptability and ease of customization for different design requirements.</p><p>Over time, CSS has evolved, with CSS3 introducing advanced features like animations, transitions, and flexbox layouts. Modern CSS frameworks, such as Bootstrap and Tailwind CSS, further streamline the styling process, providing pre-defined components and utilities for rapid development.</p><p>Understanding CSS is essential for front-end developers seeking to create visually engaging and user-friendly websites. Mastery of CSS empowers developers to implement responsive designs, optimize page loading speeds, and enhance overall user satisfaction with a seamless and visually appealing web experience.</p><p>In summary, <strong>CSS</strong> plays a crucial role in web development by enabling developers to control the presentation of HTML content. Its adaptability, ease of use, and continuous evolution make it an indispensable tool for crafting aesthetically pleasing and functional websites.</p>`,
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: `<p><strong>HTML</strong> (Hypertext Markup Language) serves as the foundational markup language for creating the structure of web pages. Developed by Tim Berners-Lee, HTML allows developers to define and organize content on the internet, providing a standardized structure that browsers interpret to display text, images, links, and multimedia elements.</p><p>HTML employs a tag-based syntax, using elements like &lt;html&gt;, &lt;head&gt;, and &lt;body&gt; to structure content hierarchically. These tags define the document's head, body, paragraphs, headings, lists, links, and more. Additionally, attributes within tags offer further customization, enhancing accessibility, and providing metadata to improve search engine optimization (SEO).</p><p>Hyperlinks, denoted by the &lt;a&gt; tag, enable navigation between pages, forming the basis of the World Wide Web. Images are embedded using the &lt;img&gt; tag, while forms, crucial for user interaction, utilize tags like &lt;form&gt;, &lt;input&gt;, and &lt;button&gt;.</p><p>HTML has evolved over the years, with HTML5 introducing new elements and attributes to support modern web development. Features like &lt;article&gt;, &lt;section&gt;, and &lt;nav&gt; contribute to semantic HTML, enhancing accessibility and making content more machine-readable.</p><p>Understanding HTML is fundamental for web developers, serving as the building block for creating websites and web applications. The combination of HTML with CSS and JavaScript allows developers to craft visually appealing, responsive, and interactive web experiences.</p><p>In summary, <strong>HTML</strong> is the backbone of the web, providing the essential structure for content dissemination. Its simplicity, versatility, and continuous evolution make it an indispensable language for developers shaping the digital landscape.</p>`,
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: `<p><strong>SASS</strong> (Syntactically Awesome Stylesheets) is a powerful extension of CSS that adds features and capabilities to streamline and enhance the styling of web documents. SASS introduces a more maintainable and organized way to write CSS, providing features like variables, nesting, and mixins that facilitate the creation of scalable and modular stylesheets.</p><p>One of SASS's key features is <strong>variables</strong>, enabling developers to define reusable values for colors, font sizes, and other properties. This promotes consistency and simplifies updates across a project by centralizing key values for easy modification.</p><p><strong>Nesting</strong> in SASS allows for a more intuitive and readable stylesheet structure by encapsulating styles within their respective parent elements. This helps reduce repetition and enhances code organization, making it easier to understand the relationship between HTML elements and their corresponding styles.</p><p><strong>Mixins</strong> in SASS provide a way to reuse and share sets of CSS declarations. This not only reduces redundancy in the code but also makes it simpler to maintain a consistent look and feel throughout a project. Mixins can be customized and applied to various elements, promoting code modularity.</p><p>SASS supports <strong>inheritance</strong>, allowing styles to be inherited from one selector to another. This feature enhances code organization and reduces the need for repetitive styling, contributing to cleaner and more maintainable stylesheets.</p><p>SASS files are written with a <strong>.scss</strong> extension, and the SASS compiler translates them into standard CSS files. This ensures compatibility with all browsers and maintains the flexibility and portability of CSS, making it easy to integrate SASS into existing projects.</p><p>Whether working on small projects or large-scale applications, SASS empowers developers to write more efficient and maintainable stylesheets, ultimately improving the overall development workflow and the quality of the resulting web pages.</p><p>In summary, <strong>SASS</strong> enriches the styling capabilities of CSS by introducing features that enhance maintainability, modularity, and organization in web development projects.</p>`,
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description: `<p><strong>Tailwind CSS</strong> is a utility-first CSS framework that streamlines the process of styling web applications by providing a comprehensive set of pre-defined utility classes. Unlike traditional CSS frameworks, Tailwind embraces a low-level, utility-first approach, allowing developers to compose styles directly in the HTML, resulting in highly customizable and maintainable stylesheets.</p><p>The foundation of Tailwind CSS lies in its extensive set of <strong>utility classes</strong>, covering aspects like margins, padding, typography, colors, and more. These utility classes can be directly applied to HTML elements, enabling developers to rapidly prototype and style without the need to write custom CSS.</p><p>By using a utility-first approach, Tailwind CSS promotes a consistent and modular design system. Developers can easily apply responsive design principles using classes like <strong>sm:</strong> (small screens), <strong>md:</strong> (medium screens), and <strong>lg:</strong> (large screens), tailoring styles based on the device's viewport size.</p><p><strong>Customization</strong> is a key strength of Tailwind CSS. Developers can configure the framework to include or exclude specific utility classes, enabling a tailored and optimized stylesheet for each project. This flexibility ensures that Tailwind adapts seamlessly to diverse design requirements.</p><p>Despite its utility-first nature, Tailwind CSS encourages <strong>component-based development</strong>. Developers can create reusable components by combining utility classes, fostering code organization and promoting the creation of a consistent design language throughout a project.</p><p>Integrating Tailwind CSS into a project is straightforward, as it can be installed via npm or included via a CDN. The framework is highly compatible with modern JavaScript frameworks and build tools, making it a versatile choice for a wide range of web development projects.</p><p>In summary, <strong>Tailwind CSS</strong> revolutionizes the CSS landscape by providing a utility-first framework that simplifies and accelerates the styling process, offering a balance between flexibility and rapid development for modern web applications.</p>`,
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: `<p><strong>React.js</strong> is a declarative, efficient, and flexible JavaScript library for building user interfaces. Developed and maintained by Facebook, React.js has become a cornerstone in modern front-end development, enabling developers to create interactive and scalable web applications with ease.</p><p>At the heart of React.js is the concept of <strong>components</strong>. Components are reusable and self-contained building blocks that encapsulate specific functionalities and user interface elements. This modular approach enhances code organization, encourages code reuse, and simplifies maintenance, making React.js ideal for both small projects and large-scale applications.</p><p>React.js utilizes a <strong>virtual DOM (Document Object Model)</strong> to efficiently update and render user interfaces. When data changes, React.js compares the virtual DOM with the real DOM, determining the most efficient way to update the user interface. This results in improved performance and a more responsive user experience, especially in applications with dynamic and frequently changing data.</p><p>The library embraces a <strong>unidirectional data flow</strong> model, allowing for predictable state management. Data flows in a single direction, from parent to child components, making it easier to trace and debug application state. React.js also provides a state management mechanism, enabling developers to manage and update application state in a controlled manner.</p><p>React.js supports the use of <strong>JSX (JavaScript XML)</strong>, a syntax extension that allows developers to write HTML-like code directly within JavaScript files. JSX simplifies the creation of component structures and enhances the readability of code. Babel, a popular JavaScript compiler, transpiles JSX into standard JavaScript that browsers can understand.</p><p>With a vibrant ecosystem and a robust community, React.js is often complemented by additional tools and libraries such as <strong>React Router</strong> for handling navigation, <strong>Redux</strong> for advanced state management, and <strong>React Hooks</strong> for managing component-level state and side effects.</p><p>Whether building single-page applications or integrating React.js into existing projects, the library's flexibility, performance optimizations, and focus on developer experience make it a go-to choice for front-end developers seeking to create dynamic and engaging user interfaces.</p><p>In summary, <strong>React.js</strong> revolutionizes front-end development by offering a powerful, component-based architecture, efficient rendering through the virtual DOM, and a unidirectional data flow model, making it a versatile and widely adopted library for building modern web applications.</p>`,
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'white',
		description: `<p><strong>Next.js</strong> is a React-based web framework that simplifies and enhances the process of building modern web applications. Developed with the principles of simplicity, performance, and developer experience in mind, Next.js extends React.js by providing a robust set of tools for server-side rendering, static site generation, and efficient client-side navigation.</p><p>One of the key features of Next.js is its built-in support for <strong>server-side rendering (SSR)</strong>. SSR allows web pages to be rendered on the server before being sent to the client, resulting in faster initial page loads and improved search engine optimization (SEO). This is particularly beneficial for content-rich and dynamic web applications.</p><p>Next.js also offers <strong>static site generation (SSG)</strong>, enabling developers to pre-render pages at build time. This approach generates static HTML files for each page, providing faster load times and optimal performance. SSG is well-suited for content that doesn't change frequently, offering a balance between dynamic content and improved performance.</p><p><strong>Client-side navigation</strong> in Next.js is seamlessly integrated, making it possible to create smooth, single-page applications (SPAs) with minimal effort. The framework's <strong>automatic code splitting</strong> ensures that only the necessary JavaScript is loaded for each page, optimizing performance by reducing initial bundle sizes.</p><p>Next.js simplifies <strong>data fetching</strong> by providing a variety of methods, such as <code>getStaticProps</code>, <code>getServerSideProps</code>, and <code>getInitialProps</code>, allowing developers to fetch data at build time, runtime, or server-side, depending on the specific requirements of the application.</p><p>The framework's <strong>file-system-based routing</strong> eliminates the need for complex configuration, enabling developers to create a folder and file structure that directly corresponds to the application's routes. This approach enhances project organization and readability.</p><p>Next.js is often used in conjunction with <strong>React components</strong>, taking advantage of React's component-based architecture. With its thriving community, detailed documentation, and support for modern web development practices, Next.js has become a popular choice for building scalable and performant web applications.</p><p>In summary, <strong>Next.js</strong> combines the power of React.js with efficient server-side rendering and static site generation, offering a versatile and developer-friendly framework for creating high-performance web applications with enhanced SEO capabilities.</p>`,
		logo: Assets.Nextjs,
		name: 'Next JS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'express',
		color: 'green',
		description: `<p><strong>Express.js</strong> is a powerful and flexible web application framework for Node.js, designed to simplify the process of building robust and scalable web applications and APIs. As a minimalist and unopinionated framework, Express provides developers with the freedom to structure their applications and choose components that best fit their needs.</p><p>The core philosophy of Express.js revolves around creating middleware-based applications. <strong>Middleware</strong> functions in Express have access to the request and response objects and can perform tasks such as modifying request and response headers, handling authentication, or terminating the request-response cycle. This flexibility allows developers to build custom functionalities and integrate third-party middleware seamlessly.</p><p>Express.js simplifies <strong>routing</strong> by providing an intuitive and straightforward API for defining routes and handling HTTP methods. Route handlers can be implemented to respond to specific HTTP requests, making it easy to create RESTful APIs or render dynamic web pages based on user interactions.</p><p>With a focus on <strong>extensibility</strong>, Express allows developers to seamlessly integrate additional modules and packages. This extensibility is further enhanced by the vibrant ecosystem of middleware and plugins available through the npm package manager, allowing developers to add features like session management, authentication, and validation with ease.</p><p><strong>Templating engines</strong> are supported by Express, enabling dynamic content generation on the server side. Popular templating engines like EJS and Pug can be easily integrated, allowing developers to create dynamic views and render HTML based on data from the server.</p><p>Express.js is often used in combination with other technologies, such as databases (MongoDB, MySQL) and front-end libraries/frameworks (React, Angular, Vue.js). The framework's flexibility makes it a suitable choice for both small projects and large-scale applications, facilitating the development of RESTful APIs, single-page applications, and full-stack web solutions.</p><p>Additionally, Express.js supports <strong>middleware for error handling</strong>, making it possible to handle errors gracefully and improve the overall robustness of web applications. This includes middleware for handling 404 errors, as well as custom error handlers that can be tailored to specific application requirements.</p><p>In conclusion, <strong>Express.js</strong> stands as a versatile and widely adopted web application framework, offering a foundation for building scalable, extensible, and performant server-side applications and APIs in the Node.js ecosystem.</p>`,
		logo: Assets.ExpressJs,
		name: 'Express JS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'yellow',
		description: `<p><strong>MySQL</strong> stands as one of the most popular and widely-used relational database management systems (RDBMS). Developed by Oracle Corporation, MySQL is an open-source database solution that plays a crucial role in storing, managing, and retrieving data for a myriad of applications, ranging from small-scale websites to large-scale enterprise systems.</p><p>At its core, MySQL employs a <strong>client-server architecture</strong>, where a client communicates with the MySQL server to perform database operations. This separation of concerns allows for efficient data management and access, supporting concurrent connections from multiple clients.</p><p>MySQL supports the <strong>Structured Query Language (SQL)</strong>, providing a standardized language for interacting with relational databases. SQL allows developers and database administrators to define, manipulate, and query data, ensuring a consistent and powerful means of working with databases.</p><p>One of MySQL's strengths lies in its <strong>flexibility</strong> and compatibility with various platforms and programming languages. Whether integrated with PHP, Python, Java, or other languages, MySQL provides robust connectivity options, making it a versatile choice for developers working in diverse technical environments.</p><p>The <strong>transactional support</strong> in MySQL ensures data integrity and consistency, especially in scenarios where multiple operations need to be executed as a single, atomic unit. This is crucial for applications that require accurate and reliable data processing, such as financial systems and e-commerce platforms.</p><p>MySQL offers a range of <strong>storage engines</strong>, each with its own set of features and optimizations. The choice of storage engine depends on the specific requirements of the application, whether it be focused on performance, reliability, or specialized use cases like full-text searching or spatial data storage.</p><p>With a vibrant and active <strong>community</strong>, MySQL benefits from continuous development, updates, and support. The community-driven approach ensures that MySQL remains secure, efficient, and equipped with the latest features to meet the evolving needs of modern applications.</p><p>Whether employed for simple web applications, complex enterprise systems, or as part of the LAMP (Linux, Apache, MySQL, PHP/Python/Perl) stack, MySQL continues to be a reliable and scalable database solution, contributing significantly to the success of countless web and software projects.</p><p>In summary, <strong>MySQL</strong> is a powerful and versatile relational database management system, appreciated for its performance, reliability, and widespread adoption in the realm of web development and enterprise applications.</p>`,
		logo: Assets.Mysql,
		name: 'MySql',
		category: 'db'
	}),
	defineSkill({
		slug: 'wordpress',
		color: 'turquoise',
		description: `<p><strong>WordPress</strong> is a versatile and widely-used content management system (CMS) that empowers individuals and organizations to create and manage websites with ease. Initially developed as a blogging platform, WordPress has evolved into a comprehensive CMS that caters to a diverse range of web development needs.</p><p>At its core, WordPress offers a user-friendly interface that allows non-technical users to create and manage content effortlessly. The <strong>block-based editor</strong> introduced in recent versions simplifies the process of creating complex page layouts, making it accessible to users without extensive coding knowledge.</p><p>WordPress supports a vast ecosystem of <strong>themes and plugins</strong>, enabling users to customize the appearance and functionality of their websites. Themes control the visual design, while plugins extend the core functionality by adding features such as e-commerce, SEO optimization, social media integration, and more.</p><p>With a robust <strong>community</strong> and extensive <strong>documentation</strong>, WordPress provides a supportive environment for users and developers alike. This community-driven approach ensures continuous improvement, security updates, and the availability of resources for troubleshooting and learning.</p><p>WordPress is highly <strong>scalable</strong> and suitable for a range of websites, from personal blogs to large-scale enterprise solutions. Its versatility is evident in the fact that it powers a significant percentage of websites on the internet, including blogs, business websites, e-commerce platforms, and even news outlets.</p><p>For developers, WordPress offers a <strong>PHP-based template system</strong> that allows for extensive customization. Hooks, actions, and filters provide developers with the ability to modify and extend the default behavior of WordPress, creating tailored solutions that meet specific project requirements.</p><p>The CMS also includes features such as <strong>user roles and permissions</strong>, allowing administrators to control access and delegate responsibilities. This is particularly valuable for multi-user websites where content creation, editing, and administrative tasks need to be managed by different individuals or teams.</p><p>In conclusion, <strong>WordPress</strong> remains a dominant force in the world of web development, offering a user-friendly experience for content creators and a flexible platform for developers. Its extensive features, vast ecosystem, and community support make it an ideal choice for creating a wide range of websites efficiently and effectively.</p>`,
		logo: Assets.Wordpress,
		name: 'WordPress',
		category: 'framework'
	}),
	defineSkill({
		slug: 'php',
		color: 'purple',
		description: `<p><strong>PHP</strong>, a robust server-side scripting language, has established itself as a cornerstone in web development, celebrated for its versatility, intuitive syntax, and seamless integration with databases. With the ability to dynamically generate content and interact with databases, PHP empowers developers to craft interactive, feature-rich websites effortlessly.</p><p>One of PHP's notable strengths lies in its extensive community support and a wealth of resources, ensuring developers have access to a vast ecosystem of libraries, frameworks, and tools. This collaborative environment not only facilitates efficient problem-solving but also contributes to PHP's adaptability and longevity in the ever-evolving landscape of web technologies.</p><p>PHP's server-side nature enables it to handle tasks like form processing, file uploads, and session management, making it an ideal choice for building scalable and dynamic web applications. Its simplicity and ease of integration with HTML provide developers with a straightforward yet powerful tool for creating websites that respond dynamically to user interactions.</p><p>Furthermore, PHP has evolved to support modern web development practices, with frameworks like Laravel, Symfony, and CodeIgniter offering structured architectures and streamlined workflows. These frameworks enhance code organization, promote scalability, and expedite development, ensuring PHP remains a competitive choice for projects of varying complexity.</p><p>As a scripting language executed on the server, PHP delivers dynamic content to the client's browser, enabling the creation of personalized and interactive user experiences. Whether it's building e-commerce platforms, content management systems, or community forums, PHP's versatility positions it as a go-to language for developers aiming to bring their web projects to life.</p><p>In summary, PHP's enduring popularity stems from its ability to simplify server-side development, foster a collaborative community, and adapt to the evolving demands of web development. Its role in crafting dynamic, database-driven websites remains pivotal, making it an indispensable tool for developers navigating the complexities of modern web development.</p>`,
		logo: Assets.Php,
		name: 'PHP',
		category: 'pro-lang'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
