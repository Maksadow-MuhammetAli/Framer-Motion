import React, {useEffect, useState} from 'react'
import {motion, useScroll} from 'framer-motion'
import {useRef} from 'react'

function MiniScroll1() {
    const ref = useRef(null)
    const {scrollXProgress} = useScroll({container: ref})

    return (
        <div>
            <svg id='progress' width="100" height="100" viewBox="0 0 100 100" >
                <circle className='bg' cx="50" cy="50" r="30" pathLength="1" />

                <motion.circle
                    className="bgm"
                    cx="50" cy="50" r="30"
                    style={{pathLength: scrollXProgress, rotate: "-90deg"}} />
            </svg>
            <ul className='scroll-ul' ref={ref}>
                <li className='scroll-li'></li>
                <li className='scroll-li'></li>
                <li className='scroll-li'></li>
                <li className='scroll-li'></li>
                <li className='scroll-li'></li>
                <li className='scroll-li'></li>
                <li className='scroll-li'></li>
                <li className='scroll-li'></li>
                <li className='scroll-li'></li>
                <li className='scroll-li'></li>
            </ul>
        </div>
    )
}

export default MiniScroll1