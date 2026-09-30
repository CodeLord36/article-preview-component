import FacebookIcon from "../assets/icons/icon-facebook.svg";
import PinterestIcon from "../assets/icons/icon-pinterest.svg";
import TwitterIcon from "../assets/icons/icon-twitter.svg";

interface SharePopupProps {
  isVisible: boolean;
}

const SharePopup = ({ isVisible }: SharePopupProps) => {
  if (!isVisible) return null;
  return (
    <div className="absolute bottom-0 left-0 w-full h-20 bg-very-dark-grayish-blue flex items-center gap-2 rounded-b-xl ">
      <span className="text-grayish-blue tracking-[5px] uppercase text-sm ml-8 ">
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
