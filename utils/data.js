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
    { href: "www.facebook.xom", title: "www.facebook.xom", icon: 'akar-icons:twitter-fill' },
    { href: "www.facebook.xom", title: "www.facebook.xom", icon: 'akar-icons:linkedin-fill' },
    { href: "www.facebook.xom", title: "www.facebook.xom", icon: 'akar-icons:github-fill' },
    { href: "www.facebook.xom", title: "www.facebook.xom", icon: 'carbon:location-heart-filled' },
    { href: "www.facebook.xom", title: "www.facebook.xom", icon: 'fluent:mail-16-filled' },
]

const experiences = [
    {
        position: 'Full Time',
        jobProfile: 'FULL STACK DEVELOPER',
        company: {
            name: 'Areya Technologies',
            logo: '/areya-logo.jpeg',
            visitUrl:'https://areya.tech/'
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
            logo: '/flipstack-logo.jpeg',
            visitUrl:'https://flipstack.in/'
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
            logo: '/verzeo-logo.jpeg',
            visitUrl:'https://www.verzeo.in/'
        },
        workedOn: [
            'Worked and developed projects on technologies like - HTML5, CSS3, JavaScript, JQuery, NodeJS'
        ]
    }
]

export { technicalProfencies, academics, contacts, experiences }