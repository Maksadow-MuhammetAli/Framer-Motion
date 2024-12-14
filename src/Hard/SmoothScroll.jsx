import React, {useRef} from 'react'
import cat1 from "../../public/cat1.jpg"
import cat2 from "../../public/cat2.jpg"
import galaxy from "../../public/galaxy.jpg"
import galaxy2 from "../../public/galaxy2.jpg"
import girl from "../../public/girl.jpg"
import naruto from "../../public/naruto.jpg"
import sakura from "../../public/sakura.jpg"
import samurai from '../../public/samurai.jpg'
import bolloon from '../../public/bolloon.jpg'
import pokemon from '../../public/pokemon.jpg'
import japan from '../../public/japan.jpg'
import car from '../../public/car.jpg'
import sad from "../../public/sad.jpg"
import triangle from "../../public/triangle.jpg"
import illusion from "../../public/illusion.jpg"
import fireWater from "../../public/fire-water.jpg"
import {useMotionTemplate, useScroll, useTransform, motion, useMotionValueEvent, useMotionValue} from 'framer-motion'

const SECTION_HEIGHT = 2000

function MainImage() {
    const {scrollY} = useScroll()

    const backgroundSizeTr = useTransform(scrollY, [0, SECTION_HEIGHT + 500], [190, 100])
    const backgroundSize = useMotionTemplate`${backgroundSizeTr}%`

    const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0])
    const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100])

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`

    const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0.3])
    return (
        <motion.div
            className='main-image'
            style={{
                backgroundSize,
                clipPath,
                opacity,
                zIndex: 0
            }}
        />
    )
}

function ParallaxImage({start, end, marginLeft, img, width}) {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`]
    })

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.8])
    const y = useTransform(scrollYProgress, [0, 1], [start, end])

    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`
    return (
        <motion.div ref={ref}
            className='parallax-img'
            style={{
                width: `${width}%`,
                backgroundImage: `url(${img})`,
                zIndex: 10,
                marginLeft: `${marginLeft}%`,
                opacity,
                transform
            }}
        />
    )
}

function ParallaxImages() {
    return (
        <>
            <ParallaxImage start={0} end={200} marginLeft={10} img={japan} width={30} />
            <ParallaxImage start={200} end={-250} marginLeft={40} img={car} width={40} />
            <ParallaxImage start={-200} end={200} marginLeft={70} img={sad} width={25} />
            <ParallaxImage start={0} end={-500} marginLeft={5} img={naruto} width={20} />
        </>
    )
}


function SmoothScroll() {
    return (
        <div className='smooth-background'>
            <div style={{height: `calc(${SECTION_HEIGHT}px + 100vh)`, position: "relative"}}>
                <MainImage />

                <ParallaxImages />

            </div>
            <div className='h-screen' />
        </div>
    )
}

export default SmoothScroll