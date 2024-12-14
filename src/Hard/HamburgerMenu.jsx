import {MotionConfig, motion} from 'framer-motion'
import React, {useState} from 'react'

const variants = {
    top: {
        closed: {
            y: 0,
            rotate: 0
        },
        open: {
            y: [0, "300%", null],
            rotate: [null, null, 45],
        }
    },
    center: {
        closed: {
            y: 0,
            rotate: 0
        },
        open: {
            y: [null, null, null],
            rotate: [null, null, -45]
        }
    },
    bottom: {
        closed: {
            x: 0,
            y: 0,
            rotate: 0
        },
        open: {
            x: [0, "-50%", null],
            y: [0, "-300%", null],
            rotate: [null, null, 45]
        }
    },
}

function HamburgerMenu() {
    const [active, setActive] = useState(false)

    return (
        <div className='hamb-background'>
            <MotionConfig transition={{
                duration: 0.6,
                ease: "easeInOut"
            }}>
                <motion.button
                    className="hamb-menu"
                    initial="closed"
                    animate={active ? "open" : "closed"}
                    onClick={() => setActive(!active)}
                    style={{
                        scale: 2
                    }}
                >
                    <div>
                        <motion.span
                            className='top-line'
                            variants={variants.top}
                        />
                        <motion.span
                            className='center-line'
                            variants={variants.center}
                        />
                        <motion.span
                            className='bottom-line'
                            variants={variants.bottom}
                        />
                    </div>
                </motion.button>
            </MotionConfig>
        </div>
    )
}

export default HamburgerMenu