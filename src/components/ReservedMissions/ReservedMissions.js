// Import
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, shallowEqual } from 'react-redux/es/exports';

const ReservedMissions = () => {
  // Get the list of rockets from the state
  const missionsStatus = useSelector((state) => state.missions, shallowEqual);
  // Get the reserved rockets
  const joined = missionsStatus.mission.filter((mission) => mission.join);
  return (
    <Card style={{ width: '50%', border: 'none' }}>
      <Card.Title>My missions</Card.Title>
      <Card style={{ width: '100%', marginTop: '0.5rem' }}>
        <ListGroup variant="flush">
          {joined.length === 0 ? (
            <ListGroup.Item>Not joined missions.</ListGroup.Item>
          ) : (
            joined.map((mission) => (
              <ListGroup.Item key={mission.mission_id}>
                {mission.mission_name}
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </Card>
    </Card>
  );
};

export default ReservedMissions;
