'use client';

import { fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';

import Image from 'next/image';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
  variants={fadeIn('up', 'spring', index * 0.5, 1)}
  className='flex md:flex-row flex-col gap-4'>
    <div className='relative md:w-[270px] w-full h-[250px]'>
      <Image 
      src={imgUrl}
      alt='img-planet'
      fill
      unoptimized
      className=' rounded-[32px] object-cover'/>
    </div>
    <div className='w-full flex justify-between items-center'>
      <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
      </div>
      <div className="lg:flex hidden items-center cursor-pointer justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <div className='relative w-[40%] h-[40%]'>
          <Image 
          src="/arrow.svg"
          alt="arrow"
          fill
          unoptimized
          className="object-contain"/>
        </div>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;