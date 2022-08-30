import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { rocket } = props;

  return (
    <div key={rocket.id} style={{ display: 'flex' }}>
      <p>
        Id:
        {rocket.id}
      </p>
      <p>
        Name:
        {rocket.rocket_name}
      </p>
      <p>
        Description:
        {rocket.description}
      </p>
      <p>
        Image:
        {rocket.flickr_images}
      </p>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
