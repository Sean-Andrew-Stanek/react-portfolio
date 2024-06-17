//modalData
//type: 'case study'
//data: filtered object array of projects matching skill
//-name: name of project exactly as it is in portfolio-projects.js

/*
Base Object
{
    'name': '',
    'pages': [
        {   
            'title': '',
            'text': '',
            'images': ['Under-Construction.png'],
        }
    ]
},
*/

export const caseStudies = [
    {
        name: 'Personal Portfolio - React',
        pages: [
            {
                title: 'Goals - Personal Branding with a Unique Touch',
                text: 'The primary goal for developing my professional web portfolio was to establish a distinctive online presence that accurately reflects my skills and personality as a FullStack Developer. I aimed to create a website that was not just functional but also engaging and unique. This endeavor was about blending creativity with practicality, ensuring that the final product would stand out in the competitive tech landscape.',
                images: ['case-study-1/CS-Intro.png'],
            },
            {
                title: 'Goals - Mastery of Modern Web Technologies',
                text: 'In the spirit of personal and professional growth, I chose to develop the portfolio using React combined with Vite. This decision was driven by the desire to leverage React\'s component-based architecture for efficient UI development and Vite\'s optimized build tool capabilities for a faster and smoother development experience. My focus was to deepen my understanding and proficiency in using these modern web technologies to their full potential.',
                images: ['case-study-1/Skill-List-Code.png'],
            },
            {
                title: 'Goals - Skill Enhancement in Styling with SCSS and CSS',
                text: 'A specific technical goal was to enhance my capabilities in styling using SCSS, alongside reinforcing my foundational knowledge of CSS. This initiative was driven by a strong desire for self-improvement and mastery over detailed web styling techniques. The project provided an ideal platform to experiment with SCSS features such as variables, and nested rules, while also focusing on using CSS transitions to create smooth visual effects. This dual focus not only improved the aesthetics of the site but also empowered me to implement responsive and maintainable design practices that are crucial for professional web development.',
                images: ['case-study-1/Clamp-Inception.png'],
            },
            {
                title: 'Goals - Dynamic Content Generation',
                text: 'To further the technical sophistication of the project, I aimed to design the website\'s content to be dynamically generated from a structured object within a modifiable file. This structure was chosen to ensure that the data is easily accessible and straightforward to edit or expand upon. By organizing the content this way, I created a system that not only supports easy updates but also facilitates quick additions, making the website highly adaptable for future changes. This approach underscores my ability to engineer flexible, maintainable code structures that enhance content management efficiency.',
                images: ['case-study-1/Dynamic-Content.png'],
            },
            {
                title: 'Process - Project Setup and Tools',
                text: 'In the initial stage of my project, I opted for React with Vite as my primary framework, choosing it over Create-React-App despite it being everyone\'s favorite first React boilerplate. To manage the project\'s tasks and timelines effectively, I used Ora, which helped streamline the planning and execution phases. For developing a unique and personalized theme, I utilized tools like GIMP for image manipulation and leveraged DALL-E and ChatGPT for creative assets and text generation, respectively. This combination of advanced tools enabled a robust foundation for building a distinctive web application.',
                images: ['case-study-1/Gimp-Drake.png'],
            },
            {
                title: 'Process - Development Practices and Mentorship',
                text: 'A significant challenge was crafting a responsive design suitable for various devices. I employed CSS techniques such as position: absolute and clamp() functions extensively to ensure flexibility and accuracy across different screen sizes. This approach not only made the design responsive but also simplified the adaptation process, which proved to be more straightforward than anticipated.',
                images: ['case-study-1/CSS-Display.png'],
            },
            {
                title: 'Process - Development Practices and Mentorship',
                text: 'Throughout the development process, I engaged with experienced mentors who provided crucial insights into best practices for web performance, particularly in areas like image loading and positioning. Their guidance was instrumental in refining my approach to these technical aspects, ensuring the application was optimized for speed and efficiency. Moreover, I focused on creating a navigation structure that was both unique and user-friendly, encouraging exploration through intuitive design elements.',
                images: ['case-study-1/Moving-Arrows.gif'],
            },
            {
                title: 'Process - Scalability and Maintenance',
                text: 'To facilitate future scalability and maintenance, I designed the application\'s architecture to dynamically generate pages from JSON or JavaScript objects. This method allows for easy updates and customization of content, making it straightforward to repurpose the portfolio for other users, albeit with some adjustments needed for personalized art assets. By using technologies such as React, SCSS, JavaScript, and Node.js, alongside version control practices, I ensured that the application was not only maintainable but also up-to-date with current development standards.',
                images: ['case-study-1/Dynamic-Create-Portfolio.png'],
            },
            {
                title: 'Results - Achievements and Aesthetic Appeal',
                text: 'The project delivered a highly responsive, visually attractive portfolio website, enriched with interactive features such as animations, hover effects, and transitions to guide users effortlessly. Initially, I chose Vite for its simplicity and fast setup, which proved beneficial for rapid development. However, I am increasingly interested in exploring Next.js for its robust capabilities, including server-side rendering and static site generation, to further enhance my future projects. The possibility of experimenting with Next.js underscores my desire to broaden my technical repertoire and embrace more complex frameworks.',
                images: ['case-study-1/Responsive.png'],
            },
            {
                title: 'Results - Feedback Integration and Learning',
                text: 'Collecting feedback from a diverse group—peers, family, and students—was instrumental in refining the site’s design and usability. This process was a practical lesson in the importance of community feedback in web development, teaching me to value diverse opinions and to use them as a critical tool for iterative improvement. The feedback not only brought about significant enhancements but also deepened my understanding of user-centered design.',
                images: ['case-study-1/Communication.png'],
            },
            {
                title: 'Results - Reflections and Future Directions',
                text: 'Initiating the project with a strong emphasis on accessibility and proper code structuring, I realized the importance of maintaining these standards amidst the temptation to focus solely on complex coding. This experience reinforced the need for discipline in managing both the micro and macro aspects of software development. Moreover, working solo highlighted the potential benefits of collaborative work, prompting me to seek future opportunities for teamwork to enhance code readability and project scalability.',
                images: ['case-study-1/Collaborate.png'],
            },
        ],
    },
    {
        name: 'Portfolio Chatbot',
        pages: [
            {
                title: 'Project Overview',
                text: 'The Portfolio Chatbot is a Python-based, Azure Functions-hosted serverless architecture.  It packages the request and then queries the OpenAI API sending back a formatted response',
                images: ['case-study-3/architecture.png'],
            },
            {
                title: 'Goals and Objectives',
                text: 'A personal project, collaboration was my primary goal.  Jeriko Carrera, a fellow developer, and I worked together to build this project.  The secondary goal was to learn basic Python.  Later, Azure Functions were added as a learning objective.',
                images: ['case-study-3/chatting.png'],
            },
            {
                title: 'Starting with Flask',
                text: 'Initially, we set up the function with the Flask library.  Next, we set up a frontend to test how different API calls would work.  Structuring the JSON object sent to the OpenAI API was an organic and iterative process, often resulting in many amusing outcomes.',
                images: ['case-study-3/amusing-chatbot.png'],
            },
            {
                title: 'Porting to Azure Functions',
                text: 'Realizing that setting up a serverless architecture would be better than using an EC2 server, we ported the function to Azure Functions. We chose Azure Functions over AWS Lambda to gain experience with the Microsoft Cloud.',
                images: ['case-study-3/azure-code.png'],
            },
            {
                title: 'Deploying and linking into the portfolio',
                text: 'After extensive tests, we deployed the function into the Azure portal.  We then linked the function into the portfolio.  The experience gave us a practical tool along with a great new toolset.',
                images: ['case-study-3/Chatbot.png'],
            },
        ],
    },
    {
        name: 'Movie Database - React',
        pages: [
            {
                title: 'Solvable Challenge',
                text: 'As one of my first full-stack projects, I chose to learn React and Angular in parallel reusing the backend to clarify the comparison.  This project demonstrates how much I have grown as a developer as it was my first full-stack JavaScript project.',
                images: ['case-study-2/AngularVsReact.png'],
            },
            {
                title: 'Objective, Roles and Goals',
                text: 'The task was scheduled to take six weeks part-time but was successfully created in just over five weeks. The tech stack included Node.js with Visual Studio, MongoDB for the database, and, as mentioned, Angular and React for the front end. I used React-Bootstrap and Angular Material for a quick and simple UI. The application was initially hosted on Heroku and GitHub, with plans to migrate to AWS.',
                images: ['case-study-2/TechTools.png'],
            },
            {
                title: 'Setting up the backend',
                text: 'MongoDB and Express with Node.js was used for the backend.  I implemented Passport, bcrypt, and JWT for security, and verified endpoints and security with Postman. A challenge was to use the security libraries as I was unwilling to simply plug and play and instead spent a lot of time understanding what protected the user\'s data.',
                images: ['case-study-2/backendcode.png'],
            },
            {
                title: 'Creating the frontend',
                text: 'I used React, React-Bootstrap, Angular, Angular Material, and Node.js, with PowerShell and Visual Studio. Postman helped identify backend errors. Learning JSX and TypeScript was challenging initially, as were useState and useEffect. Deployment issues with Angular were resolved via the Discord community, and major React bugs were fixed with ChatGPT. Dealing with high-latency networks required creating a frontend to handle timeouts.',
                images: ['case-study-2/SampleCode.png'],
            },
            {
                title: 'Conclusion and Final Remarks',
                text: 'React and Angular, while both effective, take different approaches. React\'s freeform development allows for personal coding style, making it ideal for solo projects, while Angular\'s structured, opinionated framework is better for collaborative settings due to its ease of comprehension. Using both provided invaluable insights into their unique strengths and nuances, enhancing my overall development skills.',
                images: ['case-study-2/FileStructure.png'],
            },
        ],
    },
];
