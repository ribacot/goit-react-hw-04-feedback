import PropTypes from 'prop-types';

export default function ExtendedStatistics({ total, percentag }) {
  const totalEl = total();
  const percentagEl = percentag();
  return (
    <>
      <li>Total: {totalEl} </li>
      <li>Psitive feedback: {percentagEl}% </li>
    </>
  );
}

ExtendedStatistics.propTypes = {
  total: PropTypes.func.isRequired,
  percentag: PropTypes.func.isRequired,
};
