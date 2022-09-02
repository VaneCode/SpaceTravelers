// Import
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, shallowEqual } from 'react-redux';

const ReservedRockets = () => {
  // Get the list of rockets from the state
  const rocketsStatus = useSelector((state) => state.rockets, shallowEqual);
  // Get the reserved rockets
  const reserved = rocketsStatus.rockets.filter((rocket) => rocket.reserved);
  return (
    <Card style={{ width: '50%', border: 'none' }}>
      <Card.Title>My rockets</Card.Title>
      <Card style={{ width: '100%', marginTop: '0.5rem' }}>
        <ListGroup variant="flush">
          {reserved.length === 0 ? (
            <ListGroup.Item>Not reserved rockets.</ListGroup.Item>
          ) : (
            reserved.map((rocket) => (
              <ListGroup.Item key={rocket.id}>
                {rocket.rocket_name}
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </Card>
    </Card>
  );
};

export default ReservedRockets;
