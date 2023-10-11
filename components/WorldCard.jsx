import Image from "next/image"

function WorldCard({imgUrl, position}) {
  return (
    <div className={`${position} xl:block hidden absolute overflow-hidden w-[210px] h-[160px] p-[6px] rounded-[32px] bg-[#5d6680]`}>
      <Image 
      src={`/${imgUrl}.png`} alt={imgUrl}
      height={500}
      width={500}
      className='object-cover h-full rounded-[32px]'
      />
      <div className='z-20 bottom-4 absolute ml-[5px] p-[10px] leading-[30px]'>
        <div className='flex justify-between items-center gap-2'>
          <div className='flex'>
            <Image 
            src='/people-04.png'
            alt='people-04'
            height={24}
            width={24}
            unoptimized
            className='rounded-full'/>
            <Image 
            src='/people-05.png'
            alt='people-05'
            height={24}
            width={24}
            unoptimized
            className='rounded-full -ml-[10px]'/>
            <Image 
            src='/people-06.png'
            alt='people-06'
            height={24}
            width={24}
            unoptimized
            className='rounded-full -ml-[12px]'/>
          </div>
          <p className='font-normal text-[#FFFFFF] text-[12px]'>+ 264 has joined</p>
        </div>
        <h3 className='text-[18px] font-bold text-white'>Hawkins Labs</h3>
      </div>
    </div>
  )
}

export default WorldCard