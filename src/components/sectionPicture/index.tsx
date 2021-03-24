import React, { useState } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { SectionContent } from './styles';

interface Props {
  title: string;
  description: string;
  isMirror?: boolean;
  image: IGatsbyImageData;
  alt: string;
}

const SectionPicture: React.FC<Props> = ({ title, description, isMirror = false, image, alt }) => {
  const [open, setOpen] = useState(false);

  return (
    <SectionContent isOdd={isMirror} expand={open}>
      <GatsbyImage image={image} alt={alt} />
      <div className="infoWrapper">
        <h4>
          <button type="button" onClick={() => setOpen(state => !state)}>
            {title} {open ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
          </button>
        </h4>
        <p className={open ? 'active' : ''}>{description}</p>
      </div>
    </SectionContent>
  );
};

export default SectionPicture;
