import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";

interface SocialShareButtonsProps {
  url: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url }) => {
  return (
    <div className="flex space-x-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
      <FacebookShareButton
        url={url}
        className="transition transform hover:scale-110"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton
        url={url}
        className="transition transform hover:scale-110"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShareButtons;
