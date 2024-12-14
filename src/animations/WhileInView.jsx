import React from 'react'
import {motion} from 'framer-motion';

const food = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🍆", 260, 290],
    ["🍇", 290, 320]
];

const variants = {
    offScreen: {
        y: 300
    },
    onScreen: {
        y: 50,
        rotate: -10,
        transtion: {
            type: "spring",
            duration: 0.8,
            bounce: 0.4
        }
    }
}

const hue = (h) => `hsl(${h}, 100%, 50%)`;
function Card({emoji, hueA, hueB}) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`
    return (
        <motion.div
            className='card-container'
            initial="offScreen"
            whileInView="onScreen"
            viewport={{once: true}}
        >

            <div className='splash' style={{background}} />

            <motion.div
                className='card'
                variants={variants} >
                {emoji}
            </motion.div>
        </motion.div>
    )
}

function WhileInView() {
    return (
        <div className='wrapper'>
            {
                food.map(([emoji, hueA, hueB]) => (
                    <Card key={hueA + hueB} emoji={emoji} hueA={hueA} hueB={hueB} />
                ))
            }
        </div>
    )
}

export default WhileInView