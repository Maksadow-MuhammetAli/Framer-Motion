import {motion, AnimatePresence} from 'framer-motion'
import React, {useState} from 'react'


function MiniAnimatePresence() {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <div>
            <AnimatePresence mode='popLayout'>
                {
                    isVisible && <motion.div
                        style={{
                            width: 150,
                            height: 150,
                            background: "lime",
                            scale: 0
                        }}
                        animate={{
                            rotate: 90,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1,
                            type: "spring"
                        }}
                        exit={{
                            rotate: 0,
                            scale: 0,
                        }} />
                }
            </AnimatePresence>

            <motion.button
                className='example-button'
                whileTap={{scale: 0.9}}
                onClick={() => setIsVisible(!isVisible)}
                layout
            >Hide/Show</motion.button>
        </div>
    )
}

export default MiniAnimatePresence