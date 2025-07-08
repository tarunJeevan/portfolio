import Personal from "@/components/personal"

export default function AboutMe() {
    return (
        <section className="pb-24 pt-32">
            <div className="container max-w-4xl items-start justify-center ">
                <h2 className="title mb-12">About Me</h2>
                <Personal />
            </div>
        </section>
    )
}