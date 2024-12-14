import {motion, useMotionValue, useSpring, useTransform} from 'framer-motion'
import React from 'react'

function Hover3D() {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springX = useSpring(x)
    const springY = useSpring(y)

    const rotateX = useTransform(springY, [-0.5, 0.5], [17.5, -17.5])
    const rotateY = useTransform(springX, [-0.5, 0.5], [-17.5, 17.5])
    const onMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        console.log(rect)

        const xPct = (mouseX / width) - 0.5
        const yPct = (mouseY / height) - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const onMouseLeave = () => {
        x.set(0)
        y.set(0)
    }
    return (
        <div
            className='hover3d'>
            <motion.div className='hover-card'
                style={{
                    rotateX,
                    rotateY
                }}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
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

export default Hover3D