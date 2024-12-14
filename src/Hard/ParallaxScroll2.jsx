import {motion, useScroll, useTransform, useMotionValueEvent} from 'framer-motion'
import React, {useRef} from 'react'

function MultiParallax() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start "]
    })

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
    return (
        <div ref={ref} className='parallax-wrapper2'>
            <motion.h1
                style={{y: textY}}
            >PARALLAX</motion.h1>

            <div className="secondImage" />
        </div>
    )
}

function ParallaxScroll() {
    const {scrollY} = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })
    return (
        <div>
            <MultiParallax />
            <div className='tekst'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore, praesentium nihil quas consequuntur tempore reprehenderit totam, provident ducimus dolorem vitae sit et facilis non. Quibusdam deleniti fugiat nam cumque Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum natus facilis atque quibusdam eligendi mollitia, minima veniam et doloremque porro, iure sint enim consequatur? Nulla nemo quam fuga illum commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis, velit sapiente modi distinctio aperiam temporibus iure, molestias vitae autem eveniet officia laudantium quidem? Minus amet magnam nihil obcaecati adipisci soluta veniam nisi sint ipsam! Vero ea voluptatem adipisci eaque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore, praesentium nihil quas consequuntur tempore reprehenderit totam, provident ducimus dolorem vitae sit et facilis non. Quibusdam deleniti fugiat nam cumque Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum natus facilis atque quibusdam eligendi mollitia, minima veniam et doloremque porro, iure sint enim consequatur? Nulla nemo quam fuga illum commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis, velit sapiente modi distinctio aperiam temporibus iure, molestias vitae autem eveniet officia laudantium quidem? Minus amet magnam nihil obcaecati adipisci soluta veniam nisi sint ipsam! Vero ea voluptatem adipisci eaque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore, praesentium nihil quas consequuntur tempore reprehenderit totam, provident ducimus dolorem vitae sit et facilis non. Quibusdam deleniti fugiat nam cumque Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum natus facilis atque quibusdam eligendi mollitia, minima veniam et doloremque porro, iure sint enim consequatur? Nulla nemo quam fuga illum commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis, velit sapiente modi distinctio aperiam temporibus iure, molestias vitae autem eveniet officia laudantium quidem? Minus amet magnam nihil obcaecati adipisci soluta veniam nisi sint ipsam! Vero ea voluptatem adipisci eaque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore, praesentium nihil quas consequuntur tempore reprehenderit totam, provident ducimus dolorem vitae sit et facilis non. Quibusdam deleniti fugiat nam cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum natus facilis atque quibusdam eligendi mollitia, minima veniam et doloremque porro, iure sint enim consequatur? Nulla nemo quam fuga illum commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis, velit sapiente modi distinctio aperiam temporibus iure, molestias vitae autem eveniet officia laudantium quidem? Minus amet magnam nihil obcaecati adipisci soluta veniam nisi sint ipsam! Vero ea voluptatem adipisci eaque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore, praesentium nihil quas consequuntur tempore reprehenderit totam, provident ducimus dolorem vitae sit et facilis non. Quibusdam deleniti fugiat nam cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum natus facilis atque quibusdam eligendi mollitia, minima veniam et doloremque porro, iure sint enim consequatur? Nulla nemo quam fuga illum commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis, velit sapiente modi distinctio aperiam temporibus iure, molestias vitae autem eveniet officia laudantium quidem? Minus amet magnam nihil obcaecati adipisci soluta veniam nisi sint ipsam! Vero ea voluptatem adipisci eaque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore, praesentium nihil quas consequuntur tempore reprehenderit totam, provident ducimus dolorem vitae sit et facilis non. Quibusdam deleniti fugiat nam cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum natus facilis atque quibusdam eligendi mollitia, minima veniam et doloremque porro, iure sint enim consequatur? Nulla nemo quam fuga illum commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis, velit sapiente modi distinctio aperiam temporibus iure, molestias vitae autem eveniet officia laudantium quidem? Minus amet magnam nihil obcaecati adipisci soluta veniam nisi sint ipsam! Vero ea voluptatem adipisci eaque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore, praesentium nihil quas consequuntur tempore reprehenderit totam, provident ducimus dolorem vitae sit et facilis non. Quibusdam deleniti fugiat nam cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum natus facilis atque quibusdam eligendi mollitia, minima veniam et doloremque porro, iure sint enim consequatur? Nulla nemo quam fuga illum commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis, velit sapiente modi distinctio aperiam temporibus iure, molestias vitae autem eveniet officia laudantium quidem? Minus amet magnam nihil obcaecati adipisci soluta veniam nisi sint ipsam! Vero ea voluptatem adipisci eaque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore, praesentium nihil quas consequuntur tempore reprehenderit totam, provident ducimus dolorem vitae sit et facilis non. Quibusdam deleniti fugiat nam cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum natus facilis atque quibusdam eligendi mollitia, minima veniam et doloremque porro, iure sint enim consequatur? Nulla nemo quam fuga illum commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis, velit sapiente modi distinctio aperiam temporibus iure, molestias vitae autem eveniet officia laudantium quidem? Minus amet magnam nihil obcaecati adipisci soluta veniam nisi sint ipsam! Vero ea voluptatem adipisci eaque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore, praesentium nihil quas consequuntur tempore reprehenderit totam, provident ducimus dolorem vitae sit et facilis non. Quibusdam deleniti fugiat nam cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum natus facilis atque quibusdam eligendi mollitia, minima veniam et doloremque porro, iure sint enim consequatur? Nulla nemo quam fuga illum commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis, velit sapiente modi distinctio aperiam temporibus iure, molestias vitae autem eveniet officia laudantium quidem? Minus amet magnam nihil obcaecati adipisci soluta veniam nisi sint ipsam! Vero ea voluptatem adipisci eaque.</p>
            </div>
        </div>
    )
}

export default ParallaxScroll