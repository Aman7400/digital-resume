export default function HeroImage() {
    return (
        <section className="flex-1 flex justify-center items-center">
            <img alt="dummy profile pic" src="/dummy.jpeg" style={{
                width: 240,
                height: 240,
                borderRadius: "100%"
            }} />
        </section>
    )
}
