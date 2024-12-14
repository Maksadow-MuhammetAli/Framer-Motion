import {useMotionValue, useSpring} from 'framer-motion'
import React, {useEffect} from 'react'

const spring = {damping: 3, stiffness: 50, restDelta: 0.001};

export default function useMouseFollower(ref) {

    const xPoint = useMotionValue(0)
    const yPoint = useMotionValue(0)

    const x = useSpring(xPoint, spring)
    const y = useSpring(yPoint, spring)

    useEffect(() => {
        if (!ref.current) return

        const element = ref.current

        const findPosition = ({clientX, clientY}) => {

            const rect = element.getBoundingClientRect()

            const width = rect.width
            const height = rect.height

            const offsetLeft = element.offsetLeft
            const offsetTop = element.offsetTop

            const mouseX = clientX - offsetLeft - width / 2
            const mouseY = clientY - offsetTop - height / 2

            x.set(mouseX)
            y.set(mouseY)
        }

        window.addEventListener("mousemove", findPosition)

        return () => window.removeEventListener("mousemove", findPosition)
    }, [])

    return {x, y}
}