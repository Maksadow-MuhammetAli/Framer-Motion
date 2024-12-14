import {useAnimate} from 'framer-motion'
import React from 'react'

function HookUseAnimate() {
    const [scope, animate] = useAnimate()

    const handleClick = async () => {
        await animate(".box", {x: 250})
        await animate(".box", {y: 300, borderRadius: "50%", rotate: 180})
        await animate(".box", {x: -300})
        await animate(".box", {y: 0, borderRadius: 0})
        await animate(".box", {x: 0, rotate: 0})
    }

    return (
        <div ref={scope} className='wrapper'>
            <div className='box' style={{borderRadius: 0}} />
            <button onClick={handleClick} className='example-button'>Animate</button>
        </div>
    )
}

export default HookUseAnimate