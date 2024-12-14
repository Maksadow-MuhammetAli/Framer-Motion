import {motion} from 'framer-motion'
import React from 'react'

function Card({card}) {
    return (
        <div
            className='card'
            style={{
                backgroundImage: `url(${card})`,
            }}
        >
            <motion.h2
                whileHover={{
                    scale: 1.15
                }}
                whileTap={{
                    scale: 1
                }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                }}
            >Hover</motion.h2>
        </div>
    )
}

export default Card