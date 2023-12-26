'use client'
import AnimatedNumber from "react-animated-numbers"

// TODO: Add more achievements
const achievmentsList = [
    {
        metric: 'Projects',
        prefix: '',
        value: 5,
        postfix: '+'
    },
    {
        metric: 'Awards',
        prefix: '',
        value: 3,
        postfix: ''
    },
    {
        metric: 'Experience',
        prefix: '~',
        value: 3,
        postfix: ' years'
    }
]

// FIXME: Make mobile responsive
export default function AchievementsSection() {

    return (
        <section className="py-8 px-4 xl:gap-16 xl:px-16 sm:py-16">
            <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
                {achievmentsList.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center mx-4">
                            <h2 className="text-white text-4xl font-bold flex flex-row">
                                {item.prefix}
                                <AnimatedNumber
                                    includeComma
                                    animateToNumber={item.value}
                                    locale='en-US'
                                    className='text-white text-4xl font-bold'
                                    configs={((_, index) => {
                                        return {
                                            mass: 1,
                                            friction: 100,
                                            tensions: 140 * (index + 1)
                                        }
                                    })}
                                />
                                {item.postfix}
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
