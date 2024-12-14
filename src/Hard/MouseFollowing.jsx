import {motion} from 'framer-motion'
import React, {useRef} from 'react'
import useMouseFollower from "../Hook/useMouseFollower"


function MouseFollowing() {
    const ref = useRef(null)
    const {x, y} = useMouseFollower(ref)
    return (
        <div className='bg-black'>
            <motion.div
                ref={ref}
                className='follower-ball'
                style={{x, y}}
            />
        </div>
    )
}

export default MouseFollowing