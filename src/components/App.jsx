import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { StyledApp } from './App.styled';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import { fetchImages } from './api/Image-api';

class App extends Component {
  state = {
    images: [],
    imagesName: '',
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    modalContent: '',
  };
  componentDidUpdate = (prevProps, prevState) => {
    const { imagesName, page } = this.state;
    const prevName = prevState.imagesName;
    const nextName = imagesName;
    if (prevProps.itemName !== this.props.itemName) {
      this.getImagesName();
    }

    if (prevName !== nextName) {
      fetchImages(imagesName, page).then(images =>
        this.setState({ images, page: page + 1, loading: false })
      );
    }
  };

  getImagesName = ({ itemName }) => {
    if (itemName.trim() === '') {
      toast.warn(`Please write key-word`);
      return;
    }
    this.setState({ imagesName: itemName, page: 1, loading: true });
  };

  handleLoadMoreBtn = () => {
    const { imagesName, page } = this.state;
    this.setState({ loading: true });
    fetchImages(imagesName, page).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
        loading: false,
      }));
    });
  };
  closeModal = () => {
    this.setState({
      showModal: false,
      modalContent: '',
    });
  };

  openModal = largeImg => {
    this.setState({
      showModal: true,
      modalContent: largeImg,
    });
  };

  render() {
    const { images, imagesName, loading, showModal, modalContent } = this.state;
    return (
      <StyledApp>
        <SearchBar onSubmit={this.getImagesName} />
        <ImageGallery images={images} onClick={this.openModal} />
        {loading && <Loader />}
        {images.length > 0 && <Button onClick={this.handleLoadMoreBtn} />}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={modalContent} alt={imagesName} />
          </Modal>
        )}
        <ToastContainer autoClose={2000} />
      </StyledApp>
    );
  }
}

export default App;
