import {useMotion} from '@react-three/drei';
import {motion, useMotionValue, useMotionValueEvent, useTransform} from 'framer-motion';
import React, {useState} from 'react'

const cardData = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 7,
        url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

function Card({image, id, index, setCards, cards}) {

    const x = useMotionValue(0)

    const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])
    const toRotate = useTransform(x, [-200, 0, 200], [-18, 0, 18])


    const offsetRotate = cardData.length - 1 == index ? 0 : id % 2 == 0 ? 10 : -10

    const rotate = useTransform(() => {
        return toRotate.get() + offsetRotate
    })


    const onDragEnd = () => {
        if (Math.abs(x.get()) > 150) {
            const prevData = cards
            prevData.unshift(prevData.pop())
            setCards([...prevData])
        }
    }

    return (
        <motion.div
            className='swipe-card'
            drag="x"
            dragConstraints={{
                left: 0,
                right: 0
            }}
            dragListener={cardData.length - 1 == index}
            onDragEnd={onDragEnd}
            style={{
                backgroundImage: `url(${image})`,
                rotate,
                x,
                transition: cardData.length - 1 == index ? "0.125s transform" : "",
            }}
        />
    )
}

function Cards() {
    const [cards, setCards] = useState(cardData)
    return (
        <>
            {cards.map(({id, url}, index) => (
                <Card setCards={setCards} cards={cards} key={id} image={url} id={id} index={index} />
            ))}
        </>
    )
}

function TinderSwipeCards() {
    return (
        <div
            className='cube-bg'
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`
            }}
        >
            <Cards />
        </div>
    )
}

export default TinderSwipeCards