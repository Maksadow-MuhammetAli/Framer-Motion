import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'


function Page1() {
    const navigate = useNavigate()
    return (
        <motion.div style={{backgroundColor: "gray"}} className='wrapper'>
            <motion.button className='pageButton' onClick={() => navigate("/about")}
                initial={{
                    opacity: 0,
                    y: 25
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.75
                }}
            >About</motion.button>
        </motion.div>
    )
}

function Page2() {
    const navigate = useNavigate()
    return (
        <motion.div className='wrapper' style={{backgroundColor: "red"}}>
            <motion.button className='pageButton' onClick={() => navigate("/")} initial={{
                opacity: 0,
                y: 25
            }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.75
                }}>Home</motion.button>
        </motion.div>
    )
}

function Animation({children}) {
    const path = document.location.pathname
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={path}
                initial={{
                    opacity: 0,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                }}
                animate={{
                    opacity: 1,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                }}
                exit={{
                    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                }}
                transition={{
                    duration: 1
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}



function PageTransition() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Animation><Page1 /></Animation>} />
                <Route path='/about' element={<Animation><Page2 /></Animation>} />
            </Routes>
        </div>
    )
}

export default PageTransition