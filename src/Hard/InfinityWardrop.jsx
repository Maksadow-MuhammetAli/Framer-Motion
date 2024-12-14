import React from 'react'
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
import {motion} from 'framer-motion'

const IMAGES = [
    {
        id: 1,
        img: cat2
    },
    {
        id: 2,
        img: cat1
    },
    {
        id: 3,
        img: car
    },
    {
        id: 4,
        img: galaxy
    },
    {
        id: 5,
        img: galaxy2
    },
    {
        id: 6,
        img: girl
    },
    {
        id: 7,
        img: naruto
    },
    {
        id: 8,
        img: sakura
    },
    {
        id: 9,
        img: samurai
    },
    {
        id: 10,
        img: bolloon
    },
    {
        id: 11,
        img: pokemon
    },
    {
        id: 12,
        img: japan
    },
    {
        id: 13,
        img: sad
    },
    {
        id: 14,
        img: triangle
    },
    {
        id: 15,
        img: illusion
    },
    {
        id: 16,
        img: fireWater
    }
]

const Image = ({img, id}) => {
    return (
        <motion.div
            className='wd-img'
            style={{
                backgroundImage: `url(${img})`
            }}
            animate={{
                left: ["100%", "-100%"]
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    )
}

const ImageWrapper = () => {
    return (
        <motion.div
            className="image-wrapper"
        >
            {IMAGES.map(({img, id}) => (
                <Image img={img} id={id} />
            ))}
        </motion.div>
    )
}

function InfinityWardrop() {
    return (
        <div className='bg-black'>
            <div className='image-wardrop'>
                <ImageWrapper />
            </div>
        </div>
    )
}

export default InfinityWardrop