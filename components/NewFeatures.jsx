import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col min-w-[210px] sm:max-w-[250px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-white text-[24px] leading-[30px]">
      {' '}
      {title}
    </h1>
    <p className="font-normal text-[18px] text-[#b0b0b0] flex-1 mt-4 leading-8">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
