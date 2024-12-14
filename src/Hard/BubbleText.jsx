import {motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'

function BubbleWord({children}) {

    const onMouseEnter = (e) => {

        const id = Number(e.target.id)
        const parentChildren = Array.from(e.target.parentElement.children)

        parentChildren.forEach(element => {
            if (element.id == id) {
                element.style.fontWeight = "700"
                element.style.color = "rgb(255, 255, 255)"
            } else if (element.id == id - 1 || element.id == id + 1) {
                element.style.fontWeight = "500"
                element.style.color = "rgb(220, 220, 220)"
            } else if (element.id == id - 2 || element.id == id + 2) {
                element.style.fontWeight = "400"
                element.style.color = "rgb(185, 185, 185)"
            } else {
                element.style.fontWeight = "100"
                element.style.color = "rgb(135, 135, 135)"
            }
        });
    }
    const onMouseLeave = (e) => {
        const parentChildren = Array.from(e.target.parentElement.children)

        parentChildren.forEach(element => {
            element.style.fontWeight = "100"
            element.style.color = "rgb(135, 135, 135)"
        });
    }

    return (
        <span>
            {children.split("").map((l, i) => {
                const [marginRight, setMarginRight] = useState("")
                if (i == children.length - 1) {
                    useEffect(() => {
                        setMarginRight("10px")
                    }, [])
                }
                return (
                    <motion.span
                        layout
                        transition={{
                            duration: 1,
                            type: "spring"
                        }}
                        id={i + 1}
                        key={i + 1}
                        className='bubble-span'
                        style={{
                            marginRight,
                        }}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        {l}
                    </motion.span>
                )
            })}
        </span>
    )
}

function BubbleText() {
    return (
        <div className='bg-black'>
            <h1 className='bubble-h1'>
                <BubbleWord>Bubbbbbbbble</BubbleWord>
                <BubbleWord>Text</BubbleWord>
            </h1>
        </div>
    )
}

export default BubbleText