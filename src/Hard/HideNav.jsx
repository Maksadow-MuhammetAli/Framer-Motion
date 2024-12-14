import {useScroll, motion} from 'framer-motion'
import {useMotionValueEvent} from 'framer-motion'
import React, {useState} from 'react'

function Navbar({isTrue}) {
    return (
        <motion.div
            layout
            animate={{y: isTrue ? "-100%" : 0}}
            transition={{
                duration: 0.35,

            }}
            className='navbar'>
            <div className='navs'>
                <div>Home</div>
                <div>About</div>
                <div>Blog</div>
            </div>

            <button>Try Free</button>
        </motion.div>
    )
}

function Content() {
    return (
        <div className='nav-content'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus saepe dicta architecto quos, vel corporis voluptatibus ullam ea odio, corrupti molestiae ratione hic recusandae quibusdam tempore maxime, eos sapiente quaerat.
                Id quisquam excepturi a ab ullam, voluptates aliquam non dolore maxime error ea vitae praesentium, debitis cum repudiandae officia consequuntur. Harum libero deserunt incidunt. Facilis voluptatibus molestiae temporibus perspiciatis illo!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in nobis, atque et iure ipsam id! Accusantium, et autem, officiis, quod distinctio sed totam doloremque error sapiente odio porro esse.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate consectetur, iure natus illum cum aliquam harum minima possimus voluptatibus minus corporis velit ad dicta laborum. Repudiandae praesentium perspiciatis hic?
                Et nulla excepturi, praesentium impedit vel similique, non ipsam eos delectus repellendus cumque ea minus tenetur tempore, laudantium rem consequuntur expedita rerum libero aliquid commodi. Perspiciatis illum beatae repellat iste.
                Pariatur labore esse vitae quam ratione. Fuga, fugit labore dignissimos debitis quidem quibusdam beatae, cupiditate, eos praesentium nobis earum aliquid voluptas illo est qui iste? Animi maxime quam nihil ut!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta optio voluptatem voluptate quisquam, reiciendis quia sunt dolores et odio dolorem, ratione voluptates. Quis, aliquid. Id libero similique iusto cupiditate ut?
                Accusantium nulla, iste, quo incidunt facere autem, quia voluptatem nisi quis provident quisquam! Assumenda consectetur, nam reprehenderit autem, ea porro culpa omnis sapiente voluptatibus fugit nulla quas explicabo eius excepturi.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus saepe dicta architecto quos, vel corporis voluptatibus ullam ea odio, corrupti molestiae ratione hic recusandae quibusdam tempore maxime, eos sapiente quaerat.
                Id quisquam excepturi a ab ullam, voluptates aliquam non dolore maxime error ea vitae praesentium, debitis cum repudiandae officia consequuntur. Harum libero deserunt incidunt. Facilis voluptatibus molestiae temporibus perspiciatis illo!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in nobis, atque et iure ipsam id! Accusantium, et autem, officiis, quod distinctio sed totam doloremque error sapiente odio porro esse.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate consectetur, iure natus illum cum aliquam harum minima possimus voluptatibus minus corporis velit ad dicta laborum. Repudiandae praesentium perspiciatis hic?
                Et nulla excepturi, praesentium impedit vel similique, non ipsam eos delectus repellendus cumque ea minus tenetur tempore, laudantium rem consequuntur expedita rerum libero aliquid commodi. Perspiciatis illum beatae repellat iste.
                Pariatur labore esse vitae quam ratione. Fuga, fugit labore dignissimos debitis quidem quibusdam beatae, cupiditate, eos praesentium nobis earum aliquid voluptas illo est qui iste? Animi maxime quam nihil ut!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta optio voluptatem voluptate quisquam, reiciendis quia sunt dolores et odio dolorem, ratione voluptates. Quis, aliquid. Id libero similique iusto cupiditate ut?
                Accusantium nulla, iste, quo incidunt facere autem, quia voluptatem nisi quis provident quisquam! Assumenda consectetur, nam reprehenderit autem, ea porro culpa omnis sapiente voluptatibus fugit nulla quas explicabo eius excepturi.</p>
        </div>
    )
}

function HideNav() {
    const {scrollY} = useScroll()
    const [isTrue, setIsTrue] = useState(true)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previousValue = scrollY.getPrevious()

        if (latest > previousValue && latest > 250) {
            setIsTrue(true)
        } else {
            setIsTrue(false)
        }
    })
    return (
        <div className='hideNavContainer'>
            <Navbar isTrue={isTrue} />
            <Content />
            <Content />
        </div>
    )
}

export default HideNav