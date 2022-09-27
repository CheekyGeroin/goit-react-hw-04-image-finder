import PropTypes from 'prop-types';
import { ButtonMore } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonMore type="button" onClick={onClick}>
      Load more
    </ButtonMore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
