// Import
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, shallowEqual } from 'react-redux/es/exports';

const ReservedRockets = () => {
  // Get the list of rockets from the state
  const rocketsStatus = useSelector((state) => state.rockets, shallowEqual);
  // Get the reserved rockets
  const reserved = rocketsStatus.rockets.filter((rocket) => rocket.reserved);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Title>My rockets</Card.Title>
      <ListGroup variant="flush">
        {reserved.length === 0 ? <ListGroup.Item>Cras justo odio</ListGroup.Item>
          : reserved.map((rocket) => (
            <ListGroup.Item key={rocket.id}>{rocket.rocket_name}</ListGroup.Item>
          ))}
      </ListGroup>
    </Card>
  );
};

export default ReservedRockets;
