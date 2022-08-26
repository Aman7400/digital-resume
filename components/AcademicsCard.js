import { academics } from "../utils/data"

export default function AcademicsCard() {
    return (

        <section>
            <h1 className="font-mono font-extrabold text-lg mb-2">Academic Profile</h1>
            <section>

                {
                    academics.map((academic, i) => <AcademicItemCard {...academic} key={i} />)
                }

            </section>
        </section>

    )
}


function AcademicItemCard({ collegeName, state, courseName, startDate, endDate, highlights, grades }) {
    return (
        <section className="mb-4">
            {/* Position */}
            <h1 className="font-mono font-bold">{collegeName}</h1>
            <h2 className="font-mono font-semibold text-sm">{courseName}</h2>
            <span className="text-xs font-mono" >{state} ({startDate} - {endDate})</span>
            <ul>
                {
                    highlights.map((highlight, i) => <li className="mb-2 italic font-mono font-thin text-xs" key={i}>{highlight}</li>)
                }
            </ul>
            <ul >
                {
                    grades.map(({ title, grade }, i) =>
                        <li className="italic  font-mono font-thin text-xs mr-1" key={i}>
                            <span>{title}:</span>
                            <span>{grade}</span>
                        </li>)
                }
            </ul>
        </section>
    )
}


