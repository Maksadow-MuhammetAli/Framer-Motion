import React, {useEffect, useRef, useState} from 'react'
import samurai from '../../public/samurai.jpg'
import bolloon from '../../public/bolloon.jpg'
import pokemon from '../../public/pokemon.jpg'
import japan from '../../public/japan.jpg'
import car from '../../public/car.jpg'
import {color, motion, useAnimate, useMotionTemplate, useMotionValue, useSpring, useTransform} from 'framer-motion'
import {FaArrowRight} from 'react-icons/fa'

const LINKS = [
    {
        content: "About",
        description: "Learn what we do here",
        href: "#",
        img: bolloon
    },
    {
        content: "Clients",
        description: "We work with great people",
        href: "#",
        img: samurai
    },
    {
        content: "Portfolio",
        description: "Our work speaks for itself",
        href: "#",
        img: car
    },
    {
        content: "Carreers",
        description: "We want cool people",
        href: "#",
        img: japan
    },
    {
        content: "Fun",
        description: "Incase you're bored",
        href: "#",
        img: pokemon
    },
]

function Image({img, left, top}) {

    return (
        <motion.div
            className='coollink-img'
            style={{
                backgroundImage: `url(${img})`,
                left,
                top,
            }}
            variants={{
                initial: {
                    rotate: -10,
                    scale: 0
                },
                hovered: {
                    rotate: 10,
                    scale: 1
                }
            }}
            transition={{
                type: "spring"
            }}
        />
    )
}

function Link({content, description, href, img}) {

    const x = useMotionValue(50)
    const y = useMotionValue(50)


    const xTrans = useTransform(x, [0, 100], [50, 35])
    const yTrans = useTransform(y, [0, 100], [10, -10])

    const springX = useSpring(xTrans)
    const springY = useSpring(yTrans)

    const xTemp = useMotionTemplate`${springX}%`
    const yTemp = useMotionTemplate`${springY}%`

    const onMouseMove = (e) => {
        const data = e.target.getBoundingClientRect()

        const width = data.width
        const height = data.height

        const clientX = e.clientX
        const clientY = e.clientY

        const offsetLeft = data.left
        const offsetTop = data.top

        const xPct = (clientX - offsetLeft) / width * 100
        const yPct = (clientY - offsetTop) / height * 100

        x.set(xPct)
        y.set(yPct)
    }


    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            className='link' href={href}
            onMouseMove={onMouseMove}
        >
            <motion.h1
                variants={{
                    initial: {x: 0},
                    hovered: {x: -15}
                }}
                transition={{
                    type: "spring",
                    staggerChildren: 0.075,
                    delayChildren: 0.25,
                }}
            >
                {content.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {x: 0},
                            hovered: {x: 15}
                        }}
                        transition={{
                            type: "spring"
                        }}
                        key={i}>{l}</motion.span>
                ))}
            </motion.h1>
            <p>{description}</p>

            <motion.div
                variants={{
                    initial: {
                        x: 0,
                        opacity: 0,
                    },
                    hovered: {
                        opacity: 1,
                        x: -10,
                    }
                }}
                transition={{
                    type: "spring"
                }}
                className='arrow-r'>
                <FaArrowRight />
            </motion.div>

            <Image img={img} left={xTemp} top={yTemp} />
            <div className='full-content' />
        </motion.a>
    )
}

function Links() {
    return (
        <div className='links'>
            {LINKS.map(({content, description, href, img}) => (
                <Link key={content} content={content} description={description} href={href} img={img} />
            ))}
        </div>
    )
}

function CoolLinks() {
    return (
        <div className='links-background'>
            <Links />
        </div>
    )
}

export default CoolLinks