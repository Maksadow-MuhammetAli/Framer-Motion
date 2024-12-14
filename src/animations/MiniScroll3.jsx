import React from 'react'
import {motion, useScroll} from 'framer-motion'

function MiniScroll3() {
    const {scrollYProgress} = useScroll()
    console.log(scrollYProgress)

    return (
        <div className='wrapper' style={{height: "500vh"}}>
            <motion.div
                className='progress-bar'
                style={{scaleX: scrollYProgress}} />
        </div>
    )
}

export default MiniScroll3