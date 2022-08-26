export default function WorkExperience() {
    return (
        <div className="flex-1 p-2">
            <section className="p-4 pt-0 items-center ">
                <section className="flex flex-row mb-2 items-center justify-between">
                    <h1 className="font-mono font-extrabold text-lg">Work Experience</h1>
                    {
                        experiences.length > 2 &&
                        <h1 className="font-mono font-light hover:font-semibold text-sm cursor-pointer">
                            View All
                        </h1>
                    }
                </section>
                <section>
                    {
                        experiences.map((experience, i) =>
                            <WorkExperienceListItem key={i} {...experience} />)
                    }
                </section>
            </section>
        </div>
    )
}

const experiences = [
    {
        position: 'INTERN',
        jobProfile: 'FULL-STACK WEB DEVELOPMENT',
        companyName: 'Flipstack Technologies',
        startDate: 'July 2021',
        endDate: 'May 2022',
        workedOn: [
            'Worked and developed Fintech & Dashboard applications with technologies like - React, CSS3, JavaScript, NodeJS, MongoDB etc.'
        ]
    },
    {
        position: 'INTERN',
        jobProfile: 'FULL-STACK WEB DEVELOPMENT',
        companyName: 'Verzeo E-learning',
        startDate: 'Jun 2020',
        endDate: 'Aug 2020',
        workedOn: [
            'Worked and developed projects on technologies like - HTML5, CSS3, JavaScript, JQuery, NodeJS'
        ]
    }
]

function WorkExperienceListItem({ position, jobProfile, companyName, startDate, endDate, workedOn }) {
    return (
        <section className="mb-2">
            {/* Position */}
            <h1 className="font-mono font-bold">{position} - {jobProfile}</h1>
            {/* Company , Time Line */}
            <h3 className="font-mono text-sm">{companyName}, <span className="text-xs" >{startDate} - {endDate}</span> </h3>
            <ul >
                {
                    workedOn.map((w, i) => <li className="mb-1 italic font-mono font-thin text-sm" key={i}>{w}</li>)
                }
            </ul>
        </section>
    )
}