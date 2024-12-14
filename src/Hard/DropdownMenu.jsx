import {motion} from 'framer-motion'
import React, {useEffect, useRef, useState} from 'react'

function Lift1() {

    return (
        <motion.div
            initial={{opacity: 0, y: 15}}
            variants={{
                hovered: {
                    opacity: 1,
                    y: 0,
                }
            }}
            transition={{
                ease: "easeInOut"
            }}
            className='lift'
            style={{
                left: "50%",
                x: "-50%",
                height: "fit-content",
                top: "180%"
            }}
        >
            <motion.div
                initial={{display: "none", padding: "2rem"}}
                variants={{
                    hovered: {
                        display: "block"
                    }
                }}
                className='lift-inside'
            >
                <h4>For Individuals</h4>
                <p>Introduction</p>
                <p>Pay as yuo go</p>

                <h4>For Components</h4>
                <p>Startups</p>
                <p>SMBs</p>
                <p>Enterprice</p>

                <button>Contact sales</button>
            </motion.div>
        </motion.div>
    )
}

function Underline() {
    return (
        <motion.div
            style={{
                position: 'absolute',
                bottom: -5,
                left: 0,
                height: 4,
                backgroundColor: "orange",
                borderRadius: 100,
            }}
            variants={{
                hovered: {
                    width: "100%"
                }
            }}

        />
    )
}

function NavItem({children, href, Lift}) {
    return (
        <motion.div
            whileHover="hovered"
            className='nav-item'>
            <a href={href}>{children}</a>

            <Underline />

            <Lift />
        </motion.div>
    )
}

function DropdownMenu() {
    return (
        <div className='dropdownMenu'>
            <NavItem href="#" Lift={Lift1}>Pricing</NavItem>
        </div>
    )
}

export default DropdownMenu