import React from 'react'
import {motion} from 'framer-motion'

function MiniAnimate() {

    // const onUpdate = (latest) => {
    //     console.log(latest.x, latest.y)
    // }

    return (
        <div className='container'>
            <motion.div
                className='box'
                animate={{
                    x: [0, 150, -150, null, 0], //= null solwagt hic zat etme diymek bolya
                    y: [0, 0, 0, -150, 0]
                }}
                transition={{
                    ease: "linear",
                    duration: 4,
                    repeat: Infinity,
                }}
            // onUpdate={onUpdate}
            />
        </div>
    )
}

export default MiniAnimate