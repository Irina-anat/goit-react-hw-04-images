import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from 'servises/api';
import Loader from './Loader/Loader';
import { toast } from 'react-toastify';
import { animateScroll } from 'react-scroll';
import css from './App.module.css';


const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const perPage = 12;
  

  useEffect(() => {
    getImages(searchQuery, page);
  }, [searchQuery, page]);

  const getImages = async (query, page) => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    try {
      const { hits, totalHits } = await fetchImages(query, page);

      if (!hits.length) {
        setLoadMore(false);
        toast.info('Nothing was found for your request. Try something else');
        return;
      }
      setImages(prevImages => [...prevImages, ...hits]);
      setLoadMore(page < Math.ceil(totalHits / perPage));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    scrollToBottomButton();
  };

  const scrollToBottomButton = () => {
    animateScroll.scrollToBottom({
      duration: 2000,
      delay: 10,
      smooth: 'linear',
    });
  };

  return (
    <div className={css.container}>
      {error && <p>Oh, mistake, everything is gone!!!</p>}
      <Searchbar onSubmitImage={handleFormSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <ImageGallery images={images} />
      )}
      {loadMore && <Button onLoadMore={onLoadMore} />}
      <ToastContainer autoClose={3000} />
    </div>
  );
};
  
export { App };
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  class App extends Component{
  state = {
    searchQuery: '',
    images: [],
    error: null,
    isLoading: false,
    page: 1,
    per_page: 12,
    loadMore: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.getImages(searchQuery, page);
    }
  };

   getImages = async (query, page) => {
     this.setState({ isLoading: true});
     if (!query) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchImages(query, page);
     // console.log(hits, totalHits);
      if (!hits.length) {
        this.setState({loadMore: false}) 
        return toast.info('Nothing was found for your request. Try something else');  
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  hangleFormSubmit = searchQuery => {
    this.setState({ searchQuery, images: [], page: 1, })
  };

  onloadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.scrollToBottomButton()
  };

  scrollToBottomButton = () => {
    animateScroll.scrollToBottom({
      duration: 2000,
      delay: 10,
      smooth: 'linear',
    });
  };

  render() {
    const {  images,  loadMore, isLoading} = this.state;
    return (
      <div>
        <Searchbar onSubmitImage={this.hangleFormSubmit } />
        {isLoading ? (
          <Loader/>
        ) : ( 
          <ImageGallery images={images}  />
        )}
        {loadMore && <Button onloadMore={this.onloadMore}/>}
        <ToastContainer autoClose={3000} />
    </div> 
    )
  };
};

  */ 


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
/*
*/
/*class App extends Component{
  state = {
    showModal: false,
  };

 //закриття і відкриття вікна
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Searchbar />
        <ImageGallery />
    
        <Button/>
        <button type="button" onClick={this.toggleModal}>OpenModal</button>
        {showModal &&
          <Modal onClose={this.toggleModal}>
         <button type="button" onClick={this.toggleModal}>Close</button> 
        </Modal>}
         
    </div> 
    )}
    };

export { App };
*/ 