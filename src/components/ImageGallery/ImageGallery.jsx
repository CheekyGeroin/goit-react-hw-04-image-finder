import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ImageGalleryList>
      {images.length > 0 &&
        images.map(({ webformatURL, id, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              image={webformatURL}
              largeImage={largeImageURL}
              name={tags}
              onClick={onClick}
            ></ImageGalleryItem>
          );
        })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
