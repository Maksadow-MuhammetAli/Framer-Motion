import {motion, useMotionValue, useSpring, useTransform} from 'framer-motion'
import React from 'react'

function Hover32D() {
    const x = useMotionValue(50)
    const y = useMotionValue(50)

    const springX = useSpring(x)
    const springY = useSpring(y)

    const rotateX = useTransform(springY, [0, 100], [17.5, -17.5])
    const rotateY = useTransform(springX, [0, 100], [-17.5, 17.5])

    const onMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect()

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const width = rect.width
        const height = rect.height

        const xPct = (mouseX / width) * 100
        const yPct = (mouseY / width) * 100


        x.set(xPct)
        y.set(yPct)
    }

    const onMouseLeave = () => {
        x.set(50)
        y.set(50)
    }

    return (
        <div
            className='hover3d'
        >
            <motion.div
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                className='hover-card'
                style={{
                    rotateX,
                    rotateY
                }}
            >
                <motion.div
                    className='hover-item'
                    style={{
                        transform: "translateZ(75px)"
                    }}
                >
                    <p style={{transform: "translateZ(50px)"}}
                    >Hover Me</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hover32D