import React, {useEffect, useRef, useState} from 'react'
import cat1 from "../../public/cat1.jpg"
import cat2 from "../../public/cat2.jpg"
import galaxy from "../../public/galaxy.jpg"
import galaxy2 from "../../public/galaxy2.jpg"
import girl from "../../public/girl.jpg"
import naruto from "../../public/naruto.jpg"
import sakura from "../../public/sakura.jpg"
import {motion, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'


const paddding = 12



function StickyImage({image, scrollYProgress}) {
    const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const background = useTransform(scrollYProgress, [0, 1], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"])
    return (
        <motion.div className='immage' layout style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: `calc(100vh - ${paddding * 2}px)`,
            position: "sticky",
            top: paddding,
            borderRadius: "2rem",
            scale,
        }}>
            <motion.div style={{
                position: "absolute",
                inset: 0,
                background,
                borderRadius: "2rem"
            }} />
        </motion.div>

    )
}

function Content() {
    return (
        <div className='content'>
            <div>
                <h1>
                    Additional content explained about here
                </h1>
            </div>

            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo facilis quaerat, saepe ipsam unde ab possimus perspiciatis architecto quibusdam, exercitationem tenetur at assumenda omnis veritatis sed asperiores sequi commodi atque Lorem ipsum dolor sit, amet consectetur adipisicing elit. At reiciendis odit officiis corporis repellat totam modi laboriosam sed earum quam! Asperiores sit dolorum nesciunt placeat culpa vel, similique voluptatibus ab.</p>

                <button>More</button>
            </div>
        </div>
    )
}

function Heading({heading}) {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [250, -250])
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])
    return (
        <motion.div ref={ref}
            style={{
                position: 'absolute', left: 0, top: 0, height: "100vh",
                display: "flex", justifyContent: "center", alignItems: "center", width: "100%", y, opacity
            }}>
            <motion.h1
                style={{textAlign: "center", color: "white", fontSize: "4rem"}}
            >{heading}</motion.h1>
        </motion.div>
    )
}

function Item({image, heading, children}) {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end start", " end end"]
    })

    const scroll = useScroll({
        target: ref,
    })
    return (
        <div style={{
            paddingLeft: paddding,
            paddingRight: paddding
        }}>
            <div ref={ref} className='image150'>
                <StickyImage image={image} scrollYProgress={scrollYProgress} />
                <Heading heading={heading} />
            </div>
            {children}
        </div>
    )
}

function MediumScroll() {
    return (
        <div>
            <Item image={girl} heading="Don't give up">
                <Content />
            </Item>
            <Item image={cat1} heading="Don't give up">
                <Content />
            </Item>
            <Item image={naruto} heading="Don't give up">
                <Content />
            </Item>
            <Item image={galaxy} heading="Don't give up">
                <Content />
            </Item>
            <Item image={sakura} heading="Don't give up">
                <Content />
            </Item>
        </div>
    )
}

export default MediumScroll