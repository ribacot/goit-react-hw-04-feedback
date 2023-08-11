import PropTypes from 'prop-types';
import capitalize from 'lodash.capitalize';
import css from './StatisticsFeedback.module.css';

export default function StatisticsFeedback({ stateValue, children }) {
  const namesStat = Object.keys(stateValue);
  const valueStat = Object.values(stateValue);
  const isFeedback = valueStat.some(el => el);

  return isFeedback ? (
    <ul className={css.list}>
      {namesStat.map(name => {
        return (
          <li key={name} className={css[name]}>
            {capitalize(name)}: {stateValue[name]}
          </li>
        );
      })}
      {children}
    </ul>
  ) : (
    <p>There is no feedback</p>
  );
}

StatisticsFeedback.propTypes = {
  stateValue: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  children: PropTypes.node,
};
