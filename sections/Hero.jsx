'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import Image from 'next/image';

const Hero = () => (
  <section className={`${styles.yPaddings} relative sm:pl-16 pl-6`}>
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='absolute sm:top-[90px] top-[28px]'>
        <TypingText title="| Home" />
      </div>
      <div className='flex justify-center items-center relative flex-col z-10'>
        <motion.h1 variants={textVariant(1.1)}
        className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div variants={textVariant(1.2)}
        className='flex flex-row justify-center items-center'>
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText}></div>
          <h1 className={styles.heroHeading}>nass</h1>
        </motion.div>
      </div>
      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className='relative w-full md:-mt[20px] -mt-[12px]'>
        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]'/>
        <Image
          src="/cover.png"
          alt="hero_cover"
          width={500}
          height={350}
          unoptimized
          priority
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <a href="#explore">
              <Image
                src="/stamp.png"
                alt="stamp"
                width={155}
                height={155}
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </a>
          </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
