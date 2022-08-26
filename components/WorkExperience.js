import { experiences } from "../utils/data"

export default function WorkExperience() {
    return (
            <section className="items-center ">
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
    )
}



function WorkExperienceListItem({ position, jobProfile, companyName, startDate, endDate, workedOn }) {
    return (
        <section className="mb-4">
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