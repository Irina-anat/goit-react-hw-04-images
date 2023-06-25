import css from './ImageGalleryItem.module.css';
import React, { useState} from 'react';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';


    const ImageGalleryItem = ({ src, alt, largeImageURL }) => {
    const [showModal, setShowModal] = useState(false);

        const toggleModal = () => {
            setShowModal(!showModal);
        };

    return (
        <li className={css.gallary__item} onClick={toggleModal}>
            <img className={css.gallery__image} src={src} alt={alt} loading="lazy" />
            {showModal && (
                <Modal
                    largeImageURL={largeImageURL}
                    tags={alt}
                    closeModal={toggleModal}
                />
            )}
        </li>
    );
};


ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;






/*
class ImageGalleryItem extends Component {
    state = {
        showModal: false
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        const { showModal } = this.state;
        const { src, alt, largeImageURL } = this.props;

        return (
            <li className={css.gallary__item} onClick={this.toggleModal}>
                <img className={css.gallery__image} src={src} alt={alt} loading="lazy" />
                {showModal && (
                    <Modal
                        largeImageURL={largeImageURL}
                        tags={alt}
                        closeModal={this.toggleModal}
                    />
                )}
            </li>
        )
    };
};
*/