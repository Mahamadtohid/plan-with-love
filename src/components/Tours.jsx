import PropTypes from 'prop-types';
import Card from './Card.jsx';

function Tours({ tours, removeCard }) {
  return (
    <div className="container">
      <div>
        <h1 className="title">Plan With Love</h1>
      </div>

      <div className="cards">
        {
          tours.map((tour) => (
            <Card key={tour.id} {...tour} removeCard={removeCard} />
          ))
        }
      </div>
    </div>
  );
}

// ✅ Add PropTypes validation
Tours.propTypes = {
  tours: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeCard: PropTypes.func.isRequired
};

export default Tours;
