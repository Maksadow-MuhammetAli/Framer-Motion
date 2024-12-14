import {AnimatePresence, motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {BsArrowRight, BsDiagram2} from 'react-icons/bs'
import {FiChevronDown} from 'react-icons/fi'
import {HiHome} from 'react-icons/hi'
import {PiArticle, PiEyeClosed} from 'react-icons/pi'
import galaxy from "../../public/galaxy.jpg"
import cat2 from "../../public/cat2.jpg"


const TABS = [
    {
        title: "Products",
        component: <Products />
    },
    {
        title: "Pricing",
        component: <Pricing />
    },
    {
        title: "Blog",
        component: <Blog />
    }
].map((o, i) => ({...o, id: i + 1}))

function Products() {
    return (
        <div className='products'>
            <div className='products-data'>
                <div>
                    <h2>StartUp</h2>
                    <p>Bookkeeping</p>
                    <p>Invoicing</p>
                </div>
                <div>
                    <h2>ScaleUp</h2>
                    <p>Live Coaching</p>
                    <p>Reviews</p>
                    <p>Tax/Vat</p>
                </div>
                <div>
                    <h2>Enterprice</h2>
                    <p>White glove</p>
                    <p>SOX Compliance</p>
                    <p>Staffing</p>
                    <p>More</p>
                </div>
            </div>
            <button className='viewMore'>View more <BsArrowRight /></button>
        </div>
    )
}

function Pricing() {
    return (
        <div className='pricing'>
            <div>
                <HiHome />
                <h2>StartUp</h2>
            </div>
            <div>
                <div className="line"></div>
                <div>
                    <BsDiagram2 />
                    <h2>ScaleUp</h2>
                </div>
                <div className="line"></div>
            </div>
            <div>
                <PiArticle />
                <h2>Enterprice</h2>
            </div>
        </div>
    )
}

function Blog() {
    return (
        <div className='blog'>
            <div>
                <div>
                    <div className='img' style={{backgroundImage: `url(${galaxy})`}} />
                    <h1>Galaxy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis sapiente adipisci</p>
                </div>
                <div>
                    <div className='img' style={{backgroundImage: `url(${cat2})`}} />
                    <h1>Cat</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis sapiente adipisci</p>
                </div>
            </div>

            <button className='viewMore'>View more <BsArrowRight /></button>
        </div>
    )
}

function Tab({tab, handleSelected, selected, children}) {
    return (
        <div className='tab' id={`tab-${tab}`}
            onMouseEnter={() => {handleSelected(tab)}}
            style={{
                backgroundColor: selected == tab ? "gray" : "transparent"
            }}
        >
            <span>{children}</span>
            <motion.div className='arrow-down-icon'
                animate={{rotate: selected == tab ? 180 : 0}}
            >
                <FiChevronDown />
            </motion.div>
        </div>
    )
}

function Nub({selected}) {
    const [left, setLeft] = useState(0)

    useEffect(() => {
        const hoveredTab = document.getElementById(`tab-${selected}`)
        const hoveredData = hoveredTab.getBoundingClientRect()

        const offsetLeft = hoveredTab.offsetLeft
        const positon = offsetLeft + (hoveredData.width) / 2 - 10

        setLeft(positon)
    }, [selected])

    return (
        <motion.div className='nub'
            animate={{left}}
            transition={{
                duration: 0.25,
                ease: "easeInOut"
            }}
        />
    )
}

function Bridge() {
    return (
        <div className='bridge' />
    )
}

function Content({selected, dir}) {
    return (
        <motion.div className='flyOutContainer'
            initial={{y: 8, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: 8, opacity: 0}}
        >
            {
                TABS.map((tab) => (
                    <div>
                        {selected == tab.id && <motion.div
                            key={tab.id}
                            initial={{
                                x: dir ? (dir == "r" ? 20 : -20) : 0,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1
                            }}
                            exit={dir && {
                                x: dir == "r" ? -20 : -20,
                                opacity: 0
                            }}
                        >

                            {tab.component}
                        </motion.div>}
                    </div>
                ))
            }
            <Nub selected={selected} />
            <Bridge />
        </motion.div>
    )
}

function Tabs() {
    const [selected, setSelected] = useState(null)
    const [dir, setDir] = useState(null)

    const handleSelected = (value) => {
        if (typeof selected == "number" && typeof value == "number") {
            setDir(value > selected ? "r" : "l")
        } else if (value === null) {
            setDir(null)
        }
        setSelected(value)
    }
    return (
        <div
            onMouseLeave={() => {handleSelected(null)}} className='tabs'>
            {
                TABS.map((tab) => (
                    <Tab key={tab.id} handleSelected={handleSelected} selected={selected} tab={tab.id}>{tab.title}</Tab>
                ))
            }


            <AnimatePresence>
                {selected && <Content dir={dir} selected={selected} />}
            </AnimatePresence>
        </div>
    )
}

function AddictingNav() {

    return (
        <div className='dropdownMenu'>
            <Tabs />
        </div>
    )
}

export default AddictingNav