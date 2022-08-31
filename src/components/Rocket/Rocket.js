import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Rocket = (props) => {
  const { rocket } = props;

  return (
    <div className="row no-gutters">
      <div className="col-auto">
        <Card.Img className="img-fluid" style={{ width: '15rem', height: '10rem' }} src={rocket.flickr_images} alt={rocket.rocket_name} />
      </div>
      <div className="col">
        <Card.Body>
          <Card.Title className="h2" style={{ marginBottom: '1rem' }}>{rocket.rocket_name}</Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>{rocket.description}</Card.Text>
          <Button>Reserve Rocket</Button>
        </Card.Body>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.instanceOf(Array),
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
