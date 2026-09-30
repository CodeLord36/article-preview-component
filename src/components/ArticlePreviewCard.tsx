import { useState } from "react";
import { ArticleData } from "./types";
import SharePopup from "./SharePopup";

const ArticlePreviewCard = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleShare = () => setIsShareOpen(!isShareOpen);
  return (
    <section className=" bg-white max-w-2xl w-full flex flex-col overflow-hidden shadow-custom rounded-xl md:max-w-3xl md:flex-row md:rounded-lg ">
      {/* Image Section */}
      <div className="w-full h-52 md:w-2/5 md:h-auto ">
        <img
          src={ArticleData.image}
          alt="Furniture"
          className="w-full h-full object-cover object-left "
        />
      </div>

      {/* Content Section */}
      <article className="w-full px-7 pt-10 pb-4 relative md:w-3/5 md:px-10 ">
        <h1 className="text-very-dark-grayish-blue font-bold text-[17px] mb-4 md:text-[22px] ">
          {ArticleData.title}
        </h1>
        <p className="text-desaturated-dark-blue text-sm mb-8 leading-relaxed  ">
          {ArticleData.description}
        </p>

        {/* Author and Share Section */}
        <section className="flex items-center justify-between ">
          {/* Author Section */}
          <div className="flex items-center gap-4 ">
            <img
              src={ArticleData.author.avatar}
              alt="Michelle"
              className="w-12 h-12 rounded-full "
            />
            <div className="">
              <p className="text-very-dark-grayish-blue font-bold text-sm ">
                {ArticleData.author.name}
              </p>
              <p className="text-grayish-blue text-sm ">
                {ArticleData.author.date}
              </p>
            </div>
          </div>

          {/* Share Button */}
          <button
            onClick={toggleShare}
            aria-label="Toggle share menu"
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors z-20 outline-none ${isShareOpen ? "bg-desaturated-dark-blue" : "bg-light-grayish-blue"} hover:cursor-pointer `}
          >
            <img
              src={ArticleData.share}
              alt="Share"
              className={`w-4 h-4 transition-all ${isShareOpen ? "brightness-200" : "group-hover:brightness-200"} `}
            />
          </button>
        </section>
        <SharePopup isVisible={isShareOpen} />
      </article>
    </section>
  );
};

export default ArticlePreviewCard;
