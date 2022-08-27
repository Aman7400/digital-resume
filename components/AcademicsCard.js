import Link from "next/link"
import { academics } from "../utils/data"

export default function AcademicsCard() {
    return (

        <section>
            <h1 className="font-mono font-extrabold text-lg text-heading mb-2">Academic Profile</h1>
            <section>

                {
                    academics.map((academic, i) => <AcademicItemCard {...academic} key={i} />)
                }

            </section>
        </section>

    )
}


function AcademicItemCard({ college, state, courseName, startDate, endDate, highlights, grades }) {
    return (
        <section className="mb-4">
            {/* Position */}


            <h1 className="font-mono font-bold text-heading2 drop-shadow-md">
                <Link target="_blank" href={college.visitUrl}>
                    {college.name}
                </Link>
            </h1>


            <h2 className="font-mono font-semibold text-subHeading text-sm">{courseName}</h2>
            <p className="text-xs font-mono text-subHeading mb-2" >{state} ({startDate} - {endDate})</p>
            <ul className="list-disc list-inside text-subHeading italic font-mono font-thin text-xs">
                {
                    highlights.map((highlight, i) => <li className="mb-2  drop-shadow-lg " key={i}>{highlight}</li>)
                }
                {
                    grades.map(({ title, grade }, i) =>
                        <li className=" mr-1" key={i}>
                            <span>{title}:</span>
                            <span>{grade}</span>
                        </li>)
                }
            </ul>
        </section>
    )
}


