import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => {
    return (
        <button type="button"
            className={css.button__load}
            onClick={onLoadMore}>Load more</button>
    )
};

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
};

export default Button;