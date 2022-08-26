import HeroImage from "./HeroImage";
import PersonalSummary from "./PersonalSummary";

export default function Introduction() {
    return (
        <div className="flex flex-row justify-between mb-4">
            {/* Image */}
            <HeroImage />
            
        </div>
    )
}