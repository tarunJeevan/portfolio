'use client'

import { animated, useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react'

// TODO: Add more achievements
const achievmentsList = [
    {
        metric: 'Projects',
        prefix: '',
        value: 5,
        postfix: '+'
    },
    // {
    //     metric: 'Users',
    //     prefix: '~',
    //     value: 10000,
    //     postfix: ''
    // },
    {
        metric: 'Certifications',
        prefix: '',
        value: 2,
        postfix: ''
    },
    {
        metric: 'Awards',
        prefix: '',
        value: 3,
        postfix: ''
    },
    {
        metric: 'Years',
        prefix: '',
        value: 3,
        postfix: '+'
    }
]

// Animated number component
function AnimatedNumber({ n }: { n: number }) {
    const [trigger, setTrigger] = useState(0)

    useEffect(() => {
        setTrigger(prev => prev + 1)
    }, [n])

    const props = useSpring({
        from: { value: 0 },
        to: { value: n },
        config: { mass: 1, tension: 2, friction: 1, duration: 300 }
    })

    return (<animated.span>{props.value.to((val) => Math.floor(val))}</animated.span>)
}

export default function Achievements() {
    return (
        <section className="pb-24 px-4 xl:gap-16 xl:px-16">
            <div className="border-[#33353F] border rounded-md py-4 px-8 flex flex-row items-center justify-between">
                {achievmentsList.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center mx-4">
                            <h2 className="text-black dark:text-white text-4xl font-bold flex flex-row">
                                {item.prefix}
                                <AnimatedNumber n={item.value} />
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