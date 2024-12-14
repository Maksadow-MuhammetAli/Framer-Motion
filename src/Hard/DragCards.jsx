import {motion, MotionConfig, useMotionTemplate, useMotionValue, useTransform} from 'framer-motion'
import React, {useEffect, useRef, useState} from 'react'
import cat1 from "../../public/cat1.jpg"
import cat2 from "../../public/cat2.jpg"
import galaxy from "../../public/galaxy.jpg"
import galaxy2 from "../../public/galaxy2.jpg"
import girl from "../../public/girl.jpg"
import naruto from "../../public/naruto.jpg"
import sakura from "../../public/sakura.jpg"

function Card({img, quoteColor, quote, quoteAwtor, width}) {
    const [container, setContainer] = useState(null)

    useEffect(() => {
        const container = {current: document.querySelector(".drag-container")}
        setContainer(container)
    }, [])

    //! Random position

    const leftPct = useMotionValue(Math.round(Math.random() * 100))
    const topPct = useMotionValue(Math.round(Math.random() * 100))

    const leftTransform = useTransform(leftPct, [0, 100], [0, 70])
    const topTransform = useTransform(leftPct, [0, 100], [0, 70])

    const left = useMotionTemplate`${leftTransform}%`
    const top = useMotionTemplate`${topTransform}%`

    //! Random rotate

    const rotPct = useMotionValue(Math.round(Math.random() * 100))
    const rotate = useTransform(rotPct, [0, 100], [-15, 15])

    //! zIndex

    const [zIndex, setZIndex] = useState(0)

    const updateZIndex = () => {
        const cards = document.querySelectorAll("#card")

        let maxZIndex = -Infinity

        cards.forEach(card => {
            let zIndex = Number(window.getComputedStyle(card).getPropertyValue("z-index"))

            if (!isNaN(zIndex) && zIndex > maxZIndex) {
                maxZIndex = zIndex
            }
        })
        setZIndex(maxZIndex + 1)
    }

    return (
        <motion.div id='card'
            style={{
                backgroundColor: img ? "white" : quoteColor,
                padding: img ? `5px 5px 20px` : "20px",
                width: img ? width : 350,
                height: img ? "auto" : 350,
                rotate,
                position: "absolute",
                left,
                top,
                zIndex
            }}
            drag
            dragConstraints={container}
            onMouseDown={updateZIndex}
        >
            {img ?
                <div style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "100%",
                    width: width - 10,
                    height: (width - 10) / (16 / 9)
                }} />

                : <div className='quote'>
                    <h2>{quote}</h2>
                    <p>{quoteAwtor}</p>
                </div>
            }
        </motion.div>
    )
}

function Cards() {

    return (
        <>
            <Card img={galaxy} width={350} />
            <Card img={girl} width={450} />
            <Card img={naruto} width={550} />
            <Card img={cat2} width={400} />
            <Card img={galaxy2} width={350} />
            <Card img={cat1} width={450} />
            <Card img={sakura} width={550} />
            <Card quote="NEVER GIVE UP UNTIL TO SUCCESS" quoteAwtor="Maksadow Muhammet Ali" quoteColor="purple" />
            <Card quote="IMAGINE MORE" quoteAwtor="Ayanakoji" quoteColor="lightgreen" />
            <Card quote="EVERYBODY MAKES MISTAKES BUT SOMEONE LEARN" quoteAwtor="Ayanakoji" quoteColor="cyan" />
            <Card quote="LIFE IS HARD, BUT YOU CAN CHANGE IT" quoteAwtor="Ayanakoji" quoteColor="orange" />
        </>
    )
}

function DragCards() {
    return (
        <div className='drag-container'>
            <h1>Astro<span>.</span></h1>

            <Cards />
        </div>
    )
}

export default DragCards

// tkmpixel-portfolio.netlify.app
// sanly-marketing.netlify.app
// tkm-cinema.netlify.app
// tkm-calculator.netlify.app