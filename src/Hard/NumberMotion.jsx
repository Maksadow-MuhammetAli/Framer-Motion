import {useMotion} from '@react-three/drei'
import {useAnimate, useMotionValue, useMotionValueEvent, useSpring} from 'framer-motion'
import React, {useEffect, useState} from 'react'

function NumberMotion() {
    const [scope, animate] = useAnimate()
    const [stateNumber, setStateNumber] = useState(0)

    const number = useMotionValue(0)

    useEffect(() => {
        animate(number, [0, 89], {
            ease: "circOut",
            duration: 3
        })
    }, [])

    useMotionValueEvent(number, "change", (latest) => {
        setStateNumber(Math.floor(latest))
    })

    return (
        <div className='bg-black' ref={scope}>
            <h5>
                {stateNumber}%
            </h5>
        </div>
    )
}

export default NumberMotion