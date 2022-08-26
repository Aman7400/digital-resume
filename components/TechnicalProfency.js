import { technicalProfencies } from "../utils/data";

export default function TechnicalProfency() {
    return (

        <section className="mb-4">
            <h1 className="font-mono font-extrabold text-lg mb-2">Techical Proficiencies</h1>
            <h1 className="font-mono font-bold text-md">Skills</h1>
            <section className="mb-4">

                {
                    technicalProfencies.skills.map((items, i) =>
                        <span className="italic inline-block font-mono font-thin text-xs mr-1" key={i}>
                            {items},
                        </span>)
                }

            </section>
            <h1 className="font-mono font-bold text-md">Familiar With</h1>
            <section>

                {
                    technicalProfencies.familiarWith.map((items, i) =>
                        <span className="italic  font-mono font-thin text-xs mr-1" key={i}>
                            {items},
                        </span>)
                }

            </section>
        </section>

    )
}