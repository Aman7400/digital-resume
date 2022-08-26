export default function Academics() {
    return (

        <div className="flex-1 p-2 ">
            <section className="bg-[#ccc9c9de]  shadow-lg p-4">
                <h1 className="font-mono font-extrabold text-lg mb-2">Academic Profile</h1>
                <section>

                    {
                        academics.map((academic, i) => <AcademicCard {...academic} key={i} />)
                    }

                </section>
            </section>
        </div>
    )
}

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

function AcademicCard({ collegeName, state, courseName, startDate, endDate, highlights, grades }) {
    return (
        <section className="mb-2">
            {/* Position */}
            <h1 className="font-mono font-bold">{collegeName}</h1>
            <h2 className="font-mono font-semibold text-sm">{courseName}</h2>
            <span className="text-xs font-mono" >{state} ({startDate} - {endDate})</span>
            <ul>
                {
                    highlights.map((highlight, i) => <li className="mb-1 italic font-mono font-thin text-xs" key={i}>{highlight}</li>)
                }
            </ul>
            <ul >
                {
                    grades.map(({ title, grade }, i) =>
                        <li className="mb-1 italic font-mono font-thin text-xs" key={i}>
                            <span>{title}:</span>
                            <span>{grade}</span>
                        </li>)
                }
            </ul>
        </section>
    )
}