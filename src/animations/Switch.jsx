import React from 'react'
import {motion} from 'framer-motion'
import {useState} from 'react'

function Switch() {
    const [isOn, setIsOn] = useState(false)
    return (
        <div className='switch' data-isOn={isOn} onClick={() => setIsOn(!isOn)}>
            <motion.div
                className='box'
                layout
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 35
                }} />
        </div>
    )
}

export default Switch