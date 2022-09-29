import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { StyledApp } from './App.styled';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { fetchImages } from './api/Image-api';
import { useState, useEffect } from 'react';
import { useFirstMountState } from 'react-use';

export const App = () => {
  const [images, setImages] = useState([]);
  const [imagesName, setImagesName] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modalContent, setModalContent] = useState('');
  const isFirstRender = useFirstMountState();

  useEffect(() => {
    if (!isFirstRender) {
      fetchImages(imagesName, page).then(images => {
        setImages(prevState => [...prevState, ...images]);
        setLoading(false);
      });
    }
  }, [imagesName, isFirstRender, page]);

  const getImagesName = itemName => {
    if (itemName.trim() === '') {
      toast.warn(`Please write key-word`);
      return;
    }
    setImages([]);
    setImagesName(itemName);
    setPage(1);
    setLoading(true);
  };

  const handleLoadMoreBtn = () => {
    setPage(prevState => prevState + 1);
    setLoading(true);
  };

  const openModal = largeImg => {
    setModalContent(largeImg);
  };

  const closeModal = () => {
    setModalContent('');
  };

  return (
    <StyledApp>
      <SearchBar onSubmit={getImagesName} />
      <ImageGallery images={images} onClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && <Button onClick={handleLoadMoreBtn} />}
      {modalContent && (
        <Modal onClose={closeModal}>
          <img src={modalContent} alt={imagesName} />
        </Modal>
      )}
      <ToastContainer autoClose={2000} />
    </StyledApp>
  );
};
