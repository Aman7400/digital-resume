import AcademicsCard from "./AcademicsCard";
import ContactCard from "./ContactCard";
import HeroImage from "./introduction/HeroImage";
import Introduction from "./introduction/Introduction";
import PersonalSummary from "./introduction/PersonalSummary";
import TechnicalProfency from "./TechnicalProfency";
import WorkExperience from "./WorkExperience";

export default function Resume() {
    return (
        <div className="w-4/6 flex-row flex p-16 bg-[#d9d9d9be] rounded-lg my-16 round-lg">
            <LayoutLeft />
            <LayoutRight />
        </div>

    )
};


function LayoutLeft() {
    return (
        <div className="flex-1 p-2 w-1/2 ">
            <section className="bg-[#ccc9c9de]  shadow-lg p-6">
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
            </section>
        </div>
    )
}

