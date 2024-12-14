import React, {useState} from 'react'
import cat1 from "../../public/cat1.jpg"
import cat2 from "../../public/cat2.jpg"
import girl from "../../public/girl.jpg"
import naruto from "../../public/naruto.jpg"
import {AnimatePresence, delay, motion} from 'framer-motion'
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";

const images = [cat1, cat2, girl, naruto]

const variants = {
    enter: direction => {
        return {
            x: direction == null ? 0 : direction == "right" ? -1000 : 1000,
            opacity: 0,
        }
    },
    center: {
        x: 0,
        opacity: 1,
        zIndex: 1,
    },
    end: direction => {
        return {
            x: direction == null ? 0 : direction == "right" ? 1000 : -1000,
            opacity: 0,
            zIndex: 0,
        }
    }
}

function SlideShowItem() {
    const [variable, setVariable] = useState(0)
    const [direction, setDirection] = useState(null)
    const changeVariable = (number) => {
        let newVariable = variable + number
        if (newVariable == 4) {
            newVariable = 0
        }
        if (newVariable == -1) {
            newVariable = 3
        }

        setVariable(newVariable)
    }
    return (
        <div>
            <div>
                <AnimatePresence mode='wait'>
                    <motion.img
                        className='image'
                        style={{display: "inline-block"}}
                        src={images[variable]}
                        key={images[variable]}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="end"
                        variants={variants}
                        drag="x"
                        dragConstraints={{left: 0, right: 0}}
                        transition={{
                            x: {type: "spring", stiffness: 300, damping: 30},
                            opacity: {duration: 0.2}
                        }}
                    />
                </AnimatePresence>
            </div>

            <div className='swipe' onClick={() => {
                changeVariable(-1)
                setDirection("left")
            }}><FaArrowLeft /></div>
            <div className='swipe' onClick={() => {
                changeVariable(1)
                setDirection("right")
            }}><FaArrowRight /></div>
        </div>
    )
}


function SlideShow() {
    return (
        <div className="wrapper">
            <div className='slide-container'>
                <SlideShowItem />
            </div>
        </div>
    )
}

export default SlideShow