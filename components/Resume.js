import AcademicsCard from "./AcademicsCard";
import ContactCard from "./ContactCard";
import HeroImage from "./HeroImage";
import PersonalSummary from "./PersonalSummary";
import ProjectHighlights from "./ProjectHighlights";
import TechnicalProfency from "./TechnicalProfency";
import WorkExperience from "./WorkExperience";

export default function Resume() {
    return (
        <div className="w-4/6 flex-row flex p-16 bg-[#52057ba8] shadow-lg rounded-lg my-16 round-lg">
            <LayoutLeft />
            <LayoutRight />
        </div>

    )
};


function LayoutLeft() {
    return (
        <div className="flex-1 p-2 w-1/2 ">
            <section className="bg-[#8a2cdc67]  shadow-lg p-6">
                {/* Profile Pic */}
                <HeroImage />
                {/* Contacts Card */}
                <ContactCard />
                {/* Academics */}
                <AcademicsCard />
                {/* Technical Proficiencies */}
                <TechnicalProfency />
            </section>
        </div>
    )
}

function LayoutRight() {
    return (
        <div className="flex-1 p-2 w-1/2 ">
            <section className="p-6">
                {/* Personal Summary */}
                <PersonalSummary />
                {/* Work Experience */}
                <WorkExperience />
                {/* Project highlights */}
                <ProjectHighlights/>
            </section>
        </div>
    )
}

