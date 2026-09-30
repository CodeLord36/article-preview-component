import FacebookIcon from "../assets/icons/icon-facebook.svg";
import PinterestIcon from "../assets/icons/icon-pinterest.svg";
import TwitterIcon from "../assets/icons/icon-twitter.svg";

interface SharePopupProps {
  isVisible: boolean;
}

const SharePopup = ({ isVisible }: SharePopupProps) => {
  if (!isVisible) return null;
  return (
    <div
      className={`
        absolute z-20 bg-very-dark-grayish-blue flex items-center transition-all duration-300 ease-in-out
        
        /* Mobile Style */
        bottom-0 left-0 w-full h-20 gap-2 rounded-b-xl px-8
        
        /* Desktop Style */
        md:bottom-[78px] md:-right-16 md:left-auto md:w-max md:h-14 
        md:rounded-[10px] md:shadow-custom md:px-8 md:z-50

        /* Desktop Arrow */
        md:after:content-[''] 
        md:after:absolute 
        md:after:top-full 
        md:after:left-1/2 
        md:after:-translate-x-1/2 
        md:after:border-12
        md:after:border-transparent 
        md:after:border-t-very-dark-grayish-blue
        

      `}
    >
      <span className="text-grayish-blue tracking-[5px] uppercase text-sm md:mx-auto ">
        Share
      </span>
      <img
        src={FacebookIcon}
        alt="Facebook"
        className="cursor-pointer w-5 h-5 "
      />
      ;
      <img
        src={TwitterIcon}
        alt="Twitter"
        className="cursor-pointer w-5 h-5 "
      />
      ;
      <img
        src={PinterestIcon}
        alt="Pinterest"
        className="cursor-pointer w-5 h-5 "
      />
    </div>
  );
};

export default SharePopup;
