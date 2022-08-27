/* eslint-disable @next/next/no-img-element */
export default function HeroImage() {
    return (
        <section className=" flex justify-center h-64 shadow-lg w-64 cursor-pointer overflow-hidden mx-auto rounded-full items-center mb-8">
            <img alt="dummy profile pic" className="hover:scale-105 transition-all ease-in-out " src="/dummy.jpeg"  />
        </section>
    )
}
