import {motion, useAnimate, useMotionValue} from 'framer-motion';
import React, {useRef, useState} from 'react'
import {FaGoogle} from "react-icons/fa";
import {FaShopify} from "react-icons/fa";
import {FaApple} from "react-icons/fa";
import {FaSoundcloud} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";
import {FaSpotify} from "react-icons/fa";
import {FaPinterest} from "react-icons/fa";

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0 100%)"
const BOTTOM_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0%)"
const TOP_RIGHT_CLIP = "polygon(0 0, 0% 100%, 100% 100%, 0 100%)"
const TOP_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)"


const startAnimations = {
    topLeft: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    topRight: [BOTTOM_LEFT_CLIP, NO_CLIP],
    bottomLeft: [TOP_RIGHT_CLIP, NO_CLIP],
    bottomRight: [TOP_LEFT_CLIP, NO_CLIP]
}

const exitAnimations = {
    topLeft: [NO_CLIP, BOTTOM_RIGHT_CLIP],
    topRight: [NO_CLIP, BOTTOM_LEFT_CLIP],
    bottomLeft: [NO_CLIP, TOP_RIGHT_CLIP],
    bottomRight: [NO_CLIP, TOP_LEFT_CLIP]
}


function Blog({gridColumn, gridRow, icon}) {
    const [scope, animate] = useAnimate()
    const [exitSide, setExitSide] = useState("")

    const getNearestSide = (e) => {
        const rect = e.target.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        if (xPct < 0) {
            return "topLeft"
        } else if (xPct > 0) {
            return "topRight"
        }
    }

    const onMouseEnter = (e) => {
        const side = getNearestSide(e)
        setExitSide(side)
        animate(scope.current, {
            clipPath: startAnimations[side]
        })
    }

    const onMouseLeave = (e) => {
        let side = ""
        if (exitSide == "topRight") {
            side = "bottomRight"
        } else if (exitSide == "topLeft") {
            side = "bottomLeft"
        }
        animate(scope.current, {
            clipPath: exitAnimations[side]
        })
    }

    return (
        <motion.a
            href='#'
            className='blog'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                gridColumn: `span ${gridColumn} / span ${gridColumn}`,
                gridRow: `span ${gridRow} / span ${gridRow}`
            }}
        >
            <p className='icon-p'>{icon}</p>

            <motion.div ref={scope}
                className="butterfly-path"
                style={{
                    clipPath: BOTTOM_RIGHT_CLIP
                }}
            />
        </motion.a>
    )
}

function GridContainer() {
    return (
        <div className='grid-container'>
            <Blog gridColumn={6} icon={<FaGoogle />} />
            <Blog gridColumn={6} icon={<FaShopify />} />
            <Blog gridColumn={3} icon={<FaApple />} />
            <Blog gridColumn={3} icon={<FaSoundcloud />} />
            <Blog gridColumn={3} icon={<FaGithub />} />
            <Blog gridColumn={3} icon={<FaFacebook />} />
            <Blog gridColumn={4} icon={<FaTiktok />} />
            <Blog gridColumn={4} icon={<FaSpotify />} />
            <Blog gridColumn={4} icon={<FaPinterest />} />
        </div>
    )
}

function ButterflyLinks() {
    return (
        <div className='butterfly-background'>
            <GridContainer />
        </div>
    )
}

export default ButterflyLinks