import {motion} from 'framer-motion'
import React, {useRef, useState} from 'react'

function Tab({children, setPosition}) {
    const ref = useRef(null)
    const onMouseEnter = (e) => {
        const data = ref.current.getBoundingClientRect()

        setPosition({
            left: ref.current.offsetLeft,
            width: data.width,
            opacity: 1
        })
    }
    return (
        <motion.div ref={ref}
            onMouseEnter={onMouseEnter}

            className='main'>
            {children}
        </motion.div>
    )
}

function Cursor({position}) {
    return (
        <motion.div
            style={{
                position: 'absolute',
                backgroundColor: "black",
                height: 64,
                borderRadius: "5rem",
            }}
            animate={position} />
    )
}

function AnimatedNav() {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0
    })

    const onMouseLeave = () => {
        setPosition((pv) => ({
            ...pv,
            opacity: 0
        }))
    }

    return (
        <div className='animated-nav'>
            <nav onMouseLeave={onMouseLeave}>
                <Tab setPosition={setPosition}>Home</Tab>
                <Tab setPosition={setPosition}>Categories</Tab>
                <Tab setPosition={setPosition}>About</Tab>
                <Tab setPosition={setPosition}>Blogs</Tab>
                <Tab setPosition={setPosition}>Contact</Tab>

                <Cursor position={position} />
            </nav>
        </div>
    )
}

export default AnimatedNav