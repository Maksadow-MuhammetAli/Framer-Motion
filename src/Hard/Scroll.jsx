import React, {useRef} from 'react'
import cat1 from "../../public/cat1.jpg"
import cat2 from "../../public/cat2.jpg"
import galaxy from "../../public/galaxy.jpg"
import galaxy2 from "../../public/galaxy2.jpg"
import girl from "../../public/girl.jpg"
import naruto from "../../public/naruto.jpg"
import sakura from "../../public/sakura.jpg"
import Card from '../components/Card'
import {motion, useScroll, useTransform} from 'framer-motion'

const images = [cat1, cat2, galaxy, galaxy2, girl, naruto, sakura]

function Scroll() {
    const ref = useRef(null)

    const {scrollYProgress} = useScroll({target: ref})

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"])
    return (
        <div>
            <div id='upstair' className='scroll-info'>
                <a href="#downstair">Scroll Down</a>
            </div>
            <section ref={ref} className="scroll-container"> {/*// 300vh*/}
                <div className='height'> {/*// 100vh */}
                    <motion.div
                        className='cards'
                        style={{x}}> {/*// card-container */}
                        {
                            images.map(card => (
                                <Card card={card} key={card} />
                            ))
                        }
                    </motion.div>
                </div>
            </section>
            <div id='downstair' className='scroll-info'>
                <a href='#upstair'>Scroll up</a>
            </div>
        </div>
    )
}

export default Scroll