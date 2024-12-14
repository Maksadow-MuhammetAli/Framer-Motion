import React from 'react'
import {motion, spring} from 'framer-motion'
import {useState} from 'react'

function Mouse() {
    const onTap = (event, info) => {
        console.log(info.point.x, info.point.y)
    }

    return (
        <div className='container'>
            <motion.div
                className='box'
                // whileHover={{scale: 1.2}}
                // whileTap={{backgroundColor: "red"}}
                drag
                dragConstraints={{
                    top: -200,
                    left: -200,
                    right: 200,
                    bottom: 200,
                }}
                // = dragDirectionLock - dine bir yon
                // = dragTransition (dragDamping,dragStiffness)
                // = dragElastic
                // = whileDrag
                // = dragMomentum
                // dragTransition={{
                //     timeConstant: 500
                // }}
                onTap={onTap}
            />

        </div>
    )
}

export default Mouse