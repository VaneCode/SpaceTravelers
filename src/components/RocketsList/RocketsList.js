// Import
import { useSelector, shallowEqual, useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { FetchedRockets } from '../../redux/rockets/rockets';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rocket from '../Rocket/Rocket';

const RocketList = () => {
  // Get the list of books from the state
  const rocketsStatus = useSelector(
    (state) => state.rockets,
    shallowEqual,
  );
  // Dispatch the action to get the rockets from the API
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rocketsStatus.rockets.length) {
      dispatch(FetchedRockets());
    }
  });
  return (
    <>
      <div className="d-flex flex-column" style={{ gap: '1rem' }}>
        {rocketsStatus.rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            rocket={rocket}
          />
        ))}
      </div>
    </>
  );
};

export default RocketList;
