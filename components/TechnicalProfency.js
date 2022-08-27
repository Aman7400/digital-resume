import { technicalProfencies } from "../utils/data";

export default function TechnicalProfency() {
    return (

        <section className="mb-4">
            <h1 className="font-mono font-extrabold text-lg mb-2 text-heading">Techical Proficiencies</h1>
            <h1 className="font-mono font-bold text-md text-heading2">Skills</h1>
            <section className="mb-4">

                {
                    technicalProfencies.skills.map((items, i) =>
                        <span className="italic inline-block font-mono text-subHeading font-thin text-xs mr-1" key={i}>
                            {items},
                        </span>)
                }

            </section>
            <h1 className="font-mono font-bold text-md text-heading2">Familiar With</h1>
            <section>

                {
                    technicalProfencies.familiarWith.map((items, i) =>
                        <span className="italic text-subHeading font-mono font-thin text-xs mr-1" key={i}>
                            {items},
                        </span>)
                }

            </section>
        </section>

    )
}