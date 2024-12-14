import React, {useState} from 'react'
import {motion} from 'framer-motion'

function MiniLayout() {
    const [isOpen, setIsOpen] = useState("false")
    return (
        <div>
            <motion.div
                className='parent'
                initial={{borderRadius: 50}}
                data-isOpen={isOpen}
                layout
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.div className='child' layout />
            </motion.div>
        </div>
    )
}

export default MiniLayout