import axios from "axios";
const API_KEY = '19008489-eef4c530baed43ae206c47500';

export const fetchImages = async (name, page) => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      return response.data.hits;
    } catch (error) {
      console.error(error);
    }
  };


