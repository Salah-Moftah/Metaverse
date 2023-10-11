'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import WorldCard from '../components/WorldCard';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import Image from 'next/image';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="| People on the World" textStyles="text-center"/>
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} />
      <motion.div
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className='relative mt-[68px] flex w-full h-[550px]'>
        <Image 
        src='/map.png'
        alt='map'
        fill
        unoptimized
        className='object-cover'/>
        <div className='absolute top-20 left-32 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <Image 
          src='/people-01.png' alt='people-01'
          height={500}
          width={500}
          />
        </div>
        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <Image 
          src='/people-02.png' alt='people-01'
          height={500}
          width={500}
          />
        </div>
        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <Image 
          src='/people-03.png' alt='people-01'
          height={500}
          width={500}
          />
        </div>
        <WorldCard imgUrl='hawkins-labs' position='top-20 right-60'/>
        <WorldCard imgUrl='the-upside-down' position='bottom-20 left-60'/>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
