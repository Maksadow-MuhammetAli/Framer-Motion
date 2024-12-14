import {motion, useMotionTemplate, useMotionValue, useTransform} from 'framer-motion'
import React, {useEffect, useRef, useState} from 'react'

function HardButton() {
    const ref = useRef(null)
    const [isEntered, setIsEntered] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const xTransformed = useTransform(x, [0, 100], [-25, 75])
    const yTransformed = useTransform(y, [0, 100], [-50, 50])

    const left = useMotionTemplate`${xTransformed}%`
    const top = useMotionTemplate`${yTransformed}%`

    const onMouseEnter = (e) => {
        setIsEntered(true)
        const btnRect = e.target.getBoundingClientRect()

        const clientX = e.clientX
        const clientY = e.clientY

        const offsetLeft = btnRect.left
        const offsetTop = btnRect.top

        const width = btnRect.width
        const height = btnRect.height

        const xPct = (clientX - offsetLeft) / width * 100
        const yPct = (clientY - offsetTop) / height * 100

        x.set(xPct)
        y.set(yPct)
    }
    const onMouseLeave = (e) => {
        setIsEntered(false)

        const btnDataRect = ref.current.getBoundingClientRect()

        const clientX = e.clientX
        const clientY = e.clientY


        const offsetLeft = btnDataRect.left
        const offsetTop = btnDataRect.top

        const width = btnDataRect.width
        const height = btnDataRect.height

        const xPct = (clientX - offsetLeft) / width * 100
        const yPct = (clientY - offsetTop) / height * 100


        x.set(xPct)
        y.set(yPct)
    }
    return (
        <div className='button-container'>
            <button ref={ref}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className='hard-button'>
                <h3>Click Me</h3>

                <motion.div
                    style={{
                        backgroundColor: "darkorange",
                        position: "absolute",
                        borderRadius: "50%",
                        transformOrigin: "center",
                        width: 100,
                        height: 100,
                        scale: 0,
                        left,
                        top,
                        zIndex: 0,
                    }}
                    animate={{
                        scale: isEntered ? 5 : 0,
                    }}
                    transition={{
                        duration: 0.3
                    }}
                />
            </button>
        </div>
    )
}

export default HardButton