import React, {useState} from 'react'
import girl from "../../public/girl.jpg"
import naruto from "../../public/naruto.jpg"
import cat2 from "../../public/cat2.jpg"
import {motion, useMotionValue, useMotionValueEvent} from 'framer-motion'

const CARD_DATAS = [
    {
        id: 1,
        img: girl,
        title: "Can not believe this is free. If X was $5,000 a month, it would be worth every penny. I plan to name my next child after X.",
        author: "Devin R. - Growth Marketing Lead @ OpenAI"
    },
    {
        id: 2,
        img: naruto,
        title: "I feel like I've learned as much from X as I did completing my masters. It's the first thing I read every morning.",
        author: "Jenn F. - Marketing Director @ Square"
    },
    {
        id: 3,
        img: cat2,
        title: "My boss thinks I know what I'm doing. Honestly, I just read this newsletter.",
        author: "Adrian Y. - Product Marketing @ Meta"
    },
]

const variants = {
    first: {
        x: "0%",
        rotate: -6,
        zIndex: 20
    },
    second: {
        x: "40%",
        rotate: 0,
        zIndex: 10

    },
    third: {
        x: "80%",
        rotate: 6,
        zIndex: 0
    }
}

const Card = ({card, orders, setNumber, number}) => {
    const {id, img, title, author} = card
    const x = useMotionValue(0)

    const cardOrders = () => {
        const realOrder = orders.find(order => order.id === id);

        if (realOrder.orders == 1) {
            return "first"
        } else if (realOrder.orders == 2) {
            return "second"
        } else if (realOrder.orders == 3) {
            return "third"
        }
    }

    const onDragEnd = () => {
        if (x.get() <= -80) {
            setNumber(number + 1)
        }
    }

    return (
        <motion.div
            animate={cardOrders()}
            variants={variants}
            style={{x}}
            drag
            onDragEnd={onDragEnd}
            dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }}
            dragListener={cardOrders() == "first"}
            transition={{
                type: "spring",
                damping: 10,
                stiffness: 50
            }}
            className='blur-card'>
            <img src={img} />
            <h2>{title}</h2>
            <p>{author}</p>
        </motion.div>
    )
}


function ShuffleCards() {
    const [number, setNumber] = useState(1)
    const wrap = (start, limit, number) => {
        if (number > limit) {
            const res = number % limit
            return res == 0 ? 3 : res
        } else if (start > number) {
            return start - number
        } else if (number <= limit) {
            return number
        }
    }

    const reverseOrder = (limit, num) => {
        return limit + 1 - num
    }

    const orders = [
        {id: 1, orders: reverseOrder(3, wrap(1, 3, number))},
        {id: 2, orders: reverseOrder(3, wrap(1, 3, number + 1))},
        {id: 3, orders: reverseOrder(3, wrap(1, 3, number + 2))},
    ]
    return (
        <div className='bg-black'>
            <div className='blur-cards'>
                {CARD_DATAS.map(card => (
                    <Card key={card.id} card={card} orders={orders} setNumber={setNumber} number={number} />
                ))}
            </div>
        </div>
    )
}

export default ShuffleCards