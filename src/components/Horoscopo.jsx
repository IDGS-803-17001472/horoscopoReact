
import PropTypes from 'prop-types';

const Horoscopo = ({ signo, horoscopo, titulo }) => {
  return (
    <div>
      <h2>{signo}</h2>
      <img src={`/${signo}.png`} alt={signo} />
      <p>{titulo}</p>
      <p>{horoscopo}</p>
    </div>
  );
};

Horoscopo.propTypes = {
  signo : PropTypes.string,
  titulo : PropTypes.string,
    horoscopo : PropTypes.string,
  };

export default Horoscopo;