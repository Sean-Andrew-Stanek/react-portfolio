//Global Strings for easy editing

// Main View
export const mainViewStrings = {
    'greeting': 'Stay a while and listen!',
    'body': 'I am a web designer and programmer coming from veterancy in the teaching field.  With skills used in MERN / MARN stacks ' +
    'as well as skills ranging from C# to GIMP and AWS, I am prepared for any technical challenge.  Years of working with young children ' +
    'has given me soft-skills such as problem solving, empathy and team-communication.',
    'closing': 'Click the buttons above to start to see how I can help you realize your projects.  You can also click the buttons below to contact me.'
};

export const skills = {
    'frontEndSkills': [
        'HTML', 'CSS', 'JavaScript', 'APIs', 'Bootstrap'
    ],
    'backEndSkills': [
        'JavaScript', 'Express', 'AWS EC2'
    ],
    'dataSkills': [
        'MongoDB', 'AWS S3'
    ],
    'devSkills': [
        'skill1', 'skill2', 'skill3'
    ]
};

//modalData
//type: skill
//data: filtered object array of projects matching skill
//-name: name of project
//-image: image-src 
//-skills: array of skills
//-summary: short project summary
//-links: object with key being the name of the link and the value being the address

export const projects = [
    {
        'name': 'Pokedex Viewer',
        'image': 'react-portfolio/pokemonsearch.PNG',
        'skills': ['HTML', 'CSS', 'JavaScript', 'APIs', 'Bootstrap'],
        'summary': 'Created a dynamic Pokémon information app leveraging the Pokémon API, showcasing proficiency in DOM manipulation, Ajax, and asynchronous behavior. Developed using Bootstrap, the app ensures frontloading of data for a seamless user experience—delivering instant results for all future searches.',
        'links': {
            'repository': 'https://github.com/Sean-Andrew-Stanek/pokedex-viewer',
            'deployed': 'https://sean-andrew-stanek.github.io/pokedex-viewer/'
        }
    }
];