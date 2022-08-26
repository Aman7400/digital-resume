/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { experiences, viewAll } from "../utils/data"

export default function WorkExperience() {
    let filteredExperiences = experiences;
    if (experiences.length > 2) {
        filteredExperiences = experiences.slice(0, experiences.length - 1)
    }
    return (
        <section className="items-center ">
            <section className="flex flex-row mb-2 items-center justify-between">
                <h1 className="font-mono font-extrabold text-lg">Work Experience</h1>
                {
                    experiences.length > 2 &&
                    <Link target="_blank" href={viewAll.experiencesUrl}>
                        <h1 className="font-mono font-light hover:font-semibold text-sm cursor-pointer">
                            View All
                        </h1>
                    </Link>
                }
            </section>
            <section>
                {
                    filteredExperiences.map((experience, i) =>
                        <WorkExperienceListItem key={i} {...experience} />)
                }
            </section>
        </section>
    )
}



function WorkExperienceListItem({ position, jobProfile, company, startDate, endDate, workedOn }) {
    return (
        <section className="mb-4">
            {/* Position */}
            <section className="flex flex-row items-center cursor-pointer mb-1">
                <img className="shadow-md grayscale hover:grayscale-0 " alt="dummy profile pic" src={company.logo} style={{
                    width: 36,
                    height: 36,
                    borderRadius: "100%"
                }} />

                <Link target="_blank" href={company.visitUrl}>
                    <section className="ml-2">

                        <h1 className=" font-mono font-bold">{company.name}</h1>
                        <h1 className=" font-mono text-xs  font-bold">{jobProfile}</h1>
                    </section>
                </Link>

            </section>
            {/* Company , Time Line */}
            <h3 className="font-mono text-xs">{position}, <span className="text-xs" >{startDate} - {endDate}</span> </h3>
            <ul >
                {
                    workedOn.map((w, i) => <li className="mb-1 italic font-mono font-thin text-sm" key={i}>{w}</li>)
                }
            </ul>
        </section>
    )
}