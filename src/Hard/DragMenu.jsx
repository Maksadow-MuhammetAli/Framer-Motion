import {motion, useAnimate, useDragControls, useMotionValue} from 'framer-motion'
import React, {useState} from 'react'
import useMeasure from 'react-use-measure'

function MyDrawer({children, isOpen, setIsOpen}) {
    const controls = useDragControls()
    const y = useMotionValue(0)
    const [scope, animate] = useAnimate()
    const [dragRef, {height}] = useMeasure()
    console.log(y.get())

    const handleClose = async () => {
        const yStart = typeof y.get() == "number" ? y.get() : 0

        animate(scope.current, {opacity: [1, 0]})
        await animate(".drawer", {y: [yStart, height]})
        setIsOpen(false)
    }

    const onDragEnd = () => {
        if (y.get() >= 100) {
            handleClose()
        }
    }
    return (
        <>
            {isOpen && (
                <motion.div ref={scope}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    onClick={() => handleClose()}
                    className='my-drawer'
                >
                    <motion.div ref={dragRef}
                        initial={{y: "100%"}}
                        animate={{y: "0%"}}
                        style={{
                            y,
                        }}
                        drag="y"
                        dragConstraints={{
                            top: 0,
                            bottom: 0
                        }}
                        dragElastic={{
                            top: 0,
                            bottom: 0.5
                        }}
                        dragControls={controls}
                        dragListener={false}
                        onDragEnd={onDragEnd}
                        onClick={(e) => e.stopPropagation()}
                        className="drawer"
                        transition={{
                            ease: "easeInOut"
                        }}
                    >

                        <motion.button className="drag-area"
                            onMouseDown={(e) => controls.start(e)}>
                            <button className="cursor-drag" />
                        </motion.button>

                        <div className="drawer-content">
                            {children}
                        </div>
                    </motion.div>

                </motion.div>
            )}
        </>
    )
}

function DragMenu() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='bg-black'>
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className='clickme'
            >
                Click Me
            </motion.button>

            <MyDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <h1>Drag the handle at the top of this modal downwards 100px to close it</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et ex numquam a reprehenderit amet corrupti minus eos, dolores labore ad sapiente laborum ipsum? Esse facere quasi explicabo quis iusto?
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, itaque!
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium temporibus odio eaque quod quibusdam doloribus illum pariatur, facilis, maxime provident omnis numquam hic est atque delectus quas quia quae earum!
                    Saepe laborum mollitia cupiditate reprehenderit, recusandae repudiandae eius quas laudantium asperiores alias dolorum, ipsa soluta ab eaque animi maxime quibusdam sunt, possimus nostrum eos quae! Modi nulla dolor ratione vero.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et ex numquam a reprehenderit amet corrupti minus eos, dolores labore ad sapiente laborum ipsum? Esse facere quasi explicabo quis iusto?
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, itaque!
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium temporibus odio eaque quod quibusdam doloribus illum pariatur, facilis, maxime provident omnis numquam hic est atque delectus quas quia quae earum!
                    Saepe laborum mollitia cupiditate reprehenderit, recusandae repudiandae eius quas laudantium asperiores alias dolorum, ipsa soluta ab eaque animi maxime quibusdam sunt, possimus nostrum eos quae! Modi nulla dolor ratione vero.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et ex numquam a reprehenderit amet corrupti minus eos, dolores labore ad sapiente laborum ipsum? Esse facere quasi explicabo quis iusto?
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, itaque!
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium temporibus odio eaque quod quibusdam doloribus illum pariatur, facilis, maxime provident omnis numquam hic est atque delectus quas quia quae earum!
                    Saepe laborum mollitia cupiditate reprehenderit, recusandae repudiandae eius quas laudantium asperiores alias dolorum, ipsa soluta ab eaque animi maxime quibusdam sunt, possimus nostrum eos quae! Modi nulla dolor ratione vero.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et ex numquam a reprehenderit amet corrupti minus eos, dolores labore ad sapiente laborum ipsum? Esse facere quasi explicabo quis iusto?
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, itaque!
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium temporibus odio eaque quod quibusdam doloribus illum pariatur, facilis, maxime provident omnis numquam hic est atque delectus quas quia quae earum!
                    Saepe laborum mollitia cupiditate reprehenderit, recusandae repudiandae eius quas laudantium asperiores alias dolorum, ipsa soluta ab eaque animi maxime quibusdam sunt, possimus nostrum eos quae! Modi nulla dolor ratione vero.
                </p>
            </MyDrawer>
        </div>
    )
}

export default DragMenu