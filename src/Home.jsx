import React from 'react'
import pages from "../pages/pages"
import {useNavigate} from 'react-router-dom'
import {motion, useMotionValue, useMotionValueEvent, useSpring, useTransform} from 'framer-motion'

function Home() {

    const navigate = useNavigate()

    return (
        <div className='page-container'>
            {pages.map(page => (
                <motion.div
                    className='page-background'
                    key={page}
                    onClick={() => navigate(`/${page.slice(0, page.indexOf("."))}`)}
                >
                    <motion.div
                        className='page-block'
                        initial={{
                            transform: "translate(-2px,-2px)"
                        }}
                        whileHover={{
                            transform: "translate(-7px,-7px)",
                            color: "rgb(119, 0, 255)"
                        }}
                        transition={{
                            type: "spring"
                        }}
                    >
                        {page.slice(0, page.indexOf("."))}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}

export default Home