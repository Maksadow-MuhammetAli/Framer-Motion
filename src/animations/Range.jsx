import {motion, useAnimate, useMotionValue, useTransform} from 'framer-motion'
import React, {useEffect, useRef, useState} from 'react'


function Range() {
    const pathLength = useMotionValue(0)
    const [progress, setProgress] = useState(0)
    pathLength.set(progress / 100)
    return (
        <div className='wrapper'>
            {/* <motion.svg width="240" height="240"
                transition={{type: "spring"}}>
                <circle cx="120" cy="120" r="100"
                    className='out-range-progress' />
                <motion.circle
                    cx="120" cy="120" r="100"
                    className="range-progress"
                    initial={{strokeDasharray: "12 34 56 89"}}
                    animate={{
                        strokeDasharray: ["34 0 12 23", "59 13 0 134", "56 45 90 170"]
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 5
                    }}
                />
            </motion.svg> */}

            <motion.svg width={250} height={250} >
                <circle cx={125} cy={125} r={110}
                    className='out-range-progress' />

                <motion.circle
                    cx={125} cy={125} r={110}
                    className="range-progress"
                    style={{
                        rotate: -90,
                        strokeLinejoin: "round",
                        pathLength,
                    }}
                />
            </motion.svg>

            <input value={pathLength.get() * 100} onChange={(e) => setProgress(Number(e.target.value))} type="range" className='circular-range' />
        </div>
    )
}

export default Range