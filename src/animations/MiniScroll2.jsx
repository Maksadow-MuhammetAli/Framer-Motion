import React, {useRef} from 'react'
import {motion, useScroll} from 'framer-motion'

function Item() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "start start"]
    })
    return (
        <section>
            <div ref={ref} className='red-box'>
                <figure className='progress'>
                    <svg width={100} height={100} viewBox='0 0 100 100'>
                        <circle
                            cx="50" cy="50" r="30" pathLength="1"
                            className='b-progress'
                        />

                        <motion.circle
                            cx="50" cy="50" r="30"
                            pathLength="1"
                            style={{pathLength: scrollYProgress}}
                            className='m-progress'
                        />
                    </svg>
                </figure>
            </div>
        </section>
    )
}

function MiniScroll2() {
    return (
        <div className='bor'>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    )
}

export default MiniScroll2