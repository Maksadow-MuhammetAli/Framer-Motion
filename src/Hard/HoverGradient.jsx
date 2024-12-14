import {motion, useMotionTemplate, useMotionValue} from 'framer-motion'
import React, {useEffect} from 'react'

function HoverGradient() {
    const x = useMotionValue(50)
    const y = useMotionValue(50)

    const onMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect()

        const xPct = (e.clientX - rect.left) / rect.width * 100
        const yPct = (e.clientY - rect.top) / rect.height * 100

        x.set(xPct)
        y.set(yPct)
    }

    const background = useMotionTemplate`radial-gradient(100% 100% at ${x}% ${y}%, #dc2430 5%,#7b4397)`
    return (
        <div className='bg-green'>
            <motion.button
                className='hover-gradient'
                onMouseMove={onMouseMove}
                style={{
                    background
                }}
            >Hover Me</motion.button>
        </div>
    )
}

export default HoverGradient