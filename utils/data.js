const academics = [
    {
        collegeName: 'Lovely Professional University',
        state: 'Punjab',
        courseName: 'B.Tech, Computer Science',
        startDate: 'July 2018',
        endDate: 'July 2022',
        highlights: [
            'Relevant Coursework - Data Structures, Operating Systems, Computer Networks, Databases, Software Engineering, Object - Oriented Programming',
            'Worked on Projects - Radio Transmitters, Photographer Website',
            'Been a Member Of Student Organisation - Cyberhack',
            'Participated in GeekFiesta 2019'
        ],
        grades: [
            { title: 'CGPA', grade: '7.77' }
        ]
    },
]
const technicalProfencies = {
    familiarWith: ['Git & Github', 'MongoDB', 'Postman', 'REST APIs', 'React Native', 'JSX', 'Adobe XD', 'Figma', 'Google  Suite',],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Express', 'SASS', 'Core Java', 'NextJS', 'Styled Components', 'Material UI', 'Bootstrap', 'Typescript', 'Docker', 'Chakra UI']
}

const contacts = [
    { href: "https://www.linkedin.com/in/amanks7400/", title: "amanks7400", icon: 'akar-icons:linkedin-fill' },
    { href: "https://twitter.com/strk1703", title: "strk1703", icon: 'akar-icons:twitter-fill' },
    { href: "https://github.com/Aman7400", title: "Aman7400", icon: 'akar-icons:github-fill' },
    { href: "https://goo.gl/maps/TVW66mzDf1xoFHEy5", title: "Lucknow, Uttar Pradesh", icon: 'carbon:location-heart-filled' },
    { href: "mailto:amanks7400@gmail.com", title: "amanks7400@gmail.com", icon: 'fluent:mail-16-filled' },
]

const experiences = [
    {
        position: 'Full Time',
        jobProfile: 'FULL STACK DEVELOPER',
        company: {
            name: 'Areya Technologies',
            logo: '/logos/areya-logo.jpeg',
            visitUrl: 'https://areya.tech/'
        },
        startDate: 'Jun 2022',
        endDate: 'Present',
        workedOn: [
            'Worked and developed projects on technologies like - React, Node, React Native, JavaScript, NodeJS, MongoDB etc'
        ]
    },
    {
        position: 'INTERN',
        jobProfile: 'FULL STACK DEVELOPER',
        startDate: 'July 2021',
        endDate: 'May 2022',
        company: {
            name: 'Flipstack Technologies',
            logo: '/logos/flipstack-logo.jpeg',
            visitUrl: 'https://flipstack.in/'
        },
        workedOn: [
            'Worked and developed Fintech & Dashboard applications with technologies like - React, CSS3, JavaScript, NodeJS, MongoDB etc.'
        ]
    },
    {
        position: 'INTERN',
        jobProfile: 'FULL-STACK WEB DEVELOPMENT',

        startDate: 'Jun 2020',
        endDate: 'Aug 2020',
        company: {
            name: 'Verzeo E-learning',
            logo: '/logos/verzeo-logo.jpeg',
            visitUrl: 'https://www.verzeo.in/'
        },
        workedOn: [
            'Worked and developed projects on technologies like - HTML5, CSS3, JavaScript, JQuery, NodeJS'
        ]
    }
]

const projects = [
    {
        title: 'Instant Medical Support (IMS)',
        description: 'Instant medical Support Web Application powered by Next JS',
        visitUrl: 'https://github.com/Aman7400/ims',
        technologies: ['Javascript, React, Next,Chakra UI']
    },
    {
        title: 'Rockstar Pay',
        description: 'Banking App powered by Next JS',
        visitUrl: 'https://github.com/Aman7400/rockstar-pay',
        technologies: ['Javascript, React, Next, Chakra UI']
    },
    {
        title: 'Shopping Mobile App',
        description: 'A Client Side React Application for Creating Quiz and Tests',
        visitUrl: 'https://github.com/Aman7400/shopping-app',
        technologies: ['Javascript, React Native, React Native Paper']
    },
    {
        title: 'Social Media Mobile App',
        description: 'Social Media App UI in React Native',
        visitUrl: 'https://github.com/Aman7400/social-media-ui ',
        technologies: ['Javascript, React,React Native, Expo, React Native Paper']
    }

]

const viewAll = {
    projectsUrl : 'https://github.com/Aman7400?tab=repositories',
    experiencesUrl : 'https://www.linkedin.com/in/amanks7400/'
}


export { technicalProfencies, academics, contacts, experiences, projects, viewAll }