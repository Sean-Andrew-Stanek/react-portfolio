//modalData
//type: skill
//data: filtered object array of projects matching skill
//-name: name of project
//-image: image-src 
//-skills: array of skills
//-summary: short project summary
//-links: object with key being the name of the link and the value being the address (Example: repository, deployed, case-study)
//capstone: if it should be displayed under the portfolio view

/*

Base Object
{
    'name': '',
    'image': 'Under-Construction.PNG',
    'skills': ['', ],
    'summary': '',
    'links': {
        'repository': '',
        'deployed': ''
    },
    'capstone': ''
},

*/

export const projects = [
    //Pokedex Project
    {
        'name': 'Pokedex Viewer',
        'image': 'pokemonsearch.PNG',
        'skills': ['HTML', 'CSS', 'JavaScript', 'APIs', 'Bootstrap', ],
        'summary': 'Created a dynamic Pokémon information app leveraging the Pokémon API, showcasing proficiency in DOM manipulation, Ajax, and asynchronous behavior. Developed using Bootstrap, the app ensures frontloading of data for a seamless user experience—delivering instant results for all future searches.',
        'links': {
            'repository': 'https://github.com/Sean-Andrew-Stanek/pokedex-viewer',
            'deployed': 'https://sean-andrew-stanek.github.io/pokedex-viewer/'
        },
        'capstone': 'true'
    },
    //LetsMeet
    {
        'name': 'LetsMeet',
        'image': 'Under-Construction.PNG',
        'skills': ['React', 'Node', 'oAuth', 'Serverless', 'PWA', 'Jest', 'Gherkin', 'Puppeteer'],
        'summary': 'A serverless React app with OAuth integration, featuring Lambda functions for reading and organizing conference meeting times from a calendar. Implements a searchable data format and incorporated charts for a user-friendly display. Utilized a comprehensive testing approach, including Test-Driven Development (TDD), Behavior-Driven Development (BDD), and End-to-End Acceptance Tests. While the app may not boast flashy visuals, the repository reveals extensive behind-the-scenes work, resulting in a responsive, robust, and easily maintainable solution.',
        'links': {
            'repository': 'https://github.com/Sean-Andrew-Stanek/letsmeet',
            'deployed': 'https://sean-andrew-stanek.github.io/letsmeet/'
        },
        'capstone': 'true'
    },
    //Movie API, Client using React
    {
        'name': 'Movie Database, API and Client - React',
        'image': 'Under-Construction.PNG',
        'skills': ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Passport.js', 'JWT', 'bcrypt', 'React.js', 'React Bootstrap', 'JavaScript', 'HTML', 'SCSS'],
        'summary': 'Designed and implemented a Full Stack Movie Database Application, showcasing a blend of backend and frontend expertise. Leveraging Node.js and Express.js on the backend, I created RESTful API endpoints and integrated non-relational (MongoDB) databases to manage movie and user data. Robust user authentication and authorization, implemented using Passport.js and JWT, ensured secure access. On the frontend, I employed React.js and React Bootstrap for a dynamic, responsive, and visually appealing user interface. The project highlights my proficiency in technologies such as Node.js, Express.js, MongoDB, and React.js, demonstrating my ability to deliver a comprehensive and user-friendly web application.',
        'links': {
            'client repository': 'https://github.com/Sean-Andrew-Stanek/movie_api_client',
            'deployed': 'https://meek-nougat-c5e693.netlify.app/',
            'API repository': 'https://github.com/Sean-Andrew-Stanek/movie_api'
        },
        'capstone': 'true'
    },
    //Movie API, Client using Angular
    {
        'name': 'Movie Database, API and Client - Angular',
        'image': 'Under-Construction.PNG',
        'skills': ['Angular', 'Angular Material', 'TypeScript', 'RxJS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Passport.js', 'JWT', 'bcrypt'],
        'summary': 'Developed an Angular client for the Movie API, demonstrating expertise in Angular, Angular Material, and reactive programming with RxJS. The one-page layout offers a seamless user experience, presenting movie data in an intuitive interface. Leveraged Angular Material for a visually appealing and responsive design. This project highlights my proficiency in Angular development and showcases a clean and modern user interface.',
        'links': {
            'repository': 'https://github.com/Sean-Andrew-Stanek/movie_api_angular_client',
            'deployed': 'https://sean-andrew-stanek.github.io/movie_api_angular_client',
            'API repository': 'https://github.com/Sean-Andrew-Stanek/movie_api'
        },
        'capstone': 'false'
    },
    //Chatter
    {
        'name': 'Chatter - Chat App',
        'image': 'Under-Construction.PNG',
        'skills': ['React Native', 'Expo', 'Firebase', 'Node.js' ],
        'summary': 'Developed a cross-platform chat application using React Native and Expo. Chatter enables real-time text conversations, photo sharing, image capture from the camera, and location exchange. Leveraged Firebase for message storage and image hosting, ensuring seamless communication. The user-friendly interface, coupled with features like photo sharing and location sharing, provides an engaging chat experience. Proficiently used React Native, Expo, Firebase, and React Navigation, demonstrating skills in mobile app development.',
        'links': {
            'repository': 'https://github.com/Sean-Andrew-Stanek/chatter',
        },
        'capstone': 'false'
    },
    //React Portfolio
    {
        'name': 'Personal Portfolio - React',
        'image': 'Under-Construction.PNG',
        'skills': ['Node.js', 'React', 'Vite', 'JavaScript', 'SPA'],
        'summary': 'SPA Portfolio developed using React-Vise base learning to move away from Create-React-App.  The portfolio is designed to be dynamically created, modular-based where it can be modified through a few JSON files.  As my first independent project outside of the bootcamp, it was designed to shore up my biggest weakness: SCSS/CSS.',
        'links': {
            'repository': 'https://github.com/Sean-Andrew-Stanek/react-portfolio',
            'deployed': 'https://sean-andrew-stanek.github.io/react-portfolio/'
        },
        'capstone': 'true'
    },

];