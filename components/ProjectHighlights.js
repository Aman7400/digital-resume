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
                <h1 className="font-mono font-extrabold text-lg">Project Highlights</h1>
                {
                    projects.length > 2 &&
                    <Link target="_blank" href={viewAll.projectsUrl}>
                        <h1 className="font-mono font-light hover:font-semibold text-sm cursor-pointer">
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
                <Link target="_blank" href={visitUrl}>
                    <h1 className=" font-mono font-bold">{title}</h1>
                </Link>
            </section>
            <h3 className="font-mono text-sm">{description}</h3>
            <ul >
                {
                    technologies.map((technology, i) => <li className="mb-1 italic font-mono font-thin text-sm" key={i}>{technology}</li>)
                }
            </ul>
        </section>
    )
}
