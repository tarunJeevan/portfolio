

// TODO: Add more achievements
const achievmentsList = [
    {
        metric: 'Projects',
        value: '5+'
    },
    {
        metric: 'Awards',
        value: '3'
    },
    {
        metric: 'Years',
        value: '3+'
    },
    {
        metric: 'Projects',
        value: '5+'
    }
]

export default function AchievementsSection() {

    return (
        <section className="py-8 px-4 xl:gap-16 xl:px-16 sm:py-16">
            <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
                {achievmentsList.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center mx-4">
                            <h2 className="text-white text-4xl font-bold">
                                {item.value}
                            </h2>
                            <p className="text-base text-[#ADB7BE]">
                                {item.metric}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
