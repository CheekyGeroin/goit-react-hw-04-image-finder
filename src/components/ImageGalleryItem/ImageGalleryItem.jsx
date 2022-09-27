import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, name, largeImage, onClick }) => {
  return (
    <GalleryItem
      onClick={() => {
        onClick(largeImage);
      }}
    >
      <GalleryImage src={image} alt={name} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
