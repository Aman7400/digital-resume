import Academics from "./Academics";
import ContactCard from "./ContactCard";
import Introduction from "./introduction/Introduction";
import WorkExperience from "./WorkExperience";

export default function Resume() {
    return (
        <div className="w-4/6 p-16 bg-[#d9d9d9be] rounded-lg my-16 round-lg">
            <Introduction />
            <div className="flex-row flex">
                {/* Contact Card */}
                <ContactCard />
                {/* Work Experience */}
                <WorkExperience />
            </div>
            <div className="flex-row flex">
                {/* Contact Card */}
                <Academics />
                {/* Work Experience */}
                <WorkExperience />
            </div>
        </div>

    )
};





