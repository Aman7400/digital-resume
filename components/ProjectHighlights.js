import Link from 'next/link';
import React from 'react'
import { projects, viewAll } from '../utils/data';

//  ? CHECK FOR GITHUB API TO FETCH REAL TIME PROJECT STATS


export default function ProjectHighlights() {
    let filteredProjects = projects;
    if (projects.length > 4) {
        filteredProjects = projects.slice(0, projects.length - 1)
    }
    return (
        <section className="items-center ">
            <section className="flex flex-row mb-4 items-center justify-between">
                <h1 className="font-mono font-extrabold text-lg text-heading">Project Highlights</h1>
                {
                    projects.length > 2 &&
                    <Link target="_blank" href={viewAll.projectsUrl}>
                        <h1 className="font-mono text-heading2 font-light hover:font-semibold text-sm cursor-pointer">
                            View All
                        </h1>
                    </Link>

                }
            </section>
            <section>
                {
                    filteredProjects.map((project, i) =>
                        <ProjectCardItem key={i} {...project} />)
                }
            </section>
        </section>
    )
}

function ProjectCardItem({ title, description, visitUrl, technologies }) {
    return (
        <section className="mb-4">
            <section className="flex flex-row items-center cursor-pointer">

                <h1 className=" font-mono font-bold text-heading2">
                    <Link target="_blank" href={visitUrl}>
                        {title}
                    </Link>
                </h1>
            </section>
            <h3 className="font-mono text-sm text-subHeading ">{description}</h3>
            <ul >
                {
                    technologies.map((technology, i) => <li className="mb-1 text-heading2 italic font-mono font-thin text-sm" key={i}>{technology}</li>)
                }
            </ul>
        </section>
    )
}
