import {Canvas} from '@react-three/fiber'
import {Stars} from "@react-three/drei"
import {color, motion, useMotionTemplate, useMotionValue, animate} from 'framer-motion'
import React, {useEffect, useState} from 'react'

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

function Aurora() {
    useEffect(() => {
        animate(color, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])

    const color = useMotionValue(COLORS[0])
    const background = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`

    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0 0 10px ${color}`

    return (
        <motion.div
            style={{
                background
            }}
            className='aurora'>

            <div className='aurora-content'>
                <div>Demo is Live</div>
                <h1>Build An Animated Aurora Effect with Framer Motion</h1>
                <p>Today we'll break down some wizardry from the Sidebar website! We'll rebuild the effect with ReactJS, TailwindCSS and Framer Motion, then add our own twist with a little bit of ThreeJS.</p>
                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 1}}
                    transition={{
                        duration: 0.2
                    }}
                    style={{
                        border,
                        boxShadow
                    }}
                >Start for Free</motion.button>
            </div>

            <div style={{position: "absolute", inset: 0}}>
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2} />
                </Canvas>
            </div>

        </motion.div>
    )
}

export default Aurora