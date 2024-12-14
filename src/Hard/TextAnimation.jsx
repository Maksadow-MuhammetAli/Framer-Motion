import {motion} from 'framer-motion'
import React from 'react'

const duration = 0.25
const delay = 0.025

function Text({children}) {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href="#">

            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        style={{display: "inline-block"}}
                        variants={{
                            initial: {y: 0},
                            hovered: {y: "-100%"}
                        }}
                        transition={{
                            duration: duration,
                            delay: delay * i,
                            ease: "easeInOut"
                        }}
                        key={i}>{l}</motion.span>
                ))}
            </div>

            <div style={{position: "absolute", inset: 0}}>
                {children.split("").map((l, i) => (
                    <motion.span
                        style={{display: "inline-block"}}
                        variants={{
                            initial: {y: "100%"},
                            hovered: {y: 0}
                        }}
                        transition={{
                            duration: duration,
                            delay: delay * i,
                            ease: "easeInOut"
                        }}
                        key={i}>{l}</motion.span>
                ))}
            </div>
        </motion.a>
    )
}

function TextAnimation() {
    return (
        <div className='text-container'>
            <div className='text-part'>
                <Text>INSTAGRAM</Text>
                <Text>FACEBOOK</Text>
                <Text>YOUTUBE</Text>
                <Text>TWITTER</Text>
            </div>
        </div>
    )
}

export default TextAnimation