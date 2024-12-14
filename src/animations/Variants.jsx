import React, {useEffect, useState} from 'react'
import {color, delay, motion} from 'framer-motion'

function Variants() {
    const [open, setOpen] = useState(false)
    const list = {
        opened: {opacity: 1, scale: 2, color: "#fff"},
        closed: {opacity: 0},
    }

    const item = {
        opened: i => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.3
            },
        }),
        closed: {opacity: 0, x: -100},
    }

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center"}}>
            <motion.ul
                initial="closed"
                animate={open ? "opened" : "closed"}
                variants={list}
            >
                <motion.li custom={1} variants={item}>Item 1</motion.li>
                <motion.li custom={2} variants={item}>Item 2</motion.li>
                <motion.li custom={3} variants={item}>Item 3</motion.li>
            </motion.ul>
            <button onClick={() => setOpen(!open)}>Open</button>
        </div>
    )
}

export default Variants