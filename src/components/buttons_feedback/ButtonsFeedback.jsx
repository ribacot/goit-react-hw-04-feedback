import PropTypes from 'prop-types';
import capitalize from 'lodash.capitalize';
import css from './ButtonsFeedback.module.css';

export default function ButtonFeedback({ stateValue, onClick }) {
  const btnNames = Object.keys(stateValue);

  return (
    <ul className={css.list}>
      {btnNames.map(name => {
        return (
          <li key={name}>
            <button
              className={`${css.button} ${css[name]}`}
              type="button"
              onClick={() => onClick(name)}
            >
              {capitalize(name)}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ButtonFeedback.propTypes = {
  onClick: PropTypes.func.isRequired,
  stateValue: PropTypes.objectOf(PropTypes.number).isRequired,
};
