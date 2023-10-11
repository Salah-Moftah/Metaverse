import Image from "next/image";
import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <div className="w-1/2">
        <Image
          src={imgUrl}
          alt="icon"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      Title {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
