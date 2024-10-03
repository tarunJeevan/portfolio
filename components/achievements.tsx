'use client'

import AnimatedNumber from "react-animated-numbers"

// TODO: Add more achievements
const achievmentsList = [
    {
        metric: 'Projects',
        prefix: '+',
        value: 5,
        postfix: ''
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
        postfix: 'years'
    }
]

export default function Achievements() {
    return (
        <section className="pb-24 px-4 xl:gap-16 xl:px-16">
            <div className="border-[#33353F] border rounded-md py-4 px-8 flex flex-row items-center justify-between">
                {achievmentsList.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center mx-4">
                            <h2 className="text-black dark:text-white text-4xl font-bold flex flex-row">
                                {item.prefix}
                                <AnimatedNumber
                                    includeComma
                                    animateToNumber={item.value}
                                    locale='en-US'
                                    className='text-black dark:text-white text-4xl font-bold'
                                    transitions={(index) => ({
                                        // TODO: Figure out transition details
                                        // mass: 1,
                                        // friction: 100,
                                        // tensions: 140 * (index + 1)
                                        type: 'spring',
                                        duration: index + 0.3
                                    })}
                                />
                                &nbsp;
                                {item.postfix}
                            </h2>
                            <p className="text-base font-light text-muted-foreground dark:text-[#ADB7BE]">
                                {item.metric}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}